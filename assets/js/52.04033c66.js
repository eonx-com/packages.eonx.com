(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{243:function(e,t,o){"use strict";o.r(t);var s=o(3),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"exceptions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#exceptions"}},[e._v("#")]),e._v(" Exceptions")]),e._v(" "),o("p",[e._v("A PHP Exception contains the following properties:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("$message")]),e._v(": Exception message.")]),e._v(" "),o("li",[o("code",[e._v("$code")]),e._v(": Exception code.")]),e._v(" "),o("li",[o("code",[e._v("$file")]),e._v(": Filename where the exception was created.")]),e._v(" "),o("li",[o("code",[e._v("$line")]),e._v(": Line where the exception was created.")])]),e._v(" "),o("p",[e._v("Once the EasyErrorHandler package has been installed and enabled, all exceptions handled by your framework will use the\npackage to generate error responses and reports.")]),e._v(" "),o("p",[e._v("The EasyErrorHandler package also provides exceptions for some common exception use cases. Exceptions provided by the\npackage extend the Exception class.")]),e._v(" "),o("h2",{attrs:{id:"baseexception"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#baseexception"}},[e._v("#")]),e._v(" BaseException")]),e._v(" "),o("p",[e._v("The BaseException is the parent exception for the other EasyErrorHandler exceptions. It contains the following\nadditional properties:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("$domain")]),e._v(": Symfony translation domain, set via the "),o("code",[e._v("setDomain()")]),e._v(" method. This overrides the "),o("code",[e._v("translation_domain")]),e._v("\nconfiguration option (see "),o("RouterLink",{attrs:{to:"/packages/easy-error-handler/config.html"}},[e._v("Configuration")]),e._v(") for the exception.")],1),e._v(" "),o("li",[o("code",[e._v("$logLevel")]),e._v(": Log level for reporting, set via the "),o("code",[e._v("setLogLevel()")]),e._v(" method or one of the following methods:\n"),o("ul",[o("li",[o("code",[e._v("setCriticalLogLevel()")])]),e._v(" "),o("li",[o("code",[e._v("setDebugLogLevel()")])]),e._v(" "),o("li",[o("code",[e._v("setErrorLogLevel()")])]),e._v(" "),o("li",[o("code",[e._v("setInfoLogLevel()")])]),e._v(" "),o("li",[o("code",[e._v("setWarningLogLevel()")])])])]),e._v(" "),o("li",[o("code",[e._v("$messageParams")]),e._v(": Parameters for the exception message, set via the "),o("code",[e._v("setMessageParams()")]),e._v(" method.")]),e._v(" "),o("li",[o("code",[e._v("$statusCode")]),e._v(": HTTP status code for HTTP responses, set via the "),o("code",[e._v("setStatusCode()")]),e._v(" method.")]),e._v(" "),o("li",[o("code",[e._v("$subCode")]),e._v(": Exception sub-code, set via the "),o("code",[e._v("setSubCode()")]),e._v(" method.")]),e._v(" "),o("li",[o("code",[e._v("$userMessage")]),e._v(": User-friendly message, set via the "),o("code",[e._v("setUserMessage()")]),e._v(" method.")]),e._v(" "),o("li",[o("code",[e._v("$userMessageParams")]),e._v(": Parameters for the user-friendly message, set via the "),o("code",[e._v("setUserMessageParams()")]),e._v(" method.")])]),e._v(" "),o("h2",{attrs:{id:"badrequestexception"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#badrequestexception"}},[e._v("#")]),e._v(" BadRequestException")]),e._v(" "),o("p",[e._v("The BadRequestException can be used for 400 Bad Request HTTP responses. The response's status code is set to 400.")]),e._v(" "),o("h2",{attrs:{id:"conflictexception"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#conflictexception"}},[e._v("#")]),e._v(" ConflictException")]),e._v(" "),o("p",[e._v("The ConflictException can be used for 409 Conflict HTTP responses. The response's status code is set to 409.")]),e._v(" "),o("h2",{attrs:{id:"errorexception"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#errorexception"}},[e._v("#")]),e._v(" ErrorException")]),e._v(" "),o("p",[e._v("The ErrorException can be used to report any unexpected error at ERROR log level.")]),e._v(" "),o("p",[e._v("With the default package configuration, using the ErrorException is the most convenient way to report errors to Bugsnag.")]),e._v(" "),o("h2",{attrs:{id:"forbiddenexception"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#forbiddenexception"}},[e._v("#")]),e._v(" ForbiddenException")]),e._v(" "),o("p",[e._v("The ForbiddenException can be used for 403 Forbidden HTTP responses. The response's status code is set to 403.")]),e._v(" "),o("h2",{attrs:{id:"notfoundexception"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#notfoundexception"}},[e._v("#")]),e._v(" NotFoundException")]),e._v(" "),o("p",[e._v("The NotFoundException can be used for 404 Not Found HTTP responses. The response's status code is set to 404.")]),e._v(" "),o("h2",{attrs:{id:"unauthorizedexception"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#unauthorizedexception"}},[e._v("#")]),e._v(" UnauthorizedException")]),e._v(" "),o("p",[e._v("The UnauthorizedException can be used for 401 Unauthorized HTTP responses. The response's status code is set to 401.")]),e._v(" "),o("h2",{attrs:{id:"validationexception"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#validationexception"}},[e._v("#")]),e._v(" ValidationException")]),e._v(" "),o("p",[e._v("The ValidationException extends BadRequestException with an additional list of validation errors. You can get and set\nthe array of errors via the "),o("code",[e._v("getErrors()")]),e._v(" and "),o("code",[e._v("setErrors()")]),e._v(" methods, respectively.")])])}),[],!1,null,null,null);t.default=a.exports}}]);