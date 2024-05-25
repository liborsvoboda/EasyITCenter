CREATE TABLE [GithubSrvTeamList] (
    [Id] int NOT NULL IDENTITY,
    [Name] varchar(150) NULL,
    [Description] text NULL,
    [CreationDate] datetime2 NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_GithubSrvTeamList] PRIMARY KEY ([Id])
);
GO


CREATE TABLE [LicSrvLicenseActivationFailList] (
    [Id] int NOT NULL IDENTITY,
    [IpAddress] varchar(50) NOT NULL,
    [UnlockCode] varchar(50) NULL,
    [PartNumber] varchar(50) NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_LicSrvLicenseActivationFailList] PRIMARY KEY ([Id])
);
GO


CREATE TABLE [SolutionEmailerHistoryList] (
    [Id] int NOT NULL IDENTITY,
    [Recipient] varchar(1024) NOT NULL,
    [Subject] varchar(1024) NOT NULL,
    [Email] text NULL,
    [Status] varchar(2048) NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SolutionEmailerHistoryList] PRIMARY KEY ([Id])
);
GO


CREATE TABLE [SolutionUserRoleList] (
    [Id] int NOT NULL IDENTITY,
    [SystemName] varchar(50) NOT NULL,
    [MinimalAccessValue] int NOT NULL,
    [Description] text NULL,
    [UserId] int NULL,
    [Timestamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SolutionUserRoleList] PRIMARY KEY ([Id])
);
GO


CREATE TABLE [SystemLoginHistoryList] (
    [Id] int NOT NULL IDENTITY,
    [IpAddress] varchar(50) NOT NULL,
    [UserId] int NOT NULL,
    [UserName] varchar(150) NOT NULL,
    [Timestamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SystemLoginHistoryList] PRIMARY KEY ([Id])
);
GO


CREATE TABLE [SystemReportQueueList] (
    [Id] int NOT NULL IDENTITY,
    [Name] varchar(50) NOT NULL,
    [Sequence] int NOT NULL,
    [Sql] nvarchar(max) NOT NULL,
    [TableName] varchar(150) NOT NULL,
    [Filter] nvarchar(max) NULL,
    [Search] varchar(50) NULL,
    [SearchColumnList] nvarchar(max) NULL,
    [SearchFilterIgnore] bit NOT NULL,
    [RecId] int NULL,
    [RecIdFilterIgnore] bit NOT NULL,
    [Timestamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SystemReportQueueList] PRIMARY KEY ([Id])
);
GO


CREATE TABLE [WebVisitIpList] (
    [Id] int NOT NULL IDENTITY,
    [WebHostIp] varchar(50) NOT NULL,
    [Description] text NULL,
    [WhoIsInformations] text NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_WebVisitIpList] PRIMARY KEY ([Id])
);
GO


CREATE TABLE [SolutionUserList] (
    [Id] int NOT NULL IDENTITY,
    [RoleId] int NOT NULL,
    [UserName] varchar(150) NOT NULL,
    [Password] varchar(2048) NOT NULL,
    [Name] varchar(150) NOT NULL,
    [SurName] varchar(150) NOT NULL,
    [InfoEmail] varchar(255) NOT NULL,
    [Description] text NULL,
    [Active] bit NOT NULL,
    [Timestamp] datetime2 NOT NULL,
    [Token] varchar(2048) NULL,
    [Expiration] datetime2 NULL,
    [Photo] varbinary(max) NULL,
    [MimeType] varchar(100) NULL,
    [PhotoPath] varchar(500) NULL,
    CONSTRAINT [PK_SolutionUserList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_UserList_UserRoleList] FOREIGN KEY ([RoleId]) REFERENCES [SolutionUserRoleList] ([Id]) ON DELETE CASCADE
);
GO


CREATE TABLE [BasicAttachmentList] (
    [Id] int NOT NULL IDENTITY,
    [ParentId] int NOT NULL,
    [ParentType] varchar(20) NOT NULL,
    [FileName] varchar(150) NOT NULL,
    [Attachment] varbinary(max) NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BasicAttachmentList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_AttachmentList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [BasicCalendarList] (
    [UserId] int NOT NULL,
    [Date] date NOT NULL,
    [Notes] varchar(1024) NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_Calendar] PRIMARY KEY ([UserId], [Date]),
    CONSTRAINT [FK_Calendar_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id]) ON DELETE CASCADE
);
GO


