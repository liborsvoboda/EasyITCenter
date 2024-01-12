using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace EASYDATACenter.DBModel
{
    public partial class ScaffoldContext : DbContext
    {
        public ScaffoldContext()
        {
        }

        public ScaffoldContext(DbContextOptions<ScaffoldContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AccessRoleList> AccessRoleLists { get; set; } = null!;
        public virtual DbSet<AddressList> AddressLists { get; set; } = null!;
        public virtual DbSet<BasicAttachmentList> BasicAttachmentLists { get; set; } = null!;
        public virtual DbSet<BranchList> BranchLists { get; set; } = null!;
        public virtual DbSet<Calendar> Calendars { get; set; } = null!;
        public virtual DbSet<CreditNoteSupportList> CreditNoteSupportLists { get; set; } = null!;
        public virtual DbSet<CreditNoteList> CreditNoteLists { get; set; } = null!;
        public virtual DbSet<CurrencyList> CurrencyLists { get; set; } = null!;
        public virtual DbSet<SystemDocumentAdviceList> SystemDocumentAdviceLists { get; set; } = null!;
        public virtual DbSet<DocumentTypeList> DocumentTypeLists { get; set; } = null!;
        public virtual DbSet<ExchangeRateList> ExchangeRateLists { get; set; } = null!;
        public virtual DbSet<HealthCheckTaskList> HealthCheckTaskLists { get; set; } = null!;
        public virtual DbSet<IgnoredExceptionList> IgnoredExceptionLists { get; set; } = null!;
        public virtual DbSet<ImageGalleryList> ImageGalleryLists { get; set; } = null!;
        public virtual DbSet<IncomingInvoiceSupportList> IncomingInvoiceSupportLists { get; set; } = null!;
        public virtual DbSet<IncomingInvoiceList> IncomingInvoiceLists { get; set; } = null!;
        public virtual DbSet<IncomingOrderSupportList> IncomingOrderSupportLists { get; set; } = null!;
        public virtual DbSet<IncomingOrderList> IncomingOrderLists { get; set; } = null!;
        public virtual DbSet<ItemList> ItemLists { get; set; } = null!;
        public virtual DbSet<LanguageList> LanguageLists { get; set; } = null!;
        public virtual DbSet<LicenseActivationFailList> LicenseActivationFailLists { get; set; } = null!;
        public virtual DbSet<LicenseAlgorithmList> LicenseAlgorithmLists { get; set; } = null!;
        public virtual DbSet<LoginHistoryList> LoginHistoryLists { get; set; } = null!;
        public virtual DbSet<MaturityList> MaturityLists { get; set; } = null!;
        public virtual DbSet<MottoList> MottoLists { get; set; } = null!;
        public virtual DbSet<NotesList> NotesLists { get; set; } = null!;
        public virtual DbSet<OfferSupportList> OfferSupportLists { get; set; } = null!;
        public virtual DbSet<OfferList> OfferLists { get; set; } = null!;
        public virtual DbSet<OutgoingInvoiceSupportList> OutgoingInvoiceSupportLists { get; set; } = null!;
        public virtual DbSet<BusinessOutgoingInvoiceList> BusinessOutgoingInvoiceLists { get; set; } = null!;
        public virtual DbSet<OutgoingOrderSupportList> OutgoingOrderSupportLists { get; set; } = null!;
        public virtual DbSet<OutgoingOrderList> OutgoingOrderLists { get; set; } = null!;
        public virtual DbSet<ParameterList> ParameterLists { get; set; } = null!;
        public virtual DbSet<PaymentMethodList> PaymentMethodLists { get; set; } = null!;
        public virtual DbSet<BusinessPaymentStatusList> BusinessPaymentStatusLists { get; set; } = null!;
        public virtual DbSet<ReceiptSupportList> ReceiptSupportLists { get; set; } = null!;
        public virtual DbSet<ReceiptList> ReceiptLists { get; set; } = null!;
        public virtual DbSet<ReportList> ReportLists { get; set; } = null!;
        public virtual DbSet<ReportQueueList> ReportQueueLists { get; set; } = null!;
        public virtual DbSet<ServerSetting> ServerSettings { get; set; } = null!;
        public virtual DbSet<SvgIconList> SvgIconLists { get; set; } = null!;
        public virtual DbSet<SolutionFailList> SolutionFailLists { get; set; } = null!;
        public virtual DbSet<TemplateList> TemplateLists { get; set; } = null!;
        public virtual DbSet<ToolPanelDefinitionList> ToolPanelDefinitionLists { get; set; } = null!;
        public virtual DbSet<UnitList> UnitLists { get; set; } = null!;
        public virtual DbSet<UsedLicenseList> UsedLicenseLists { get; set; } = null!;
        public virtual DbSet<UserList> UserLists { get; set; } = null!;
        public virtual DbSet<UserRoleList> UserRoleLists { get; set; } = null!;
        public virtual DbSet<VatList> VatLists { get; set; } = null!;
        public virtual DbSet<ViewBasicAttachmentList> ViewBasicAttachmentLists { get; set; } = null!;
        public virtual DbSet<WarehouseList> WarehouseLists { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AccessRoleList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.AccessRoleLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AccessRuleList_UserList");
            });

            modelBuilder.Entity<AddressList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.AddressLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AddressList_UserList");
            });

            modelBuilder.Entity<BasicAttachmentList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.BasicAttachmentLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BasicAttachmentList_UserList");
            });

            modelBuilder.Entity<BranchList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.BranchLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BranchList_UserList");
            });

            modelBuilder.Entity<Calendar>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.Date });

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Calendars)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_Calendar_UserList");
            });

            modelBuilder.Entity<CreditNoteSupportList>(entity =>
            {
                entity.HasOne(d => d.DocumentNumberNavigation)
                    .WithMany(p => p.CreditNoteSupportLists)
                    .HasPrincipalKey(p => p.DocumentNumber)
                    .HasForeignKey(d => d.DocumentNumber)
                    .HasConstraintName("FK_CreditNoteSupportList_CreditNoteList");

                entity.HasOne(d => d.UnitNavigation)
                    .WithMany(p => p.CreditNoteSupportLists)
                    .HasPrincipalKey(p => p.Name)
                    .HasForeignKey(d => d.Unit)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CreditNoteSupportList_UnitList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.CreditNoteSupportLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CreditNoteSupportList_UserList");
            });

            modelBuilder.Entity<CreditNoteList>(entity =>
            {
                entity.HasOne(d => d.InvoiceNumberNavigation)
                    .WithMany(p => p.CreditNoteLists)
                    .HasPrincipalKey(p => p.DocumentNumber)
                    .HasForeignKey(d => d.InvoiceNumber)
                    .HasConstraintName("FK_CreditNoteList_BusinessOutgoingInvoiceList");

                entity.HasOne(d => d.TotalCurrency)
                    .WithMany(p => p.CreditNoteLists)
                    .HasForeignKey(d => d.TotalCurrencyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CreditNoteList_CurrencyList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.CreditNoteLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CreditNoteList_UserList");
            });

            modelBuilder.Entity<CurrencyList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.CurrencyLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CurrencyList_UserList");
            });

            modelBuilder.Entity<SystemDocumentAdviceList>(entity =>
            {
                entity.HasOne(d => d.Branch)
                    .WithMany(p => p.SystemDocumentAdviceLists)
                    .HasForeignKey(d => d.BranchId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_SystemDocumentAdviceList_BranchList");

                entity.HasOne(d => d.DocumentTypeNavigation)
                    .WithMany(p => p.SystemDocumentAdviceLists)
                    .HasPrincipalKey(p => p.SystemName)
                    .HasForeignKey(d => d.DocumentType)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_SystemDocumentAdviceList_DocumentTypeList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.SystemDocumentAdviceLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_DocumentAdvice_UserList");
            });

            modelBuilder.Entity<DocumentTypeList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.DocumentTypeLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_DocumentTypeList_UserList");
            });

            modelBuilder.Entity<ExchangeRateList>(entity =>
            {
                entity.HasOne(d => d.Currency)
                    .WithMany(p => p.ExchangeRateLists)
                    .HasForeignKey(d => d.CurrencyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ExchangeRateList_CurrencyList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.ExchangeRateLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_CourseList_UserList");
            });

            modelBuilder.Entity<HealthCheckTaskList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.HealthCheckTaskLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_HealthCheckTaskList_UserList");
            });

            modelBuilder.Entity<IgnoredExceptionList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.IgnoredExceptionLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IgnoredExceptionList_UserList");
            });

            modelBuilder.Entity<ImageGalleryList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.ImageGalleryLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ImageGalleryList_UserList");
            });

            modelBuilder.Entity<IncomingInvoiceSupportList>(entity =>
            {
                entity.HasOne(d => d.DocumentNumberNavigation)
                    .WithMany(p => p.IncomingInvoiceSupportLists)
                    .HasPrincipalKey(p => p.DocumentNumber)
                    .HasForeignKey(d => d.DocumentNumber)
                    .HasConstraintName("FK_IncomingInvoiceSupportList_IncomingInvoiceList");

                entity.HasOne(d => d.UnitNavigation)
                    .WithMany(p => p.IncomingInvoiceSupportLists)
                    .HasPrincipalKey(p => p.Name)
                    .HasForeignKey(d => d.Unit)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IncomingInvoiceSupportList_UnitList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.IncomingInvoiceSupportLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IncomingInvoiceSupportList_UserList");
            });

            modelBuilder.Entity<IncomingInvoiceList>(entity =>
            {
                entity.HasOne(d => d.Maturity)
                    .WithMany(p => p.IncomingInvoiceLists)
                    .HasForeignKey(d => d.MaturityId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IncomingInvoiceList_MaturityList");

                entity.HasOne(d => d.PaymentMethod)
                    .WithMany(p => p.IncomingInvoiceLists)
                    .HasForeignKey(d => d.PaymentMethodId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IncomingInvoiceList_PaymentMethodList");

                entity.HasOne(d => d.PaymentStatus)
                    .WithMany(p => p.IncomingInvoiceLists)
                    .HasForeignKey(d => d.PaymentStatusId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IncomingInvoiceList_BusinessPaymentStatusList");

                entity.HasOne(d => d.TotalCurrency)
                    .WithMany(p => p.IncomingInvoiceLists)
                    .HasForeignKey(d => d.TotalCurrencyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IncomingInvoiceList_CurrencyList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.IncomingInvoiceLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IncomingInvoiceList_UserList");
            });

            modelBuilder.Entity<IncomingOrderSupportList>(entity =>
            {
                entity.HasOne(d => d.DocumentNumberNavigation)
                    .WithMany(p => p.IncomingOrderSupportLists)
                    .HasPrincipalKey(p => p.DocumentNumber)
                    .HasForeignKey(d => d.DocumentNumber)
                    .HasConstraintName("FK_IncomingOrderSupportList_IncomingOrderList");

                entity.HasOne(d => d.UnitNavigation)
                    .WithMany(p => p.IncomingOrderSupportLists)
                    .HasPrincipalKey(p => p.Name)
                    .HasForeignKey(d => d.Unit)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IncomingOrderSupportList_UnitList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.IncomingOrderSupportLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IncomingOrderSupportList_UserList");
            });

            modelBuilder.Entity<IncomingOrderList>(entity =>
            {
                entity.HasOne(d => d.TotalCurrency)
                    .WithMany(p => p.IncomingOrderLists)
                    .HasForeignKey(d => d.TotalCurrencyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IncomingOrderList_CurrencyList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.IncomingOrderLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_IncomingOrderList_UserList");
            });

            modelBuilder.Entity<ItemList>(entity =>
            {
                entity.HasOne(d => d.Currency)
                    .WithMany(p => p.ItemLists)
                    .HasForeignKey(d => d.CurrencyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ItemList_CurrencyList");

                entity.HasOne(d => d.UnitNavigation)
                    .WithMany(p => p.ItemLists)
                    .HasPrincipalKey(p => p.Name)
                    .HasForeignKey(d => d.Unit)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ItemList_UnitList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.ItemLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ItemList_UserList");

                entity.HasOne(d => d.Vat)
                    .WithMany(p => p.ItemLists)
                    .HasForeignKey(d => d.VatId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ItemList_VatList");
            });

            modelBuilder.Entity<LanguageList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.LanguageLists)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_LanguageList_UserList");
            });

            modelBuilder.Entity<LicenseAlgorithmList>(entity =>
            {
                entity.HasOne(d => d.Address)
                    .WithMany(p => p.LicenseAlgorithmLists)
                    .HasForeignKey(d => d.AddressId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_LicenseAlgorithmList_AddressList");

                entity.HasOne(d => d.Item)
                    .WithMany(p => p.LicenseAlgorithmLists)
                    .HasForeignKey(d => d.ItemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_LicenseAlgorithmList_ItemList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.LicenseAlgorithmLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_LicenseAlgorithmList_UserList");
            });

            modelBuilder.Entity<MaturityList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.MaturityLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_MaturityList_UserList");
            });

            modelBuilder.Entity<MottoList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.MottoLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_MottoList_UserList");
            });

            modelBuilder.Entity<NotesList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.NotesLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_NotesList_UserList");
            });

            modelBuilder.Entity<OfferSupportList>(entity =>
            {
                entity.HasOne(d => d.DocumentNumberNavigation)
                    .WithMany(p => p.OfferSupportLists)
                    .HasPrincipalKey(p => p.DocumentNumber)
                    .HasForeignKey(d => d.DocumentNumber)
                    .HasConstraintName("FK_OfferSupportList_OfferList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.OfferSupportLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OfferSupportList_UserList");
            });

            modelBuilder.Entity<OfferList>(entity =>
            {
                entity.HasOne(d => d.TotalCurrency)
                    .WithMany(p => p.OfferLists)
                    .HasForeignKey(d => d.TotalCurrencyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OfferList_CurrencyList1");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.OfferLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OfferList_UserList");
            });

            modelBuilder.Entity<OutgoingInvoiceSupportList>(entity =>
            {
                entity.HasOne(d => d.DocumentNumberNavigation)
                    .WithMany(p => p.OutgoingInvoiceSupportLists)
                    .HasPrincipalKey(p => p.DocumentNumber)
                    .HasForeignKey(d => d.DocumentNumber)
                    .HasConstraintName("FK_OutgoingInvoiceSupportList_BusinessOutgoingInvoiceList");

                entity.HasOne(d => d.UnitNavigation)
                    .WithMany(p => p.OutgoingInvoiceSupportLists)
                    .HasPrincipalKey(p => p.Name)
                    .HasForeignKey(d => d.Unit)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OutgoingInvoiceSupportList_UnitList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.OutgoingInvoiceSupportLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OutgoingInvoiceSupportList_UserList");
            });

            modelBuilder.Entity<BusinessOutgoingInvoiceList>(entity =>
            {
                entity.HasOne(d => d.CreditNote)
                    .WithMany(p => p.BusinessOutgoingInvoiceLists)
                    .HasForeignKey(d => d.CreditNoteId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_BusinessOutgoingInvoiceList_CreditNoteList");

                entity.HasOne(d => d.Maturity)
                    .WithMany(p => p.BusinessOutgoingInvoiceLists)
                    .HasForeignKey(d => d.MaturityId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BusinessOutgoingInvoiceList_MaturityList");

                entity.HasOne(d => d.PaymentMethod)
                    .WithMany(p => p.BusinessOutgoingInvoiceLists)
                    .HasForeignKey(d => d.PaymentMethodId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BusinessOutgoingInvoiceList_PaymentMethodList");

                entity.HasOne(d => d.PaymentStatus)
                    .WithMany(p => p.BusinessOutgoingInvoiceLists)
                    .HasForeignKey(d => d.PaymentStatusId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BusinessOutgoingInvoiceList_BusinessPaymentStatusList");

                entity.HasOne(d => d.Receipt)
                    .WithMany(p => p.BusinessOutgoingInvoiceLists)
                    .HasForeignKey(d => d.ReceiptId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_BusinessOutgoingInvoiceList_ReceiptList");

                entity.HasOne(d => d.TotalCurrency)
                    .WithMany(p => p.BusinessOutgoingInvoiceLists)
                    .HasForeignKey(d => d.TotalCurrencyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BusinessOutgoingInvoiceList_CurrencyList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.BusinessOutgoingInvoiceLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BusinessOutgoingInvoiceList_UserList");
            });

            modelBuilder.Entity<OutgoingOrderSupportList>(entity =>
            {
                entity.HasOne(d => d.DocumentNumberNavigation)
                    .WithMany(p => p.OutgoingOrderSupportLists)
                    .HasPrincipalKey(p => p.DocumentNumber)
                    .HasForeignKey(d => d.DocumentNumber)
                    .HasConstraintName("FK_OutgoingOrderSupportList_OutgoingOrderList");

                entity.HasOne(d => d.UnitNavigation)
                    .WithMany(p => p.OutgoingOrderSupportLists)
                    .HasPrincipalKey(p => p.Name)
                    .HasForeignKey(d => d.Unit)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OutgoingOrderSupportList_UnitList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.OutgoingOrderSupportLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OutgoingOrderSupportList_UserList");
            });

            modelBuilder.Entity<OutgoingOrderList>(entity =>
            {
                entity.HasOne(d => d.TotalCurrency)
                    .WithMany(p => p.OutgoingOrderLists)
                    .HasForeignKey(d => d.TotalCurrencyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OutgoingOrderList_CurrencyList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.OutgoingOrderLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OutgoingOrderList_UserList");
            });

            modelBuilder.Entity<ParameterList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.ParameterLists)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_ParameterList_UserList");
            });

            modelBuilder.Entity<PaymentMethodList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.PaymentMethodLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PaymentMethodList_UserList");
            });

            modelBuilder.Entity<BusinessPaymentStatusList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.BusinessPaymentStatusLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_BusinessPaymentStatusList_UserList");
            });

            modelBuilder.Entity<ReceiptSupportList>(entity =>
            {
                entity.HasOne(d => d.DocumentNumberNavigation)
                    .WithMany(p => p.ReceiptSupportLists)
                    .HasPrincipalKey(p => p.DocumentNumber)
                    .HasForeignKey(d => d.DocumentNumber)
                    .HasConstraintName("FK_ReceiptSupportList_ReceiptList");

                entity.HasOne(d => d.UnitNavigation)
                    .WithMany(p => p.ReceiptSupportLists)
                    .HasPrincipalKey(p => p.Name)
                    .HasForeignKey(d => d.Unit)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ReceiptSupportList_UnitList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.ReceiptSupportLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ReceiptSupportList_UserList");
            });

            modelBuilder.Entity<ReceiptList>(entity =>
            {
                entity.HasOne(d => d.InvoiceNumberNavigation)
                    .WithMany(p => p.ReceiptLists)
                    .HasPrincipalKey(p => p.DocumentNumber)
                    .HasForeignKey(d => d.InvoiceNumber)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("FK_ReceiptList_BusinessOutgoingInvoiceList");

                entity.HasOne(d => d.TotalCurrency)
                    .WithMany(p => p.ReceiptLists)
                    .HasForeignKey(d => d.TotalCurrencyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ReceiptList_CurrencyList");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.ReceiptLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ReceiptList_UserList");
            });

            modelBuilder.Entity<ReportList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.ReportLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ReportList_UserList");
            });

            modelBuilder.Entity<SvgIconList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.SvgIconLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_SvgIconList_UserList");
            });

            modelBuilder.Entity<SolutionFailList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.SolutionFailLists)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_SolutionFailList_UserList");
            });

            modelBuilder.Entity<TemplateList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.TemplateLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_TemplateList_UserList");
            });

            modelBuilder.Entity<ToolPanelDefinitionList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.ToolPanelDefinitionLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ToolPanelDefinitionList_UserList");
            });

            modelBuilder.Entity<UnitList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.UnitLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UnitList_UserList");
            });

            modelBuilder.Entity<UsedLicenseList>(entity =>
            {
                entity.HasOne(d => d.Address)
                    .WithMany(p => p.UsedLicenseLists)
                    .HasForeignKey(d => d.AddressId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UsedLicenseList_AddressList");

                entity.HasOne(d => d.Item)
                    .WithMany(p => p.UsedLicenseLists)
                    .HasForeignKey(d => d.ItemId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UsedLicenseList_ItemList");
            });

            modelBuilder.Entity<UserList>(entity =>
            {
                entity.HasOne(d => d.Role)
                    .WithMany(p => p.UserLists)
                    .HasForeignKey(d => d.RoleId)
                    .HasConstraintName("FK_UserList_UserRoleList");
            });

            modelBuilder.Entity<VatList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.VatLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_VatList_UserList");
            });

            modelBuilder.Entity<ViewBasicAttachmentList>(entity =>
            {
                entity.ToView("View_BasicAttachmentList");
            });

            modelBuilder.Entity<WarehouseList>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.WarehouseLists)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_WarehouseList_UserList");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
