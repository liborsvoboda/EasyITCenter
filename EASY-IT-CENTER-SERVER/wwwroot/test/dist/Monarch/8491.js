"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[8491],{8491:(n,t,a)=>{a.r(t),a.d(t,{default:()=>c});const c='const val POINTS_X_PASS: Int = 15\nval EZPassAccounts: MutableMap<Int, Int> = mutableMapOf(1 to 100, 2 to 100, 3 to 100)\nval EZPassReport: Map<Int, Int> = EZPassAccounts\n\n// update points credit\nfun updatePointsCredit(accountId: Int) {\n    if (EZPassAccounts.containsKey(accountId)) {\n        println("Updating $accountId...")\n        EZPassAccounts[accountId] = EZPassAccounts.getValue(accountId) + POINTS_X_PASS\n    } else {\n        println("Error: Trying to update a non-existing account (id: $accountId)")\n    }\n}\n\nfun accountsReport() {\n    println("EZ-Pass report:")\n    EZPassReport.forEach{\n        k, v -> println("ID $k: credit $v")\n    }\n}\n\nfun main() {\n    accountsReport()\n    updatePointsCredit(1)\n    updatePointsCredit(1)\n    updatePointsCredit(5)\n    accountsReport()\n}'}}]);
//# sourceMappingURL=8491.js.map