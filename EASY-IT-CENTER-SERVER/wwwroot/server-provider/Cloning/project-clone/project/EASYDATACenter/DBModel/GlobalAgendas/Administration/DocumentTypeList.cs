namespace EASYDATACenter.DBModel {

    [Table("DocumentTypeList")]
    [Index("SystemName", Name = "IX_DocumentTypeList", IsUnique = true)]
    public partial class DocumentTypeList {

        public DocumentTypeList() {
            SystemDocumentAdviceLists = new HashSet<SystemDocumentAdviceList>();
        }

        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string SystemName { get; set; } = null!;

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        public int UserId { get; set; }
        public DateTime Timestamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("DocumentTypeLists")]
        public virtual UserList User { get; set; } = null!;

        public virtual ICollection<SystemDocumentAdviceList> SystemDocumentAdviceLists { get; set; }
    }
}