(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{239:function(e,r,t){"use strict";t.r(r);var s=t(3),a=Object(s.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("This package performs the following:")]),e._v(" "),t("ul",[t("li",[e._v("Define a common structure of exceptions")]),e._v(" "),t("li",[e._v("Generate consistent error responses for unhandled exceptions within the code")]),e._v(" "),t("li",[e._v("By default, log them using the main logging channel of the app")]),e._v(" "),t("li",[e._v("By default, and if used with "),t("a",{attrs:{href:"https://packages.eonx.com/projects/eonx-com/easy-bugsnag/",target:"_blank",rel:"noopener noreferrer"}},[e._v("easy-bugsnag"),t("OutboundLink")],1),e._v(" will automatically notify bugsnag when required (based on log level of the exception)")])]),e._v(" "),t("br"),e._v(" "),t("h3",{attrs:{id:"require-package-composer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#require-package-composer"}},[e._v("#")]),e._v(" Require package (Composer)")]),e._v(" "),t("p",[e._v("The recommended way to install this package is to use "),t("a",{attrs:{href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Composer"),t("OutboundLink")],1),e._v(":")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("composer")]),e._v(" require eonx-com/easy-error-handler\n")])])]),t("h3",{attrs:{id:"exceptions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exceptions"}},[e._v("#")]),e._v(" Exceptions")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("BaseException:")]),e._v(" parent exception for all the others")]),e._v(" "),t("li",[t("strong",[e._v("BadRequestException:")]),e._v(" for 400 Bad Request HTTP responses")]),e._v(" "),t("li",[t("strong",[e._v("ConflictException:")]),e._v(" for 409 Conflict HTTP responses")]),e._v(" "),t("li",[t("strong",[e._v("ErrorException:")]),e._v(" for ERROR log level (e.g. any unexpected error)")]),e._v(" "),t("li",[t("strong",[e._v("ForbiddenException:")]),e._v(" for 403 Forbidden HTTP responses")]),e._v(" "),t("li",[t("strong",[e._v("NotFoundException:")]),e._v(" for 404 Not Found HTTP responses")]),e._v(" "),t("li",[t("strong",[e._v("UnauthorizedException:")]),e._v(" for 401 Unauthorized HTTP responses")]),e._v(" "),t("li",[t("strong",[e._v("ValidationException:")]),e._v(" extends "),t("code",[e._v("BadRequestException")]),e._v(" with additional list of errors")])]),e._v(" "),t("br"),e._v(" "),t("h3",{attrs:{id:"errorhandler"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#errorhandler"}},[e._v("#")]),e._v(" ErrorHandler")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("EonX\\EasyErrorHandler\\Interfaces\\ErrorHandlerInterface")]),e._v(" define 2 methods:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("render:")]),e._v(" generates an HTTP response for the given request and error")]),e._v(" "),t("li",[t("strong",[e._v("report:")]),e._v(" generates reports for the given error (e.g. logging)")])]),e._v(" "),t("br"),e._v(" "),t("p",[e._v("When using this package in your favourite framework, the "),t("code",[e._v("ErrorHandlerInterface")]),e._v(" is registered as a service, so you can\nuse dependency injection to use it within your application:")]),e._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// src/Service/MyService.php")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Service")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("EonX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("EasyErrorHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Interfaces"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("ErrorHandlerInterface")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("final")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MyService")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * @var \\EonX\\EasyErrorHandler\\Interfaces\\ErrorHandlerInterface\n     */")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("private")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$errorHandler")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("__construct")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[e._v("ErrorHandlerInterface")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$errorHandler")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[e._v("errorHandler")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$errorHandler")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("doSomething")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword return-type"}},[e._v("void")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("try")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Do something...")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("catch")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Throwable")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$throwable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[e._v("errorHandler")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("report")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$throwable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("br"),e._v(" "),t("h3",{attrs:{id:"usage-in-framework"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-in-framework"}},[e._v("#")]),e._v(" Usage in Framework")]),e._v(" "),t("p",[e._v("Thanks to "),t("a",{attrs:{href:"https://symfony.com/doc/current/service_container/autowiring.html#autowiring-calls",target:"_blank",rel:"noopener noreferrer"}},[e._v("Autowiring via setters"),t("OutboundLink")],1),e._v(" in Symfony, you can use "),t("code",[e._v("\\EonX\\EasyErrorHandler\\Traits\\ErrorHandlerAwareTrait")]),e._v("\nto simplify the injection of "),t("code",[e._v("\\EonX\\EasyErrorHandler\\Interfaces\\ErrorHandlerInterface")]),e._v(".")]),e._v(" "),t("br"),e._v(" "),t("h3",{attrs:{id:"errorresponsebuilderinterface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#errorresponsebuilderinterface"}},[e._v("#")]),e._v(" ErrorResponseBuilderInterface")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("EonX\\EasyErrorHandler\\Interfaces\\ErrorResponseBuilderInterface")]),e._v(" is used to build the information required to create\nan HTTP response for the given error. It is responsible for providing:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("data:")]),e._v(" raw data as an array, will be encoded to generate the HTTP response content")]),e._v(" "),t("li",[t("strong",[e._v("headers:")]),e._v(" array of headers to set on the generated HTTP response")]),e._v(" "),t("li",[t("strong",[e._v("status code:")]),e._v(" the status code of the generated HTTP response")])]),e._v(" "),t("p",[e._v("The error handler loop through the list of "),t("code",[e._v("ErrorResponseBuilderInterface")]),e._v(" provided to build the error response data to\ngenerate the HTTP response.")]),e._v(" "),t("p",[e._v("How do you provide those error response builders? Using "),t("code",[e._v("EonX\\EasyErrorHandler\\Interfaces\\ErrorResponseBuilderProviderInterface")]),e._v("!\nThis interface defines one method "),t("code",[e._v("getBuilders()")]),e._v(" which returns a collection of "),t("code",[e._v("ErrorResponseBuilderInterface")]),e._v(". The\nerror handler accept via its constructor a collection of those error response builder providers allowing you to create\nand provide your owns.")]),e._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// src/Exception/Response/MyStatusCodeBuilderProvider.php")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Exception"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Response")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("EonX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("EasyErrorHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Builders"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("StatusCodeBuilder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("EonX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("EasyErrorHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Interfaces"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("ErrorResponseBuilderProviderInterface")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("final")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MyStatusCodeBuilderProvider")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("implements")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ErrorResponseBuilderProviderInterface")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * @return iterable<\\EonX\\EasyErrorHandler\\Interfaces\\ErrorResponseBuilderProviderInterface>\n     */")]),e._v("\n     "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("getBuilders")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword return-type"}},[e._v("iterable")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Return a built-in status code builder, but don't hesitate to create your own!")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("yield")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("StatusCodeBuilder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("br"),e._v(" "),t("h3",{attrs:{id:"errorreporterinterface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#errorreporterinterface"}},[e._v("#")]),e._v(" ErrorReporterInterface")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("EonX\\EasyErrorHandler\\Interfaces\\ErrorReporterInterface")]),e._v(" is used by the error handler to delegate the report logic\nto your application. The error handler will loop through the provided error reporters and call their "),t("code",[e._v("report()")]),e._v(" method.")]),e._v(" "),t("p",[e._v("How do you provide those error reporters? Using "),t("code",[e._v("EonX\\EasyErrorHandler\\Interfaces\\ErrorReporterProviderInterface")]),e._v("!\nThis interface defines one method "),t("code",[e._v("getReporters()")]),e._v(" which returns a collection of "),t("code",[e._v("ErrorReporterInterface")]),e._v(". The\nerror handler accept via its constructor a collection of those error reporters providers allowing you to create\nand provide your owns.")]),e._v(" "),t("br")])}),[],!1,null,null,null);r.default=a.exports}}]);