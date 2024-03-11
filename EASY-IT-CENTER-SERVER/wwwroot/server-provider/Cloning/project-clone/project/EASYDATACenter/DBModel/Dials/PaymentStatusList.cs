namespace EASYDATACenter.DBModel {

    [Table("BusinessPaymentStatusList")]
    [Index("Name", Name = "IX_BusinessPaymentStatusList", IsUnique = true)]
    public partial class BusinessPaymentStatusList {

        public BusinessPaymentStatusList() {
            IncomingInvoiceLists = new HashSet<IncomingInvoiceList>();
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
        public virtual UserList User { get; set; } = null!;

        [InverseProperty("PaymentStatus")]
        public virtual ICollection<IncomingInvoiceList> IncomingInvoiceLists { get; set; }

        [InverseProperty("PaymentStatus")]
        public virtual ICollection<BusinessOutgoingInvoiceList> BusinessOutgoingInvoiceLists { get; set; }
    }
}