﻿using DBEntitySchema.Core.Services;
using Microsoft.AspNetCore.Http;
using System.Reflection;
using System.Text;

namespace DBEntitySchema.Core {

    public class DBEntitySchemaUIMiddleware {
        private readonly DBEntitySchemaOptions _options;

        public DBEntitySchemaUIMiddleware(RequestDelegate next, DBEntitySchemaOptions options) {
            _options = options;
        }

        public async Task GetStream(HttpContext context, string fileName, string code = "") {
            string resourcePrefix = "DBEntitySchema.wwwroot";

            Assembly assembly = typeof(DBEntitySchemaUIMiddleware).GetTypeInfo().Assembly;

            string resourceToSend = string.Empty;

            string[] resourceItems = assembly.GetManifestResourceNames();
            foreach (string resourceItem in resourceItems) {
                string requestedResource = $"{resourcePrefix}.{fileName.Replace('/', '.')}".Trim().ToUpper();
                string existingResource = resourceItem.Trim().ToUpper();

                if (requestedResource == existingResource) {
                    resourceToSend = resourceItem;
                    break;
                }
            }

            if (resourceToSend == string.Empty) throw new FileNotFoundException("Soubor Nenalezen: ", fileName);

            Stream? stream = assembly.GetManifestResourceStream(resourceToSend);

            if (stream != null) {
                using (StreamReader reader = new StreamReader(stream)) {
                    // Inject arguments before writing to response
                    var htmlBuilder = new StringBuilder(reader.ReadToEnd());

                    if (htmlBuilder != null) {
                        if (code != string.Empty)
                            htmlBuilder.Replace("$(content)", code);

                        htmlBuilder.Replace("$(path)", _options.PathMatch.Value.Substring(1, _options.PathMatch.Value.Length - 1));

                        byte[] buffer = UTF8Encoding.UTF8.GetBytes(htmlBuilder.ToString());

                        context.Response.StatusCode = 200;
                        context.Response.ContentType = GetContentType(fileName);
                        context.Response.ContentLength = buffer.Length;
                        await context.Response.Body.WriteAsync(buffer, 0, buffer.Length);
                        return;
                    }
                }
            }
        }

        private string GetContentType(string fileName) {
            // Mapea la extensión del archivo a su tipo de contenido correspondiente
            switch (Path.GetExtension(fileName).ToLower()) {
                case ".html":
                    return "text/html; charset=utf-8";
                case ".js":
                    return "text/javascript";

                case ".json":
                    return "application/json";

                case ".css":
                    return "text/css";

                case ".jpg":
                case ".jpeg":
                    return "image/jpeg";

                case ".png":
                    return "image/png";

                case ".gif":
                    return "image/gif";

                case ".ico":
                    return "image/vnd.microsoft.icon";

                case ".ttf":
                    return "font/ttf";

                default:
                    throw new FormatException("Formato de archivo inválido");
            }
        }

        private bool IsValidHttpVerb(string verb)
            => verb.Equals("GET", StringComparison.OrdinalIgnoreCase);

        public async Task Invoke(HttpContext httpContext, IDBEntitySchemaService service) {
            var request = httpContext.Request;

            if (IsValidHttpVerb(httpContext.Request.Method)) {
                if (!request.Path.HasValue)
                    await GetStream(httpContext, "index.html", service.GetCode());
                else
                    await GetStream(httpContext, request.Path.Value.TrimStart('/'));
            }

            return;
        }
    }
}