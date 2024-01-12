namespace EASYDATACenter.DBModel {

    [Table("BasicAttachmentList")]
    [Index("ParentId", "ParentType", Name = "IX_BasicAttachmentList")]
    [Index("ParentId", "FileName", Name = "UX_BasicAttachmentList", IsUnique = true)]
    public partial class BasicAttachmentList {

        [Key]
        public int Id { get; set; }

        public int ParentId { get; set; }

        [StringLength(20)]
        [Unicode(false)]
        public string ParentType { get; set; } = null!;

        [StringLength(150)]
        [Unicode(false)]
        public string FileName { get; set; } = null!;

        public byte[] Attachment { get; set; } = null!;
        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("BasicAttachmentLists")]
        public virtual UserList User { get; set; } = null!;
    }
}