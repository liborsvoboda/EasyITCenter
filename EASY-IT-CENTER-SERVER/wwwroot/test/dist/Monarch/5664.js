"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[5664],{5664:(t,e,p)=>{p.r(e),p.d(e,{default:()=>n});const n="rem *******Begin Comment**************\nrem This program starts the superapp batch program on the network,\nrem directs the output to a file, and displays the file\nrem in Notepad.\nrem *******End Comment**************\n@echo off\nif exist C:\\output.txt goto EMPTYEXISTS\nsetlocal\n\tpath=g:\\programs\\superapp;%path%\n\tcall superapp>C:\\output.txt\nendlocal\n:EMPTYEXISTS\nstart notepad c:\\output.txt"}}]);
//# sourceMappingURL=5664.js.map