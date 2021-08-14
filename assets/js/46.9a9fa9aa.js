(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{235:function(e,r,t){"use strict";t.r(r);var s=t(3),n=Object(s.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"error-response-builders"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#error-response-builders"}},[e._v("#")]),e._v(" Error response builders")]),e._v(" "),t("p",[e._v("The "),t("strong",[e._v("error response builders")]),e._v(" are used by the ErrorHandler's "),t("code",[e._v("render()")]),e._v(" method to build the HTTP error response. See\n"),t("RouterLink",{attrs:{to:"/packages/easy-error-handler/error-handler.html"}},[e._v("ErrorHandler")]),e._v(".")],1),e._v(" "),t("p",[e._v("The error response builders implement "),t("code",[e._v("EonX\\EasyErrorHandler\\Interfaces\\ErrorResponseBuilderInterface")]),e._v(", which defines\nthe following methods:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("buildData()")]),e._v(": provides "),t("code",[e._v("$data")]),e._v(", an array of raw data which will be encoded to generate the HTTP response body")]),e._v(" "),t("li",[t("code",[e._v("buildHeaders()")]),e._v(": provides "),t("code",[e._v("$headers")]),e._v(", an array of headers to set on the generated HTTP response")]),e._v(" "),t("li",[t("code",[e._v("buildStatusCode()")]),e._v(": provides "),t("code",[e._v("$statusCode")]),e._v(", the status code of the generated HTTP response")])]),e._v(" "),t("p",[e._v("The ErrorHandler loops through the provided error response builders and calls the methods above on each one.")]),e._v(" "),t("p",[e._v("Error response builders are provided to the ErrorHandler via implementations of\n"),t("code",[e._v("EonX\\EasyErrorHandler\\Interfaces\\ErrorResponseBuilderProviderInterface")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"default-builders"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#default-builders"}},[e._v("#")]),e._v(" Default builders")]),e._v(" "),t("p",[e._v("The following set of error response builders are provided to the ErrorHandler by default:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("CodeBuilder")]),e._v(": Adds the exception code to the response body.")]),e._v(" "),t("li",[t("strong",[e._v("ExtendedExceptionBuilder")]),e._v(": Adds extended exception information to the response body, including the following:\n"),t("ul",[t("li",[e._v("class")]),e._v(" "),t("li",[e._v("file")]),e._v(" "),t("li",[e._v("line")]),e._v(" "),t("li",[e._v("message")]),e._v(" "),t("li",[e._v("trace")])])]),e._v(" "),t("li",[t("strong",[e._v("StatusCodeBuilder")]),e._v(": Sets the HTTP response status code to the exception's "),t("code",[e._v("$statusCode")]),e._v(" property. For example, it\nwould set the status code to 404 for a NotFoundException.")]),e._v(" "),t("li",[t("strong",[e._v("SubCodeBuilder")]),e._v(": Adds the exception sub-code to the response body.")]),e._v(" "),t("li",[t("strong",[e._v("TimeBuilder")]),e._v(": Adds a timestamp to the response body.")]),e._v(" "),t("li",[t("strong",[e._v("UserMessageBuilder")]),e._v(": Adds the exception's user-friendly message to the response body.")]),e._v(" "),t("li",[t("strong",[e._v("ViolationsBuilder")]),e._v(": Adds violations information to the response body if the exception implements\n"),t("code",[e._v("EonX\\EasyErrorHandler\\Interfaces\\Exceptions\\ValidationExceptionInterface")]),e._v(" (such as\n"),t("RouterLink",{attrs:{to:"/packages/easy-error-handler/exceptions.html"}},[e._v("ValidationException")]),e._v(")")],1),e._v(" "),t("li",[t("strong",[e._v("HttpExceptionBuilder")]),e._v(": For HTTP exceptions in Symfony applications (i.e. exceptions that implement\n"),t("code",[e._v("Symfony\\Component\\HttpKernel\\Exception\\HttpExceptionInterface")]),e._v("), sets the message in the response body to the\nexception's "),t("code",[e._v("$message")]),e._v(" property and the HTTP response status code to the exception's "),t("code",[e._v("$statusCode")]),e._v(" property.")])]),e._v(" "),t("h2",{attrs:{id:"custom-builders"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#custom-builders"}},[e._v("#")]),e._v(" Custom builders")]),e._v(" "),t("p",[e._v("You can create your own custom error response builders and provide them to the ErrorHandler.")]),e._v(" "),t("p",[e._v("Create your own custom error response builders by implementing\n"),t("code",[e._v("EonX\\EasyErrorHandler\\Interfaces\\ErrorResponseBuilderInterface")]),e._v(".")]),e._v(" "),t("p",[e._v("Provide your error response builders to the ErrorHandler by using\n"),t("code",[e._v("EonX\\EasyErrorHandler\\Interfaces\\ErrorResponseBuilderProviderInterface")]),e._v(". This interface defines the "),t("code",[e._v("getBuilders()")]),e._v("\nmethod which returns a collection of your "),t("code",[e._v("EonX\\EasyErrorHandler\\Interfaces\\ErrorResponseBuilderInterface")]),e._v("\nimplementations. The ErrorHandler accepts a collection of all error response builder providers via its constructor.")]),e._v(" "),t("p",[e._v("For example, to provide your custom error response builder, StatusCodeBuilder, to the ErrorHandler, create a builder\nprovider implementing "),t("code",[e._v("EonX\\EasyErrorHandler\\Interfaces\\ErrorResponseBuilderProviderInterface")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// src/Exception/Response/MyStatusCodeBuilderProvider.php")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("App"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Exception"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Response")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("EonX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("EasyErrorHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Builders"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("StatusCodeBuilder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token package"}},[e._v("EonX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("EasyErrorHandler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Interfaces"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("ErrorResponseBuilderProviderInterface")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("final")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MyStatusCodeBuilderProvider")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("implements")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ErrorResponseBuilderProviderInterface")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * @return iterable<\\EonX\\EasyErrorHandler\\Interfaces\\ErrorResponseBuilderProviderInterface>\n     */")]),e._v("\n     "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("getBuilders")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword return-type"}},[e._v("iterable")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Return the built-in status code builder, but don't hesitate to create your own!")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("yield")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("StatusCodeBuilder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])}),[],!1,null,null,null);r.default=n.exports}}]);