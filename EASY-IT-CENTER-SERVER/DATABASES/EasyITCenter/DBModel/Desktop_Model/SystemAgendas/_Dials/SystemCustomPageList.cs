using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EasyITCenter.DBModel
{
    [Table("SystemCustomPageList")]
    [Index("PageName", Name = "IX_SystemCustomPageList", IsUnique = true)]
    public partial class SystemCustomPageList
    {
        [Key]
        public int Id { get; set; }
        [StringLength(250)]
        [Unicode(false)]
        public string PageName { get; set; } = null!;
        [Column(TypeName = "text")]
        public string? Description { get; set; }
        public bool IsMultiFormType { get; set; }
        public bool IsServerUrl { get; set; }
        [StringLength(512)]
        [Unicode(false)]
        public string? StartupUrl { get; set; }
        public bool IsWebServer { get; set; }
        [StringLength(150)]
        [Unicode(false)]
        public string? StartupSubFolder { get; set; }
        [StringLength(500)]
        [Unicode(false)]
        public string? StartupCommand { get; set; }
        public bool IsGraphType { get; set; }
        public bool Active { get; set; }
        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("SystemCustomPageLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}