CREATE TABLE [BasicCurrencyList] (
    [Id] int NOT NULL IDENTITY,
    [Name] varchar(5) NOT NULL,
    [ExchangeRate] numeric(10,2) NOT NULL,
    [Fixed] bit NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    [Default] bit NOT NULL,
    CONSTRAINT [PK_BasicCurrencyList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_CurrencyList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [BasicImageGalleryList] (
    [Id] int NOT NULL IDENTITY,
    [IsPrimary] bit NOT NULL,
    [FileName] varchar(150) NOT NULL,
    [Attachment] varbinary(max) NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BasicImageGalleryList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ImageGalleryList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [BasicUnitList] (
    [Id] int NOT NULL IDENTITY,
    [Name] varchar(10) NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    [Default] bit NOT NULL,
    CONSTRAINT [PK_BasicUnitList] PRIMARY KEY ([Id]),
    CONSTRAINT [AK_BasicUnitList_Name] UNIQUE ([Name]),
    CONSTRAINT [FK_UnitList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [BasicVatList] (
    [Id] int NOT NULL IDENTITY,
    [Name] varchar(20) NOT NULL,
    [Value] numeric(10,2) NOT NULL,
    [Default] bit NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BasicVatList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_VatList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [BusinessAddressList] (
    [Id] int NOT NULL IDENTITY,
    [AddressType] varchar(20) NOT NULL,
    [CompanyName] varchar(150) NOT NULL,
    [ContactName] varchar(150) NULL,
    [Street] varchar(150) NOT NULL,
    [City] varchar(150) NOT NULL,
    [PostCode] varchar(20) NOT NULL,
    [Phone] varchar(20) NOT NULL,
    [Email] varchar(150) NULL,
    [BankAccount] varchar(150) NULL,
    [Ico] varchar(20) NULL,
    [Dic] varchar(20) NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BusinessAddressList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_AddressList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [BusinessBranchList] (
    [Id] int NOT NULL IDENTITY,
    [CompanyName] varchar(150) NOT NULL,
    [ContactName] varchar(150) NULL,
    [Street] varchar(150) NOT NULL,
    [City] varchar(150) NOT NULL,
    [PostCode] varchar(20) NOT NULL,
    [Phone] varchar(20) NOT NULL,
    [Email] varchar(150) NULL,
    [BankAccount] varchar(150) NULL,
    [Ico] varchar(20) NULL,
    [Dic] varchar(20) NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BusinessBranchList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_BranchList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
DECLARE @defaultSchema AS sysname;
SET @defaultSchema = SCHEMA_NAME();
DECLARE @description AS sql_variant;
SET @description = N'';
EXEC sp_addextendedproperty 'MS_Description', @description, 'SCHEMA', @defaultSchema, 'TABLE', N'BusinessBranchList';
GO


CREATE TABLE [BusinessMaturityList] (
    [Id] int NOT NULL IDENTITY,
    [Name] varchar(50) NOT NULL,
    [Value] int NOT NULL,
    [Default] bit NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BusinessMaturityList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_MaturityList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [BusinessNotesList] (
    [Id] int NOT NULL IDENTITY,
    [Name] varchar(50) NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BusinessNotesList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_NotesList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [BusinessPaymentMethodList] (
    [Id] int NOT NULL IDENTITY,
    [Name] varchar(20) NOT NULL,
    [Default] bit NOT NULL,
    [Description] text NULL,
    [AutoGenerateReceipt] bit NOT NULL,
    [AllowGenerateReceipt] bit NOT NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BusinessPaymentMethodList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_PaymentMethodList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [BusinessPaymentStatusList] (
    [Id] int NOT NULL IDENTITY,
    [Name] varchar(50) NOT NULL,
    [Default] bit NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [Receipt] bit NOT NULL,
    [CreditNote] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BusinessPaymentStatusList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_PaymentStatusList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [BusinessWarehouseList] (
    [Id] int NOT NULL IDENTITY,
    [Name] varchar(50) NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [AllowNegativeStatus] bit NOT NULL,
    [Default] bit NOT NULL,
    [LockedByStockTaking] bit NOT NULL,
    [LastStockTaking] datetime2 NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BusinessWarehouseList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_WarehouseList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [DocSrvDocumentationCodeLibraryList] (
    [Id] int NOT NULL IDENTITY,
    [Name] varchar(50) NOT NULL,
    [Description] varchar(2096) NULL,
    [MdContent] text NOT NULL,
    [HtmlContent] text NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_DocSrvDocumentationCodeLibraryList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_DocumentationCodeLibraryList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [DocSrvDocumentationGroupList] (
    [Id] int NOT NULL IDENTITY,
    [Name] varchar(50) NOT NULL,
    [Sequence] int NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_DocSrvDocumentationGroupList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_DocumentationGroupList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [GithubSrvAuthLogList] (
    [Id] int NOT NULL IDENTITY,
    [IssueDate] datetime2 NOT NULL,
    [Expires] datetime2 NOT NULL,
    [IssueIp] nvarchar(max) NULL,
    [LastIp] nvarchar(max) NULL,
    [IsValid] bit NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_GithubSrvAuthLogList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_GithubSrvAuthLogList_UserId] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id]) ON DELETE CASCADE
);
GO


CREATE TABLE [GithubSrvRepositoryList] (
    [Id] int NOT NULL IDENTITY,
    [UserId] int NOT NULL,
    [UserName] varchar(150) NULL,
    [Name] varchar(150) NULL,
    [Description] text NULL,
    [DefaultBranch] varchar(1024) NULL,
    [NumIssues] int NOT NULL,
    [NumOpenIssues] int NOT NULL,
    [NumPulls] int NOT NULL,
    [NumOpenPulls] int NOT NULL,
    [CreationDate] datetime2 NOT NULL,
    [IsPrivate] bit NOT NULL,
    [IsMirror] bit NOT NULL,
    [Size] bigint NOT NULL,
    [UpdateTime] datetime2 NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_GithubSrvRepositoryList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_GithubSrvRepositoryList_SolutionUserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [GithubSrvSshKeyList] (
    [Id] int NOT NULL IDENTITY,
    [UserId] int NOT NULL,
    [KeyType] nvarchar(max) NULL,
    [Fingerprint] nvarchar(max) NULL,
    [PublicKey] nvarchar(max) NULL,
    [ImportData] datetime2 NOT NULL,
    [LastUse] datetime2 NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_GithubSrvSshKeyList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_GithubSrvSshKeyList_UserId] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id]) ON DELETE CASCADE
);
GO


CREATE TABLE [GithubSrvUserTeamRoleList] (
    [Id] int NOT NULL IDENTITY,
    [TeamId] int NOT NULL,
    [IsAdmin] bit NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_GithubSrvUserTeamRoleList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_GithubSrvUserTeamRoleList_TeamId] FOREIGN KEY ([TeamId]) REFERENCES [GithubSrvTeamList] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_GithubSrvUserTeamRoleList_UserId] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id]) ON DELETE CASCADE
);
GO


CREATE TABLE [ProdGuidGroupList] (
    [Id] int NOT NULL IDENTITY,
    [Name] varchar(50) NOT NULL,
    [UserId] int NOT NULL,
    [Timestamp] datetime2 NOT NULL,
    CONSTRAINT [PK_ProdGuidGroupList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ProdGuidGroupList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [ProdGuidOperationList] (
    [Id] int NOT NULL IDENTITY,
    [WorkPlace] int NOT NULL,
    [PartNumber] varchar(50) NOT NULL,
    [OperationNumber] int NOT NULL,
    [Note] varchar(100) NOT NULL,
    [PcsPerHour] int NOT NULL,
    [KcPerKs] numeric(10,4) NOT NULL,
    [UserId] int NOT NULL,
    [Timestamp] datetime2 NOT NULL,
    CONSTRAINT [PK_ProdGuidOperationList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ProdGuidOperationList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [ProdGuidPartList] (
    [Id] int NOT NULL IDENTITY,
    [WorkPlace] int NOT NULL,
    [Number] varchar(50) NOT NULL,
    [Name] varchar(100) NULL,
    [UserId] int NOT NULL,
    [Timestamp] datetime2 NOT NULL,
    CONSTRAINT [PK_ProdGuidPartList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ProdGuidPartList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [ProdGuidPersonList] (
    [Id] int NOT NULL IDENTITY,
    [GroupId] int NOT NULL,
    [PersonalNumber] int NOT NULL,
    [Name] varchar(50) NOT NULL,
    [SurName] varchar(100) NOT NULL,
    [UserId] int NOT NULL,
    [Timestamp] datetime2 NOT NULL,
    CONSTRAINT [PK_ProdGuidPersonList] PRIMARY KEY ([Id]),
    CONSTRAINT [AK_ProdGuidPersonList_PersonalNumber] UNIQUE ([PersonalNumber]),
    CONSTRAINT [FK_ProdGuidPersonList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [ProviderAutoGenServerReqList] (
    [Id] int NOT NULL IDENTITY,
    [IpAddress] varchar(20) NOT NULL,
    [Name] varchar(100) NOT NULL,
    [Description] text NULL,
    [UserId] int NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_ProviderAutoGenServerReqList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ProviderAutoGenServerCreateRequest_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [ProviderGeneratedLicenseList] (
    [Id] int NOT NULL IDENTITY,
    [PartNumber] varchar(50) NOT NULL,
    [Type] varchar(50) NOT NULL,
    [Expiration] datetime2 NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_ProviderGeneratedLicenseList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ProviderGeneratedLicenseList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [ProviderGeneratedToolList] (
    [Id] int NOT NULL IDENTITY,
    [Name] varchar(50) NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [Rating] int NULL,
    [DescActive] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_ProviderGeneratedToolList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_GeneratedToolList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [ServerApiSecurityList] (
    [Id] int NOT NULL IDENTITY,
    [InheritedApiType] varchar(50) NOT NULL,
    [Name] varchar(50) NOT NULL,
    [Description] text NULL,
    [UrlSubPath] varchar(100) NULL,
    [WriteAllowedRoles] varchar(500) NULL,
    [ReadAllowedRoles] varchar(500) NULL,
    [WriteRestrictedAccess] bit NOT NULL,
    [ReadRestrictedAccess] bit NOT NULL,
    [RedirectPathOnError] varchar(100) NULL,
    [Active] bit NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_ServerApiSecurityList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ServerApiSecurityList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [ServerCorsDefAllowedOriginList] (
    [Id] int NOT NULL IDENTITY,
    [AllowedDomain] varchar(50) NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_ServerCorsDefAllowedOriginList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ServerCorsDefAllowedOriginList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [ServerHealthCheckTaskList] (
    [Id] int NOT NULL IDENTITY,
    [TaskName] varchar(100) NOT NULL,
    [Type] varchar(50) NOT NULL,
    [ServerDrive] varchar(50) NULL,
    [FolderPath] varchar(1024) NULL,
    [DbSqlConnection] varchar(1024) NULL,
    [IpAddress] varchar(20) NULL,
    [ServerUrlPath] varchar(1024) NULL,
    [UrlPath] varchar(1024) NULL,
    [SizeMB] int NULL,
    [Port] int NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [Timestamp] datetime2 NOT NULL,
    CONSTRAINT [PK_ServerHealthCheckTaskList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_HealthCheckTaskList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [ServerLiveDataMonitorList] (
    [Id] int NOT NULL IDENTITY,
    [RootPath] varchar(1024) NOT NULL,
    [FileExtensions] varchar(1024) NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_ServerLiveDataMonitorList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ServerLiveDataMonitorList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [ServerModuleAndServiceList] (
    [Id] int NOT NULL IDENTITY,
    [InheritedPageType] varchar(50) NOT NULL,
    [Name] varchar(50) NOT NULL,
    [InheritedLayoutType] varchar(50) NULL,
    [Description] text NULL,
    [UrlSubPath] varchar(100) NULL,
    [OptionalConfiguration] varchar(2048) NULL,
    [AllowedRoles] varchar(500) NULL,
    [RestrictedAccess] bit NOT NULL,
    [RedirectPathOnError] varchar(100) NULL,
    [CustomHtmlContent] text NULL,
    [IsLoginModule] bit NOT NULL,
    [PathSetAllowed] bit NOT NULL,
    [RestrictionSetAllowed] bit NOT NULL,
    [HtmlSetAllowed] bit NOT NULL,
    [RedirectSetAllowed] bit NOT NULL,
    [Active] bit NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_ServerModuleAndServiceList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ServerModuleAndServiceList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [ServerSettingList] (
    [Id] int NOT NULL IDENTITY,
    [InheritedGroupName] varchar(50) NOT NULL,
    [Type] varchar(50) NOT NULL,
    [Key] nvarchar(150) NOT NULL,
    [Value] nvarchar(150) NOT NULL,
    [Description] text NULL,
    [Link] varchar(1024) NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [Timestamp] datetime2 NOT NULL,
    CONSTRAINT [PK_ServerSettingList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ServerSettingList_SolutionUserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [ServerStaticOrMvcDefPathList] (
    [Id] int NOT NULL IDENTITY,
    [SystemName] varchar(50) NOT NULL,
    [WebRootSubPath] varchar(2048) NOT NULL,
    [AliasPath] varchar(255) NULL,
    [Description] text NULL,
    [IsBrowsable] bit NOT NULL,
    [IsStaticOrMvcDefOnly] bit NOT NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_ServerStaticOrMvcDefPathList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ServerStaticOrMvcDefPathList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [ServerToolTypeList] (
    [Id] int NOT NULL IDENTITY,
    [Sequence] int NOT NULL,
    [Name] varchar(50) NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_ServerToolTypeList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ServerToolTypeList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [SolutionFailList] (
    [Id] int NOT NULL IDENTITY,
    [Source] varchar(50) NOT NULL,
    [UserName] varchar(50) NULL,
    [LogLevel] varchar(20) NULL,
    [Message] text NOT NULL,
    [ImageName] varchar(150) NULL,
    [Image] varbinary(max) NULL,
    [AttachmentName] varchar(150) NULL,
    [Attachment] varbinary(max) NULL,
    [UserId] int NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SolutionFailList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_SolutionFailList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [SolutionLanguageList] (
    [Id] int NOT NULL IDENTITY,
    [SystemName] varchar(50) NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SolutionLanguageList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ServerLanguageList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [SolutionMessageTypeList] (
    [Id] int NOT NULL IDENTITY,
    [Name] varchar(50) NOT NULL,
    [Variables] text NULL,
    [AnswerAllowed] bit NOT NULL,
    [IsSystemOnly] bit NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SolutionMessageTypeList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_SolutionMessageTypeList_SolutionUserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [SolutionMixedEnumList] (
    [Id] int NOT NULL IDENTITY,
    [ItemsGroup] varchar(50) NOT NULL,
    [Name] varchar(50) NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SolutionMixedEnumList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_GlobalMixedEnumList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [SolutionMottoList] (
    [Id] int NOT NULL IDENTITY,
    [SystemName] varchar(50) NOT NULL,
    [UserId] int NOT NULL,
    [Timestamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SolutionMottoList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_MottoList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [SolutionOperationList] (
    [Id] int NOT NULL IDENTITY,
    [InheritedTypeName] varchar(50) NOT NULL,
    [Name] varchar(255) NOT NULL,
    [InputData] text NOT NULL,
    [InheritedResultTypeName] varchar(50) NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SolutionOperationList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_SolutionOperationList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [SolutionSchedulerList] (
    [Id] int NOT NULL IDENTITY,
    [InheritedGroupName] varchar(50) NOT NULL,
    [Name] varchar(255) NOT NULL,
    [Sequence] int NOT NULL,
    [Email] varchar(255) NULL,
    [Data] text NOT NULL,
    [Description] text NULL,
    [StartNowOnly] bit NOT NULL,
    [StartAt] datetime2 NULL,
    [FinishAt] datetime2 NULL,
    [Interval] int NOT NULL,
    [InheritedIntervalType] varchar(50) NOT NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SolutionSchedulerList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_GlobalAutoSchedulerList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [SolutionTaskList] (
    [Id] int NOT NULL IDENTITY,
    [InheritedTargetType] varchar(50) NOT NULL,
    [InheritedStatusType] varchar(50) NOT NULL,
    [Message] text NOT NULL,
    [Documentation] text NOT NULL,
    [ImageName] varchar(150) NULL,
    [Image] varbinary(max) NULL,
    [AttachmentName] varchar(150) NULL,
    [Attachment] varbinary(max) NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SolutionTaskList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_SolutionTaskList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [SolutionWebsiteList] (
    [Id] int NOT NULL IDENTITY,
    [WebsiteName] varchar(50) NOT NULL,
    [Description] text NULL,
    [MinimalReadAccessValue] int NOT NULL,
    [MinimalWriteAccessValue] int NOT NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SolutionWebsiteList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_SolutionWebsiteList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [SystemCustomPageList] (
    [Id] int NOT NULL IDENTITY,
    [InheritedFormType] varchar(50) NOT NULL,
    [PageName] varchar(250) NOT NULL,
    [Description] varchar(max) NULL,
    [IsInteractAgenda] bit NOT NULL,
    [IsSystemUrl] bit NOT NULL,
    [IsServerUrl] bit NOT NULL,
    [IsOwnServerUrl] bit NOT NULL,
    [DevModeEnabled] bit NOT NULL,
    [ShowHelpTab] bit NOT NULL,
    [HelpTabShowOnly] bit NOT NULL,
    [InheritedHelpTabSourceType] varchar(50) NULL,
    [StartupUrl] varchar(512) NOT NULL,
    [HelpTabUrl] varchar(512) NULL,
    [DBTableName] varchar(255) NULL,
    [ColumnName] varchar(255) NULL,
    [UseIOOverDom] bit NOT NULL,
    [InheritedSetName] varchar(50) NULL,
    [DOMHtmlElementName] varchar(255) NULL,
    [SetWebDataJScriptCmd] varchar(1024) NULL,
    [GetWebDataJScriptCmd] varchar(1024) NULL,
    [StartupSubFolder] varchar(150) NULL,
    [StartupCommand] varchar(500) NULL,
    [Active] bit NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SystemCustomPageList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_SystemCustomPageList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [SystemDocumentTypeList] (
    [Id] int NOT NULL IDENTITY,
    [SystemName] varchar(50) NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [Timestamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SystemDocumentTypeList] PRIMARY KEY ([Id]),
    CONSTRAINT [AK_SystemDocumentTypeList_SystemName] UNIQUE ([SystemName]),
    CONSTRAINT [FK_DocumentTypeList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [SystemGroupMenuList] (
    [Id] int NOT NULL IDENTITY,
    [SystemName] varchar(50) NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SystemGroupMenuList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_SystemGroupMenuList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [SystemIgnoredExceptionList] (
    [Id] int NOT NULL IDENTITY,
    [ErrorNumber] varchar(50) NOT NULL,
    [Description] text NULL,
    [Active] bit NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SystemIgnoredExceptionList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_IgnoredExceptionList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [SystemModuleList] (
    [Id] int NOT NULL IDENTITY,
    [ModuleType] varchar(50) NOT NULL,
    [Name] varchar(255) NOT NULL,
    [FolderPath] varchar(255) NOT NULL,
    [FileName] varchar(255) NOT NULL,
    [StartupCommand] varchar(255) NULL,
    [Description] text NULL,
    [ForegroundColor] varchar(50) NOT NULL,
    [BackgroundColor] varchar(50) NOT NULL,
    [IconName] varchar(50) NOT NULL,
    [IconColor] varchar(50) NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SystemModuleList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_SystemModuleList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [SystemParameterList] (
    [Id] int NOT NULL IDENTITY,
    [UserId] int NULL,
    [SystemName] varchar(50) NOT NULL,
    [Value] text NOT NULL,
    [Type] varchar(50) NOT NULL,
    [Description] text NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SystemParameterList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ParameterList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id]) ON DELETE CASCADE
);
GO


CREATE TABLE [SystemReportList] (
    [Id] int NOT NULL IDENTITY,
    [PageName] varchar(50) NOT NULL,
    [SystemName] varchar(50) NOT NULL,
    [JoinedId] bit NOT NULL,
    [Description] text NULL,
    [ReportPath] varchar(500) NULL,
    [MimeType] varchar(100) NOT NULL,
    [File] varbinary(max) NOT NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [Timestamp] datetime2 NOT NULL,
    [Default] bit NOT NULL,
    CONSTRAINT [PK_SystemReportList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ReportList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [SystemSvgIconList] (
    [Id] int NOT NULL IDENTITY,
    [Name] varchar(50) NOT NULL,
    [SvgIconPath] varchar(4096) NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SystemSvgIconList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_SvgIconList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [SystemTranslationList] (
    [Id] int NOT NULL IDENTITY,
    [SystemName] varchar(50) NOT NULL,
    [DescriptionCz] varchar(500) NULL,
    [DescriptionEn] varchar(500) NULL,
    [UserId] int NULL,
    [Timestamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SystemTranslationList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_SystemTranslationList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [TemplateList] (
    [Id] int NOT NULL IDENTITY,
    [GroupId] int NOT NULL,
    [Sequence] int NOT NULL,
    [Name] varchar(50) NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [Default] bit NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_TemplateList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_TemplateList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id]),
    CONSTRAINT [FK_TemplateList_UserRoleList] FOREIGN KEY ([GroupId]) REFERENCES [SolutionUserRoleList] ([Id])
);
GO


CREATE TABLE [WebBannedIpAddressList] (
    [Id] int NOT NULL IDENTITY,
    [IpAddress] varchar(50) NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_WebBannedIpAddressList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_WebBannedUserList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [WebCodeLibraryList] (
    [Id] int NOT NULL IDENTITY,
    [InheritedCodeType] varchar(50) NULL,
    [Name] varchar(50) NOT NULL,
    [Description] varchar(2096) NULL,
    [Content] varchar(max) NOT NULL,
    [IsCompletion] bit NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_WebCodeLibraryList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_WebCodeLibraryList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [WebConfiguratorList] (
    [Id] int NOT NULL IDENTITY,
    [Name] varchar(50) NOT NULL,
    [IsStartupPage] bit NOT NULL,
    [Description] varchar(max) NULL,
    [HtmlContent] varchar(max) NULL,
    [ServerUrl] varchar(500) NULL,
    [AuthRole] varchar(200) NULL,
    [AuthIgnore] bit NOT NULL,
    [AuthRedirect] bit NOT NULL,
    [AuthRedirectUrl] varchar(500) NULL,
    [IncludedIdList] varchar(500) NULL,
    [Active] bit NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_WebConfiguratorList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_WebConfiguratorList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [WebCoreFileList] (
    [Id] int NOT NULL IDENTITY,
    [SpecificationType] varchar(50) NOT NULL,
    [Sequence] int NOT NULL,
    [MetroPath] varchar(100) NOT NULL,
    [FileName] varchar(50) NOT NULL,
    [Description] text NULL,
    [RewriteLowerLevel] bit NOT NULL,
    [GuestFileContent] text NULL,
    [UserFileContent] text NULL,
    [AdminFileContent] text NULL,
    [ProviderContent] text NULL,
    [IsUniquePath] bit NOT NULL,
    [AutoUpdateOnSave] bit NOT NULL,
    [Active] bit NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_WebCoreFileList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_WebCoreFileList_GlobalUserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [WebDeveloperNewsList] (
    [Id] int NOT NULL IDENTITY,
    [Title] varchar(50) NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_WebDeveloperNewsList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_WebDeveloperNewsList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [WebDocumentationCodeLibraryList] (
    [Id] int NOT NULL IDENTITY,
    [Name] varchar(50) NOT NULL,
    [Description] varchar(2096) NULL,
    [MdContent] text NOT NULL,
    [HtmlContent] text NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_WebDocumentationCodeLibraryList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_WebDocumentationCodeLibraryList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [WebDocumentationList] (
    [Id] int NOT NULL IDENTITY,
    [Name] varchar(150) NOT NULL,
    [Sequence] int NOT NULL,
    [Description] text NULL,
    [MdContent] text NOT NULL,
    [HtmlContent] text NOT NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [AutoVersion] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_WebDocumentationList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_WebDocumentationList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [WebGlobalPageBlockList] (
    [Id] int NOT NULL IDENTITY,
    [PagePartType] varchar(50) NOT NULL,
    [Sequence] int NOT NULL,
    [Name] varchar(50) NOT NULL,
    [Description] text NULL,
    [RewriteLowerLevel] bit NOT NULL,
    [GuestHtmlContent] text NULL,
    [UserHtmlContent] text NULL,
    [AdminHtmlContent] text NULL,
    [ProviderHtmlContent] text NULL,
    [Active] bit NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_WebGlobalPageBlockList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_WebGlobalBodyBlockList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [WebGroupMenuList] (
    [Id] int NOT NULL IDENTITY,
    [Sequence] int NOT NULL,
    [Onclick] varchar(255) NULL,
    [Name] varchar(50) NOT NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_WebGroupMenuList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_WebGroupMenuList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [WebMessagesList] (
    [Id] int NOT NULL IDENTITY,
    [Name] varchar(50) NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_WebMessagesList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_WebMessagesList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [WebSettingList] (
    [Id] int NOT NULL IDENTITY,
    [Key] nvarchar(50) NOT NULL,
    [Value] text NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [Timestamp] datetime2 NOT NULL,
    CONSTRAINT [PK_WebSettingList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_WebSettingList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id]) ON DELETE CASCADE
);
GO


CREATE TABLE [WebUserSettingList] (
    [Id] int NOT NULL IDENTITY,
    [Key] nvarchar(50) NOT NULL,
    [Value] nvarchar(250) NOT NULL,
    [UserId] int NOT NULL,
    [Timestamp] datetime2 NOT NULL,
    CONSTRAINT [PK_WebUserSettingList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_WebUserSettingList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id]) ON DELETE CASCADE
);
GO


CREATE TABLE [BusinessExchangeRateList] (
    [Id] int NOT NULL IDENTITY,
    [CurrencyId] int NOT NULL,
    [Value] decimal(10,2) NOT NULL,
    [ValidFrom] date NULL,
    [ValidTo] date NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BusinessExchangeRateList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_CourseList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id]),
    CONSTRAINT [FK_ExchangeRateList_CurrencyList] FOREIGN KEY ([CurrencyId]) REFERENCES [BasicCurrencyList] ([Id])
);
GO


CREATE TABLE [BusinessIncomingOrderList] (
    [Id] int NOT NULL IDENTITY,
    [DocumentNumber] varchar(20) NOT NULL,
    [Supplier] varchar(512) NOT NULL,
    [Customer] varchar(512) NOT NULL,
    [Storned] bit NOT NULL,
    [TotalCurrencyId] int NOT NULL,
    [Description] text NULL,
    [CustomerOrderNumber] varchar(50) NULL,
    [TotalPriceWithVat] numeric(10,2) NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BusinessIncomingOrderList] PRIMARY KEY ([Id]),
    CONSTRAINT [AK_BusinessIncomingOrderList_DocumentNumber] UNIQUE ([DocumentNumber]),
    CONSTRAINT [FK_IncomingOrderList_CurrencyList] FOREIGN KEY ([TotalCurrencyId]) REFERENCES [BasicCurrencyList] ([Id]),
    CONSTRAINT [FK_IncomingOrderList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [BusinessOfferList] (
    [Id] int NOT NULL IDENTITY,
    [DocumentNumber] varchar(20) NOT NULL,
    [Supplier] varchar(512) NOT NULL,
    [Customer] varchar(512) NOT NULL,
    [OfferValidity] int NOT NULL,
    [Storned] bit NOT NULL,
    [TotalCurrencyId] int NOT NULL,
    [Description] text NULL,
    [TotalPriceWithVat] numeric(10,2) NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BusinessOfferList] PRIMARY KEY ([Id]),
    CONSTRAINT [AK_BusinessOfferList_DocumentNumber] UNIQUE ([DocumentNumber]),
    CONSTRAINT [FK_OfferList_CurrencyList1] FOREIGN KEY ([TotalCurrencyId]) REFERENCES [BasicCurrencyList] ([Id]),
    CONSTRAINT [FK_OfferList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [BusinessOutgoingOrderList] (
    [Id] int NOT NULL IDENTITY,
    [DocumentNumber] varchar(20) NOT NULL,
    [Customer] varchar(512) NOT NULL,
    [Supplier] varchar(512) NOT NULL,
    [Storned] bit NOT NULL,
    [TotalCurrencyId] int NOT NULL,
    [Description] text NULL,
    [TotalPriceWithVat] numeric(10,2) NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BusinessOutgoingOrderList] PRIMARY KEY ([Id]),
    CONSTRAINT [AK_BusinessOutgoingOrderList_DocumentNumber] UNIQUE ([DocumentNumber]),
    CONSTRAINT [FK_OutgoingOrderList_CurrencyList] FOREIGN KEY ([TotalCurrencyId]) REFERENCES [BasicCurrencyList] ([Id]),
    CONSTRAINT [FK_OutgoingOrderList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [BasicItemList] (
    [Id] int NOT NULL IDENTITY,
    [PartNumber] varchar(50) NOT NULL,
    [Name] varchar(150) NOT NULL,
    [Description] text NULL,
    [Unit] varchar(10) NOT NULL,
    [Price] numeric(10,2) NOT NULL,
    [VatId] int NOT NULL,
    [CurrencyId] int NOT NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BasicItemList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ItemList_CurrencyList] FOREIGN KEY ([CurrencyId]) REFERENCES [BasicCurrencyList] ([Id]),
    CONSTRAINT [FK_ItemList_UnitList] FOREIGN KEY ([Unit]) REFERENCES [BasicUnitList] ([Name]),
    CONSTRAINT [FK_ItemList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id]),
    CONSTRAINT [FK_ItemList_VatList] FOREIGN KEY ([VatId]) REFERENCES [BasicVatList] ([Id])
);
GO


CREATE TABLE [BusinessIncomingInvoiceList] (
    [Id] int NOT NULL IDENTITY,
    [DocumentNumber] varchar(20) NOT NULL,
    [Supplier] varchar(512) NOT NULL,
    [Customer] varchar(512) NOT NULL,
    [IssueDate] datetime2 NOT NULL,
    [TaxDate] datetime2 NOT NULL,
    [MaturityDate] datetime2 NOT NULL,
    [PaymentMethodId] int NOT NULL,
    [MaturityId] int NOT NULL,
    [OrderNumber] varchar(50) NULL,
    [Storned] bit NOT NULL,
    [PaymentStatusId] int NOT NULL,
    [TotalCurrencyId] int NOT NULL,
    [Description] text NULL,
    [TotalPriceWithVat] numeric(10,2) NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BusinessIncomingInvoiceList] PRIMARY KEY ([Id]),
    CONSTRAINT [AK_BusinessIncomingInvoiceList_DocumentNumber] UNIQUE ([DocumentNumber]),
    CONSTRAINT [FK_IncomingInvoiceList_CurrencyList] FOREIGN KEY ([TotalCurrencyId]) REFERENCES [BasicCurrencyList] ([Id]),
    CONSTRAINT [FK_IncomingInvoiceList_MaturityList] FOREIGN KEY ([MaturityId]) REFERENCES [BusinessMaturityList] ([Id]),
    CONSTRAINT [FK_IncomingInvoiceList_PaymentMethodList] FOREIGN KEY ([PaymentMethodId]) REFERENCES [BusinessPaymentMethodList] ([Id]),
    CONSTRAINT [FK_IncomingInvoiceList_PaymentStatusList] FOREIGN KEY ([PaymentStatusId]) REFERENCES [BusinessPaymentStatusList] ([Id]),
    CONSTRAINT [FK_IncomingInvoiceList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [DocSrvDocTemplateList] (
    [Id] int NOT NULL IDENTITY,
    [InheritedCodeType] varchar(50) NOT NULL,
    [GroupId] int NOT NULL,
    [Sequence] int NOT NULL,
    [Name] varchar(50) NOT NULL,
    [Description] text NULL,
    [Template] varchar(max) NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_DocSrvDocTemplateList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_DocSrvDocTemplateList_DocSrvDocumentationGroupList] FOREIGN KEY ([GroupId]) REFERENCES [DocSrvDocumentationGroupList] ([Id]),
    CONSTRAINT [FK_DocSrvDocTemplateList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [DocSrvDocumentationList] (
    [Id] int NOT NULL IDENTITY,
    [DocumentationGroupId] int NOT NULL,
    [Name] varchar(150) NOT NULL,
    [Sequence] int NOT NULL,
    [Description] text NULL,
    [MdContent] text NOT NULL,
    [HtmlContent] text NOT NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [AutoVersion] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_DocSrvDocumentationList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_DocumentationList_DocumentationGroupList] FOREIGN KEY ([DocumentationGroupId]) REFERENCES [DocSrvDocumentationGroupList] ([Id]),
    CONSTRAINT [FK_DocumentationList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [GithubSrvTeamRepositoryRoleList] (
    [Id] int NOT NULL IDENTITY,
    [TeamId] int NOT NULL,
    [RepositoryId] int NOT NULL,
    [AllowRead] bit NOT NULL,
    [AllowWrite] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_GithubSrvTeamRepositoryRoleList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_GithubSrvTeamRepositoryRoleList_RepositoryId] FOREIGN KEY ([RepositoryId]) REFERENCES [GithubSrvRepositoryList] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_GithubSrvTeamRepositoryRoleList_TeamId] FOREIGN KEY ([TeamId]) REFERENCES [GithubSrvTeamList] ([Id]) ON DELETE CASCADE
);
GO


CREATE TABLE [ProdGuidWorkList] (
    [Id] int NOT NULL IDENTITY,
    [Date] datetime2 NOT NULL,
    [PersonalNumber] int NOT NULL,
    [WorkPlace] int NOT NULL,
    [OperationNumber] int NOT NULL,
    [WorkTime] time NOT NULL,
    [Pcs] int NOT NULL,
    [Amount] numeric(10,2) NOT NULL,
    [WorkPower] numeric(10,2) NOT NULL,
    [UserId] int NOT NULL,
    [Timestamp] datetime2 NOT NULL,
    CONSTRAINT [PK_ProdGuidWorkList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ProdGuidWorkList_ProdGuidPersonList] FOREIGN KEY ([PersonalNumber]) REFERENCES [ProdGuidPersonList] ([PersonalNumber]),
    CONSTRAINT [FK_ProdGuidWorkList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [ServerToolPanelDefinitionList] (
    [Id] int NOT NULL IDENTITY,
    [ToolTypeId] int NOT NULL,
    [SystemName] varchar(50) NOT NULL,
    [Type] varchar(50) NOT NULL,
    [Command] varchar(500) NOT NULL,
    [IconName] varchar(50) NOT NULL,
    [IconColor] varchar(50) NOT NULL,
    [BackgroundColor] varchar(50) NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [Timestamp] datetime2 NOT NULL,
    CONSTRAINT [PK_ServerToolPanelDefinitionList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ServerToolPanelDefinitionList_ToolTypeList] FOREIGN KEY ([ToolTypeId]) REFERENCES [ServerToolTypeList] ([Id]),
    CONSTRAINT [FK_ServerToolPanelDefinitionList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [SolutionEmailTemplateList] (
    [Id] int NOT NULL IDENTITY,
    [SystemLanguageId] int NOT NULL,
    [TemplateName] varchar(50) NOT NULL,
    [Variables] text NOT NULL,
    [Subject] varchar(255) NOT NULL,
    [Email] text NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SolutionEmailTemplateList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_EmailTemplateList_SystemLanguageList] FOREIGN KEY ([SystemLanguageId]) REFERENCES [SolutionLanguageList] ([Id]),
    CONSTRAINT [FK_EmailTemplateList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [SolutionMessageModuleList] (
    [Id] int NOT NULL IDENTITY,
    [Level] int NOT NULL,
    [MessageParentId] int NULL,
    [MessageTypeId] int NOT NULL,
    [Subject] varchar(150) NOT NULL,
    [HtmlMessage] text NOT NULL,
    [Shown] bit NOT NULL,
    [Archived] bit NOT NULL,
    [IsSystemMessage] bit NOT NULL,
    [Published] bit NOT NULL,
    [FromUserId] int NULL,
    [ToUserId] int NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SolutionMessageModuleList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_SolutionMessageModuleList_SolutionMessageModuleListParent] FOREIGN KEY ([MessageParentId]) REFERENCES [SolutionMessageModuleList] ([Id]),
    CONSTRAINT [FK_SolutionMessageModuleList_SolutionMessageTypeList] FOREIGN KEY ([MessageTypeId]) REFERENCES [SolutionMessageTypeList] ([Id]),
    CONSTRAINT [FK_SolutionMessageModuleList_SolutionUserListFrom] FOREIGN KEY ([FromUserId]) REFERENCES [SolutionUserList] ([Id]),
    CONSTRAINT [FK_SolutionMessageModuleList_SolutionUserListTo] FOREIGN KEY ([ToUserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [SolutionSchedulerProcessList] (
    [Id] int NOT NULL IDENTITY,
    [ScheduledTaskId] int NOT NULL,
    [ProcessData] text NULL,
    [ProcessLog] text NULL,
    [ProcessCrashed] bit NOT NULL,
    [ProcessCompleted] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SolutionSchedulerProcessList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_SolutionSchedulerProcessList_SolutionSchedulerList] FOREIGN KEY ([ScheduledTaskId]) REFERENCES [SolutionSchedulerList] ([Id]) ON DELETE CASCADE
);
GO


CREATE TABLE [SolutionStaticFilePathList] (
    [Id] int NOT NULL IDENTITY,
    [WebsiteId] int NOT NULL,
    [Path] varchar(512) NOT NULL,
    [Size] int NOT NULL,
    [Active] bit NOT NULL,
    [UserId] int NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SolutionStaticFilePathList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_SolutionStaticFilePathList_SolutionWebsiteList] FOREIGN KEY ([WebsiteId]) REFERENCES [SolutionWebsiteList] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_SolutionStaticFilePathList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [SystemDocumentAdviceList] (
    [Id] int NOT NULL IDENTITY,
    [BranchId] int NOT NULL,
    [DocumentType] varchar(50) NOT NULL,
    [Prefix] varchar(10) NOT NULL,
    [Number] varchar(10) NOT NULL,
    [StartDate] date NOT NULL,
    [EndDate] date NOT NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SystemDocumentAdviceList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_DocumentAdvice_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id]),
    CONSTRAINT [FK_DocumentAdviceList_BranchList] FOREIGN KEY ([BranchId]) REFERENCES [BusinessBranchList] ([Id]),
    CONSTRAINT [FK_DocumentAdviceList_DocumentTypeList] FOREIGN KEY ([DocumentType]) REFERENCES [SystemDocumentTypeList] ([SystemName])
);
GO


CREATE TABLE [SystemMenuList] (
    [Id] int NOT NULL IDENTITY,
    [MenuType] varchar(50) NOT NULL,
    [GroupId] int NOT NULL,
    [FormPageName] varchar(250) NOT NULL,
    [AccessRole] varchar(1024) NOT NULL,
    [Description] text NULL,
    [UserId] int NOT NULL,
    [NotShowInMenu] bit NOT NULL,
    [Active] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SystemMenuList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_SystemMenuList_SystemGroupMenuList] FOREIGN KEY ([GroupId]) REFERENCES [SystemGroupMenuList] ([Id]),
    CONSTRAINT [FK_SystemMenuList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [WebMenuList] (
    [Id] int NOT NULL IDENTITY,
    [GroupId] int NOT NULL,
    [Sequence] int NOT NULL,
    [Name] varchar(50) NOT NULL,
    [MenuClass] varchar(100) NULL,
    [Description] varchar(2096) NULL,
    [HtmlContent] text NOT NULL,
    [UserMenu] bit NOT NULL,
    [AdminMenu] bit NOT NULL,
    [UserIPAddress] varchar(50) NULL,
    [UserId] int NOT NULL,
    [Active] bit NOT NULL,
    [Default] bit NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_WebMenuList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_WebMenuList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id]),
    CONSTRAINT [FK_WebMenuList_WebGroupMenuList] FOREIGN KEY ([GroupId]) REFERENCES [WebGroupMenuList] ([Id])
);
GO


CREATE TABLE [BusinessIncomingOrderSupportList] (
    [Id] int NOT NULL IDENTITY,
    [DocumentNumber] varchar(20) NOT NULL,
    [PartNumber] varchar(50) NULL,
    [Name] varchar(150) NOT NULL,
    [Unit] varchar(10) NOT NULL,
    [PcsPrice] numeric(10,2) NOT NULL,
    [Count] numeric(10,2) NOT NULL,
    [TotalPrice] numeric(10,2) NOT NULL,
    [Vat] numeric(10,2) NOT NULL,
    [TotalPriceWithVat] numeric(10,2) NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BusinessIncomingOrderSupportList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_IncomingOrderItemList_IncomingOrderList] FOREIGN KEY ([DocumentNumber]) REFERENCES [BusinessIncomingOrderList] ([DocumentNumber]) ON DELETE CASCADE,
    CONSTRAINT [FK_IncomingOrderItemList_UnitList] FOREIGN KEY ([Unit]) REFERENCES [BasicUnitList] ([Name]),
    CONSTRAINT [FK_IncomingOrderItemList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [BusinessOfferSupportList] (
    [Id] int NOT NULL IDENTITY,
    [DocumentNumber] varchar(20) NOT NULL,
    [PartNumber] varchar(50) NULL,
    [Name] varchar(150) NOT NULL,
    [Unit] varchar(10) NOT NULL,
    [PcsPrice] numeric(10,2) NOT NULL,
    [Count] numeric(10,2) NOT NULL,
    [TotalPrice] numeric(10,2) NOT NULL,
    [Vat] numeric(10,2) NOT NULL,
    [TotalPriceWithVat] numeric(10,2) NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BusinessOfferSupportList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_OfferItemList_OfferList] FOREIGN KEY ([DocumentNumber]) REFERENCES [BusinessOfferList] ([DocumentNumber]) ON DELETE CASCADE,
    CONSTRAINT [FK_OfferItemList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [BusinessOutgoingOrderSupportList] (
    [Id] int NOT NULL IDENTITY,
    [DocumentNumber] varchar(20) NOT NULL,
    [PartNumber] varchar(50) NULL,
    [Name] varchar(150) NOT NULL,
    [Unit] varchar(10) NOT NULL,
    [PcsPrice] numeric(10,2) NOT NULL,
    [Count] numeric(10,2) NOT NULL,
    [TotalPrice] numeric(10,2) NOT NULL,
    [Vat] numeric(10,2) NOT NULL,
    [TotalPriceWithVat] numeric(10,2) NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BusinessOutgoingOrderSupportList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_OutgoingOrderItemList_OutgoingOrderList] FOREIGN KEY ([DocumentNumber]) REFERENCES [BusinessOutgoingOrderList] ([DocumentNumber]) ON DELETE CASCADE,
    CONSTRAINT [FK_OutgoingOrderItemList_UnitList] FOREIGN KEY ([Unit]) REFERENCES [BasicUnitList] ([Name]),
    CONSTRAINT [FK_OutgoingOrderItemList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [LicSrvLicenseAlgorithmList] (
    [Id] int NOT NULL IDENTITY,
    [AddressId] int NOT NULL,
    [ItemId] int NOT NULL,
    [Name] varchar(30) NOT NULL,
    [ValidFrom] date NULL,
    [ValidTo] date NULL,
    [Algorithm] varchar(2000) NOT NULL,
    [Description] text NULL,
    [LimitActive] bit NOT NULL,
    [ActivationLimit] int NULL,
    [UsedCount] int NOT NULL,
    [Active] bit NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_LicSrvLicenseAlgorithmList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_LicenseAlgorithmList_AddressList] FOREIGN KEY ([AddressId]) REFERENCES [BusinessAddressList] ([Id]),
    CONSTRAINT [FK_LicenseAlgorithmList_ItemList] FOREIGN KEY ([ItemId]) REFERENCES [BasicItemList] ([Id]),
    CONSTRAINT [FK_LicenseAlgorithmList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [LicSrvUsedLicenseList] (
    [Id] int NOT NULL IDENTITY,
    [AlgorithmName] varchar(30) NOT NULL,
    [PartNumber] varchar(50) NOT NULL,
    [UnlockCode] varchar(50) NOT NULL,
    [AddressId] int NOT NULL,
    [ItemId] int NOT NULL,
    [License] varchar(50) NOT NULL,
    [ActivateDate] datetime2 NOT NULL,
    [IpAddress] varchar(50) NOT NULL,
    CONSTRAINT [PK_LicSrvUsedLicenseList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_UsedLicenseList_AddressList] FOREIGN KEY ([AddressId]) REFERENCES [BusinessAddressList] ([Id]),
    CONSTRAINT [FK_UsedLicenseList_ItemList] FOREIGN KEY ([ItemId]) REFERENCES [BasicItemList] ([Id])
);
GO


CREATE TABLE [BusinessIncomingInvoiceSupportList] (
    [Id] int NOT NULL IDENTITY,
    [DocumentNumber] varchar(20) NOT NULL,
    [PartNumber] varchar(50) NULL,
    [Name] varchar(150) NOT NULL,
    [Unit] varchar(10) NOT NULL,
    [PcsPrice] numeric(10,2) NOT NULL,
    [Count] numeric(10,2) NOT NULL,
    [TotalPrice] numeric(10,2) NOT NULL,
    [Vat] numeric(10,2) NOT NULL,
    [TotalPriceWithVat] numeric(10,2) NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BusinessIncomingInvoiceSupportList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_IncomingInvoiceItemList_IncomingInvoiceList] FOREIGN KEY ([DocumentNumber]) REFERENCES [BusinessIncomingInvoiceList] ([DocumentNumber]) ON DELETE CASCADE,
    CONSTRAINT [FK_IncomingInvoiceItemList_UnitList] FOREIGN KEY ([Unit]) REFERENCES [BasicUnitList] ([Name]),
    CONSTRAINT [FK_IncomingInvoiceItemList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [SolutionStaticFileList] (
    [Id] int NOT NULL IDENTITY,
    [WebsiteId] int NOT NULL,
    [StaticPathId] int NOT NULL,
    [FileNamePath] varchar(512) NOT NULL,
    [MimeType] varchar(150) NOT NULL,
    [Content] varbinary(max) NULL,
    [Active] bit NOT NULL,
    [UserId] int NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_SolutionStaticFileList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_SolutionStaticFileList_SolutionStaticFilePathList] FOREIGN KEY ([StaticPathId]) REFERENCES [SolutionStaticFilePathList] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_SolutionStaticFileList_SolutionWebsiteList] FOREIGN KEY ([WebsiteId]) REFERENCES [SolutionWebsiteList] ([Id]),
    CONSTRAINT [FK_SolutionStaticFileList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [BusinessCreditNoteList] (
    [Id] int NOT NULL IDENTITY,
    [DocumentNumber] varchar(20) NOT NULL,
    [Supplier] varchar(512) NOT NULL,
    [Customer] varchar(512) NOT NULL,
    [IssueDate] datetime2 NOT NULL,
    [InvoiceNumber] varchar(20) NULL,
    [Storned] bit NOT NULL,
    [TotalCurrencyId] int NOT NULL,
    [Description] text NULL,
    [TotalPriceWithVat] numeric(10,2) NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BusinessCreditNoteList] PRIMARY KEY ([Id]),
    CONSTRAINT [AK_BusinessCreditNoteList_DocumentNumber] UNIQUE ([DocumentNumber]),
    CONSTRAINT [FK_CreditNoteList_CurrencyList] FOREIGN KEY ([TotalCurrencyId]) REFERENCES [BasicCurrencyList] ([Id]),
    CONSTRAINT [FK_CreditNoteList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [BusinessCreditNoteSupportList] (
    [Id] int NOT NULL IDENTITY,
    [DocumentNumber] varchar(20) NOT NULL,
    [PartNumber] varchar(50) NULL,
    [Name] varchar(150) NOT NULL,
    [Unit] varchar(10) NOT NULL,
    [PcsPrice] numeric(10,2) NOT NULL,
    [Count] numeric(10,2) NOT NULL,
    [TotalPrice] numeric(10,2) NOT NULL,
    [Vat] numeric(10,2) NOT NULL,
    [TotalPriceWithVat] numeric(10,2) NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BusinessCreditNoteSupportList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_CreditNoteItemList_CreditNoteList] FOREIGN KEY ([DocumentNumber]) REFERENCES [BusinessCreditNoteList] ([DocumentNumber]) ON DELETE CASCADE,
    CONSTRAINT [FK_CreditNoteItemList_UnitList] FOREIGN KEY ([Unit]) REFERENCES [BasicUnitList] ([Name]),
    CONSTRAINT [FK_CreditNoteItemList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [BusinessOutgoingInvoiceList] (
    [Id] int NOT NULL IDENTITY,
    [DocumentNumber] varchar(20) NOT NULL,
    [Supplier] varchar(512) NOT NULL,
    [Customer] varchar(512) NOT NULL,
    [IssueDate] datetime2 NOT NULL,
    [TaxDate] datetime2 NOT NULL,
    [MaturityDate] datetime2 NOT NULL,
    [PaymentMethodId] int NOT NULL,
    [MaturityId] int NOT NULL,
    [OrderNumber] varchar(50) NULL,
    [Storned] bit NOT NULL,
    [PaymentStatusId] int NOT NULL,
    [TotalCurrencyId] int NOT NULL,
    [Description] text NULL,
    [TotalPriceWithVat] numeric(10,2) NOT NULL,
    [ReceiptId] int NULL,
    [CreditNoteId] int NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BusinessOutgoingInvoiceList] PRIMARY KEY ([Id]),
    CONSTRAINT [AK_BusinessOutgoingInvoiceList_DocumentNumber] UNIQUE ([DocumentNumber]),
    CONSTRAINT [FK_OutgoingInvoiceList_CreditNoteList] FOREIGN KEY ([CreditNoteId]) REFERENCES [BusinessCreditNoteList] ([Id]) ON DELETE SET NULL,
    CONSTRAINT [FK_OutgoingInvoiceList_CurrencyList] FOREIGN KEY ([TotalCurrencyId]) REFERENCES [BasicCurrencyList] ([Id]),
    CONSTRAINT [FK_OutgoingInvoiceList_MaturityList] FOREIGN KEY ([MaturityId]) REFERENCES [BusinessMaturityList] ([Id]),
    CONSTRAINT [FK_OutgoingInvoiceList_PaymentMethodList] FOREIGN KEY ([PaymentMethodId]) REFERENCES [BusinessPaymentMethodList] ([Id]),
    CONSTRAINT [FK_OutgoingInvoiceList_PaymentStatusList] FOREIGN KEY ([PaymentStatusId]) REFERENCES [BusinessPaymentStatusList] ([Id]),
    CONSTRAINT [FK_OutgoingInvoiceList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [BusinessOutgoingInvoiceSupportList] (
    [Id] int NOT NULL IDENTITY,
    [DocumentNumber] varchar(20) NOT NULL,
    [PartNumber] varchar(50) NULL,
    [Name] varchar(150) NOT NULL,
    [Unit] varchar(10) NOT NULL,
    [PcsPrice] numeric(10,2) NOT NULL,
    [Count] numeric(10,2) NOT NULL,
    [TotalPrice] numeric(10,2) NOT NULL,
    [Vat] numeric(10,2) NOT NULL,
    [TotalPriceWithVat] numeric(10,2) NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BusinessOutgoingInvoiceSupportList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_OutgoingInvoiceItemList_OutgoingInvoiceList] FOREIGN KEY ([DocumentNumber]) REFERENCES [BusinessOutgoingInvoiceList] ([DocumentNumber]) ON DELETE CASCADE,
    CONSTRAINT [FK_OutgoingInvoiceItemList_UnitList] FOREIGN KEY ([Unit]) REFERENCES [BasicUnitList] ([Name]),
    CONSTRAINT [FK_OutgoingInvoiceItemList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [BusinessReceiptList] (
    [Id] int NOT NULL IDENTITY,
    [DocumentNumber] varchar(20) NOT NULL,
    [InvoiceNumber] varchar(20) NULL,
    [Supplier] varchar(512) NOT NULL,
    [Customer] varchar(512) NOT NULL,
    [IssueDate] datetime2 NOT NULL,
    [Storned] bit NOT NULL,
    [TotalCurrencyId] int NOT NULL,
    [Description] text NULL,
    [TotalPriceWithVat] numeric(10,2) NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BusinessReceiptList] PRIMARY KEY ([Id]),
    CONSTRAINT [AK_BusinessReceiptList_DocumentNumber] UNIQUE ([DocumentNumber]),
    CONSTRAINT [FK_ReceiptList_CurrencyList] FOREIGN KEY ([TotalCurrencyId]) REFERENCES [BasicCurrencyList] ([Id]),
    CONSTRAINT [FK_ReceiptList_OutgoingInvoiceList] FOREIGN KEY ([InvoiceNumber]) REFERENCES [BusinessOutgoingInvoiceList] ([DocumentNumber]) ON DELETE SET NULL,
    CONSTRAINT [FK_ReceiptList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE TABLE [BusinessReceiptSupportList] (
    [Id] int NOT NULL IDENTITY,
    [DocumentNumber] varchar(20) NOT NULL,
    [PartNumber] varchar(50) NULL,
    [Name] varchar(150) NOT NULL,
    [Unit] varchar(10) NOT NULL,
    [PcsPrice] numeric(10,2) NOT NULL,
    [Count] numeric(10,2) NOT NULL,
    [TotalPrice] numeric(10,2) NOT NULL,
    [Vat] numeric(10,2) NOT NULL,
    [TotalPriceWithVat] numeric(10,2) NOT NULL,
    [UserId] int NOT NULL,
    [TimeStamp] datetime2 NOT NULL,
    CONSTRAINT [PK_BusinessReceiptSupportList] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_ReceiptItemList_ReceiptList] FOREIGN KEY ([DocumentNumber]) REFERENCES [BusinessReceiptList] ([DocumentNumber]) ON DELETE CASCADE,
    CONSTRAINT [FK_ReceiptItemList_UnitList] FOREIGN KEY ([Unit]) REFERENCES [BasicUnitList] ([Name]),
    CONSTRAINT [FK_ReceiptItemList_UserList] FOREIGN KEY ([UserId]) REFERENCES [SolutionUserList] ([Id])
);
GO


CREATE INDEX [IX_AttachmentList] ON [BasicAttachmentList] ([ParentId], [ParentType]);
GO


CREATE INDEX [IX_BasicAttachmentList_UserId] ON [BasicAttachmentList] ([UserId]);
GO


CREATE UNIQUE INDEX [UX_AttachmentList] ON [BasicAttachmentList] ([ParentId], [FileName]);
GO


CREATE INDEX [IX_BasicCurrencyList_UserId] ON [BasicCurrencyList] ([UserId]);
GO


CREATE INDEX [IX_BasicImageGalleryList_UserId] ON [BasicImageGalleryList] ([UserId]);
GO


CREATE UNIQUE INDEX [UX_ImageGalleryList] ON [BasicImageGalleryList] ([FileName]);
GO


CREATE INDEX [IX_BasicItemList_CurrencyId] ON [BasicItemList] ([CurrencyId]);
GO


CREATE INDEX [IX_BasicItemList_Unit] ON [BasicItemList] ([Unit]);
GO


CREATE INDEX [IX_BasicItemList_UserId] ON [BasicItemList] ([UserId]);
GO


CREATE INDEX [IX_BasicItemList_VatId] ON [BasicItemList] ([VatId]);
GO


CREATE UNIQUE INDEX [IX_ItemList] ON [BasicItemList] ([PartNumber]);
GO


CREATE INDEX [IX_BasicUnitList_UserId] ON [BasicUnitList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_UnitList] ON [BasicUnitList] ([Name]);
GO


CREATE INDEX [IX_BasicVatList_UserId] ON [BasicVatList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_VatList] ON [BasicVatList] ([Value], [Active]);
GO


CREATE INDEX [IX_AddressList] ON [BusinessAddressList] ([AddressType]);
GO


CREATE INDEX [IX_BusinessAddressList_UserId] ON [BusinessAddressList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_BranchList] ON [BusinessBranchList] ([CompanyName]);
GO


CREATE INDEX [IX_BusinessBranchList_UserId] ON [BusinessBranchList] ([UserId]);
GO


CREATE INDEX [IX_BusinessCreditNoteList_InvoiceNumber] ON [BusinessCreditNoteList] ([InvoiceNumber]);
GO


CREATE INDEX [IX_BusinessCreditNoteList_TotalCurrencyId] ON [BusinessCreditNoteList] ([TotalCurrencyId]);
GO


CREATE INDEX [IX_BusinessCreditNoteList_UserId] ON [BusinessCreditNoteList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_CreditNoteList] ON [BusinessCreditNoteList] ([DocumentNumber]);
GO


CREATE INDEX [IX_BusinessCreditNoteSupportList_DocumentNumber] ON [BusinessCreditNoteSupportList] ([DocumentNumber]);
GO


CREATE INDEX [IX_BusinessCreditNoteSupportList_Unit] ON [BusinessCreditNoteSupportList] ([Unit]);
GO


CREATE INDEX [IX_BusinessCreditNoteSupportList_UserId] ON [BusinessCreditNoteSupportList] ([UserId]);
GO


CREATE INDEX [IX_BusinessExchangeRateList_CurrencyId] ON [BusinessExchangeRateList] ([CurrencyId]);
GO


CREATE INDEX [IX_BusinessExchangeRateList_UserId] ON [BusinessExchangeRateList] ([UserId]);
GO


CREATE INDEX [IX_BusinessIncomingInvoiceList_MaturityId] ON [BusinessIncomingInvoiceList] ([MaturityId]);
GO


CREATE INDEX [IX_BusinessIncomingInvoiceList_PaymentMethodId] ON [BusinessIncomingInvoiceList] ([PaymentMethodId]);
GO


CREATE INDEX [IX_BusinessIncomingInvoiceList_PaymentStatusId] ON [BusinessIncomingInvoiceList] ([PaymentStatusId]);
GO


CREATE INDEX [IX_BusinessIncomingInvoiceList_TotalCurrencyId] ON [BusinessIncomingInvoiceList] ([TotalCurrencyId]);
GO


CREATE INDEX [IX_BusinessIncomingInvoiceList_UserId] ON [BusinessIncomingInvoiceList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_IncomingInvoiceList] ON [BusinessIncomingInvoiceList] ([DocumentNumber]);
GO


CREATE INDEX [IX_BusinessIncomingInvoiceSupportList_Unit] ON [BusinessIncomingInvoiceSupportList] ([Unit]);
GO


CREATE INDEX [IX_BusinessIncomingInvoiceSupportList_UserId] ON [BusinessIncomingInvoiceSupportList] ([UserId]);
GO


CREATE INDEX [IX_IncomingInvoiceItemList] ON [BusinessIncomingInvoiceSupportList] ([DocumentNumber]);
GO


CREATE INDEX [IX_BusinessIncomingOrderList_TotalCurrencyId] ON [BusinessIncomingOrderList] ([TotalCurrencyId]);
GO


CREATE INDEX [IX_BusinessIncomingOrderList_UserId] ON [BusinessIncomingOrderList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_IncomingOrderList] ON [BusinessIncomingOrderList] ([DocumentNumber]);
GO


CREATE INDEX [IX_IncomingOrderList_Supplier] ON [BusinessIncomingOrderList] ([Supplier]);
GO


CREATE INDEX [IX_BusinessIncomingOrderSupportList_Unit] ON [BusinessIncomingOrderSupportList] ([Unit]);
GO


CREATE INDEX [IX_BusinessIncomingOrderSupportList_UserId] ON [BusinessIncomingOrderSupportList] ([UserId]);
GO


CREATE INDEX [IX_IncomingOrderItemList] ON [BusinessIncomingOrderSupportList] ([DocumentNumber]);
GO


CREATE INDEX [IX_BusinessMaturityList_UserId] ON [BusinessMaturityList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_MaturityList] ON [BusinessMaturityList] ([Name]);
GO


CREATE INDEX [IX_BusinessNotesList_UserId] ON [BusinessNotesList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_NotesList] ON [BusinessNotesList] ([Name]);
GO


CREATE INDEX [IX_BusinessOfferList_TotalCurrencyId] ON [BusinessOfferList] ([TotalCurrencyId]);
GO


CREATE INDEX [IX_BusinessOfferList_UserId] ON [BusinessOfferList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_OfferList] ON [BusinessOfferList] ([DocumentNumber]);
GO


CREATE INDEX [IX_OfferList_Customer] ON [BusinessOfferList] ([Customer]);
GO


CREATE INDEX [IX_BusinessOfferSupportList_UserId] ON [BusinessOfferSupportList] ([UserId]);
GO


CREATE INDEX [IX_OfferItemList] ON [BusinessOfferSupportList] ([DocumentNumber]);
GO


CREATE INDEX [IX_BusinessOutgoingInvoiceList_CreditNoteId] ON [BusinessOutgoingInvoiceList] ([CreditNoteId]);
GO


CREATE INDEX [IX_BusinessOutgoingInvoiceList_MaturityId] ON [BusinessOutgoingInvoiceList] ([MaturityId]);
GO


CREATE INDEX [IX_BusinessOutgoingInvoiceList_PaymentMethodId] ON [BusinessOutgoingInvoiceList] ([PaymentMethodId]);
GO


CREATE INDEX [IX_BusinessOutgoingInvoiceList_PaymentStatusId] ON [BusinessOutgoingInvoiceList] ([PaymentStatusId]);
GO


CREATE INDEX [IX_BusinessOutgoingInvoiceList_ReceiptId] ON [BusinessOutgoingInvoiceList] ([ReceiptId]);
GO


CREATE INDEX [IX_BusinessOutgoingInvoiceList_TotalCurrencyId] ON [BusinessOutgoingInvoiceList] ([TotalCurrencyId]);
GO


CREATE INDEX [IX_BusinessOutgoingInvoiceList_UserId] ON [BusinessOutgoingInvoiceList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_OutgoingInvoiceList] ON [BusinessOutgoingInvoiceList] ([DocumentNumber]);
GO


CREATE INDEX [IX_OutgoingInvoiceList_Customer] ON [BusinessOutgoingInvoiceList] ([Customer]);
GO


CREATE INDEX [IX_BusinessOutgoingInvoiceSupportList_Unit] ON [BusinessOutgoingInvoiceSupportList] ([Unit]);
GO


CREATE INDEX [IX_BusinessOutgoingInvoiceSupportList_UserId] ON [BusinessOutgoingInvoiceSupportList] ([UserId]);
GO


CREATE INDEX [IX_OutgoingInvoiceItemList] ON [BusinessOutgoingInvoiceSupportList] ([DocumentNumber]);
GO


CREATE INDEX [IX_BusinessOutgoingOrderList_TotalCurrencyId] ON [BusinessOutgoingOrderList] ([TotalCurrencyId]);
GO


CREATE INDEX [IX_BusinessOutgoingOrderList_UserId] ON [BusinessOutgoingOrderList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_OutgoingOrderList] ON [BusinessOutgoingOrderList] ([DocumentNumber]);
GO


CREATE INDEX [IX_OutgoingOrderList_Supplier] ON [BusinessOutgoingOrderList] ([Supplier]);
GO


CREATE INDEX [IX_BusinessOutgoingOrderSupportList_Unit] ON [BusinessOutgoingOrderSupportList] ([Unit]);
GO


CREATE INDEX [IX_BusinessOutgoingOrderSupportList_UserId] ON [BusinessOutgoingOrderSupportList] ([UserId]);
GO


CREATE INDEX [IX_OutgoingOrderItemList] ON [BusinessOutgoingOrderSupportList] ([DocumentNumber]);
GO


CREATE INDEX [IX_BusinessPaymentMethodList_UserId] ON [BusinessPaymentMethodList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_PaymentMethodList] ON [BusinessPaymentMethodList] ([Name]);
GO


CREATE INDEX [IX_BusinessPaymentStatusList_UserId] ON [BusinessPaymentStatusList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_PaymentStatusList] ON [BusinessPaymentStatusList] ([Name]);
GO


CREATE INDEX [IX_BusinessReceiptList_InvoiceNumber] ON [BusinessReceiptList] ([InvoiceNumber]);
GO


CREATE INDEX [IX_BusinessReceiptList_TotalCurrencyId] ON [BusinessReceiptList] ([TotalCurrencyId]);
GO


CREATE INDEX [IX_BusinessReceiptList_UserId] ON [BusinessReceiptList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_ReceiptList] ON [BusinessReceiptList] ([DocumentNumber]);
GO


CREATE INDEX [IX_BusinessReceiptSupportList_DocumentNumber] ON [BusinessReceiptSupportList] ([DocumentNumber]);
GO


CREATE INDEX [IX_BusinessReceiptSupportList_Unit] ON [BusinessReceiptSupportList] ([Unit]);
GO


CREATE INDEX [IX_BusinessReceiptSupportList_UserId] ON [BusinessReceiptSupportList] ([UserId]);
GO


CREATE INDEX [IX_BusinessWarehouseList_UserId] ON [BusinessWarehouseList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_WarehouseList] ON [BusinessWarehouseList] ([Name]);
GO


CREATE UNIQUE INDEX [IX_DocSrvDocTemplateList] ON [DocSrvDocTemplateList] ([Name]);
GO


CREATE INDEX [IX_DocSrvDocTemplateList_GroupId] ON [DocSrvDocTemplateList] ([GroupId]);
GO


CREATE INDEX [IX_DocSrvDocTemplateList_UserId] ON [DocSrvDocTemplateList] ([UserId]);
GO


CREATE INDEX [IX_DocSrvDocumentationCodeLibraryList_UserId] ON [DocSrvDocumentationCodeLibraryList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_DocumentationCodeLibraryList] ON [DocSrvDocumentationCodeLibraryList] ([Name]);
GO


CREATE INDEX [IX_DocSrvDocumentationGroupList_UserId] ON [DocSrvDocumentationGroupList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_DocumentationGroupList] ON [DocSrvDocumentationGroupList] ([Name]);
GO


CREATE INDEX [IX_DocSrvDocumentationList_DocumentationGroupId] ON [DocSrvDocumentationList] ([DocumentationGroupId]);
GO


CREATE INDEX [IX_DocSrvDocumentationList_UserId] ON [DocSrvDocumentationList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_DocumentationList] ON [DocSrvDocumentationList] ([Name], [DocumentationGroupId], [AutoVersion], [TimeStamp]);
GO


CREATE INDEX [IX_GithubSrvAuthLogList_UserId] ON [GithubSrvAuthLogList] ([UserId]);
GO


CREATE INDEX [IX_GithubSrvRepositoryList_UserId] ON [GithubSrvRepositoryList] ([UserId]);
GO


CREATE INDEX [IX_GithubSrvSshKeyList_UserId] ON [GithubSrvSshKeyList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_GithubSrvTeamRepositoryRoleList] ON [GithubSrvTeamRepositoryRoleList] ([TeamId], [RepositoryId]);
GO


CREATE INDEX [IX_GithubSrvTeamRepositoryRoleList_RepositoryId] ON [GithubSrvTeamRepositoryRoleList] ([RepositoryId]);
GO


CREATE UNIQUE INDEX [IX_GithubSrvUserTeamRoleList] ON [GithubSrvUserTeamRoleList] ([TeamId], [UserId]);
GO


CREATE INDEX [IX_GithubSrvUserTeamRoleList_TeamId] ON [GithubSrvUserTeamRoleList] ([TeamId]);
GO


CREATE INDEX [IX_GithubSrvUserTeamRoleList_UserId] ON [GithubSrvUserTeamRoleList] ([UserId]);
GO


CREATE INDEX [IX_LicenseActivationFailList_IpAddress] ON [LicSrvLicenseActivationFailList] ([IpAddress]);
GO


CREATE INDEX [IX_LicenseActivationFailList_PartNumber] ON [LicSrvLicenseActivationFailList] ([PartNumber]);
GO


CREATE UNIQUE INDEX [IX_LicSrvLicenseAlgorithmList] ON [LicSrvLicenseAlgorithmList] ([Name]);
GO


CREATE INDEX [IX_LicSrvLicenseAlgorithmList_AddressId] ON [LicSrvLicenseAlgorithmList] ([AddressId]);
GO


CREATE INDEX [IX_LicSrvLicenseAlgorithmList_ItemId] ON [LicSrvLicenseAlgorithmList] ([ItemId]);
GO


CREATE INDEX [IX_LicSrvLicenseAlgorithmList_UserId] ON [LicSrvLicenseAlgorithmList] ([UserId]);
GO


CREATE INDEX [IX_LicSrvUsedLicenseList_AddressId] ON [LicSrvUsedLicenseList] ([AddressId]);
GO


CREATE INDEX [IX_LicSrvUsedLicenseList_ItemId] ON [LicSrvUsedLicenseList] ([ItemId]);
GO


CREATE UNIQUE INDEX [IX_ProdGuidGroupList] ON [ProdGuidGroupList] ([Name]);
GO


CREATE INDEX [IX_ProdGuidGroupList_UserId] ON [ProdGuidGroupList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_ProdGuidOperationList] ON [ProdGuidOperationList] ([WorkPlace], [OperationNumber]);
GO


CREATE INDEX [IX_ProdGuidOperationList_UserId] ON [ProdGuidOperationList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_ProdGuidPartList] ON [ProdGuidPartList] ([WorkPlace], [Number]);
GO


CREATE INDEX [IX_ProdGuidPartList_UserId] ON [ProdGuidPartList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_ProdGuidPersonList] ON [ProdGuidPersonList] ([PersonalNumber]);
GO


CREATE INDEX [IX_ProdGuidPersonList_UserId] ON [ProdGuidPersonList] ([UserId]);
GO


CREATE INDEX [IX_ProdGuidWorkList_PersonalNumber] ON [ProdGuidWorkList] ([PersonalNumber]);
GO


CREATE INDEX [IX_ProdGuidWorkList_UserId] ON [ProdGuidWorkList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_ProviderAutoGenServerCreateRequest] ON [ProviderAutoGenServerReqList] ([Name]);
GO


CREATE INDEX [IX_ProviderAutoGenServerReqList_UserId] ON [ProviderAutoGenServerReqList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_ProviderGeneratedLicenseList] ON [ProviderGeneratedLicenseList] ([PartNumber]);
GO


CREATE INDEX [IX_ProviderGeneratedLicenseList_UserId] ON [ProviderGeneratedLicenseList] ([UserId]);
GO


CREATE INDEX [IX_GeneratedToolList] ON [ProviderGeneratedToolList] ([Name], [UserId]);
GO


CREATE INDEX [IX_GeneratedToolList_1] ON [ProviderGeneratedToolList] ([Name]);
GO


CREATE INDEX [IX_GeneratedToolList_2] ON [ProviderGeneratedToolList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_ServerApiSecurityList] ON [ServerApiSecurityList] ([Name]);
GO


CREATE UNIQUE INDEX [IX_ServerApiSecurityList_2] ON [ServerApiSecurityList] ([UrlSubPath]) WHERE [UrlSubPath] IS NOT NULL;
GO


CREATE INDEX [IX_ServerApiSecurityList_UserId] ON [ServerApiSecurityList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_ServerCorsDefAllowedOriginList] ON [ServerCorsDefAllowedOriginList] ([AllowedDomain]);
GO


CREATE INDEX [IX_ServerCorsDefAllowedOriginList_UserId] ON [ServerCorsDefAllowedOriginList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_HealthCheckTaskList] ON [ServerHealthCheckTaskList] ([TaskName]);
GO


CREATE INDEX [IX_ServerHealthCheckTaskList_UserId] ON [ServerHealthCheckTaskList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_ServerLiveDataMonitorList] ON [ServerLiveDataMonitorList] ([RootPath]);
GO


CREATE INDEX [IX_ServerLiveDataMonitorList_UserId] ON [ServerLiveDataMonitorList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_ServerModuleAndServiceList] ON [ServerModuleAndServiceList] ([Name]);
GO


CREATE UNIQUE INDEX [IX_ServerModuleAndServiceList_2] ON [ServerModuleAndServiceList] ([UrlSubPath]) WHERE [UrlSubPath] IS NOT NULL;
GO


CREATE INDEX [IX_ServerModuleAndServiceList_UserId] ON [ServerModuleAndServiceList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_ServerSettingList] ON [ServerSettingList] ([Key]);
GO


CREATE INDEX [IX_ServerSettingList_UserId] ON [ServerSettingList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_ServerStaticOrMvcDefPathList] ON [ServerStaticOrMvcDefPathList] ([SystemName]);
GO


CREATE INDEX [IX_ServerStaticOrMvcDefPathList_UserId] ON [ServerStaticOrMvcDefPathList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_ServerToolPanelDefinitionList] ON [ServerToolPanelDefinitionList] ([SystemName]);
GO


CREATE INDEX [IX_ServerToolPanelDefinitionList_ToolTypeId] ON [ServerToolPanelDefinitionList] ([ToolTypeId]);
GO


CREATE INDEX [IX_ServerToolPanelDefinitionList_UserId] ON [ServerToolPanelDefinitionList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_ServerToolTypeList] ON [ServerToolTypeList] ([Name]);
GO


CREATE INDEX [IX_ServerToolTypeList_UserId] ON [ServerToolTypeList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_EmailTemplateList] ON [SolutionEmailTemplateList] ([SystemLanguageId], [TemplateName]);
GO


CREATE INDEX [IX_SolutionEmailTemplateList_UserId] ON [SolutionEmailTemplateList] ([UserId]);
GO


CREATE INDEX [IX_SolutionFailList_UserId] ON [SolutionFailList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_ServerLanguageList] ON [SolutionLanguageList] ([SystemName]);
GO


CREATE INDEX [IX_SolutionLanguageList_UserId] ON [SolutionLanguageList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_SolutionMessageModuleList] ON [SolutionMessageModuleList] ([Subject]);
GO


CREATE INDEX [IX_SolutionMessageModuleList_FromUserId] ON [SolutionMessageModuleList] ([FromUserId]);
GO


CREATE INDEX [IX_SolutionMessageModuleList_MessageParentId] ON [SolutionMessageModuleList] ([MessageParentId]);
GO


CREATE INDEX [IX_SolutionMessageModuleList_MessageTypeId] ON [SolutionMessageModuleList] ([MessageTypeId]);
GO


CREATE INDEX [IX_SolutionMessageModuleList_ToUserId] ON [SolutionMessageModuleList] ([ToUserId]);
GO


CREATE UNIQUE INDEX [IX_SolutionMessageTypeList] ON [SolutionMessageTypeList] ([Name]);
GO


CREATE INDEX [IX_SolutionMessageTypeList_UserId] ON [SolutionMessageTypeList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_GlobalMixedEnumList] ON [SolutionMixedEnumList] ([ItemsGroup], [Name]);
GO


CREATE INDEX [IX_SolutionMixedEnumList] ON [SolutionMixedEnumList] ([ItemsGroup]);
GO


CREATE INDEX [IX_SolutionMixedEnumList_1] ON [SolutionMixedEnumList] ([Name]);
GO


CREATE INDEX [IX_SolutionMixedEnumList_UserId] ON [SolutionMixedEnumList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_MottoList] ON [SolutionMottoList] ([SystemName]);
GO


CREATE INDEX [IX_SolutionMottoList_UserId] ON [SolutionMottoList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_SolutionOperationList] ON [SolutionOperationList] ([Name]);
GO


CREATE INDEX [IX_SolutionOperationList_UserId] ON [SolutionOperationList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_SolutionSchedulerList] ON [SolutionSchedulerList] ([Name]);
GO


CREATE INDEX [IX_SolutionSchedulerList_UserId] ON [SolutionSchedulerList] ([UserId]);
GO


CREATE INDEX [IX_SolutionSchedulerProcessList_ScheduledTaskId] ON [SolutionSchedulerProcessList] ([ScheduledTaskId]);
GO


CREATE UNIQUE INDEX [IX_SolutionStaticFileList] ON [SolutionStaticFileList] ([FileNamePath], [UserId]) WHERE [UserId] IS NOT NULL;
GO


CREATE INDEX [IX_SolutionStaticFileList_StaticPathId] ON [SolutionStaticFileList] ([StaticPathId]);
GO


CREATE INDEX [IX_SolutionStaticFileList_UserId] ON [SolutionStaticFileList] ([UserId]);
GO


CREATE INDEX [IX_SolutionStaticFileList_WebsiteId] ON [SolutionStaticFileList] ([WebsiteId]);
GO


CREATE UNIQUE INDEX [IX_SolutionStaticFilePathList] ON [SolutionStaticFilePathList] ([Path], [UserId]) WHERE [UserId] IS NOT NULL;
GO


CREATE INDEX [IX_SolutionStaticFilePathList_UserId] ON [SolutionStaticFilePathList] ([UserId]);
GO


CREATE INDEX [IX_SolutionStaticFilePathList_WebsiteId] ON [SolutionStaticFilePathList] ([WebsiteId]);
GO


CREATE INDEX [IX_SolutionTaskList] ON [SolutionTaskList] ([InheritedTargetType]);
GO


CREATE INDEX [IX_SolutionTaskList_1] ON [SolutionTaskList] ([InheritedTargetType], [InheritedStatusType]);
GO


CREATE INDEX [IX_SolutionTaskList_2] ON [SolutionTaskList] ([InheritedStatusType]);
GO


CREATE INDEX [IX_SolutionTaskList_UserId] ON [SolutionTaskList] ([UserId]);
GO


CREATE INDEX [IX_SolutionUserList_RoleId] ON [SolutionUserList] ([RoleId]);
GO


CREATE UNIQUE INDEX [IX_UserList] ON [SolutionUserList] ([UserName]);
GO


CREATE UNIQUE INDEX [IX_UserRoleList] ON [SolutionUserRoleList] ([SystemName]);
GO


CREATE UNIQUE INDEX [IX_SolutionWebsiteList] ON [SolutionWebsiteList] ([WebsiteName]);
GO


CREATE INDEX [IX_SolutionWebsiteList_UserId] ON [SolutionWebsiteList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_SystemCustomPageList] ON [SystemCustomPageList] ([PageName]);
GO


CREATE INDEX [IX_SystemCustomPageList_UserId] ON [SystemCustomPageList] ([UserId]);
GO


CREATE INDEX [IX_DocumentAdviceList] ON [SystemDocumentAdviceList] ([BranchId], [DocumentType]);
GO


CREATE INDEX [IX_SystemDocumentAdviceList_DocumentType] ON [SystemDocumentAdviceList] ([DocumentType]);
GO


CREATE INDEX [IX_SystemDocumentAdviceList_UserId] ON [SystemDocumentAdviceList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_DocumentTypeList] ON [SystemDocumentTypeList] ([SystemName]);
GO


CREATE INDEX [IX_SystemDocumentTypeList_UserId] ON [SystemDocumentTypeList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_SystemGroupMenuList] ON [SystemGroupMenuList] ([SystemName]);
GO


CREATE INDEX [IX_SystemGroupMenuList_UserId] ON [SystemGroupMenuList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_IgnoredExceptionList] ON [SystemIgnoredExceptionList] ([ErrorNumber]);
GO


CREATE INDEX [IX_SystemIgnoredExceptionList_UserId] ON [SystemIgnoredExceptionList] ([UserId]);
GO


CREATE INDEX [IX_LoginHistoryList] ON [SystemLoginHistoryList] ([IpAddress]);
GO


CREATE INDEX [IX_LoginHistoryList_1] ON [SystemLoginHistoryList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_GlobalMenuList] ON [SystemMenuList] ([FormPageName]);
GO


CREATE INDEX [IX_SystemMenuList_GroupId] ON [SystemMenuList] ([GroupId]);
GO


CREATE INDEX [IX_SystemMenuList_UserId] ON [SystemMenuList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_SystemModuleList] ON [SystemModuleList] ([Name]);
GO


CREATE INDEX [IX_SystemModuleList_UserId] ON [SystemModuleList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_ParameterList] ON [SystemParameterList] ([SystemName], [UserId]) WHERE [UserId] IS NOT NULL;
GO


CREATE INDEX [IX_SystemParameterList_UserId] ON [SystemParameterList] ([UserId]);
GO


CREATE INDEX [IX_SystemReportList_UserId] ON [SystemReportList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_ReportQueue] ON [SystemReportQueueList] ([Name]);
GO


CREATE INDEX [IX_ReportQueueList] ON [SystemReportQueueList] ([TableName]);
GO


CREATE UNIQUE INDEX [IX_ReportQueueList_1] ON [SystemReportQueueList] ([TableName], [Sequence]);
GO


CREATE UNIQUE INDEX [IX_SvgIconList] ON [SystemSvgIconList] ([Name]);
GO


CREATE INDEX [IX_SystemSvgIconList_UserId] ON [SystemSvgIconList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_SystemTranslationList] ON [SystemTranslationList] ([SystemName]);
GO


CREATE INDEX [IX_SystemTranslationList_UserId] ON [SystemTranslationList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_TemplateList] ON [TemplateList] ([Name]);
GO


CREATE INDEX [IX_TemplateList_GroupId] ON [TemplateList] ([GroupId]);
GO


CREATE INDEX [IX_TemplateList_UserId] ON [TemplateList] ([UserId]);
GO


CREATE INDEX [IX_WebBannedIpAddressList_UserId] ON [WebBannedIpAddressList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_WebBannedUserList] ON [WebBannedIpAddressList] ([IpAddress]);
GO


CREATE UNIQUE INDEX [IX_WebCodeLibraryList] ON [WebCodeLibraryList] ([Name]);
GO


CREATE INDEX [IX_WebCodeLibraryList_UserId] ON [WebCodeLibraryList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_WebConfiguratorList] ON [WebConfiguratorList] ([Name]);
GO


CREATE UNIQUE INDEX [IX_WebConfiguratorList_1] ON [WebConfiguratorList] ([ServerUrl]) WHERE [ServerUrl] IS NOT NULL;
GO


CREATE INDEX [IX_WebConfiguratorList_UserId] ON [WebConfiguratorList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_WebCoreFileList] ON [WebCoreFileList] ([FileName], [SpecificationType]);
GO


CREATE INDEX [IX_WebCoreFileList_UserId] ON [WebCoreFileList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_WebDeveloperNewsList] ON [WebDeveloperNewsList] ([Title]);
GO


CREATE INDEX [IX_WebDeveloperNewsList_UserId] ON [WebDeveloperNewsList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_WebDocumentationCodeLibraryList] ON [WebDocumentationCodeLibraryList] ([Name]);
GO


CREATE INDEX [IX_WebDocumentationCodeLibraryList_UserId] ON [WebDocumentationCodeLibraryList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_WebDocumentationList] ON [WebDocumentationList] ([Name], [AutoVersion], [TimeStamp]);
GO


CREATE INDEX [IX_WebDocumentationList_UserId] ON [WebDocumentationList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_WebGlobalBodyBlockList] ON [WebGlobalPageBlockList] ([Name], [PagePartType]);
GO


CREATE INDEX [IX_WebGlobalPageBlockList_UserId] ON [WebGlobalPageBlockList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_WebGroupMenuList] ON [WebGroupMenuList] ([Name]);
GO


CREATE INDEX [IX_WebGroupMenuList_UserId] ON [WebGroupMenuList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_WebMenuList] ON [WebMenuList] ([Name], [GroupId]);
GO


CREATE INDEX [IX_WebMenuList_GroupId] ON [WebMenuList] ([GroupId]);
GO


CREATE INDEX [IX_WebMenuList_UserId] ON [WebMenuList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_WebMessagesList] ON [WebMessagesList] ([Name]);
GO


CREATE INDEX [IX_WebMessagesList_UserId] ON [WebMessagesList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_WebSettingList] ON [WebSettingList] ([Key]);
GO


CREATE INDEX [IX_WebSettingList_UserId] ON [WebSettingList] ([UserId]);
GO


CREATE UNIQUE INDEX [IX_WebUserSettingList] ON [WebUserSettingList] ([UserId], [Key]);
GO


CREATE UNIQUE INDEX [IX_WebVisitIpList] ON [WebVisitIpList] ([WebHostIp], [TimeStamp]);
GO


ALTER TABLE [BusinessCreditNoteList] ADD CONSTRAINT [FK_CreditNoteList_OutgoingInvoiceList] FOREIGN KEY ([InvoiceNumber]) REFERENCES [BusinessOutgoingInvoiceList] ([DocumentNumber]);
GO


ALTER TABLE [BusinessOutgoingInvoiceList] ADD CONSTRAINT [FK_OutgoingInvoiceList_ReceiptList] FOREIGN KEY ([ReceiptId]) REFERENCES [BusinessReceiptList] ([Id]) ON DELETE SET NULL;
GO



