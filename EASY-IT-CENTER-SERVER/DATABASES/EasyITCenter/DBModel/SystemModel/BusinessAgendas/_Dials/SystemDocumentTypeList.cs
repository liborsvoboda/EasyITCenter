﻿namespace EasyITCenter.DBModel {

    [Table("SystemDocumentTypeList")]
    [Index("SystemName", Name = "IX_DocumentTypeList", IsUnique = true)]
    public partial class SystemDocumentTypeList {

        public SystemDocumentTypeList() {
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
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("SystemDocumentTypeLists")]
        public virtual SolutionUserList User { get; set; } = null!;

        public virtual ICollection<SystemDocumentAdviceList> SystemDocumentAdviceLists { get; set; }
    }
}