using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EASYDATACenter.DBModel
{
    [Table("UserList")]
    [Index("UserName", Name = "IX_UserList", IsUnique = true)]
    public partial class UserList
    {
        public UserList()
        {
            AccessRoleLists = new HashSet<AccessRoleList>();
            AddressLists = new HashSet<AddressList>();
            BasicAttachmentLists = new HashSet<BasicAttachmentList>();
            BranchLists = new HashSet<BranchList>();
            Calendars = new HashSet<Calendar>();
            CreditNoteSupportLists = new HashSet<CreditNoteSupportList>();
            CreditNoteLists = new HashSet<CreditNoteList>();
            CurrencyLists = new HashSet<CurrencyList>();
            SystemDocumentAdviceLists = new HashSet<SystemDocumentAdviceList>();
            DocumentTypeLists = new HashSet<DocumentTypeList>();
            ExchangeRateLists = new HashSet<ExchangeRateList>();
            HealthCheckTaskLists = new HashSet<HealthCheckTaskList>();
            IgnoredExceptionLists = new HashSet<IgnoredExceptionList>();
            ImageGalleryLists = new HashSet<ImageGalleryList>();
            IncomingInvoiceSupportLists = new HashSet<IncomingInvoiceSupportList>();
            IncomingInvoiceLists = new HashSet<IncomingInvoiceList>();
            IncomingOrderSupportLists = new HashSet<IncomingOrderSupportList>();
            IncomingOrderLists = new HashSet<IncomingOrderList>();
            ItemLists = new HashSet<ItemList>();
            LanguageLists = new HashSet<LanguageList>();
            LicenseAlgorithmLists = new HashSet<LicenseAlgorithmList>();
            MaturityLists = new HashSet<MaturityList>();
            MottoLists = new HashSet<MottoList>();
            NotesLists = new HashSet<NotesList>();
            OfferSupportLists = new HashSet<OfferSupportList>();
            OfferLists = new HashSet<OfferList>();
            OutgoingInvoiceSupportLists = new HashSet<OutgoingInvoiceSupportList>();
            BusinessOutgoingInvoiceLists = new HashSet<BusinessOutgoingInvoiceList>();
            OutgoingOrderSupportLists = new HashSet<OutgoingOrderSupportList>();
            OutgoingOrderLists = new HashSet<OutgoingOrderList>();
            ParameterLists = new HashSet<ParameterList>();
            PaymentMethodLists = new HashSet<PaymentMethodList>();
            BusinessPaymentStatusLists = new HashSet<BusinessPaymentStatusList>();
            ReceiptSupportLists = new HashSet<ReceiptSupportList>();
            ReceiptLists = new HashSet<ReceiptList>();
            ReportLists = new HashSet<ReportList>();
            SvgIconLists = new HashSet<SvgIconList>();
            SolutionFailLists = new HashSet<SolutionFailList>();
            TemplateLists = new HashSet<TemplateList>();
            ToolPanelDefinitionLists = new HashSet<ToolPanelDefinitionList>();
            UnitLists = new HashSet<UnitList>();
            VatLists = new HashSet<VatList>();
            WarehouseLists = new HashSet<WarehouseList>();
        }

        [Key]
        public int Id { get; set; }
        public int RoleId { get; set; }
        [StringLength(150)]
        [Unicode(false)]
        public string UserName { get; set; } = null!;
        [StringLength(2048)]
        [Unicode(false)]
        public string Password { get; set; } = null!;
        [StringLength(150)]
        [Unicode(false)]
        public string Name { get; set; } = null!;
        [StringLength(150)]
        [Unicode(false)]
        public string SurName { get; set; } = null!;
        [Column(TypeName = "text")]
        public string? Description { get; set; }
        public bool Active { get; set; }
        public DateTime Timestamp { get; set; }
        [StringLength(2048)]
        [Unicode(false)]
        public string? Token { get; set; }
        public DateTime? Expiration { get; set; }
        public byte[]? Photo { get; set; }
        [StringLength(100)]
        [Unicode(false)]
        public string? MimeType { get; set; }
        [StringLength(500)]
        [Unicode(false)]
        public string? PhotoPath { get; set; }

        [ForeignKey("RoleId")]
        [InverseProperty("UserLists")]
        public virtual UserRoleList Role { get; set; } = null!;
        [InverseProperty("User")]
        public virtual ICollection<AccessRoleList> AccessRoleLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<AddressList> AddressLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BasicAttachmentList> BasicAttachmentLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BranchList> BranchLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<Calendar> Calendars { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<CreditNoteSupportList> CreditNoteSupportLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<CreditNoteList> CreditNoteLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<CurrencyList> CurrencyLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<SystemDocumentAdviceList> SystemDocumentAdviceLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<DocumentTypeList> DocumentTypeLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<ExchangeRateList> ExchangeRateLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<HealthCheckTaskList> HealthCheckTaskLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<IgnoredExceptionList> IgnoredExceptionLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<ImageGalleryList> ImageGalleryLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<IncomingInvoiceSupportList> IncomingInvoiceSupportLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<IncomingInvoiceList> IncomingInvoiceLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<IncomingOrderSupportList> IncomingOrderSupportLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<IncomingOrderList> IncomingOrderLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<ItemList> ItemLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<LanguageList> LanguageLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<LicenseAlgorithmList> LicenseAlgorithmLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<MaturityList> MaturityLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<MottoList> MottoLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<NotesList> NotesLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<OfferSupportList> OfferSupportLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<OfferList> OfferLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<OutgoingInvoiceSupportList> OutgoingInvoiceSupportLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessOutgoingInvoiceList> BusinessOutgoingInvoiceLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<OutgoingOrderSupportList> OutgoingOrderSupportLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<OutgoingOrderList> OutgoingOrderLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<ParameterList> ParameterLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<PaymentMethodList> PaymentMethodLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<BusinessPaymentStatusList> BusinessPaymentStatusLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<ReceiptSupportList> ReceiptSupportLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<ReceiptList> ReceiptLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<ReportList> ReportLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<SvgIconList> SvgIconLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<SolutionFailList> SolutionFailLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<TemplateList> TemplateLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<ToolPanelDefinitionList> ToolPanelDefinitionLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<UnitList> UnitLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<VatList> VatLists { get; set; }
        [InverseProperty("User")]
        public virtual ICollection<WarehouseList> WarehouseLists { get; set; }
    }
}
