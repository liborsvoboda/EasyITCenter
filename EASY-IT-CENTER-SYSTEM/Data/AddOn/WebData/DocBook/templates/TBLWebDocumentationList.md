﻿
 IF OBJECT_ID('[dbo].[WebDocumentationList]') IS NOT NULL 
 DROP TABLE [dbo].[WebDocumentationList] 
 GO
 CREATE TABLE [dbo].[WebDocumentationList] ( 
 [Id]           INT              IDENTITY(1,1)          NOT NULL,
 [Name]         VARCHAR(150)                            NOT NULL,
 [Sequence]     INT                                     NOT NULL,
 [Description]  TEXT                                        NULL,
 [MdContent]    TEXT                                    NOT NULL,
 [HtmlContent]  TEXT                                    NOT NULL,
 [UserId]       INT                                     NOT NULL,
 [Active]       BIT                                     NOT NULL  CONSTRAINT [DF_WebDocumentationList_Active] DEFAULT ((1)),
 [AutoVersion]  INT                                     NOT NULL,
 [TimeStamp]    DATETIME2                               NOT NULL  CONSTRAINT [DF_WebDocumentationList_TimeStamp] DEFAULT (getdate()),
 CONSTRAINT   [PK_WebDocumentationList]  PRIMARY KEY CLUSTERED    ([Id] asc) ,
 CONSTRAINT   [IX_WebDocumentationList]  UNIQUE      NONCLUSTERED ([Name] asc, [AutoVersion] asc, [TimeStamp] asc) ,
 CONSTRAINT [FK_WebDocumentationList_UserList] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SolutionUserList] (Id) )
 
 
 GO
 
 
CREATE   TRIGGER [dbo].[TR_WebDocumentationList] ON [dbo].[WebDocumentationList]
FOR INSERT, UPDATE--, DELETE
AS
DECLARE @Operation VARCHAR(15)
 
IF EXISTS (SELECT 0 FROM inserted)
BEGIN
	DECLARE @setActive bit;DECLARE @autoVersion int;DECLARE @RecId int;DECLARE @RecName varchar(150);
	DECLARE @autoRemoveOld bit; DECLARE @UserId int;
	

	SET @autoVersion = 0;SET @setActive = 1;SET @autoRemoveOld = 0;
	SET NOCOUNT ON;

    IF EXISTS (SELECT 0 FROM deleted)
    BEGIN --UPDADE
		SELECT @setActive = ins.[Active] from inserted ins;
		SELECT @RecId = ins.Id from inserted ins;
		SELECT @UserId = ins.UserId from inserted ins;
		SELECT @RecName = ins.[Name] from inserted ins;

		--GET AutoRemoveSetting
		SELECT @autoRemoveOld = CAST(CAST(SUBSTRING(p.[Value],1,10) as varchar(10)) as bit) FROM [dbo].[SystemParameterList] p WHERE p.[UserId] = @UserId AND p.[SystemName] = 'WebDocsOldAutoRemoveEnabled';

		IF(@setActive = 1) BEGIN
			UPDATE [dbo].WebDocumentationList SET [Active] = 0 WHERE Id <> @RecId AND [Name] = @RecName; 		
		END

		--AutoRemove Older versions
		IF(@autoRemoveOld = 1) BEGIN
			DELETE FROM  [dbo].WebDocumentationList WHERE Id <> @RecId AND [Name] = @RecName; 		
		END

	END ELSE
		BEGIN -- INSERT
			SELECT @setActive = ins.[Active] from inserted ins;
			SELECT @RecId = ins.Id from inserted ins;
			SELECT @UserId = ins.UserId from inserted ins;
			SELECT @RecName = ins.[Name] from inserted ins;

			--GET AutoRemoveSetting
			SELECT @autoRemoveOld = CAST(CAST(SUBSTRING(p.[Value],1,10) as varchar(10)) as bit) FROM [dbo].[SystemParameterList] p WHERE p.[UserId] = @UserId AND p.[SystemName] = 'WebDocsOldAutoRemoveEnabled';

			--AutoVersioning
			SELECT @autoVersion = MAX(d.[AutoVersion]) + 1 FROM [dbo].WebDocumentationList d WHERE d.[Name] = @RecName;
			IF (@autoVersion = 0 ) BEGIN SET @autoVersion = 1; END
			UPDATE [dbo].WebDocumentationList SET [AutoVersion] = @autoVersion WHERE Id = @RecId;

			IF(@setActive = 1) BEGIN
				UPDATE [dbo].WebDocumentationList SET [Active] = 0 WHERE Id <> @RecId AND [Name] = @RecName; 		
			END
			
			--AutoRemove Older versions
			IF(@autoRemoveOld = 1) BEGIN
				DELETE FROM  [dbo].WebDocumentationList WHERE Id <> @RecId AND [Name] = @RecName; 		
			END
		END
END /* ELSE 
BEGIN --DELETE
	SELECT @setActive = ins.[Active] from deleted ins;
	SELECT @RecId = ins.Id from deleted ins;
	SELECT @RecName = ins.[Name] from deleted ins;

	IF(@setActive = 1) BEGIN
		UPDATE [dbo].WebDocumentationList SET [Active] = 1 
		WHERE Id IN(SELECT TOP (1) MAX(d.Id) FROM [dbo].WebDocumentationList d WHERE d.Id <> @RecId AND d.[Name] = @RecName)
		;
	END
END
*/

 GO