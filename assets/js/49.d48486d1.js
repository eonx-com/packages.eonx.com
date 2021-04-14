(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{240:function(t,a,s){"use strict";s.r(a);var e=s(3),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("This package allows you to create and configure "),s("a",{attrs:{href:"https://github.com/Seldaek/monolog",target:"_blank",rel:"noopener noreferrer"}},[t._v("Monolog Loggers"),s("OutboundLink")],1),t._v(" in centralised and reusable way:")]),t._v(" "),s("ul",[s("li",[t._v("Configure channels using PHP")]),t._v(" "),s("li",[t._v("Control Handlers and Processors order")]),t._v(" "),s("li",[t._v("Integration with popular frameworks (e.g. Laravel, Symfony)")]),t._v(" "),s("li",[t._v("Discover Handlers and Processors automatically in your application")])]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"require-package-composer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#require-package-composer"}},[t._v("#")]),t._v(" Require package (Composer)")]),t._v(" "),s("p",[t._v("The recommended way to install this package is to use "),s("a",{attrs:{href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Composer"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" require eonx-com/easy-logging\n")])])]),s("br"),t._v(" "),s("h3",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("p",[t._v("Here is a simple example on how to use the "),s("code",[t._v("LoggerFactoryInterface")]),t._v(" to create loggers:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Instantiate the logger factory manually or use DI ...")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$loggerFactory")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Calling create without arguments will create logger for default channel")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$console")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$loggerFactory")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'console'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create logger for console channel specifically")]),t._v("\n")])])]),s("br"),t._v(" "),s("h3",{attrs:{id:"usage-in-framework"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-in-framework"}},[t._v("#")]),t._v(" Usage in Framework")]),t._v(" "),s("p",[t._v("The different bridge provided by this package will by default register the logger for your default channel in the\nservice container under the following service ids:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Psr\\Log\\LoggerInterface")])]),t._v(" "),s("li",[s("code",[t._v("logger")])])]),t._v(" "),s("p",[t._v("You can then use dependency injection anywhere you like!")]),t._v(" "),s("p",[t._v("Thanks to "),s("a",{attrs:{href:"https://symfony.com/doc/current/service_container/autowiring.html#autowiring-calls",target:"_blank",rel:"noopener noreferrer"}},[t._v("Autowiring via setters"),s("OutboundLink")],1),t._v(" in Symfony, you can use "),s("code",[t._v("\\EonX\\EasyLogging\\Bridge\\Symfony\\Traits\\LoggerAwareTrait")]),t._v("\nto simplify the injection of "),s("code",[t._v("Psr\\Log\\LoggerInterface")]),t._v(".")]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"logger-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logger-configuration"}},[t._v("#")]),t._v(" Logger Configuration")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("LoggerFactoryInterface")]),t._v(' allows you to set different collections of "config providers", each config can define:')]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("channels:")]),t._v(" if defined the config will be applied only to given channels, if "),s("code",[t._v("null")]),t._v(" the config will be applied\nto all channels")]),t._v(" "),s("li",[s("strong",[t._v("priority:")]),t._v(" define the order each config must be set on the logger instance, higher the priority later the config\nwill be added to the logger instance")])]),t._v(" "),s("br"),t._v(" "),s("h6",{attrs:{id:"handlerconfig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#handlerconfig"}},[t._v("#")]),t._v(" HandlerConfig")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("HandlerConfigInterface")]),t._v(" allows you to configure "),s("code",[t._v("\\Monolog\\Handler\\HandlerInterface")]),t._v(" to be set loggers created by\nthe factory. Like other configs, it allows you to specify a list of channels this handler is for and, also a priority\nto control when the handler must be executed.")]),t._v(" "),s("p",[t._v("To tell the logger factory about your "),s("code",[t._v("HandlerConfigInterface")]),t._v(", you must use a "),s("code",[t._v("HandlerConfigProviderInterface")]),t._v(". The\nlogger factory accepts a collection of providers via the "),s("code",[t._v("setHandlerConfigProviders()")]),t._v(" method:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyLogging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("LoggerFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$handlerConfigProviders")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add your own handler config providers to $handlerConfigProviders ...")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$loggerFactory")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set your handler config providers on the logger factory")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$loggerFactory")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHandlerConfigProviders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$handlerConfigProviders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("br"),t._v(" "),s("p",[t._v("Here is a simple example of a "),s("code",[t._v("HandlerConfigProviderInterface")]),t._v(" to register a "),s("code",[t._v("StreamHandler")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Logger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyLogging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HandlerConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyLogging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Interfaces"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HandlerConfigProviderInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Monolog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("StreamHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StreamHandlerConfigProvider")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HandlerConfigProviderInterface")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @return iterable<\\EonX\\EasyLogging\\Interfaces\\Config\\HandlerConfigInterface>\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handlers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" iterable\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n         * This method returns an iterable to make it easier to handle complex handler configs definition\n         * But you can simply return an array if you want.\n         */")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HandlerConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StreamHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'php://stdout'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("br"),t._v(" "),s("h6",{attrs:{id:"processorconfig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#processorconfig"}},[t._v("#")]),t._v(" ProcessorConfig")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("ProcessorConfigInterface")]),t._v(" allows you to configure "),s("code",[t._v("\\Monolog\\Processor\\ProcessorInterface")]),t._v(" to be set loggers created\nby the factory. Like other configs, it allows you to specify a list of channels this handler is for and, also a priority\nto control when the handler must be executed.")]),t._v(" "),s("p",[t._v("To tell the logger factory about your "),s("code",[t._v("ProcessorConfigInterface")]),t._v(", you must use a "),s("code",[t._v("ProcessorConfigProviderInterface")]),t._v(". The\nlogger factory accepts a collection of providers via the "),s("code",[t._v("setProcessorConfigProviders()")]),t._v(" method:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyLogging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("LoggerFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$processorConfigProviders")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add your own processor config providers to $handlerConfigProviders ...")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$loggerFactory")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set your processor config providers on the logger factory")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$loggerFactory")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setProcessorConfigProviders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$processorConfigProviders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("br"),t._v(" "),s("p",[t._v("Here is a simple example of a "),s("code",[t._v("ProcessorConfigProviderInterface")]),t._v(" to register a "),s("code",[t._v("TagProcessor")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Logger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyLogging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ProcessorConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyLogging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Interfaces"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ProcessorConfigProviderInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Monolog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Processor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("TagProcessor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TagProcessorConfigProvider")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProcessorConfigProviderInterface")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @return iterable<\\EonX\\EasyLogging\\Interfaces\\Config\\ProcessorConfigInterface>\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("processors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" iterable\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n         * This method returns an iterable to make it easier to handle complex processor configs definition\n         * But you can simply return an array if you want.\n         */")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ProcessorConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TagProcessor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'tag-1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'tag-2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("br"),t._v(" "),s("h6",{attrs:{id:"loggerconfigurator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loggerconfigurator"}},[t._v("#")]),t._v(" LoggerConfigurator")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("\\Monolog\\Logger")]),t._v(" class has methods allowing you to configure it even more (e.g. using microseconds). To deal with\nthat, the logger factory accepts a collection of "),s("code",[t._v("LoggerConfiguratorInterface")]),t._v(".")]),t._v(" "),s("p",[t._v("To tell the logger factory about your "),s("code",[t._v("LoggerConfiguratorInterface")]),t._v(", you must call the "),s("code",[t._v("setLoggerConfigurators()")]),t._v(" method:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyLogging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("LoggerFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$loggerConfigurators")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add your own logger configurators to $loggerConfigurators ...")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$loggerFactory")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set your logger configurators on the logger factory")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$loggerFactory")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLoggerConfigurators")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$loggerConfigurators")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("br"),t._v(" "),s("p",[t._v("Here is a simple example of a "),s("code",[t._v("LoggerConfiguratorInterface")]),t._v(" to use microseconds:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Logger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyLogging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("AbstractLoggingConfig")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyLogging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Interfaces"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("LoggerConfiguratorInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Monolog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Logger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UseMicrosecondsLoggerConfigurator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractLoggingConfig")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerConfiguratorInterface")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Logger "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$logger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" void\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$logger")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useMicrosecondTimestamps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);