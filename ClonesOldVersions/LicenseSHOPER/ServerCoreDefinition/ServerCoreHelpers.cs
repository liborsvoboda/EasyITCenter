using EASYDATACenter.ServerCoreDefinition;
using System.Data;
using System.Diagnostics.CodeAnalysis;
using System.Runtime.InteropServices;
using System.Security.Principal;

/*
* Server Core Helpers
* System Extensions for Correct Core working
* DataTypes Conversion Support, etc.
*/

namespace EASYDATACenter.ServerCoreDefinition {

    /// <summary>
    /// System Helpers for EASY working
    /// Here are extension for Database Model, WebSocket
    /// </summary>
    public static class ServerCoreHelpers {

        /// <summary>
        /// Server Token Validation Parameters definition
        /// For Api is Used if is ON/Off for WePages is On everyTime
        /// </summary>
        /// <returns></returns>
        public static TokenValidationParameters GetValidationParameters() {
            return new TokenValidationParameters {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(ServerConfigSettings.ConfigJwtLocalKey)),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ValidateLifetime = ServerConfigSettings.ServerTimeTokenValidationEnabled,
                    ClockSkew = TimeSpan.FromMinutes(ServerConfigSettings.ConfigApiTokenTimeoutMin),
                };
        }

        /// <summary>
        /// Token Validator Extension For Server WebPages
        /// </summary>
        /// <param name="tokenString">The token string.</param>
        /// <returns></returns>
        public static ServerWebPagesToken CheckTokenValidityFromString(string tokenString) {
            try {
                JwtSecurityTokenHandler? tokenForChek = new JwtSecurityTokenHandler();
                ClaimsPrincipal userClaims = tokenForChek.ValidateToken(tokenString, GetValidationParameters(), out SecurityToken refreshedToken);
                ServerWebPagesToken validation = new() { Data = new() { { "Token", tokenString } }, UserClaims = userClaims, stringToken = tokenString, Token = refreshedToken, IsValid = refreshedToken != null };
                return validation;
            } catch { }
            return new ServerWebPagesToken();
        }

        /// <summary>
        /// Extension For Checking Operation System 
        /// of Server Running
        /// </summary>
        public static class OperatingSystem {
            public static bool IsWindows() =>
                RuntimeInformation.IsOSPlatform(OSPlatform.Windows);

            public static bool IsMacOS() =>
                RuntimeInformation.IsOSPlatform(OSPlatform.OSX);

            public static bool IsLinux() =>
                RuntimeInformation.IsOSPlatform(OSPlatform.Linux);
        }

        #region Databases Helper

        /// <summary>
        /// Extension For Using Custom Defined Tables from Database Procedures
        /// Its used as Database Context Extension as 'CollectionFromSql'
        /// Method in Database Context
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="dt">The dt.</param>
        /// <returns></returns>
        public static List<T> BindList<T>(DataTable dt) {
            var fields = typeof(T).GetProperties();
            List<T> lst = new List<T>();
            foreach (DataRow dr in dt.Rows) {
                var ob = Activator.CreateInstance<T>();
                foreach (var fieldInfo in fields) {
                    foreach (DataColumn dc in dt.Columns) {
                        if (fieldInfo.Name == dc.ColumnName) {
                            object value = dr[dc.ColumnName];
                            fieldInfo.SetValue(ob, value);
                            break;
                        }
                    }
                }
                lst.Add(ob);
            }
            return lst;
        }

        #endregion Databases Helper


        #region WebSocketsCentralControllerMethods Helper

        /// <summary>
        /// Sends the message to client WebSocket.
        /// This Is Used by "SendMessageAndUpdateWebSocketsInSpecificPath"
        /// For Update Informaions on All Connections in Same WebSocket Path
        /// Its Solution FOR Teminals, Group Communications, etc.
        /// </summary>
        /// <param name="webSocket">The web socket.</param>
        /// <param name="message">The message.</param>
        public async static Task SendMessageToClientSocket(WebSocket webSocket, string message) {
            await webSocket.SendAsync( new ArraySegment<byte>(Encoding.UTF8.GetBytes(message), 0, Encoding.UTF8.GetBytes(message).Length),
                       WebSocketMessageType.Text, true, CancellationToken.None);
        }

        /// <summary>
        /// Register Listening Client WebSocket Communication
        /// Ist for Receive messages from Client
        /// </summary>
        /// <param name="webSocket"></param>
        /// <param name="socketAPIPath"></param>
        /// <returns></returns>
        public static async Task ListenClientWebSocketMessages(WebSocket webSocket, string socketAPIPath) {
            var buffer = new byte[1024 * ServerConfigSettings.ConfigMaxWebSocketBufferSizeKb];
            var receiveResult = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);

            while (!receiveResult.CloseStatus.HasValue) {
                SendMessageAndUpdateWebSocketsInSpecificPath(socketAPIPath, "");
                receiveResult = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
            }

