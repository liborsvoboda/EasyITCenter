﻿namespace EasyITCenter.DBModel {

    [Table("ProdGuidGroupList")]
    [Index("Name", Name = "IX_ProdGuidGroupList", IsUnique = true)]
    public partial class ProdGuidGroupList {

        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string Name { get; set; } = null!;

        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("ProdGuidGroupLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}