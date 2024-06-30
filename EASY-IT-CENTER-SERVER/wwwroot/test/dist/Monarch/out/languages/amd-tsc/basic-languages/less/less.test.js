define(["require","exports","../test/testRunner"],(function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),(0,s.testTokenization)(["less","javascript"],[[{line:"isnumber(10);",tokens:[{startIndex:0,type:"keyword.less"},{startIndex:8,type:"delimiter.parenthesis.less"},{startIndex:9,type:"attribute.value.number.less"},{startIndex:11,type:"delimiter.parenthesis.less"},{startIndex:12,type:"delimiter.less"}]}],[{line:"iskeyword(@test) ;mix",tokens:[{startIndex:0,type:"keyword.less"},{startIndex:9,type:"delimiter.parenthesis.less"},{startIndex:10,type:"variable.less"},{startIndex:15,type:"delimiter.parenthesis.less"},{startIndex:16,type:""},{startIndex:17,type:"delimiter.less"},{startIndex:18,type:"keyword.less"}]}],[{line:"whenn",tokens:[{startIndex:0,type:"tag.less"}]}],[{line:"    round    ",tokens:[{startIndex:0,type:""},{startIndex:4,type:"keyword.less"},{startIndex:9,type:""}]}],[{line:"isnumber(10px);",tokens:[{startIndex:0,type:"keyword.less"},{startIndex:8,type:"delimiter.parenthesis.less"},{startIndex:9,type:"attribute.value.number.less"},{startIndex:11,type:"attribute.value.unit.less"},{startIndex:13,type:"delimiter.parenthesis.less"},{startIndex:14,type:"delimiter.less"}]}],[{line:"pxx ",tokens:[{startIndex:0,type:"tag.less"},{startIndex:3,type:""}]}],[{line:'@test: "I\'m a LESS String";',tokens:[{startIndex:0,type:"variable.less"},{startIndex:5,type:"delimiter.less"},{startIndex:6,type:""},{startIndex:7,type:"string.delimiter.less"},{startIndex:8,type:"string.less"},{startIndex:25,type:"string.delimiter.less"},{startIndex:26,type:"delimiter.less"}]}],[{line:'@test: "concatenated" + "String";',tokens:[{startIndex:0,type:"variable.less"},{startIndex:5,type:"delimiter.less"},{startIndex:6,type:""},{startIndex:7,type:"string.delimiter.less"},{startIndex:8,type:"string.less"},{startIndex:20,type:"string.delimiter.less"},{startIndex:21,type:""},{startIndex:22,type:"operator.less"},{startIndex:23,type:""},{startIndex:24,type:"string.delimiter.less"},{startIndex:25,type:"string.less"},{startIndex:31,type:"string.delimiter.less"},{startIndex:32,type:"delimiter.less"}]}],[{line:'@test: "quote in\'adasdsa\\"asd\' a string"',tokens:[{startIndex:0,type:"variable.less"},{startIndex:5,type:"delimiter.less"},{startIndex:6,type:""},{startIndex:7,type:"string.delimiter.less"},{startIndex:8,type:"string.less"},{startIndex:39,type:"string.delimiter.less"}]}],[{line:"@test: 'doublequote in\"ada\\'sds\\'a\"asd a string'",tokens:[{startIndex:0,type:"variable.less"},{startIndex:5,type:"delimiter.less"},{startIndex:6,type:""},{startIndex:7,type:"string.delimiter.less"},{startIndex:8,type:"string.less"},{startIndex:47,type:"string.delimiter.less"}]}],[{line:"/* start of multiline comment",tokens:[{startIndex:0,type:"comment.less"}]},{line:"a comment between without a star",tokens:[{startIndex:0,type:"comment.less"}]},{line:"end of multiline comment*/",tokens:[{startIndex:0,type:"comment.less"}]},{line:"when /* start a comment",tokens:[{startIndex:0,type:"keyword.less"},{startIndex:4,type:""},{startIndex:5,type:"comment.less"}]},{line:" a ",tokens:[{startIndex:0,type:"comment.less"}]},{line:"and end it */ 2;",tokens:[{startIndex:0,type:"comment.less"},{startIndex:13,type:""},{startIndex:14,type:"attribute.value.number.less"},{startIndex:15,type:"delimiter.less"}]}],[{line:"0",tokens:[{startIndex:0,type:"attribute.value.number.less"}]}],[{line:" 0",tokens:[{startIndex:0,type:""},{startIndex:1,type:"attribute.value.number.less"}]}],[{line:" 0 ",tokens:[{startIndex:0,type:""},{startIndex:1,type:"attribute.value.number.less"},{startIndex:2,type:""}]}],[{line:"0 ",tokens:[{startIndex:0,type:"attribute.value.number.less"},{startIndex:1,type:""}]}],[{line:"@test: 0+0",tokens:[{startIndex:0,type:"variable.less"},{startIndex:5,type:"delimiter.less"},{startIndex:6,type:""},{startIndex:7,type:"attribute.value.number.less"},{startIndex:8,type:"operator.less"},{startIndex:9,type:"attribute.value.number.less"}]}],[{line:"@test: 100+10.00",tokens:[{startIndex:0,type:"variable.less"},{startIndex:5,type:"delimiter.less"},{startIndex:6,type:""},{startIndex:7,type:"attribute.value.number.less"},{startIndex:10,type:"operator.less"},{startIndex:11,type:"attribute.value.number.less"}]}],[{line:"@test: 0 + 0",tokens:[{startIndex:0,type:"variable.less"},{startIndex:5,type:"delimiter.less"},{startIndex:6,type:""},{startIndex:7,type:"attribute.value.number.less"},{startIndex:8,type:""},{startIndex:9,type:"operator.less"},{startIndex:10,type:""},{startIndex:11,type:"attribute.value.number.less"}]}],[{line:"0123",tokens:[{startIndex:0,type:"attribute.value.number.less"}]}],[{line:"#012343",tokens:[{startIndex:0,type:"attribute.value.hex.less"}]}],[{line:"[1,2,3]",tokens:[{startIndex:0,type:"delimiter.bracket.less"},{startIndex:1,type:"attribute.value.number.less"},{startIndex:2,type:"delimiter.less"},{startIndex:3,type:"attribute.value.number.less"},{startIndex:4,type:"delimiter.less"},{startIndex:5,type:"attribute.value.number.less"},{startIndex:6,type:"delimiter.bracket.less"}]}],[{line:"foo(123);",tokens:[{startIndex:0,type:"tag.less"},{startIndex:3,type:"delimiter.parenthesis.less"},{startIndex:4,type:"attribute.value.number.less"},{startIndex:7,type:"delimiter.parenthesis.less"},{startIndex:8,type:"delimiter.less"}]}],[{line:"@test: '[{()}]'",tokens:[{startIndex:0,type:"variable.less"},{startIndex:5,type:"delimiter.less"},{startIndex:6,type:""},{startIndex:7,type:"string.delimiter.less"},{startIndex:8,type:"string.less"},{startIndex:14,type:"string.delimiter.less"}]}],[{line:"//",tokens:[{startIndex:0,type:"comment.less"}]}],[{line:"    // a comment",tokens:[{startIndex:0,type:""},{startIndex:4,type:"comment.less"}]}],[{line:"// a comment",tokens:[{startIndex:0,type:"comment.less"}]}],[{line:"//sticky comment",tokens:[{startIndex:0,type:"comment.less"}]}],[{line:"@something : 2; // my comment // this is a nice one",tokens:[{startIndex:0,type:"variable.less"},{startIndex:10,type:""},{startIndex:11,type:"delimiter.less"},{startIndex:12,type:""},{startIndex:13,type:"attribute.value.number.less"},{startIndex:14,type:"delimiter.less"},{startIndex:15,type:""},{startIndex:16,type:"comment.less"}]}],[{line:".something(@some, @other) when (iscolor(@other)) { aname// my commen",tokens:[{startIndex:0,type:"tag.class.less"},{startIndex:10,type:"delimiter.parenthesis.less"},{startIndex:11,type:"variable.less"},{startIndex:16,type:"delimiter.less"},{startIndex:17,type:""},{startIndex:18,type:"variable.less"},{startIndex:24,type:"delimiter.parenthesis.less"},{startIndex:25,type:""},{startIndex:26,type:"keyword.less"},{startIndex:30,type:""},{startIndex:31,type:"delimiter.parenthesis.less"},{startIndex:32,type:"keyword.less"},{startIndex:39,type:"delimiter.parenthesis.less"},{startIndex:40,type:"variable.less"},{startIndex:46,type:"delimiter.parenthesis.less"},{startIndex:48,type:""},{startIndex:49,type:"delimiter.curly.less"},{startIndex:50,type:""},{startIndex:51,type:"tag.less"},{startIndex:56,type:"comment.less"}]}],[{line:".something(@some//mycomment",tokens:[{startIndex:0,type:"tag.class.less"},{startIndex:10,type:"delimiter.parenthesis.less"},{startIndex:11,type:"variable.less"},{startIndex:16,type:"comment.less"}]}],[{line:"@something : #2;",tokens:[{startIndex:0,type:"variable.less"},{startIndex:10,type:""},{startIndex:11,type:"delimiter.less"},{startIndex:12,type:""},{startIndex:13,type:"attribute.value.hex.less"},{startIndex:15,type:"delimiter.less"}]}],[{line:"/*slcomment*/",tokens:[{startIndex:0,type:"comment.less"}]}],[{line:"/* slcomment */",tokens:[{startIndex:0,type:"comment.less"}]}],[{line:"/*sl/com* ment*/",tokens:[{startIndex:0,type:"comment.less"}]}],[{line:"/**/",tokens:[{startIndex:0,type:"comment.less"}]}],[{line:"@something: /*comm/* * /ent*/2;",tokens:[{startIndex:0,type:"variable.less"},{startIndex:10,type:"delimiter.less"},{startIndex:11,type:""},{startIndex:12,type:"comment.less"},{startIndex:29,type:"attribute.value.number.less"},{startIndex:30,type:"delimiter.less"}]}],[{line:"@something: /*comment*/ 2;",tokens:[{startIndex:0,type:"variable.less"},{startIndex:10,type:"delimiter.less"},{startIndex:11,type:""},{startIndex:12,type:"comment.less"},{startIndex:23,type:""},{startIndex:24,type:"attribute.value.number.less"},{startIndex:25,type:"delimiter.less"}]}],[{line:"/* a multiline comment",tokens:[{startIndex:0,type:"comment.less"}]},{line:"can actually span",tokens:[{startIndex:0,type:"comment.less"}]},{line:"multiple lines */",tokens:[{startIndex:0,type:"comment.less"}]}],[{line:"@some /* start a comment here",tokens:[{startIndex:0,type:"variable.less"},{startIndex:5,type:""},{startIndex:6,type:"comment.less"}]},{line:" span over this line and ",tokens:[{startIndex:0,type:"comment.less"}]},{line:"end it there */ : 2;",tokens:[{startIndex:0,type:"comment.less"},{startIndex:15,type:""},{startIndex:16,type:"delimiter.less"},{startIndex:17,type:""},{startIndex:18,type:"attribute.value.number.less"},{startIndex:19,type:"delimiter.less"}]}],[{line:'.class { filter: ~"ms:alwaysHasItsOwnSyntax.For.Stuff()";',tokens:[{startIndex:0,type:"tag.class.less"},{startIndex:6,type:""},{startIndex:7,type:"delimiter.curly.less"},{startIndex:8,type:""},{startIndex:9,type:"attribute.name.less"},{startIndex:15,type:"delimiter.less"},{startIndex:16,type:""},{startIndex:17,type:"string.delimiter.less"},{startIndex:19,type:"string.less"},{startIndex:55,type:"string.delimiter.less"},{startIndex:56,type:"delimiter.less"}]}],[{line:".class {.mixin (@a) when (@a > 10), (@a < -10) { }",tokens:[{startIndex:0,type:"tag.class.less"},{startIndex:6,type:""},{startIndex:7,type:"delimiter.curly.less"},{startIndex:8,type:"tag.class.less"},{startIndex:14,type:""},{startIndex:15,type:"delimiter.parenthesis.less"},{startIndex:16,type:"variable.less"},{startIndex:18,type:"delimiter.parenthesis.less"},{startIndex:19,type:""},{startIndex:20,type:"keyword.less"},{startIndex:24,type:""},{startIndex:25,type:"delimiter.parenthesis.less"},{startIndex:26,type:"variable.less"},{startIndex:28,type:""},{startIndex:29,type:"operator.less"},{startIndex:30,type:""},{startIndex:31,type:"attribute.value.number.less"},{startIndex:33,type:"delimiter.parenthesis.less"},{startIndex:34,type:"delimiter.less"},{startIndex:35,type:""},{startIndex:36,type:"delimiter.parenthesis.less"},{startIndex:37,type:"variable.less"},{startIndex:39,type:""},{startIndex:40,type:"operator.less"},{startIndex:41,type:""},{startIndex:42,type:"operator.less"},{startIndex:43,type:"attribute.value.number.less"},{startIndex:45,type:"delimiter.parenthesis.less"},{startIndex:46,type:""},{startIndex:47,type:"delimiter.curly.less"},{startIndex:48,type:""},{startIndex:49,type:"delimiter.curly.less"}]}],[{line:".truth (@a) when (@a = true) { }",tokens:[{startIndex:0,type:"tag.class.less"},{startIndex:6,type:""},{startIndex:7,type:"delimiter.parenthesis.less"},{startIndex:8,type:"variable.less"},{startIndex:10,type:"delimiter.parenthesis.less"},{startIndex:11,type:""},{startIndex:12,type:"keyword.less"},{startIndex:16,type:""},{startIndex:17,type:"delimiter.parenthesis.less"},{startIndex:18,type:"variable.less"},{startIndex:20,type:""},{startIndex:21,type:"operator.less"},{startIndex:22,type:""},{startIndex:23,type:"keyword.less"},{startIndex:27,type:"delimiter.parenthesis.less"},{startIndex:28,type:""},{startIndex:29,type:"delimiter.curly.less"},{startIndex:30,type:""},{startIndex:31,type:"delimiter.curly.less"}]}],[{line:".max (@a, @b) when (@a > @b) { width: @a; }",tokens:[{startIndex:0,type:"tag.class.less"},{startIndex:4,type:""},{startIndex:5,type:"delimiter.parenthesis.less"},{startIndex:6,type:"variable.less"},{startIndex:8,type:"delimiter.less"},{startIndex:9,type:""},{startIndex:10,type:"variable.less"},{startIndex:12,type:"delimiter.parenthesis.less"},{startIndex:13,type:""},{startIndex:14,type:"keyword.less"},{startIndex:18,type:""},{startIndex:19,type:"delimiter.parenthesis.less"},{startIndex:20,type:"variable.less"},{startIndex:22,type:""},{startIndex:23,type:"operator.less"},{startIndex:24,type:""},{startIndex:25,type:"variable.less"},{startIndex:27,type:"delimiter.parenthesis.less"},{startIndex:28,type:""},{startIndex:29,type:"delimiter.curly.less"},{startIndex:30,type:""},{startIndex:31,type:"attribute.name.less"},{startIndex:36,type:"delimiter.less"},{startIndex:37,type:""},{startIndex:38,type:"variable.less"},{startIndex:40,type:"delimiter.less"},{startIndex:41,type:""},{startIndex:42,type:"delimiter.curly.less"}]}],[{line:".mixin (@a, @b: 0) when (isnumber(@b)) { }",tokens:[{startIndex:0,type:"tag.class.less"},{startIndex:6,type:""},{startIndex:7,type:"delimiter.parenthesis.less"},{startIndex:8,type:"variable.less"},{startIndex:10,type:"delimiter.less"},{startIndex:11,type:""},{startIndex:12,type:"variable.less"},{startIndex:14,type:"delimiter.less"},{startIndex:15,type:""},{startIndex:16,type:"attribute.value.number.less"},{startIndex:17,type:"delimiter.parenthesis.less"},{startIndex:18,type:""},{startIndex:19,type:"keyword.less"},{startIndex:23,type:""},{startIndex:24,type:"delimiter.parenthesis.less"},{startIndex:25,type:"keyword.less"},{startIndex:33,type:"delimiter.parenthesis.less"},{startIndex:34,type:"variable.less"},{startIndex:36,type:"delimiter.parenthesis.less"},{startIndex:38,type:""},{startIndex:39,type:"delimiter.curly.less"},{startIndex:40,type:""},{startIndex:41,type:"delimiter.curly.less"}]}],[{line:".mixin (@a, @b: black) when (iscolor(@b)) { }",tokens:[{startIndex:0,type:"tag.class.less"},{startIndex:6,type:""},{startIndex:7,type:"delimiter.parenthesis.less"},{startIndex:8,type:"variable.less"},{startIndex:10,type:"delimiter.less"},{startIndex:11,type:""},{startIndex:12,type:"variable.less"},{startIndex:14,type:"delimiter.less"},{startIndex:15,type:""},{startIndex:16,type:"attribute.value.less"},{startIndex:21,type:"delimiter.parenthesis.less"},{startIndex:22,type:""},{startIndex:23,type:"keyword.less"},{startIndex:27,type:""},{startIndex:28,type:"delimiter.parenthesis.less"},{startIndex:29,type:"keyword.less"},{startIndex:36,type:"delimiter.parenthesis.less"},{startIndex:37,type:"variable.less"},{startIndex:39,type:"delimiter.parenthesis.less"},{startIndex:41,type:""},{startIndex:42,type:"delimiter.curly.less"},{startIndex:43,type:""},{startIndex:44,type:"delimiter.curly.less"}]}],[{line:"@test: `function display()` //works well",tokens:[{startIndex:0,type:"variable.less"},{startIndex:5,type:"delimiter.less"},{startIndex:6,type:""},{startIndex:7,type:"delimiter.backtick.less"},{startIndex:8,type:"keyword.js"},{startIndex:16,type:""},{startIndex:17,type:"identifier.js"},{startIndex:24,type:"delimiter.parenthesis.js"},{startIndex:26,type:"delimiter.backtick.less"},{startIndex:27,type:""},{startIndex:28,type:"comment.less"}]}],[{line:".box-shadow(inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6));",tokens:[{startIndex:0,type:"tag.class.less"},{startIndex:11,type:"delimiter.parenthesis.less"},{startIndex:12,type:"attribute.value.less"},{startIndex:17,type:""},{startIndex:18,type:"attribute.value.number.less"},{startIndex:19,type:""},{startIndex:20,type:"attribute.value.number.less"},{startIndex:21,type:"attribute.value.unit.less"},{startIndex:23,type:""},{startIndex:24,type:"attribute.value.number.less"},{startIndex:25,type:"attribute.value.unit.less"},{startIndex:27,type:""},{startIndex:28,type:"attribute.value.less"},{startIndex:32,type:"delimiter.parenthesis.less"},{startIndex:33,type:"attribute.value.number.less"},{startIndex:34,type:"delimiter.less"},{startIndex:35,type:"attribute.value.number.less"},{startIndex:36,type:"delimiter.less"},{startIndex:37,type:"attribute.value.number.less"},{startIndex:38,type:"delimiter.less"},{startIndex:39,type:"attribute.value.number.less"},{startIndex:43,type:"delimiter.parenthesis.less"},{startIndex:44,type:"delimiter.less"},{startIndex:45,type:""},{startIndex:46,type:"attribute.value.number.less"},{startIndex:47,type:""},{startIndex:48,type:"attribute.value.number.less"},{startIndex:49,type:""},{startIndex:50,type:"attribute.value.number.less"},{startIndex:51,type:"attribute.value.unit.less"},{startIndex:53,type:""},{startIndex:54,type:"attribute.value.less"},{startIndex:58,type:"delimiter.parenthesis.less"},{startIndex:59,type:"attribute.value.number.less"},{startIndex:61,type:"delimiter.less"},{startIndex:62,type:"attribute.value.number.less"},{startIndex:65,type:"delimiter.less"},{startIndex:66,type:"attribute.value.number.less"},{startIndex:69,type:"delimiter.less"},{startIndex:70,type:"attribute.value.number.less"},{startIndex:72,type:"delimiter.parenthesis.less"},{startIndex:74,type:"delimiter.less"}]}],[{line:'input[type="radio"]',tokens:[{startIndex:0,type:"tag.less"},{startIndex:5,type:"delimiter.bracket.less"},{startIndex:6,type:"tag.less"},{startIndex:10,type:"operator.less"},{startIndex:11,type:"string.delimiter.less"},{startIndex:12,type:"string.less"},{startIndex:17,type:"string.delimiter.less"},{startIndex:18,type:"delimiter.bracket.less"}]}],[{line:"~'.offset@{index}')",tokens:[{startIndex:0,type:"string.delimiter.less"},{startIndex:2,type:"string.less"},{startIndex:17,type:"string.delimiter.less"},{startIndex:18,type:"delimiter.parenthesis.less"}]}],[{line:'some("\\42");',tokens:[{startIndex:0,type:"tag.less"},{startIndex:4,type:"delimiter.parenthesis.less"},{startIndex:5,type:"string.delimiter.less"},{startIndex:6,type:"string.less"},{startIndex:9,type:"string.delimiter.less"},{startIndex:10,type:"delimiter.parenthesis.less"},{startIndex:11,type:"delimiter.less"}]}],[{line:' ~ "icon-"',tokens:[{startIndex:0,type:""},{startIndex:1,type:"operator.less"},{startIndex:2,type:""},{startIndex:3,type:"string.delimiter.less"},{startIndex:4,type:"string.less"},{startIndex:9,type:"string.delimiter.less"}]}],[{line:'class^="icon-"',tokens:[{startIndex:0,type:"tag.less"},{startIndex:5,type:"operator.less"},{startIndex:7,type:"string.delimiter.less"},{startIndex:8,type:"string.less"},{startIndex:13,type:"string.delimiter.less"}]}],[{line:'class*="icon-"',tokens:[{startIndex:0,type:"tag.less"},{startIndex:5,type:"operator.less"},{startIndex:7,type:"string.delimiter.less"},{startIndex:8,type:"string.less"},{startIndex:13,type:"string.delimiter.less"}]}],[{line:'class~="icon-"',tokens:[{startIndex:0,type:"tag.less"},{startIndex:5,type:"operator.less"},{startIndex:7,type:"string.delimiter.less"},{startIndex:8,type:"string.less"},{startIndex:13,type:"string.delimiter.less"}]}],[{line:'class ~ = "icon-"',tokens:[{startIndex:0,type:"tag.less"},{startIndex:5,type:""},{startIndex:6,type:"operator.less"},{startIndex:7,type:""},{startIndex:8,type:"operator.less"},{startIndex:9,type:""},{startIndex:10,type:"string.delimiter.less"},{startIndex:11,type:"string.less"},{startIndex:16,type:"string.delimiter.less"}]}],[{line:'class|="icon-"',tokens:[{startIndex:0,type:"tag.less"},{startIndex:5,type:"operator.less"},{startIndex:7,type:"string.delimiter.less"},{startIndex:8,type:"string.less"},{startIndex:13,type:"string.delimiter.less"}]}],[{line:".hide-text { font: 0/0 a; }",tokens:[{startIndex:0,type:"tag.class.less"},{startIndex:10,type:""},{startIndex:11,type:"delimiter.curly.less"},{startIndex:12,type:""},{startIndex:13,type:"attribute.name.less"},{startIndex:17,type:"delimiter.less"},{startIndex:18,type:""},{startIndex:19,type:"attribute.value.number.less"},{startIndex:20,type:"operator.less"},{startIndex:21,type:"attribute.value.number.less"},{startIndex:22,type:""},{startIndex:23,type:"attribute.value.less"},{startIndex:24,type:"delimiter.less"},{startIndex:25,type:""},{startIndex:26,type:"delimiter.curly.less"}]}],[{line:".translate3d(@x, @y, @z) { -webkit-transform: translate3d(@x, @y, @z); }",tokens:[{startIndex:0,type:"tag.class.less"},{startIndex:12,type:"delimiter.parenthesis.less"},{startIndex:13,type:"variable.less"},{startIndex:15,type:"delimiter.less"},{startIndex:16,type:""},{startIndex:17,type:"variable.less"},{startIndex:19,type:"delimiter.less"},{startIndex:20,type:""},{startIndex:21,type:"variable.less"},{startIndex:23,type:"delimiter.parenthesis.less"},{startIndex:24,type:""},{startIndex:25,type:"delimiter.curly.less"},{startIndex:26,type:""},{startIndex:27,type:"attribute.name.less"},{startIndex:44,type:"delimiter.less"},{startIndex:45,type:""},{startIndex:46,type:"attribute.value.less"},{startIndex:57,type:"delimiter.parenthesis.less"},{startIndex:58,type:"variable.less"},{startIndex:60,type:"delimiter.less"},{startIndex:61,type:""},{startIndex:62,type:"variable.less"},{startIndex:64,type:"delimiter.less"},{startIndex:65,type:""},{startIndex:66,type:"variable.less"},{startIndex:68,type:"delimiter.parenthesis.less"},{startIndex:69,type:"delimiter.less"},{startIndex:70,type:""},{startIndex:71,type:"delimiter.curly.less"}]}],[{line:'.dropdown-menu > li > a:hover > [class=" icon-"]',tokens:[{startIndex:0,type:"tag.class.less"},{startIndex:14,type:""},{startIndex:15,type:"operator.less"},{startIndex:16,type:""},{startIndex:17,type:"tag.less"},{startIndex:19,type:""},{startIndex:20,type:"operator.less"},{startIndex:21,type:""},{startIndex:22,type:"tag.less"},{startIndex:29,type:""},{startIndex:30,type:"operator.less"},{startIndex:31,type:""},{startIndex:32,type:"delimiter.bracket.less"},{startIndex:33,type:"tag.less"},{startIndex:38,type:"operator.less"},{startIndex:39,type:"string.delimiter.less"},{startIndex:40,type:"string.less"},{startIndex:46,type:"string.delimiter.less"},{startIndex:47,type:"delimiter.bracket.less"}]}],[{line:".bw-gradient(@color: #F5F5F5, @start: 0, @stop: 255) { background: -webkit-gradient(color-stop(0, rgb(@start,@start,@start)), color-stop(1, rgb(@stop,@stop,@stop))); }",tokens:[{startIndex:0,type:"tag.class.less"},{startIndex:12,type:"delimiter.parenthesis.less"},{startIndex:13,type:"variable.less"},{startIndex:19,type:"delimiter.less"},{startIndex:20,type:""},{startIndex:21,type:"attribute.value.hex.less"},{startIndex:28,type:"delimiter.less"},{startIndex:29,type:""},{startIndex:30,type:"variable.less"},{startIndex:36,type:"delimiter.less"},{startIndex:37,type:""},{startIndex:38,type:"attribute.value.number.less"},{startIndex:39,type:"delimiter.less"},{startIndex:40,type:""},{startIndex:41,type:"variable.less"},{startIndex:46,type:"delimiter.less"},{startIndex:47,type:""},{startIndex:48,type:"attribute.value.number.less"},{startIndex:51,type:"delimiter.parenthesis.less"},{startIndex:52,type:""},{startIndex:53,type:"delimiter.curly.less"},{startIndex:54,type:""},{startIndex:55,type:"attribute.name.less"},{startIndex:65,type:"delimiter.less"},{startIndex:66,type:""},{startIndex:67,type:"attribute.value.less"},{startIndex:83,type:"delimiter.parenthesis.less"},{startIndex:84,type:"attribute.value.less"},{startIndex:94,type:"delimiter.parenthesis.less"},{startIndex:95,type:"attribute.value.number.less"},{startIndex:96,type:"delimiter.less"},{startIndex:97,type:""},{startIndex:98,type:"attribute.value.less"},{startIndex:101,type:"delimiter.parenthesis.less"},{startIndex:102,type:"variable.less"},{startIndex:108,type:"delimiter.less"},{startIndex:109,type:"variable.less"},{startIndex:115,type:"delimiter.less"},{startIndex:116,type:"variable.less"},{startIndex:122,type:"delimiter.parenthesis.less"},{startIndex:124,type:"delimiter.less"},{startIndex:125,type:""},{startIndex:126,type:"attribute.value.less"},{startIndex:136,type:"delimiter.parenthesis.less"},{startIndex:137,type:"attribute.value.number.less"},{startIndex:138,type:"delimiter.less"},{startIndex:139,type:""},{startIndex:140,type:"attribute.value.less"},{startIndex:143,type:"delimiter.parenthesis.less"},{startIndex:144,type:"variable.less"},{startIndex:149,type:"delimiter.less"},{startIndex:150,type:"variable.less"},{startIndex:155,type:"delimiter.less"},{startIndex:156,type:"variable.less"},{startIndex:161,type:"delimiter.parenthesis.less"},{startIndex:164,type:"delimiter.less"},{startIndex:165,type:""},{startIndex:166,type:"delimiter.curly.less"}]}],[{line:"      body ",tokens:[{startIndex:0,type:""},{startIndex:6,type:"tag.less"},{startIndex:10,type:""}]}],[{line:"body {",tokens:[{startIndex:0,type:"tag.less"},{startIndex:4,type:""},{startIndex:5,type:"delimiter.curly.less"}]},{line:"  margin: 0;",tokens:[{startIndex:0,type:""},{startIndex:2,type:"attribute.name.less"},{startIndex:8,type:"delimiter.less"},{startIndex:9,type:""},{startIndex:10,type:"attribute.value.number.less"},{startIndex:11,type:"delimiter.less"}]},{line:"  padding: 3em 6em;",tokens:[{startIndex:0,type:""},{startIndex:2,type:"attribute.name.less"},{startIndex:9,type:"delimiter.less"},{startIndex:10,type:""},{startIndex:11,type:"attribute.value.number.less"},{startIndex:12,type:"attribute.value.unit.less"},{startIndex:14,type:""},{startIndex:15,type:"attribute.value.number.less"},{startIndex:16,type:"attribute.value.unit.less"},{startIndex:18,type:"delimiter.less"}]},{line:"  font-family: tahoma, arial, sans-serif;",tokens:[{startIndex:0,type:""},{startIndex:2,type:"attribute.name.less"},{startIndex:13,type:"delimiter.less"},{startIndex:14,type:""},{startIndex:15,type:"attribute.value.less"},{startIndex:21,type:"delimiter.less"},{startIndex:22,type:""},{startIndex:23,type:"attribute.value.less"},{startIndex:28,type:"delimiter.less"},{startIndex:29,type:""},{startIndex:30,type:"attribute.value.less"},{startIndex:40,type:"delimiter.less"}]},{line:"  text-decoration: none !important;",tokens:[{startIndex:0,type:""},{startIndex:2,type:"attribute.name.less"},{startIndex:17,type:"delimiter.less"},{startIndex:18,type:""},{startIndex:19,type:"attribute.value.less"},{startIndex:23,type:""},{startIndex:24,type:"keyword.less"},{startIndex:34,type:"delimiter.less"}]},{line:"  color: #000;",tokens:[{startIndex:0,type:""},{startIndex:2,type:"attribute.name.less"},{startIndex:7,type:"delimiter.less"},{startIndex:8,type:""},{startIndex:9,type:"attribute.value.hex.less"},{startIndex:13,type:"delimiter.less"}]},{line:"  }",tokens:[{startIndex:0,type:""},{startIndex:2,type:"delimiter.curly.less"}]}],[{line:"* { padding: 3em -9pt -0.5px; }",tokens:[{startIndex:0,type:"operator.less"},{startIndex:1,type:""},{startIndex:2,type:"delimiter.curly.less"},{startIndex:3,type:""},{startIndex:4,type:"attribute.name.less"},{startIndex:11,type:"delimiter.less"},{startIndex:12,type:""},{startIndex:13,type:"attribute.value.number.less"},{startIndex:14,type:"attribute.value.unit.less"},{startIndex:16,type:""},{startIndex:17,type:"operator.less"},{startIndex:18,type:"attribute.value.number.less"},{startIndex:19,type:"attribute.value.unit.less"},{startIndex:21,type:""},{startIndex:22,type:"operator.less"},{startIndex:23,type:"attribute.value.number.less"},{startIndex:26,type:"attribute.value.unit.less"},{startIndex:28,type:"delimiter.less"},{startIndex:29,type:""},{startIndex:30,type:"delimiter.curly.less"}]}],[{line:"h1 /*comment*/ p {",tokens:[{startIndex:0,type:"tag.less"},{startIndex:2,type:""},{startIndex:3,type:"comment.less"},{startIndex:14,type:""},{startIndex:15,type:"tag.less"},{startIndex:16,type:""},{startIndex:17,type:"delimiter.curly.less"}]}],[{line:"h1 /*com",tokens:[{startIndex:0,type:"tag.less"},{startIndex:2,type:""},{startIndex:3,type:"comment.less"}]},{line:"ment*/ p",tokens:[{startIndex:0,type:"comment.less"},{startIndex:6,type:""},{startIndex:7,type:"tag.less"}]}],[{line:"#myID {",tokens:[{startIndex:0,type:"tag.id.less"},{startIndex:5,type:""},{startIndex:6,type:"delimiter.curly.less"}]}],[{line:".myID {",tokens:[{startIndex:0,type:"tag.class.less"},{startIndex:5,type:""},{startIndex:6,type:"delimiter.curly.less"}]}],[{line:'@import url("something.less");',tokens:[{startIndex:0,type:"keyword.less"},{startIndex:7,type:""},{startIndex:8,type:"tag.less"},{startIndex:12,type:"string.delimiter.less"},{startIndex:13,type:"string.less"},{startIndex:27,type:"string.delimiter.less"},{startIndex:28,type:"delimiter.parenthesis.less"},{startIndex:29,type:"delimiter.less"}]}],[{line:"body {",tokens:[{startIndex:0,type:"tag.less"},{startIndex:4,type:""},{startIndex:5,type:"delimiter.curly.less"}]},{line:'  content: "con\\',tokens:[{startIndex:0,type:""},{startIndex:2,type:"attribute.name.less"},{startIndex:9,type:"delimiter.less"},{startIndex:10,type:""},{startIndex:11,type:"string.delimiter.less"},{startIndex:12,type:"string.less"}]},{line:'tent";',tokens:[{startIndex:0,type:"string.less"},{startIndex:4,type:"string.delimiter.less"},{startIndex:5,type:"delimiter.less"}]}],[{line:"body {",tokens:[{startIndex:0,type:"tag.less"},{startIndex:4,type:""},{startIndex:5,type:"delimiter.curly.less"}]},{line:'  content: "";',tokens:[{startIndex:0,type:""},{startIndex:2,type:"attribute.name.less"},{startIndex:9,type:"delimiter.less"},{startIndex:10,type:""},{startIndex:11,type:"string.delimiter.less"},{startIndex:13,type:"delimiter.less"}]}],[{line:"@font-face {",tokens:[{startIndex:0,type:"variable.less"},{startIndex:10,type:""},{startIndex:11,type:"delimiter.curly.less"}]},{line:'  font-family: "Opificio";',tokens:[{startIndex:0,type:""},{startIndex:2,type:"attribute.name.less"},{startIndex:13,type:"delimiter.less"},{startIndex:14,type:""},{startIndex:15,type:"string.delimiter.less"},{startIndex:16,type:"string.less"},{startIndex:24,type:"string.delimiter.less"},{startIndex:25,type:"delimiter.less"}]}],[{line:'"s\\"tr\\"sadsad',tokens:[{startIndex:0,type:"string.delimiter.less"},{startIndex:1,type:"string.less"}]}],[{line:"p{}",tokens:[{startIndex:0,type:"tag.less"},{startIndex:1,type:"delimiter.curly.less"}]}],[{line:"p:nth() {}",tokens:[{startIndex:0,type:"tag.less"},{startIndex:5,type:"delimiter.parenthesis.less"},{startIndex:7,type:""},{startIndex:8,type:"delimiter.curly.less"}]}],[{line:'@import url("something.css");@import url("something.css");',tokens:[{startIndex:0,type:"keyword.less"},{startIndex:7,type:""},{startIndex:8,type:"tag.less"},{startIndex:12,type:"string.delimiter.less"},{startIndex:13,type:"string.less"},{startIndex:26,type:"string.delimiter.less"},{startIndex:27,type:"delimiter.parenthesis.less"},{startIndex:28,type:"delimiter.less"},{startIndex:29,type:"keyword.less"},{startIndex:36,type:""},{startIndex:37,type:"tag.less"},{startIndex:41,type:"string.delimiter.less"},{startIndex:42,type:"string.less"},{startIndex:55,type:"string.delimiter.less"},{startIndex:56,type:"delimiter.parenthesis.less"},{startIndex:57,type:"delimiter.less"}]}],[{line:'""""',tokens:[{startIndex:0,type:"string.delimiter.less"}]}],[{line:'@import url("something.css");',tokens:[{startIndex:0,type:"keyword.less"},{startIndex:7,type:""},{startIndex:8,type:"tag.less"},{startIndex:12,type:"string.delimiter.less"},{startIndex:13,type:"string.less"},{startIndex:26,type:"string.delimiter.less"},{startIndex:27,type:"delimiter.parenthesis.less"},{startIndex:28,type:"delimiter.less"}]},{line:".rule1{}",tokens:[{startIndex:0,type:"tag.class.less"},{startIndex:6,type:"delimiter.curly.less"}]},{line:".rule2{}",tokens:[{startIndex:0,type:"tag.class.less"},{startIndex:6,type:"delimiter.curly.less"}]}],[{line:"@-webkit-keyframes infinite-spinning {",tokens:[{startIndex:0,type:"variable.less"},{startIndex:18,type:""},{startIndex:19,type:"tag.less"},{startIndex:36,type:""},{startIndex:37,type:"delimiter.curly.less"}]},{line:"  from {",tokens:[{startIndex:0,type:""},{startIndex:2,type:"tag.less"},{startIndex:6,type:""},{startIndex:7,type:"delimiter.curly.less"}]},{line:"  -webkit-transform: rotate(0deg);",tokens:[{startIndex:0,type:""},{startIndex:2,type:"attribute.name.less"},{startIndex:19,type:"delimiter.less"},{startIndex:20,type:""},{startIndex:21,type:"attribute.value.less"},{startIndex:27,type:"delimiter.parenthesis.less"},{startIndex:28,type:"attribute.value.number.less"},{startIndex:29,type:"attribute.value.unit.less"},{startIndex:32,type:"delimiter.parenthesis.less"},{startIndex:33,type:"delimiter.less"}]},{line:"\t }",tokens:[{startIndex:0,type:""},{startIndex:2,type:"delimiter.curly.less"}]},{line:"  to {",tokens:[{startIndex:0,type:""},{startIndex:2,type:"tag.less"},{startIndex:4,type:""},{startIndex:5,type:"delimiter.curly.less"}]},{line:"  -webkit-transform: rotate(360deg);",tokens:[{startIndex:0,type:""},{startIndex:2,type:"attribute.name.less"},{startIndex:19,type:"delimiter.less"},{startIndex:20,type:""},{startIndex:21,type:"attribute.value.less"},{startIndex:27,type:"delimiter.parenthesis.less"},{startIndex:28,type:"attribute.value.number.less"},{startIndex:31,type:"attribute.value.unit.less"},{startIndex:34,type:"delimiter.parenthesis.less"},{startIndex:35,type:"delimiter.less"}]},{line:"\t }",tokens:[{startIndex:0,type:""},{startIndex:2,type:"delimiter.curly.less"}]},{line:"}",tokens:[{startIndex:0,type:"delimiter.curly.less"}]}]])}));