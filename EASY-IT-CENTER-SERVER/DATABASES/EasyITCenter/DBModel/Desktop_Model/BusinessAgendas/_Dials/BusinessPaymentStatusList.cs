﻿namespace EasyITCenter.DBModel {

    [Table("BusinessPaymentStatusList")]
    [Index("Name", Name = "IX_PaymentStatusList", IsUnique = true)]
    public partial class BusinessPaymentStatusList {

        public BusinessPaymentStatusList() {
            BusinessIncomingInvoiceLists = new HashSet<BusinessIncomingInvoiceList>();
            BusinessOutgoingInvoiceLists = new HashSet<BusinessOutgoingInvoiceList>();
        }

        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string Name { get; set; } = null!;

        public bool Default { get; set; }

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        public int UserId { get; set; }
        public bool Active { get; set; }
        public bool Receipt { get; set; }
        public bool CreditNote { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("BusinessPaymentStatusLists")]
        public virtual SolutionUserList User { get; set; } = null!;

        [InverseProperty("PaymentStatus")]
        public virtual ICollection<BusinessIncomingInvoiceList> BusinessIncomingInvoiceLists { get; set; }

        [InverseProperty("PaymentStatus")]
        public virtual ICollection<BusinessOutgoingInvoiceList> BusinessOutgoingInvoiceLists { get; set; }
    }
}