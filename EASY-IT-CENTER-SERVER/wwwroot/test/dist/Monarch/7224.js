"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[7224],{9604:(n,t,e)=>{e.r(t),e.d(t,{default:()=>o});const o="@base: #f938ab;\n\n.box-shadow(@style, @c) when (iscolor(@c)) {\n\tborder-radius: @style @c;\n}\n\n.box-shadow(@style, @alpha: 50%) when (isnumber(@alpha)) {\n\t.box-shadow(@style, rgba(0, 0, 0, @alpha));\n}\n\n.box { \n\tcolor: saturate(@base, 5%);\n\tborder-color: lighten(@base, 30%);\n\t\n\tdiv {\n\t\t.box-shadow((0 0 5px), 30%);\n\t}\n}\n\n#header {\n\th1 {\n\t\tfont-size: 26px;\n\t\tfont-weight: bold;\n\t}\n\t\n\tp { font-size: 12px;\n\t\ta { text-decoration: none;\n\t\t\t&:hover { border-width: 1px }\n\t\t}\n\t}\n}\n\n@the-border: 1px;\n@base-color: #111;\n@red:        #842210;\n\n#header {\n\tcolor: (@base-color * 3);\n\tborder-left: @the-border;\n\tborder-right: (@the-border * 2);\n}\n\n#footer {\n\tcolor: (@base-color + #003300);\n\tborder-color: desaturate(@red, 10%);\n}\n"}}]);
//# sourceMappingURL=7224.js.map