            await webSocket.CloseAsync(receiveResult.CloseStatus.Value, receiveResult.CloseStatusDescription, CancellationToken.None);
        }


        /// <summary>
        /// Add WeSocket Connection To Central List
        /// </summary>
        /// <param name="newWebSocket">The new web socket.</param>
        /// <param name="socketAPIPath">The socket path.</param>
        public async static void AddSocketConnectionToCentalList(WebSocket newWebSocket, string socketAPIPath) {
            ServerRuntimeData.CentralWebSocketList.Add(new Tuple<WebSocket, WebSocketExtension>(newWebSocket, new WebSocketExtension() {
                socketAPIPath = socketAPIPath,
                SocketTimeout = DateTimeOffset.UtcNow.AddMinutes(ServerConfigSettings.ConfigWebSocketTimeoutMin)
            }));

            //welcome message
            await SendMessageToClientSocket(newWebSocket, ServerConfigSettings.SpecialServerServiceName + " " + ServerCoreDbOperations.DBTranslate("welcome"));
        }

        /// <summary>
        /// Sends the message and update web sockets in specific path.
        /// </summary>
        /// <param name="socketAPIPath">The socket API path.</param>
        /// <param name="message">The message.</param>
        public async static void SendMessageAndUpdateWebSocketsInSpecificPath(string socketAPIPath, string message) {

            //clean invalid Sockets before updating
            DisposeSocketConnectionsWithTimeOut();

            foreach (Tuple<WebSocket, WebSocketExtension> socket in ServerRuntimeData.CentralWebSocketList) {
                if (socket.Item2.socketAPIPath == socketAPIPath) {
                    await SendMessageToClientSocket(socket.Item1, message);
                    socket.Item2.SocketTimeout = DateTimeOffset.UtcNow.AddMinutes(ServerConfigSettings.ConfigWebSocketTimeoutMin);
                }
            }
        }

        /// <summary>
        /// !! Global Method for Simple Using WebSockets
        /// WebSocket Disposed - Cleaning monitored Sockets from Central List.
        /// Are Closed and Disposed Only with Timeout or with closed Connection 
        /// </summary>
        public static int DisposeSocketConnectionsWithTimeOut() {
            ServerRuntimeData.CentralWebSocketList.ForEach(socket => {
                if (socket.Item2.SocketTimeout < DateTimeOffset.UtcNow) { socket.Item1.CloseAsync(WebSocketCloseStatus.NormalClosure, null, CancellationToken.None); }
            });
            ServerRuntimeData.CentralWebSocketList.RemoveAll(socket => socket.Item1.State != WebSocketState.Open);
            return ServerRuntimeData.CentralWebSocketList.Count;
        }

        #endregion WebSocketsCentralControllerMethods Helper

        #region ServerCoreLogger Helper


        /// <summary>
        /// !!! Implemented
        /// Server Core WebSocket System LogProvider Stream
        /// This Is Special Serice For Remote Monitoring
        /// On More Devices in OneTime
        /// </summary>
        /// <seealso cref="ILoggerProvider" />
        public class WebSocketLogProvider : ILoggerProvider {
                public WebSocketLogger webSocketLogger;

            private bool disposedValue;

            public ILogger CreateLogger(string categoryName) { return webSocketLogger = new WebSocketLogger(this); }

            protected virtual void Dispose(bool disposing) {
                if (DisposeSocketConnectionsWithTimeOut() == 0) { disposedValue = true; }
            }

            public void Dispose() {
                Dispose(disposing: true);
                GC.SuppressFinalize(this);
            }
        }

        /// <summary>
        /// Server Core WebSocket System Logger Interface
        /// </summary>
        /// <seealso cref="ILogger" />
        public class WebSocketLogger : ILogger {
            private readonly WebSocketLogProvider _webSocketLogProvider;
            public WebSocketLogger([NotNull] WebSocketLogProvider webSocketLogProvider) { _webSocketLogProvider = webSocketLogProvider; }

            public IDisposable? BeginScope<TState>(TState state) { _webSocketLogProvider.Dispose(); return null; }
            public bool IsEnabled(LogLevel logLevel) { return logLevel != LogLevel.None; }

            /// <summary>
            /// Used to log the entry.
            /// </summary>
            /// <typeparam name="TState"></typeparam>
            /// <param name="logLevel">An instance of <see cref="LogLevel"/>.</param>
            /// <param name="eventId">The event's ID. An instance of <see cref="EventId"/>.</param>
            /// <param name="state">The event's state.</param>
            /// <param name="exception">The event's exception. An instance of <see cref="Exception" /></param>
            /// <param name="formatter">A delegate that formats </param>
            public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception? exception, Func<TState, Exception, string> formatter) {
                try {
                    if (ServerRuntimeData.ServerCoreStatus == ServerStatuses.Running.ToString()) {
                        string? json = "";
                        if (IsEnabled(logLevel)) {
                            json = JsonSerializer.Serialize(logLevel.ToString()) + JsonSerializer.Serialize(eventId) + JsonSerializer.Serialize(state) + JsonSerializer.Serialize(exception);
                            if (!string.IsNullOrWhiteSpace(json)) { SendMessageAndUpdateWebSocketsInSpecificPath("ServerCoreMonitor", json); }
                        }
                    }
                } catch { _webSocketLogProvider.Dispose(); }
            }
        }

        #endregion ServerCoreLogger Helper

    }

}