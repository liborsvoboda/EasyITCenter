"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[3391],{3391:(n,e,o)=>{o.r(e),o.d(e,{default:()=>E});const E="CREATE TABLE dbo.EmployeePhoto\n(\n    EmployeeId INT NOT NULL PRIMARY KEY,\n    Photo VARBINARY(MAX) FILESTREAM NULL,\n    MyRowGuidColumn UNIQUEIDENTIFIER NOT NULL ROWGUIDCOL\n                    UNIQUE DEFAULT NEWID()\n);\n\nGO\n\n/*\ntext_of_comment\n/* nested comment */\n*/\n\n-- line comment\n\nCREATE NONCLUSTERED INDEX IX_WorkOrder_ProductID\n    ON Production.WorkOrder(ProductID)\n    WITH (FILLFACTOR = 80,\n        PAD_INDEX = ON,\n        DROP_EXISTING = ON);\nGO\n\nWHILE (SELECT AVG(ListPrice) FROM Production.Product) < $300\nBEGIN\n   UPDATE Production.Product\n      SET ListPrice = ListPrice * 2\n   SELECT MAX(ListPrice) FROM Production.Product\n   IF (SELECT MAX(ListPrice) FROM Production.Product) > $500\n      BREAK\n   ELSE\n      CONTINUE\nEND\nPRINT 'Too much for the market to bear';\n\nMERGE INTO Sales.SalesReason AS [Target]\nUSING (VALUES ('Recommendation','Other'), ('Review', 'Marketing'), ('Internet', 'Promotion'))\n       AS [Source] ([NewName], NewReasonType)\nON [Target].[Name] = [Source].[NewName]\nWHEN MATCHED\nTHEN UPDATE SET ReasonType = [Source].NewReasonType\nWHEN NOT MATCHED BY TARGET\nTHEN INSERT ([Name], ReasonType) VALUES ([NewName], NewReasonType)\nOUTPUT $action INTO @SummaryOfChanges;\n\nSELECT ProductID, OrderQty, SUM(LineTotal) AS Total\nFROM Sales.SalesOrderDetail\nWHERE UnitPrice < $5.00\nGROUP BY ProductID, OrderQty\nORDER BY ProductID, OrderQty\nOPTION (HASH GROUP, FAST 10);\n"}}]);
//# sourceMappingURL=3391.js.map