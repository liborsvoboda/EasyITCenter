﻿namespace EASYDATACenter.DBModel {

    [Table("ProdGuidWorkList")]
    public partial class ProdGuidWorkList {

        [Key]
        public int Id { get; set; }

        public DateTime Date { get; set; }
        public int PersonalNumber { get; set; }
        public int WorkPlace { get; set; }
        public int OperationNumber { get; set; }
        public TimeSpan WorkTime { get; set; }
        public int Pcs { get; set; }

        [Column(TypeName = "numeric(10, 2)")]
        public decimal Amount { get; set; }

        [Column(TypeName = "numeric(10, 2)")]
        public decimal WorkPower { get; set; }

        public int UserId { get; set; }
        public DateTime Timestamp { get; set; }

        public virtual ProdGuidPersonList PersonalNumberNavigation { get; set; } = null!;

        [ForeignKey("UserId")]
        [InverseProperty("ProdGuidWorkLists")]
        public virtual UserList User { get; set; } = null!;
    }
}