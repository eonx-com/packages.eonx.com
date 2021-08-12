(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{261:function(t,e,a){"use strict";a.r(e);var r=a(3),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{attrs:{align:"center"}},[a("h1",[t._v("EonX - EasyPagination")]),t._v(" "),a("p",[t._v("Provides a generic way to handle pagination data from clients.")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("You are wondering if this package could be useful to you, right? Here are some points to help you find out:")]),t._v(" "),a("ul",[a("li",[t._v("You have an PHP application")]),t._v(" "),a("li",[t._v("You have to handle pagination data from your clients")]),t._v(" "),a("li",[t._v('You are sick of having to resolve the "page" and "perPage" (or however you want to call those parameters) again and again')]),t._v(" "),a("li",[t._v('Or sick of hearing "The pagination doesn\'t work for the blog posts comments" and realise you have a typo in "parPage"')]),t._v(" "),a("li",[t._v("...")])]),t._v(" "),a("p",[t._v("This package provides you with out-the-box tools to implement a generic, centralised and consistent pagination data\nhandling system to keep you away from any troubles 😃")]),t._v(" "),a("h1",{attrs:{id:"documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[t._v("#")]),t._v(" Documentation")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("The recommended way to install this package is to use "),a("a",{attrs:{href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Composer"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" require eonx-com/easy-pagination\n")])])]),a("h2",{attrs:{id:"how-it-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[t._v("#")]),t._v(" How it works")]),t._v(" "),a("p",[t._v('This package provides different "resolvers" which will extract the pagination data from a request according to your\nconfiguration. To guarantee interoperability, the resolvers expect a '),a("a",{attrs:{href:"https://www.php-fig.org/psr/psr-7/#15-server-side-requests",target:"_blank",rel:"noopener noreferrer"}},[t._v("PSR7 ServerRequestInterface"),a("OutboundLink")],1),t._v(", if your project\nuses it too then perfect! But no stress if it doesn't you can use the "),a("a",{attrs:{href:"https://github.com/EonX/EasyPsr7Factory",target:"_blank",rel:"noopener noreferrer"}},[t._v("EasyPsr7Factory"),a("OutboundLink")],1),t._v(" package which will convert\nyour requests for you!")]),t._v(" "),a("h2",{attrs:{id:"resolvers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolvers"}},[t._v("#")]),t._v(" Resolvers")]),t._v(" "),a("p",[t._v("Can't you find your happiness in the existing resolvers? Please let us know or even better create a PR 😃")]),t._v(" "),a("h3",{attrs:{id:"startsize-resolvers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#startsize-resolvers"}},[t._v("#")]),t._v(" StartSize Resolvers")]),t._v(" "),a("p",[t._v('The "StartSize" resolvers assume your pagination is based on only 2 attributes to define the start and its size. What\nare those attributes names or default values? This is up to you!\nA '),a("code",[t._v("StartSizeConfigInterface")]),t._v(" (and its default implementation) is here for you to define all that as you want.")]),t._v(" "),a("p",[t._v("Here are some examples of configuration you can have:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("start_attributes")]),t._v(" "),a("th",[t._v("start_default")]),t._v(" "),a("th",[t._v("size_attribute")]),t._v(" "),a("th",[t._v("size_default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("page")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("perPage")]),t._v(" "),a("td",[t._v("15")])]),t._v(" "),a("tr",[a("td",[t._v("_page")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("_per_page")]),t._v(" "),a("td",[t._v("15")])]),t._v(" "),a("tr",[a("td",[t._v("number")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("size")]),t._v(" "),a("td",[t._v("15")])]),t._v(" "),a("tr",[a("td",[t._v("offset")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("limit")]),t._v(" "),a("td",[t._v("30")])])])]),t._v(" "),a("h5",{attrs:{id:"startsize-resolvers-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#startsize-resolvers-list"}},[t._v("#")]),t._v(" StartSize Resolvers List")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/packages/easy-pagination/docs/resolvers/startsize_in_query_resolver.html"}},[t._v("StartSizeInQueryResolver")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/packages/easy-pagination/docs/resolvers/startsize_as_array_in_query_resolver.html"}},[t._v("StartSizeAsArrayInQueryResolver")])],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);