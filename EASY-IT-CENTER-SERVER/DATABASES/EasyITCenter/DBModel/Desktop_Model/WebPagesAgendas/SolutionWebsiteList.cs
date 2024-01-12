﻿namespace EasyITCenter.DBModel {

    [Table("SolutionWebsiteList")]
    [Index("WebsiteName", Name = "IX_SolutionWebsiteList", IsUnique = true)]
    public partial class SolutionWebsiteList {

        public SolutionWebsiteList() {
            SolutionStaticFilePathLists = new HashSet<SolutionStaticFilePathList>();
        }

        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string WebsiteName { get; set; } = null!;

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        public int UserId { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("SolutionWebsiteLists")]
        public virtual SolutionUserList User { get; set; } = null!;

        [InverseProperty("Website")]
        public virtual ICollection<SolutionStaticFilePathList> SolutionStaticFilePathLists { get; set; }
    }
}