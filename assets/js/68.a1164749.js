(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{257:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("The Laravel bridge of this package allows you to define your logging config providers and logger configurators anywhere\nand use the container to register them to be used by the logger factory.")]),t._v(" "),a("p",[t._v("It requires to tag the different config providers and logger configurators as follows:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("HandlerConfigProviderInterface:")]),t._v(" "),a("code",[t._v("easy_logging.handler_config_provider")])]),t._v(" "),a("li",[a("strong",[t._v("ProcessorConfigProviderInterface:")]),t._v(" "),a("code",[t._v("easy_logging.processor_config_provider")])]),t._v(" "),a("li",[a("strong",[t._v("LoggerConfiguratorInterface:")]),t._v(" "),a("code",[t._v("easy_logging.logger_configurator")])])]),t._v(" "),a("p",[t._v("To make this process easier, this package provides you with public constants you can use for the tags name.\nThese constants are defined on "),a("code",[t._v("EonX\\EasyLogging\\Bridge\\BridgeConstantsInterface")]),t._v(".")]),t._v(" "),a("p",[t._v("Here is an example on how to register a "),a("code",[t._v("HandlerConfigProviderInterface")]),t._v(" within a service provider:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Providers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("StreamHandlerConfigProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyLogging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Bridge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("BridgeConstantsInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Illuminate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Support"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ServiceProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggingServiceProvider")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceProvider")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword return-type"}},[t._v("void")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Register HandlerConfigProvider as a service")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("singleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("StreamHandlerConfigProvider")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Tag StreamHandlerConfigProvider service as a HandlerConfigProvider")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("StreamHandlerConfigProvider")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("BridgeConstantsInterface")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TAG_HANDLER_CONFIG_PROVIDER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);