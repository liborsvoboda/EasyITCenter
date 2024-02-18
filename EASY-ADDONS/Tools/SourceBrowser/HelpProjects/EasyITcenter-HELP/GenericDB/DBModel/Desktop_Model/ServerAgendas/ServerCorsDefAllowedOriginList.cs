﻿namespace EasyITCenter.DBModel {

    [Table("ServerCorsDefAllowedOriginList")]
    [Index("AllowedDomain", Name = "IX_ServerCorsDefAllowedOriginList", IsUnique = true)]
    public partial class ServerCorsDefAllowedOriginList {

        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string AllowedDomain { get; set; } = null!;

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        public int UserId { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("ServerCorsDefAllowedOriginLists")]
        public virtual SolutionUserList User { get; set; } = null!;
    }
}