(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{304:function(t,e,s){"use strict";s.r(e);var o=s(3),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"webhook-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webhook-class"}},[t._v("#")]),t._v(" Webhook class")]),t._v(" "),s("p",[t._v("The "),s("strong",[t._v("Webhook")]),t._v(" class defines webhook configuration. Once configured, the "),s("RouterLink",{attrs:{to:"/packages/easy-webhook/webhook-client.html"}},[t._v("WebhookClient")]),t._v(" class is\nresponsible for sending the webhook.")],1),t._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),s("p",[t._v("A Webhook object has the following properties:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("$allowRerun")]),t._v(": Boolean indicating whether a webhook can be rerun multiple times after the webhook is in a final state\n(i.e. success or failed).")]),t._v(" "),s("li",[s("code",[t._v("$body")]),t._v(": Body of the webhook HTTP request, provided as an array of key-value pairs. The body will be formatted by the\nBodyFormatterMiddleware (which formats the body as JSON by default).")]),t._v(" "),s("li",[s("code",[t._v("$bodyAsString")]),t._v(": Body of the webhook HTTP request, provided as a string. The body will be formatted by the\nBodyFormatterMiddleware (which formats the body as JSON by default). Note that "),s("code",[t._v("$bodyAsString")]),t._v(" takes priority over\n"),s("code",[t._v("$body")]),t._v(" if both are set.")]),t._v(" "),s("li",[s("code",[t._v("$configured")]),t._v(": Boolean indicating whether a webhook is "),s("strong",[t._v("configured")]),t._v(", meaning that some configure once middleware\nwill not be processed for the webhook, e.g. the event header middleware. See "),s("RouterLink",{attrs:{to:"/packages/easy-webhook/middleware.html"}},[t._v("Middleware")]),t._v(" for more\ninformation.")],1),t._v(" "),s("li",[s("code",[t._v("$currentAttempt")]),t._v(": Current attempt of the webhook.")]),t._v(" "),s("li",[s("code",[t._v("$event")]),t._v(": Event descriptor, which will be sent in the Event header of the webhook HTTP request. The Event header is\ncalled "),s("code",[t._v("X-Webhook-Event")]),t._v(" by default.")]),t._v(" "),s("li",[s("code",[t._v("$extra")]),t._v(": Array of extra information pertaining to the webhook.")]),t._v(" "),s("li",[s("code",[t._v("$httpClientOptions")]),t._v(": Array of HTTP client options for the webhook HTTP request.")]),t._v(" "),s("li",[s("code",[t._v("$id")]),t._v(": A unique identifier for the webhook, which will be sent in the ID header of the webhook HTTP request. The ID\nheader is called "),s("code",[t._v("X-Webhook-Id")]),t._v(" by default.")]),t._v(" "),s("li",[s("code",[t._v("$maxAttempt")]),t._v(": Maximum number of times to try to send the webhook before giving up.")]),t._v(" "),s("li",[s("code",[t._v("$method")]),t._v(": HTTP method to use to send the webhook HTTP request, e.g. "),s("code",[t._v("PUT")]),t._v(". The HTTP method is "),s("code",[t._v("POST")]),t._v(" by default.")]),t._v(" "),s("li",[s("code",[t._v("$secret")]),t._v(": Secret key which will be used to construct a signature of the webhook HTTP request body that will be sent\nin the Signature header of the webhook HTTP request. The Signature header is called "),s("code",[t._v("X-Webhook-Signature")]),t._v(" by default.")]),t._v(" "),s("li",[s("code",[t._v("$sendAfter")]),t._v(": Timestamp after which a webhook may be sent. You can initiate sending of delayed webhooks via the\nconsole command "),s("code",[t._v("easy-webhooks:send-due-webhooks")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("$sendNow")]),t._v(": Boolean indicating that the webhook should be sent synchronously instead of asynchronously. Note that it\nis the responsibility of your application to retry webhooks if sending synchronously.")]),t._v(" "),s("li",[s("code",[t._v("$status")]),t._v(": Status of the webhook, which may be one of "),s("code",[t._v("failed")]),t._v(", "),s("code",[t._v("failed_pending_retry")]),t._v(","),s("code",[t._v("pending")]),t._v(" or "),s("code",[t._v("success")]),t._v(". By\ndefault, the initial status is "),s("code",[t._v("pending")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("$url")]),t._v(": Target URL to send the webhook HTTP request.")])]),t._v(" "),s("h2",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),s("h3",{attrs:{id:"webhook-creation-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webhook-creation-methods"}},[t._v("#")]),t._v(" Webhook creation methods")]),t._v(" "),s("p",[t._v("A simple "),s("code",[t._v("create()")]),t._v(" method is provided by the class that allows you to easily create a webhook if all you need is a URL,\nas well as an optional request body (provided as an array) and request method.")]),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create simple webhook with limited config")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$webhook")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Webhook")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'https://eonx.com/webhook'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'event'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'showcase'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'PUT'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("For more complex situations, the "),s("code",[t._v("fromArray()")]),t._v(" method is also available, allowing you to create a webhook with the\nfollowing parameters:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("body")])]),t._v(" "),s("li",[s("code",[t._v("body_as_string")])]),t._v(" "),s("li",[s("code",[t._v("current_attempt")])]),t._v(" "),s("li",[s("code",[t._v("event")])]),t._v(" "),s("li",[s("code",[t._v("http_options")])]),t._v(" "),s("li",[s("code",[t._v("id")])]),t._v(" "),s("li",[s("code",[t._v("max_attempt")])]),t._v(" "),s("li",[s("code",[t._v("method")])]),t._v(" "),s("li",[s("code",[t._v("secret")])]),t._v(" "),s("li",[s("code",[t._v("send_after")])]),t._v(" "),s("li",[s("code",[t._v("status")])]),t._v(" "),s("li",[s("code",[t._v("url")])])]),t._v(" "),s("p",[t._v("For example:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create webhook from array")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$webhook")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Webhook")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'url'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'https://eonx.com/webhook'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'body'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'event'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'showcase'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'method'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'PUT'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'max_attempt'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("The equivalent can also be done by using setters (see below for setter methods):")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create webhook using fluent setters")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$webhook")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Webhook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'https://eonx.com/webhook'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'event'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'showcase'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'PUT'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxAttempt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Once a webhook has been created, use the "),s("code",[t._v("WebhookClient::sendWebhook()")]),t._v(" method to trigger the processing of the webhook\nand send the webhook HTTP request.")]),t._v(" "),s("h3",{attrs:{id:"getters-and-setters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getters-and-setters"}},[t._v("#")]),t._v(" Getters and setters")]),t._v(" "),s("p",[t._v("The following table summarises the getter and setter methods for a Webhook object's properties:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Setter")]),t._v(" "),s("th",[t._v("Getter")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("$allowRerun")])]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",[s("code",[t._v("allowRerun()")])]),t._v(" "),s("td",[s("code",[t._v("isRerunAllowed()")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$body")])]),t._v(" "),s("td",[t._v("array")]),t._v(" "),s("td",[s("code",[t._v("body()")])]),t._v(" "),s("td",[s("code",[t._v("getBody()")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$bodyAsString")])]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[s("code",[t._v("bodyAsString()")])]),t._v(" "),s("td",[s("code",[t._v("getBodyAsString()")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$configured")])]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",[s("code",[t._v("configured()")])]),t._v(" "),s("td",[s("code",[t._v("isConfigured()")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$currentAttempt")])]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[s("code",[t._v("currentAttempt()")])]),t._v(" "),s("td",[s("code",[t._v("getCurrentAttempt()")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$event")])]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[s("code",[t._v("event()")])]),t._v(" "),s("td",[s("code",[t._v("getEvent()")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$extra")])]),t._v(" "),s("td",[t._v("array")]),t._v(" "),s("td",[s("code",[t._v("extra()")])]),t._v(" "),s("td",[s("code",[t._v("getExtra()")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$httpClientOptions")])]),t._v(" "),s("td",[t._v("array")]),t._v(" "),s("td",[s("code",[t._v("httpClientOptions()")])]),t._v(" "),s("td",[s("code",[t._v("getHttpClientOptions()")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$id")])]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[s("code",[t._v("id()")])]),t._v(" "),s("td",[s("code",[t._v("getId()")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$maxAttempt")])]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[s("code",[t._v("maxAttempt()")])]),t._v(" "),s("td",[s("code",[t._v("getMaxAttempt()")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$method")])]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[s("code",[t._v("method()")])]),t._v(" "),s("td",[s("code",[t._v("getMethod()")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$secret")])]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[s("code",[t._v("secret()")])]),t._v(" "),s("td",[s("code",[t._v("getSecret()")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$sendAfter")])]),t._v(" "),s("td",[t._v("DateTime")]),t._v(" "),s("td",[s("code",[t._v("sendAfter()")])]),t._v(" "),s("td",[s("code",[t._v("getSendAfter()")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$sendNow")])]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",[s("code",[t._v("sendNow()")])]),t._v(" "),s("td",[s("code",[t._v("isSendNow()")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$status")])]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[s("code",[t._v("status()")])]),t._v(" "),s("td",[s("code",[t._v("getStatus()")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("$url")])]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[s("code",[t._v("url()")])]),t._v(" "),s("td",[s("code",[t._v("getUrl()")])])])])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("$httpClientOptions")]),t._v(" property can also be manipulated using the following methods:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("header()")]),t._v(": Add HTTP request header to the HTTP client options.")]),t._v(" "),s("li",[s("code",[t._v("headers()")]),t._v(": Set the array of HTTP request headers for the HTTP client options.")]),t._v(" "),s("li",[s("code",[t._v("query()")]),t._v(": Add HTTP query parameter to the HTTP client options.")]),t._v(" "),s("li",[s("code",[t._v("queries()")]),t._v(": Set the array of HTTP query parameters for the HTTP client options.")]),t._v(" "),s("li",[s("code",[t._v("mergeHttpClientOptions()")]),t._v(": Merge array of HTTP client options into the existing HTTP client options.")])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("$extra")]),t._v(" property can also be manipulated with the "),s("code",[t._v("mergeExtra()")]),t._v(" method, which merges an array of extra information\ninto the "),s("code",[t._v("$extra")]),t._v(" property.")])])}),[],!1,null,null,null);e.default=a.exports}}]);