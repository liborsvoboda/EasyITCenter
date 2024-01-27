namespace EasyITCenter.DBModel {

    public static class WebsitesStaticFileExtension {

        public class StaticFilesRequest {
            public string Website { get; set; }
            public string Path { get; set; }
            public bool Recursive { get; set; } = false;
        }
    }
}