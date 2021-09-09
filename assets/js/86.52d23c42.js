(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{297:function(e,t,s){"use strict";s.r(t);var a=s(3),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Microservices infrastructures are common, one request can involve N different applications sending requests to each other,\nand it can be hard to link events occurring across them. This package objective is to create a standard way in PHP projects\nto resolve/share IDs across projects so linking requests becomes easier!")]),e._v(" "),s("p",[e._v("It is based on 2 different IDs:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("request_id:")]),e._v(" ID of request specific to each project")]),e._v(" "),s("li",[s("strong",[e._v("correlation_id:")]),e._v(" shared ID across projects for the same initial request")])]),e._v(" "),s("p",[e._v("On the top of resolving those IDs for you, this package also comes with bridges to different packages to automatically\ninclude those IDs in your:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("bugsnag notifications:")]),e._v(" using "),s("a",{attrs:{href:"https://github.com/eonx-com/easy-bugsnag",target:"_blank",rel:"noopener noreferrer"}},[e._v("EasyBugsnag"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("strong",[e._v("error responses:")]),e._v(" using "),s("a",{attrs:{href:"https://github.com/eonx-com/easy-error-handler",target:"_blank",rel:"noopener noreferrer"}},[e._v("EasyErrorHandler"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("strong",[e._v("logs:")]),e._v(" using "),s("a",{attrs:{href:"https://github.com/eonx-com/easy-error-logging",target:"_blank",rel:"noopener noreferrer"}},[e._v("EasyLogging"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("strong",[e._v("webhooks:")]),e._v(" using "),s("a",{attrs:{href:"https://github.com/eonx-com/easy-webhook",target:"_blank",rel:"noopener noreferrer"}},[e._v("EasyWebhook"),s("OutboundLink")],1)])]),e._v(" "),s("br"),e._v(" "),s("h3",{attrs:{id:"dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),s("p",[e._v("This package has dependencies on the following packages, please see their documentation directly:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/eonx-com/easy-random",target:"_blank",rel:"noopener noreferrer"}},[e._v("EasyRandom"),s("OutboundLink")],1)])]),e._v(" "),s("br"),e._v(" "),s("h3",{attrs:{id:"require-package-composer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#require-package-composer"}},[e._v("#")]),e._v(" Require package (Composer)")]),e._v(" "),s("p",[e._v("The recommended way to install this package is to use "),s("a",{attrs:{href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Composer"),s("OutboundLink")],1),e._v(":")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("composer")]),e._v(" require eonx-com/easy-request-id\n")])])]),s("h3",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("p",[e._v("This package is based on a single service providing the requestId and correlationId anywhere you need them:")]),e._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// src/Controller/MyController.php")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[e._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Controller")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[e._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("EasyRequestId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Interfaces"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("RequestIdServiceInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("final")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MyController")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * @var \\EonX\\EasyRequestId\\Interfaces\\RequestIdServiceInterface\n     */")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("private")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$requestIdService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("__construct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[e._v("RequestIdServiceInterface")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$requestIdService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("requestIdService")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$requestIdService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("__invoke")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$requestId")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("requestIdService")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("getRequestId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$correlationId")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("requestIdService")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("getCorrelationId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Use the IDs in your logic...")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);