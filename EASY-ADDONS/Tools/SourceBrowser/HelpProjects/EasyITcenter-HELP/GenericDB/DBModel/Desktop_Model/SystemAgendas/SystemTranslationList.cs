﻿namespace EasyITCenter.DBModel {

    [Table("SystemTranslationList")]
    [Index("SystemName", Name = "IX_SystemTranslationList", IsUnique = true)]
    public partial class SystemTranslationList {

        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string SystemName { get; set; } = null!;

        [StringLength(500)]
        [Unicode(false)]
        public string? DescriptionCz { get; set; }

        [StringLength(500)]
        [Unicode(false)]
        public string? DescriptionEn { get; set; }

        public int? UserId { get; set; }
        public DateTime Timestamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("SystemTranslationLists")]
        public virtual SolutionUserList? User { get; set; }
    }
}