namespace EASYDATACenter.DBModel {

    [Table("BusinessOutgoingInvoiceList")]
    [Index("DocumentNumber", Name = "IX_BusinessOutgoingInvoiceList", IsUnique = true)]
    [Index("Customer", Name = "IX_BusinessOutgoingInvoiceList_Customer")]
    public partial class BusinessOutgoingInvoiceList {

        public BusinessOutgoingInvoiceList() {
            CreditNoteLists = new HashSet<CreditNoteList>();
            OutgoingInvoiceSupportLists = new HashSet<OutgoingInvoiceSupportList>();
            ReceiptLists = new HashSet<ReceiptList>();
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
        public virtual CreditNoteList? CreditNote { get; set; }

        [ForeignKey("MaturityId")]
        [InverseProperty("BusinessOutgoingInvoiceLists")]
        public virtual MaturityList Maturity { get; set; } = null!;

        [ForeignKey("PaymentMethodId")]
        [InverseProperty("BusinessOutgoingInvoiceLists")]
        public virtual PaymentMethodList PaymentMethod { get; set; } = null!;

        [ForeignKey("PaymentStatusId")]
        [InverseProperty("BusinessOutgoingInvoiceLists")]
        public virtual BusinessPaymentStatusList PaymentStatus { get; set; } = null!;

        [ForeignKey("ReceiptId")]
        [InverseProperty("BusinessOutgoingInvoiceLists")]
        public virtual ReceiptList? Receipt { get; set; }

        [ForeignKey("TotalCurrencyId")]
        [InverseProperty("BusinessOutgoingInvoiceLists")]
        public virtual CurrencyList TotalCurrency { get; set; } = null!;

        [ForeignKey("UserId")]
        [InverseProperty("BusinessOutgoingInvoiceLists")]
        public virtual UserList User { get; set; } = null!;

        public virtual ICollection<CreditNoteList> CreditNoteLists { get; set; }
        public virtual ICollection<OutgoingInvoiceSupportList> OutgoingInvoiceSupportLists { get; set; }
        public virtual ICollection<ReceiptList> ReceiptLists { get; set; }
    }
}