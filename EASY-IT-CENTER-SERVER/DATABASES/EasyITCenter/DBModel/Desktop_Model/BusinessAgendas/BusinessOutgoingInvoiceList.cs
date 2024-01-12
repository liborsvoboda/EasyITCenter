﻿namespace EasyITCenter.DBModel {

    [Table("BusinessOutgoingInvoiceList")]
    [Index("DocumentNumber", Name = "IX_OutgoingInvoiceList", IsUnique = true)]
    [Index("Customer", Name = "IX_OutgoingInvoiceList_Customer")]
    public partial class BusinessOutgoingInvoiceList {

        public BusinessOutgoingInvoiceList() {
            BusinessCreditNoteLists = new HashSet<BusinessCreditNoteList>();
            BusinessOutgoingInvoiceSupportLists = new HashSet<BusinessOutgoingInvoiceSupportList>();
            BusinessReceiptLists = new HashSet<BusinessReceiptList>();
        }

        [Key]
        public int Id { get; set; }

        [StringLength(20)]
        [Unicode(false)]
        public string DocumentNumber { get; set; } = null!;

        [StringLength(512)]
        [Unicode(false)]
        public string Supplier { get; set; } = null!;

        [StringLength(512)]
        [Unicode(false)]
        public string Customer { get; set; } = null!;

        public DateTime IssueDate { get; set; }
        public DateTime TaxDate { get; set; }
        public DateTime MaturityDate { get; set; }
        public int PaymentMethodId { get; set; }
        public int MaturityId { get; set; }

        [StringLength(50)]
        [Unicode(false)]
        public string? OrderNumber { get; set; }

        public bool Storned { get; set; }
        public int PaymentStatusId { get; set; }
        public int TotalCurrencyId { get; set; }

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        [Column(TypeName = "numeric(10, 2)")]
        public decimal TotalPriceWithVat { get; set; }

        public int? ReceiptId { get; set; }
        public int? CreditNoteId { get; set; }
        public int UserId { get; set; }
        public DateTime TimeStamp { get; set; }

        [ForeignKey("CreditNoteId")]
        [InverseProperty("BusinessOutgoingInvoiceLists")]
        public virtual BusinessCreditNoteList? CreditNote { get; set; }

        [ForeignKey("MaturityId")]
        [InverseProperty("BusinessOutgoingInvoiceLists")]
        public virtual BusinessMaturityList Maturity { get; set; } = null!;

        [ForeignKey("PaymentMethodId")]
        [InverseProperty("BusinessOutgoingInvoiceLists")]
        public virtual BusinessPaymentMethodList PaymentMethod { get; set; } = null!;

        [ForeignKey("PaymentStatusId")]
        [InverseProperty("BusinessOutgoingInvoiceLists")]
        public virtual BusinessPaymentStatusList PaymentStatus { get; set; } = null!;

        [ForeignKey("ReceiptId")]
        [InverseProperty("BusinessOutgoingInvoiceLists")]
        public virtual BusinessReceiptList? Receipt { get; set; }

        [ForeignKey("TotalCurrencyId")]
        [InverseProperty("BusinessOutgoingInvoiceLists")]
        public virtual BasicCurrencyList TotalCurrency { get; set; } = null!;

        [ForeignKey("UserId")]
        [InverseProperty("BusinessOutgoingInvoiceLists")]
        public virtual SolutionUserList User { get; set; } = null!;

        public virtual ICollection<BusinessCreditNoteList> BusinessCreditNoteLists { get; set; }
        public virtual ICollection<BusinessOutgoingInvoiceSupportList> BusinessOutgoingInvoiceSupportLists { get; set; }
        public virtual ICollection<BusinessReceiptList> BusinessReceiptLists { get; set; }
    }
}