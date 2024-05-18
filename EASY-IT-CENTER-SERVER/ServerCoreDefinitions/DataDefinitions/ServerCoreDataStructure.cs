﻿namespace EasyITCenter.ServerCoreStructure {

    /// <summary>
    /// WebSocket Extension Definition For Simple Central Control All Connection By Connection Path
    /// and Timeout
    /// </summary>
    public class WebSocketLocation {
        public string? socketAPIPath { get; set; }
        public DateTimeOffset? SocketTimeout { get; set; }
    }
}