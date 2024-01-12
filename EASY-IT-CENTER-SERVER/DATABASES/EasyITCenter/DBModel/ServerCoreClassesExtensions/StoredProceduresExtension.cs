namespace EasyITCenter.DBModel {

    public partial class SpUserMenuList {
        public int Id { get; set; }
        public string MenuType { get; set; } = null!;
        public int GroupId { get; set; }
        public string GroupName { get; set; } = null!;
        public string FormPageName { get; set; } = null!;
        public string AccessRole { get; set; } = null!;
        public string? Description { get; set; }
        public int UserId { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }
    }

    public partial class DBJsonFile {
        public string Value { get; set; } = null!;
    }
}