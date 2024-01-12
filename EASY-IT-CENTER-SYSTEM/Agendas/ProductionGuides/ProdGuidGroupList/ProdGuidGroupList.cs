using System;

namespace EasyITCenter.Classes {

    public partial class ProdGuidGroupList {
        public int Id { get; set; } = 0;
        public string Name { get; set; } = null;
        public int UserId { get; set; } = 0;
        public DateTime? Timestamp { get; set; } = null;

        //public UserRoleList Role { get; set; } = new UserRoleList();
    }
}