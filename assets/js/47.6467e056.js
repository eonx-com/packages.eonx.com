(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{236:function(a,t,s){"use strict";s.r(t);var n=s(3),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),s("p",[a._v("The EasyErrorHandler package seamlessly integrates with your favourite framework. Once the package has been installed\nand enabled, all exceptions handled by your framework will use the EasyErrorHandler package to generate error responses\nand reports.")]),a._v(" "),s("h2",{attrs:{id:"using-explicitly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-explicitly"}},[a._v("#")]),a._v(" Using explicitly")]),a._v(" "),s("p",[a._v("You can also use the package to explicitly report an exception at any point in your application. Since\n"),s("code",[a._v("\\EonX\\EasyErrorHandler\\Interfaces\\ErrorHandlerInterface")]),a._v(" is registered as a service in your framework, you can use\ndependency injection to use it within your application. For example:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// src/Service/MyService.php")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("namespace")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[a._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("use")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[a._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("EasyErrorHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Interfaces"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("ErrorHandlerInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyService")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n     * @var \\EonX\\EasyErrorHandler\\Interfaces\\ErrorHandlerInterface\n     */")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$errorHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("__construct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[a._v("ErrorHandlerInterface")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$errorHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("errorHandler")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$errorHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword return-type"}},[a._v("void")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("try")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Do something...")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("catch")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Throwable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$throwable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("errorHandler")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("report")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$throwable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"symfony"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symfony"}},[a._v("#")]),a._v(" Symfony")]),a._v(" "),s("p",[a._v("Due to the "),s("a",{attrs:{href:"https://symfony.com/doc/current/service_container/autowiring.html#autowiring-calls",target:"_blank",rel:"noopener noreferrer"}},[a._v("Autowiring via setters"),s("OutboundLink")],1),a._v(" feature of Symfony, you can use\n"),s("code",[a._v("\\EonX\\EasyErrorHandler\\Traits\\ErrorHandlerAwareTrait")]),a._v(" to simplify the injection of\n"),s("code",[a._v("\\EonX\\EasyErrorHandler\\Interfaces\\ErrorHandlerInterface")]),a._v(".")])])}),[],!1,null,null,null);t.default=e.exports}}]);