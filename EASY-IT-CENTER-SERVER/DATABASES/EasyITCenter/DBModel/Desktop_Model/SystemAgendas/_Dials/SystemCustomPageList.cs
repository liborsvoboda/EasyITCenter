﻿namespace EasyITCenter.DBModel {

    [Table("SystemCustomPageList")]
    [Index("PageName", Name = "IX_SystemCustomPageList", IsUnique = true)]
    public partial class SystemCustomPageList {

        [Key]
        public int Id { get; set; }

        [StringLength(250)]
        [Unicode(false)]
        public string PageName { get; set; } = null!;

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        public int UserId { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("SystemCustomPageLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}