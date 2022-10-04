(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{241:function(t,s,e){"use strict";e.r(s);var a=e(3),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("p",[t._v("You can configure global settings for the EasyErrorHandler package via a configuration file in your application.")]),t._v(" "),e("h2",{attrs:{id:"configuration-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files"}},[t._v("#")]),t._v(" Configuration files")]),t._v(" "),e("p",[t._v("For Laravel applications, the EasyErrorHandler configuration file must be called "),e("code",[t._v("easy-error-handler.php")]),t._v(" and be located\nin the "),e("code",[t._v("config")]),t._v(" directory.")]),t._v(" "),e("p",[t._v("For Symfony applications, the EasyErrorHandler configuration file can be a YAML, XML or PHP file located under the\n"),e("code",[t._v("config/packages")]),t._v(" directory, with a name like "),e("code",[t._v("easy_error_handler.<format>")]),t._v(". The root node of the configuration must be\ncalled "),e("code",[t._v("easy_error_handler")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"configuration-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-options"}},[t._v("#")]),t._v(" Configuration options")]),t._v(" "),e("p",[t._v("The common configuration options for Laravel and Symfony are as follows:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Configuration")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("bugsnag_enabled")])]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Automatically register the error reporter for easy-bugsnag integration.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("bugsnag_ignored_exceptions")])]),t._v(" "),e("td",[e("code",[t._v("[]")])]),t._v(" "),e("td",[t._v("List of exceptions that will not be reported to Bugsnag.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("bugsnag_threshold")])]),t._v(" "),e("td",[e("code",[t._v("null")])]),t._v(" "),e("td",[t._v("Log level threshold for reporting to Bugsnag.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("ignored_exceptions")])]),t._v(" "),e("td",[e("code",[t._v("[]")])]),t._v(" "),e("td",[t._v("List of exceptions that will not reported by any reporter.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("logger_exception_log_levels")])]),t._v(" "),e("td",[e("code",[t._v("[]")])]),t._v(" "),e("td",[t._v("List of exceptions and their associated log levels.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("logger_ignored_exceptions")])]),t._v(" "),e("td",[e("code",[t._v("[]")])]),t._v(" "),e("td",[t._v("List of exceptions that will not be reported to Logger.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("response.code")])]),t._v(" "),e("td",[e("code",[t._v("code")])]),t._v(" "),e("td",[t._v("Attribute name for exception code.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("response.exception")])]),t._v(" "),e("td",[e("code",[t._v("exception")])]),t._v(" "),e("td",[t._v("Attribute name for exception text.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("response.extended_exception_keys.class")])]),t._v(" "),e("td",[e("code",[t._v("class")])]),t._v(" "),e("td",[t._v("Attribute name for exception class.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("response.extended_exception_keys.file")])]),t._v(" "),e("td",[e("code",[t._v("file")])]),t._v(" "),e("td",[t._v("Attribute name for exception file.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("response.extended_exception_keys.line")])]),t._v(" "),e("td",[e("code",[t._v("line")])]),t._v(" "),e("td",[t._v("Attribute name for exception line.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("response.extended_exception_keys.message")])]),t._v(" "),e("td",[e("code",[t._v("message")])]),t._v(" "),e("td",[t._v("Attribute name for exception message.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("response.extended_exception_keys.trace")])]),t._v(" "),e("td",[e("code",[t._v("trace")])]),t._v(" "),e("td",[t._v("Attribute name for exception trace.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("response.message")])]),t._v(" "),e("td",[e("code",[t._v("message")])]),t._v(" "),e("td",[t._v("Attribute name for user-friendly exception message.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("response.sub_code")])]),t._v(" "),e("td",[e("code",[t._v("sub_code")])]),t._v(" "),e("td",[t._v("Attribute name for exception sub-code.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("response.time")])]),t._v(" "),e("td",[e("code",[t._v("time")])]),t._v(" "),e("td",[t._v("Attribute name for exception timestamp.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("response.violations")])]),t._v(" "),e("td",[e("code",[t._v("violations")])]),t._v(" "),e("td",[t._v("Attribute name for exception violations.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("use_default_builders")])]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Use the default set of "),e("RouterLink",{attrs:{to:"/packages/easy-error-handler/response-builders.html"}},[t._v("error response builders")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("use_default_reporters")])]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Use the default set of "),e("RouterLink",{attrs:{to:"/packages/easy-error-handler/reporters.html"}},[t._v("error reporters")]),t._v(".")],1)])])]),t._v(" "),e("p",[t._v("Laravel has the following additional configuration option:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Configuration")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("use_extended_response")])]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("Use extended error response containing exception message, trace, etc.")])])])]),t._v(" "),e("p",[t._v("Symfony has the following additional configuration options:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Configuration")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("bugsnag_ignore_validation_errors")])]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Ignore validation errors based on ApiPlatformValidationErrorsResponseBuilder")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("override_api_platform_listener")])]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("If using "),e("a",{attrs:{href:"https://api-platform.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("API Platform"),e("OutboundLink")],1),t._v(", override its inbuilt exception handling to use the EasyErrorHandler package.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("transform_validation_errors")])]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Transform validation errors response structure based on ApiPlatformValidationErrrorResponseBuilder.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("translation_domain")])]),t._v(" "),e("td",[e("code",[t._v("messages")])]),t._v(" "),e("td",[t._v("Symfony translation domain.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("verbose")])]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("Use extended error response containing exception message, trace, etc.")])])])]),t._v(" "),e("h2",{attrs:{id:"example-configuration-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-configuration-files"}},[t._v("#")]),t._v(" Example configuration files")]),t._v(" "),e("h3",{attrs:{id:"symfony"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#symfony"}},[t._v("#")]),t._v(" Symfony")]),t._v(" "),e("p",[t._v("In Symfony, you could have a configuration file called "),e("code",[t._v("easy_error_handler.yaml")]),t._v(" that looks like the following:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("easy_error_handler")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bugsnag_enabled")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bugsnag_ignored_exceptions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" InvalidArgumentException\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bugsnag_ignore_validation_errors")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bugsnag_threshold")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token null important"}},[t._v("null")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("logger_exception_log_level")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("InvalidArgumentException")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("logger_ignored_exceptions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" App\\MyCustomException\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("override_api_platform_listener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("response")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("code")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'code'")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exception")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'exception'")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("extended_exception_keys")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'class'")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file'")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("line")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'line'")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("message")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("trace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'trace'")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("message")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sub_code")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sub_code'")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("time")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'time'")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("violations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'violations'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("transform_validation_errors")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("translation_domain")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'messages'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("use_default_builders")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("use_default_reporters")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("verbose")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n")])])]),e("h3",{attrs:{id:"laravel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#laravel"}},[t._v("#")]),t._v(" Laravel")]),t._v(" "),e("p",[t._v("In Laravel, the "),e("code",[t._v("easy-error-handler.php")]),t._v(" configuration file could look like the following:")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token php language-php"}},[e("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strict_types"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'bugsnag_enabled'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'bugsnag_ignored_exceptions'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("InvalidArgumentException")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'bugsnag_threshold'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'logger_exception_log_levels'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("InvalidArgumentException")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'logger_ignored_exceptions'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("MyCustomException")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'response'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'code'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'code'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'exception'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'exception'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'extended_exception_keys'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'class'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'class'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'file'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'file'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'line'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'line'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'message'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'message'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'trace'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'trace'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'message'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'message'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'sub_code'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'sub_code'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'time'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'time'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'violations'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'violations'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'use_default_builders'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'use_default_reporters'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'use_extended_response'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);