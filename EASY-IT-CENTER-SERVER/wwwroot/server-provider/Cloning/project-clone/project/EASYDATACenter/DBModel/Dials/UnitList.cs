namespace EASYDATACenter.DBModel {

    [Table("UnitList")]
    [Index("Name", Name = "IX_UnitList", IsUnique = true)]
    public partial class UnitList {

        public UnitList() {
            CreditNoteSupportLists = new HashSet<CreditNoteSupportList>();
            IncomingInvoiceSupportLists = new HashSet<IncomingInvoiceSupportList>();
            IncomingOrderSupportLists = new HashSet<IncomingOrderSupportList>();
            ItemLists = new HashSet<ItemList>();
            OutgoingInvoiceSupportLists = new HashSet<OutgoingInvoiceSupportList>();
            OutgoingOrderSupportLists = new HashSet<OutgoingOrderSupportList>();
            ReceiptSupportLists = new HashSet<ReceiptSupportList>();
        }

        [Key]
        public int Id { get; set; }

        [StringLength(10)]
        [Unicode(false)]
        public string Name { get; set; } = null!;

        [Column(TypeName = "text")]
        public string? Description { get; set; }

        public int UserId { get; set; }
        public bool Active { get; set; }
        public DateTime TimeStamp { get; set; }
        public bool Default { get; set; }

        [ForeignKey("UserId")]
        [InverseProperty("UnitLists")]
        public virtual UserList User { get; set; } = null!;

        public virtual ICollection<CreditNoteSupportList> CreditNoteSupportLists { get; set; }
        public virtual ICollection<IncomingInvoiceSupportList> IncomingInvoiceSupportLists { get; set; }
        public virtual ICollection<IncomingOrderSupportList> IncomingOrderSupportLists { get; set; }
        public virtual ICollection<ItemList> ItemLists { get; set; }
        public virtual ICollection<OutgoingInvoiceSupportList> OutgoingInvoiceSupportLists { get; set; }
        public virtual ICollection<OutgoingOrderSupportList> OutgoingOrderSupportLists { get; set; }
        public virtual ICollection<ReceiptSupportList> ReceiptSupportLists { get; set; }
    }
}