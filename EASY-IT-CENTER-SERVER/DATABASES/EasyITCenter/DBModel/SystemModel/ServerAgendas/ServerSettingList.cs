﻿namespace EasyITCenter.DBModel {

    [Table("ServerSettingList")]
    [Index("Key", Name = "IX_ServerSettingList", IsUnique = true)]
    public partial class ServerSettingList {

        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string InheritedGroupName { get; set; } = null!;

        [StringLength(50)]
        [Unicode(false)]
        public string Type { get; set; } = null!;

        [StringLength(150)]
        public string Key { get; set; } = null!;

        [StringLength(150)]
        public string Value { get; set; } = null!;

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        [StringLength(1024)]
        [Unicode(false)]
        public string? Link { get; set; }

        public int UserId { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("ServerSettingLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}