(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{271:function(t,a,s){"use strict";s.r(a);var n=s(3),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{attrs:{align:"center"}},[s("h1",[t._v("EonX - EasyPagination")]),t._v(" "),s("p",[t._v("Provides a generic way to handle pagination data from clients.")])]),t._v(" "),s("hr"),t._v(" "),s("h1",{attrs:{id:"startsizeasarrayinqueryresolver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#startsizeasarrayinqueryresolver"}},[t._v("#")]),t._v(" StartSizeAsArrayInQueryResolver")]),t._v(" "),s("p",[t._v("This resolver will look for pagination data in the request query parameters as well, but this time as an array:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("<url>?page[page]=1&page[perPage]=15")])]),t._v(" "),s("li",[s("code",[t._v("<url>?pagination[_page]=1&pagination[_per_age]=15")])]),t._v(" "),s("li",[s("code",[t._v("<url>?page_data[number]=1&page_data[size]=15")])]),t._v(" "),s("li",[s("code",[t._v("<url>?whatever[offset]=0&whatever[limit]=15")])])]),t._v(" "),s("h1",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyPagination"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Resolvers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("StartSizeConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyPagination"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Resolvers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("StartSizeInQueryResolver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Request: <url>?page[number]=2&page[size]=30")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$config")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StartSizeConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'number'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'size'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Instantiate config according to your needs")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Instantiate the resolver with your config and the name of the query parameter containing the pagination data")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resolver")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StartSizeInQueryResolver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'page'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Then resolve the data for the given request")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 30")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);