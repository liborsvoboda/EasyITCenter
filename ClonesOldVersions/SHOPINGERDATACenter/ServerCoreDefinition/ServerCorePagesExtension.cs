namespace EASYDATACenter.ServerCoreDefinition {

    /// <summary>
    /// Custom Class For Login over Server Web Pages
    /// </summary>
    public class ServerWebPagesLogin {
        public string? Username { get; set; } = null;
        public string? Password { get; set; } = null;

        //  public string? Role { get; set; } = null;
    }

    /// <summary>
    /// Server WebPages Communication Token Definition
    /// for Security content
    /// </summary>
    public class ServerWebPagesToken {
        public Dictionary<string,string> Data { get; set; }
        public ClaimsPrincipal? UserClaims { get; set; } = null;
        public SecurityToken? Token { get; set; } = null;
        public string stringToken { get; set; } = null;
        public bool IsValid { get; set; } = false;
    }
    
  
}