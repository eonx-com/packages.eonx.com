(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{227:function(t,e,s){"use strict";s.r(e);var a=s(3),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("p",[t._v("You can configure global settings for the EasyErrorHandler package via a configuration file in your application.")]),t._v(" "),s("h2",{attrs:{id:"configuration-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files"}},[t._v("#")]),t._v(" Configuration files")]),t._v(" "),s("p",[t._v("For Laravel applications, the EasyErrorHandler configuration file must be called "),s("code",[t._v("easy-error-handler.php")]),t._v(" and be located\nin the "),s("code",[t._v("config")]),t._v(" directory.")]),t._v(" "),s("p",[t._v("For Symfony applications, the EasyErrorHandler configuration file can be a YAML, XML or PHP file located under the\n"),s("code",[t._v("config/packages")]),t._v(" directory, with a name like "),s("code",[t._v("easy_error_handler.<format>")]),t._v(". The root node of the configuration must be\ncalled "),s("code",[t._v("easy_error_handler")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"configuration-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-options"}},[t._v("#")]),t._v(" Configuration options")]),t._v(" "),s("p",[t._v("The common configuration options for Laravel and Symfony are as follows:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Configuration")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("bugsnag_enabled")])]),t._v(" "),s("td",[s("code",[t._v("true")])]),t._v(" "),s("td",[t._v("Automatically register the error reporter for easy-bugsnag integration.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("bugsnag_ignored_exceptions")])]),t._v(" "),s("td",[s("code",[t._v("[]")])]),t._v(" "),s("td",[t._v("List of exceptions that will not be reported to Bugsnag.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("bugsnag_threshold")])]),t._v(" "),s("td",[s("code",[t._v("null")])]),t._v(" "),s("td",[t._v("Log level threshold for reporting to Bugsnag.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("response.code")])]),t._v(" "),s("td",[s("code",[t._v("code")])]),t._v(" "),s("td",[t._v("Attribute name for exception code.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("response.exception")])]),t._v(" "),s("td",[s("code",[t._v("exception")])]),t._v(" "),s("td",[t._v("Attribute name for exception text.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("response.extended_exception_keys.class")])]),t._v(" "),s("td",[s("code",[t._v("class")])]),t._v(" "),s("td",[t._v("Attribute name for exception class.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("response.extended_exception_keys.file")])]),t._v(" "),s("td",[s("code",[t._v("file")])]),t._v(" "),s("td",[t._v("Attribute name for exception file.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("response.extended_exception_keys.line")])]),t._v(" "),s("td",[s("code",[t._v("line")])]),t._v(" "),s("td",[t._v("Attribute name for exception line.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("response.extended_exception_keys.message")])]),t._v(" "),s("td",[s("code",[t._v("message")])]),t._v(" "),s("td",[t._v("Attribute name for exception message.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("response.extended_exception_keys.trace")])]),t._v(" "),s("td",[s("code",[t._v("trace")])]),t._v(" "),s("td",[t._v("Attribute name for exception trace.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("response.message")])]),t._v(" "),s("td",[s("code",[t._v("message")])]),t._v(" "),s("td",[t._v("Attribute name for user-friendly exception message.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("response.sub_code")])]),t._v(" "),s("td",[s("code",[t._v("sub_code")])]),t._v(" "),s("td",[t._v("Attribute name for exception sub-code.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("response.time")])]),t._v(" "),s("td",[s("code",[t._v("time")])]),t._v(" "),s("td",[t._v("Attribute name for exception timestamp.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("response.violations")])]),t._v(" "),s("td",[s("code",[t._v("violations")])]),t._v(" "),s("td",[t._v("Attribute name for exception violations.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("use_default_builders")])]),t._v(" "),s("td",[s("code",[t._v("true")])]),t._v(" "),s("td",[t._v("Use the default set of "),s("RouterLink",{attrs:{to:"/packages/easy-error-handler/response-builders.html"}},[t._v("error response builders")]),t._v(".")],1)]),t._v(" "),s("tr",[s("td",[s("code",[t._v("use_default_reporters")])]),t._v(" "),s("td",[s("code",[t._v("true")])]),t._v(" "),s("td",[t._v("Use the default set of "),s("RouterLink",{attrs:{to:"/packages/easy-error-handler/reporters.html"}},[t._v("error reporters")]),t._v(".")],1)])])]),t._v(" "),s("p",[t._v("Laravel has the following additional configuration option:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Configuration")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("use_extended_response")])]),t._v(" "),s("td",[s("code",[t._v("false")])]),t._v(" "),s("td",[t._v("Use extended error response containing exception message, trace, etc.")])])])]),t._v(" "),s("p",[t._v("Symfony has the following additional configuration options:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Configuration")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("override_api_platform_listener")])]),t._v(" "),s("td",[s("code",[t._v("true")])]),t._v(" "),s("td",[t._v("If using "),s("a",{attrs:{href:"https://api-platform.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("API Platform"),s("OutboundLink")],1),t._v(", override its inbuilt exception handling to use the EasyErrorHandler package.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("translation_domain")])]),t._v(" "),s("td",[s("code",[t._v("messages")])]),t._v(" "),s("td",[t._v("Symfony translation domain.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("verbose")])]),t._v(" "),s("td",[s("code",[t._v("false")])]),t._v(" "),s("td",[t._v("Use extended error response containing exception message, trace, etc.")])])])]),t._v(" "),s("h2",{attrs:{id:"example-configuration-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-configuration-files"}},[t._v("#")]),t._v(" Example configuration files")]),t._v(" "),s("h3",{attrs:{id:"symfony"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symfony"}},[t._v("#")]),t._v(" Symfony")]),t._v(" "),s("p",[t._v("In Symfony, you could have a configuration file called "),s("code",[t._v("easy_error_handler.yaml")]),t._v(" that looks like the following:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("easy_error_handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bugsnag_enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bugsnag_ignored_exceptions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null important"}},[t._v("null")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bugsnag_threshold")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null important"}},[t._v("null")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("override_api_platform_listener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("code")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'code'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exception")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'exception'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("extended_exception_keys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'class'")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file'")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("line")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'line'")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("message")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("trace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'trace'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("message")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sub_code")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sub_code'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'time'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("violations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'violations'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("translation_domain")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'messages'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("use_default_builders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("use_default_reporters")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("verbose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n")])])]),s("h3",{attrs:{id:"laravel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#laravel"}},[t._v("#")]),t._v(" Laravel")]),t._v(" "),s("p",[t._v("In Laravel, the "),s("code",[t._v("easy-error-handler.php")]),t._v(" configuration file could look like the following:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strict_types"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'bugsnag_enabled'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'bugsnag_ignored_exceptions'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'bugsnag_threshold'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'response'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'code'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'code'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'exception'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'exception'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'extended_exception_keys'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'class'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'class'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'file'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'file'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'line'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'line'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'message'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'message'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'trace'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'trace'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'message'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'message'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'sub_code'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'sub_code'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'time'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'time'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'violations'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'violations'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'use_default_builders'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'use_default_reporters'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'use_extended_response'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);