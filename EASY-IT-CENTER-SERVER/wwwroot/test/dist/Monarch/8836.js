"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[8836],{8836:(t,$,i)=>{i.r($),i.d($,{default:()=>n});const n="# A[i] = A[i/2] + 1;\n    lw     $t0, 0($gp)       # fetch i\n    srl    $t1, $t0, 1       # i/2\n    sll    $t1, $t1, 2       # turn i/2 into a byte offset (*4)\n    add    $t1, $gp, $t1     # &A[i/2] - 28\n    lw     $t1, 28($t1)      # fetch A[i/2]\n    addi   $t1, $t1, 1       # A[i/2] + 1\n    sll    $t2, $t0, 2       # turn i into a byte offset\n    add    $t2, $t2, $gp     # &A[i] - 28\n    sw     $t1, 28($t2)      # A[i] = ...\n# A[i+1] = -1;\n    addi   $t1, $zero, -1    # -1\n    sw     $t1, 32($t2)      # A[i+1] = -1\n"}}]);
//# sourceMappingURL=8836.js.map