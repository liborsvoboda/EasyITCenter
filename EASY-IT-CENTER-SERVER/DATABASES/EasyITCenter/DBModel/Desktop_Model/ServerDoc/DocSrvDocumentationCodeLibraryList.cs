﻿namespace EasyITCenter.DBModel {

    [Table("DocSrvDocumentationCodeLibraryList")]
    [Index("Name", Name = "IX_DocumentationCodeLibraryList", IsUnique = true)]
    public partial class DocSrvDocumentationCodeLibraryList {

        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string Name { get; set; } = null!;

        [StringLength(2096)]
        [Unicode(false)]
        public string? Description { get; set; }

        [Column(TypeName = "text")]
        public string MdContent { get; set; } = null!;

        [Column(TypeName = "text")]
        public string HtmlContent { get; set; } = null!;

        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("DocSrvDocumentationCodeLibraryLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}