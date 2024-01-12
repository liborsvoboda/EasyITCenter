﻿namespace LicenseSHOPER.DBModel {

    [Table("IgnoredExceptionList")]
    [Index("ErrorNumber", Name = "IX_IgnoredExceptionList", IsUnique = true)]
    public partial class IgnoredExceptionList {

        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string ErrorNumber { get; set; } = null!;

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        public bool Active { get; set; }
        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("IgnoredExceptionLists")]
        public virtual UserList User { get; set; } = null!;
    }
}