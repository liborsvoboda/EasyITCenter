﻿namespace EASYDATACenter.DBModel {

    [Table("TemplateClassList")]
    [Index("Name", Name = "IX_TemplateClassList", IsUnique = true)]
    public partial class TemplateClassList {
        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string Name { get; set; } = null!;

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        public int UserId { get; set; }
        public bool Default { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("TemplateClassLists")]
        public virtual UserList User { get; set; } = null!;
    }
}