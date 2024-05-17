﻿namespace EasyITCenter.DBModel {

    [Table("WebDeveloperNewsList")]
    [Index("Title", Name = "IX_WebDeveloperNewsList", IsUnique = true)]
    public partial class WebDeveloperNewsList {

        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string Title { get; set; } = null!;

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        public int UserId { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("WebDeveloperNewsLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}