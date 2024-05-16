namespace EasyITCenter.ServerCoreStructure {


    /// <summary>
    /// Server and Hosted Services Runtime Statusses
    /// </summary>
    public enum ServerStatusResult {
        Running,
        Stopping,
        Stopped,
        InStandbyMode
    }


    /// <summary>
    /// Request Types For Selected correct Layout 
    /// </summary>
    public enum RouteLayoutResult {
        CentralLayout,
        DocPortalLayout,
        EasyDataLayout,
        EditorHtmlFileLayout,
        EmptyLayout,
        GitHubLayout,
        GlobalLayout,
        MetroLayout,
        MultiLangLayout,
        PortalLayout,
        ServerModulesLayout,
        StaticFileLayout,
        ViewerMarkDownFileLayout,
        ViewerReportFileLayout,

    }


    /// <summary>
    /// Routing Command statuses for Control 
    /// Routing and Layout Logic
    /// </summary>
    public enum RoutingResult {
        Next,
        Return,
        None
    }


}