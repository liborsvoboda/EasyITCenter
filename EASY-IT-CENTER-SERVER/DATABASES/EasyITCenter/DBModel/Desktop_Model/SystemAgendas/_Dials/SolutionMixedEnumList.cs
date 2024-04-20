﻿namespace EasyITCenter.DBModel {

    [Table("SolutionMixedEnumList")]
    [Index("ItemsGroup", "Name", Name = "IX_GlobalMixedEnumList", IsUnique = true)]
    [Index("ItemsGroup", Name = "IX_SolutionMixedEnumList")]
    [Index("Name", Name = "IX_SolutionMixedEnumList_1")]
    public partial class SolutionMixedEnumList {

        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string ItemsGroup { get; set; } = null!;

        [StringLength(50)]
        [Unicode(false)]
        public string Name { get; set; } = null!;

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        public int UserId { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("SolutionMixedEnumLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}