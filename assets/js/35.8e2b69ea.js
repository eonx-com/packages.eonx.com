(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{227:function(t,a,s){"use strict";s.r(a);var n=s(3),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("This EasyBugsnag package provides a simple drop-in implementation of "),s("a",{attrs:{href:"https://docs.bugsnag.com/platforms/php/other/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bugsnag"),s("OutboundLink")],1),t._v(" in your favourite PHP frameworks or\nplain PHP app.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("The only configuration required for the package is to set the Bugsnag Integration API Key for your project. See\n"),s("RouterLink",{attrs:{to:"/packages/easy-bugsnag/config.html"}},[t._v("Configuration")]),t._v(" for more information.")],1)]),t._v(" "),s("h2",{attrs:{id:"usage-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-overview"}},[t._v("#")]),t._v(" Usage overview")]),t._v(" "),s("p",[t._v("Once installed in your PHP framework, this package will allow you to inject the Bugsnag client anywhere you like and\nstart notifying Bugsnag about your errors and exceptions.")]),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/Exception/Handler.php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Exception")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Bugsnag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Client")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExceptionHandler")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @var \\Bugsnag\\Client\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$client")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__construct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("Client")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$client")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("client")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$client")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("report")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified type-declaration"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Throwable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$throwable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword return-type"}},[t._v("void")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Notify Bugsnag of your throwable")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("client")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("notifyException")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$throwable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"client-factory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#client-factory"}},[t._v("#")]),t._v(" Client factory")]),t._v(" "),s("p",[t._v("The core functionality of the EasyBugsnag package is to create a Bugsnag client instance and make it available to your\napplication, so you can focus on notifying your errors/exceptions instead of the boilerplate Bugsnag setup. It uses a\n"),s("strong",[t._v("client factory")]),t._v(" to do this. For more information, see "),s("RouterLink",{attrs:{to:"/packages/easy-bugsnag/client-factory.html"}},[t._v("Client factory")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"configurators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configurators"}},[t._v("#")]),t._v(" Configurators")]),t._v(" "),s("p",[t._v("The client factory allows you to set a collection of "),s("strong",[t._v("client configurators")]),t._v(". Once the client has been instantiated,\nthe client factory will loop through the configurators, providing them the client instance to be configured. See\n"),s("RouterLink",{attrs:{to:"/packages/easy-bugsnag/configurators.html"}},[t._v("Client configurators")]),t._v(" for more information.")],1),t._v(" "),s("h3",{attrs:{id:"session-tracking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session-tracking"}},[t._v("#")]),t._v(" Session tracking")]),t._v(" "),s("p",[t._v("Bugsnag can track the number of "),s("strong",[t._v("sessions")]),t._v(" that happen in your application, which enables Bugsnag to provide stability\nscores for comparison across releases of your application. You can enable and configure session tracking for\nEasyBugsnag. See "),s("RouterLink",{attrs:{to:"/packages/easy-bugsnag/session-tracking.html"}},[t._v("Session tracking")]),t._v(" for more information.")],1),t._v(" "),s("h3",{attrs:{id:"worker-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#worker-information"}},[t._v("#")]),t._v(" Worker information")]),t._v(" "),s("p",[t._v("For Symfony applications, you can include information about the worker as metadata in Bugsnag reports. See\n"),s("RouterLink",{attrs:{to:"/packages/easy-bugsnag/worker-info.html"}},[t._v("Worker information")]),t._v(" for more information.")],1),t._v(" "),s("h3",{attrs:{id:"aws-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aws-information"}},[t._v("#")]),t._v(" AWS information")]),t._v(" "),s("p",[t._v("You can include information about the AWS ECS Fargate task as metadata in Bugsnag reports. See\n"),s("RouterLink",{attrs:{to:"/packages/easy-bugsnag/aws.html"}},[t._v("AWS information")]),t._v(" for more information.")],1),t._v(" "),s("h3",{attrs:{id:"sql-query-logging"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-query-logging"}},[t._v("#")]),t._v(" SQL query logging")]),t._v(" "),s("p",[t._v("The EasyBugsnag package provides support for logging of SQL queries for Bugsnag. See "),s("RouterLink",{attrs:{to:"/packages/easy-bugsnag/sql-logging.html"}},[t._v("SQL query logging")]),t._v("\nfor more information.")],1)])}),[],!1,null,null,null);a.default=e.exports}}]);