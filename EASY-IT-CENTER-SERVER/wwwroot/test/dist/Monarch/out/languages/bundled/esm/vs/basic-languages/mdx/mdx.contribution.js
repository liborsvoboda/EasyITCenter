/*! For license information please see mdx.contribution.js.LICENSE.txt */
import{registerLanguage}from"../_.contribution";registerLanguage({id:"mdx",extensions:[".mdx"],aliases:["MDX","mdx"],loader:()=>import("./mdx")});