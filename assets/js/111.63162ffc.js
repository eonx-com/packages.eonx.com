(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{303:function(e,t,a){"use strict";a.r(t);var s=a(3),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"middleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#middleware"}},[e._v("#")]),e._v(" Middleware")]),e._v(" "),a("p",[e._v("The EasyWebhook package uses a "),a("strong",[e._v("middleware stack")]),e._v(" that is processed every time a webhook is sent. Processing of the\nmiddleware proceeds down the stack to where the webhook is sent in a HTTP request, and then proceeds back up the stack.\nActions may be taken on the way down and/or the way back up.")]),e._v(" "),a("p",[e._v("Middleware are services implementing "),a("code",[e._v("EonX\\EasyWebhook\\Interfaces\\MiddlewareInterface")]),e._v(". This package provides "),a("strong",[e._v("core\nmiddleware")]),e._v(", but you can also write "),a("strong",[e._v("custom middleware")]),e._v(", e.g. to add a custom header to webhook HTTP requests.")]),e._v(" "),a("p",[e._v("The middleware is ordered by "),a("strong",[e._v("priority")]),e._v(" in the stack, whereby the lower the priority, the earlier in the stack the\nmiddleware is placed.")]),e._v(" "),a("p",[e._v("Custom middleware can have priorities between -5000 and 5000. If not specified, the default priority is 0. Some core\nmiddleware provided by this package must run before the custom middleware, e.g. to lock the Webhook object, and some\ncore middleware must run after the core middleware, e.g. to send the webhook HTTP request.")]),e._v(" "),a("h2",{attrs:{id:"configure-once-middleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-once-middleware"}},[e._v("#")]),e._v(" Configure once middleware")]),e._v(" "),a("p",[e._v("Some middleware are "),a("strong",[e._v("configure once")]),e._v(" middleware. If the webhook is flagged as "),a("strong",[e._v("configured")]),e._v(", i.e. its "),a("code",[e._v("$configured")]),e._v("\nproperty is "),a("code",[e._v("true")]),e._v(", then configure once middleware will not operate on the webhook.")]),e._v(" "),a("p",[e._v("Note that if a webhook is retrieved from a webhook store, then it is automatically flagged as configured.")]),e._v(" "),a("h2",{attrs:{id:"middleware-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#middleware-list"}},[e._v("#")]),e._v(" Middleware list")]),e._v(" "),a("p",[e._v("The following middleware are provided by the EasyWebhook package:")]),e._v(" "),a("h3",{attrs:{id:"asyncmiddleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asyncmiddleware"}},[e._v("#")]),e._v(" "),a("code",[e._v("AsyncMiddleware")])]),e._v(" "),a("p",[e._v("This middleware checks if the webhook should be sent "),a("em",[e._v("synchronously")]),e._v(". If so, this middleware proceeds with the remaining\nmiddleware in the stack. If the webhook should be sent "),a("em",[e._v("asynchronously")]),e._v(", then this middleware stores the webhook and\noffloads dispatching of the webhook to a framework-specific dispatcher.")]),e._v(" "),a("p",[e._v("Note that the dispatcher will retrieve the webhook from the store and trigger the processing of the middleware stack\nagain. The webhook is flagged as configured due to being retrieved from the store, so configure once middleware will not\noperate on the webhook.")]),e._v(" "),a("h3",{attrs:{id:"bodyformattermiddleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bodyformattermiddleware"}},[e._v("#")]),e._v(" "),a("code",[e._v("BodyFormatterMiddleware")])]),e._v(" "),a("p",[e._v("This middleware formats the body of the webhook HTTP request.")]),e._v(" "),a("p",[e._v("By default, this package uses the "),a("code",[e._v("EonX\\EasyWebhook\\Formatters\\JsonFormatter")]),e._v(" body formatter, which formats the request\nbody as a JSON string and sets the "),a("code",[e._v("Content-Type")]),e._v(" header of the HTTP request to be "),a("code",[e._v("application/json")]),e._v(".")]),e._v(" "),a("p",[e._v("You can use your own body formatter by setting the "),a("code",[e._v("EonX\\EasyWebhook\\Interfaces\\WebhookBodyFormatterInterface")]),e._v(" service\nto your own implementation.")]),e._v(" "),a("p",[a("em",[e._v("This is configure once middleware.")])]),e._v(" "),a("h3",{attrs:{id:"eventheadermiddleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventheadermiddleware"}},[e._v("#")]),e._v(" "),a("code",[e._v("EventHeaderMiddleware")])]),e._v(" "),a("p",[e._v("This middleware sets the "),a("strong",[e._v("Event header")]),e._v(" of the webhook HTTP request to the webhook's "),a("code",[e._v("$event")]),e._v(" property (if it exists).")]),e._v(" "),a("p",[e._v("The default name of the Event header is "),a("code",[e._v("X-Webhook-Event")]),e._v(", but the name is configurable (see\n"),a("RouterLink",{attrs:{to:"/packages/easy-webhook/config.html"}},[e._v("Configuration")]),e._v(").")],1),e._v(" "),a("p",[a("em",[e._v("This is configure once middleware.")])]),e._v(" "),a("h3",{attrs:{id:"eventsmiddleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventsmiddleware"}},[e._v("#")]),e._v(" "),a("code",[e._v("EventsMiddleware")])]),e._v(" "),a("p",[e._v("This middleware dispatches an event depending on the outcome of the webhook HTTP request. See see "),a("RouterLink",{attrs:{to:"/packages/easy-webhook/events.html"}},[e._v("Events")]),e._v(")\nfor more information.")],1),e._v(" "),a("h3",{attrs:{id:"handleexceptionsmiddleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handleexceptionsmiddleware"}},[e._v("#")]),e._v(" "),a("code",[e._v("HandleExceptionsMiddleware")])]),e._v(" "),a("p",[e._v("This middleware catches exceptions that are thrown within the stack and handles them gracefully by returning a\nfailed WebhookResult containing the actual exception.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("To prevent an exception to be handled by this middleware, simply implement "),a("code",[e._v("EonX\\EasyWebhook\\Interfaces\\DoNotHandleMeEasyWebhookExceptionInterface")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"idheadermiddleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#idheadermiddleware"}},[e._v("#")]),e._v(" "),a("code",[e._v("IdHeaderMiddleware")])]),e._v(" "),a("p",[e._v("This middleware sets the "),a("strong",[e._v("ID header")]),e._v(" of the webhook HTTP request to the webhook's "),a("code",[e._v("$id")]),e._v(" property (if it exists) or\ngenerates a new ID.")]),e._v(" "),a("p",[e._v("The default name of the ID header is "),a("code",[e._v("X-Webhook-Id")]),e._v(", but the name is configurable (see "),a("RouterLink",{attrs:{to:"/packages/easy-webhook/config.html"}},[e._v("Configuration")]),e._v(").")],1),e._v(" "),a("p",[a("em",[e._v("This is configure once middleware.")])]),e._v(" "),a("h3",{attrs:{id:"lockmiddleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lockmiddleware"}},[e._v("#")]),e._v(" "),a("code",[e._v("LockMiddleware")])]),e._v(" "),a("p",[e._v("This middleware locks the Webhook object at the start of middleware processing and unlocks it at the end.")]),e._v(" "),a("p",[e._v("This middleware prevents the same webhook from being sent more than once if there are concurrency issues with multiple\nworkers consuming the asynchronous webhook queue.")]),e._v(" "),a("h3",{attrs:{id:"methodmiddleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methodmiddleware"}},[e._v("#")]),e._v(" "),a("code",[e._v("MethodMiddleware")])]),e._v(" "),a("p",[e._v("This middleware sets the HTTP method for sending the webhook HTTP request to the webhook's "),a("code",[e._v("$method")]),e._v(" property (if it\nexists) or the method defined in the package configuration (see "),a("RouterLink",{attrs:{to:"/packages/easy-webhook/config.html"}},[e._v("Configuration")]),e._v("). The default method is\n"),a("code",[e._v("POST")]),e._v(".")],1),e._v(" "),a("p",[a("em",[e._v("This is configure once middleware.")])]),e._v(" "),a("h3",{attrs:{id:"rerunmiddleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rerunmiddleware"}},[e._v("#")]),e._v(" "),a("code",[e._v("RerunMiddleware")])]),e._v(" "),a("p",[e._v("If the webhook is in a final state (i.e. success or failed), this middleware checks if rerun is allowed for the webhook,\nand if so, resets its "),a("code",[e._v("$currentAttempt")]),e._v(" and its "),a("code",[e._v("$status")]),e._v(" to "),a("code",[e._v("pending")]),e._v(", which allows the webhook to be rerun.")]),e._v(" "),a("p",[e._v("This middleware ensures that webhooks will not be rerun after reaching a final state unless explicitly allowed by the\nwebhook.")]),e._v(" "),a("h3",{attrs:{id:"resetstoremiddleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resetstoremiddleware"}},[e._v("#")]),e._v(" "),a("code",[e._v("ResetStoreMiddleware")])]),e._v(" "),a("p",[e._v("This middleware resets the webhook store and webhook results store. See "),a("RouterLink",{attrs:{to:"/packages/easy-webhook/stores.html"}},[e._v("Stores")]),e._v(" for more information.")],1),e._v(" "),a("p",[e._v("This middleware prevents memory issues when sending webhooks asynchronously with stores that use memory for their\nstorage, such as the array stores.")]),e._v(" "),a("p",[e._v("Note that the stores must implement "),a("code",[e._v("EonX\\EasyWebhook\\Interfaces\\Stores\\ResetStoreInterface")]),e._v(". Of the stores provided by\nthe EasyWebhook package, only the array stores support reset.")]),e._v(" "),a("h3",{attrs:{id:"sendaftermiddleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sendaftermiddleware"}},[e._v("#")]),e._v(" "),a("code",[e._v("SendAfterMiddleware")])]),e._v(" "),a("p",[e._v("This middleware checks the "),a("code",[e._v("$sendAfter")]),e._v(" property of the webhook, and if it exists and is after the current date and\ntime, it simply stores the webhook in the configured store, and does not proceed with any further middleware processing.\nYou can initiate sending of delayed webhooks via the console command "),a("code",[e._v("easy-webhooks:send-due-webhooks")]),e._v(". See\n"),a("RouterLink",{attrs:{to:"/packages/easy-webhook/console.html"}},[e._v("Console")]),e._v(" for more information.")],1),e._v(" "),a("p",[e._v("Note that the webhook store must implement "),a("code",[e._v("EonX\\EasyWebhook\\Interfaces\\Stores\\SendAfterStoreInterface")]),e._v(" in order to be\nable to find due webhooks. Of the stores provided by the EasyWebhook package, only the Doctrine DBAL webhook store\nsupports finding due webhooks.")]),e._v(" "),a("h3",{attrs:{id:"sendwebhookmiddleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sendwebhookmiddleware"}},[e._v("#")]),e._v(" "),a("code",[e._v("SendWebhookMiddleware")])]),e._v(" "),a("p",[e._v("This middleware sends the webhook HTTP request and returns the result in a "),a("RouterLink",{attrs:{to:"/packages/easy-webhook/webhook-result.html"}},[e._v("WebhookResult")]),e._v(" object.")],1),e._v(" "),a("h3",{attrs:{id:"signatureheadermiddleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signatureheadermiddleware"}},[e._v("#")]),e._v(" "),a("code",[e._v("SignatureHeaderMiddleware")])]),e._v(" "),a("p",[e._v("This middleware sets the "),a("strong",[e._v("Signature header")]),e._v(" of the webhook HTTP request.")]),e._v(" "),a("p",[e._v("By default, this package uses the "),a("code",[e._v("EonX\\EasyWebhook\\Signers\\Rs256Signer")]),e._v(" signer. The header will contain a SHA-256 HMAC\n(Hash-based Message Authentication Code) constructed by hashing the webhook's request body with either the webhook's\n"),a("code",[e._v("$secret")]),e._v(" property (if it exists) or the secret defined in the package configuration (see "),a("RouterLink",{attrs:{to:"/packages/easy-webhook/config.html"}},[e._v("Configuration")]),e._v(").")],1),e._v(" "),a("p",[e._v("You can use your own signer by setting the "),a("code",[e._v("EonX\\EasyWebhook\\Interfaces\\WebhookSignerInterface")]),e._v(" service to your own\nimplementation.")]),e._v(" "),a("p",[e._v("The default name of the Signature header is "),a("code",[e._v("X-Webhook-Signature")]),e._v(", but the name is configurable (see\n"),a("RouterLink",{attrs:{to:"/packages/easy-webhook/config.html"}},[e._v("Configuration")]),e._v(").")],1),e._v(" "),a("p",[a("em",[e._v("This is configure once middleware.")])]),e._v(" "),a("h3",{attrs:{id:"statusandattemptmiddleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#statusandattemptmiddleware"}},[e._v("#")]),e._v(" "),a("code",[e._v("StatusAndAttemptMiddleware")])]),e._v(" "),a("p",[e._v("This middleware updates the webhook status and current attempt after a response has been received from the webhook HTTP\nrequest.")]),e._v(" "),a("p",[e._v("The current attempt is incremented.")]),e._v(" "),a("p",[e._v("The status can be set to one of:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("success")]),e._v(": The webhook was successfully sent.")]),e._v(" "),a("li",[a("code",[e._v("failed")]),e._v(": The webhook sending failed and the webhook has reached the maximum number of attempts allowed")]),e._v(" "),a("li",[a("code",[e._v("failed_pending_retry")]),e._v(": The webhook sending failed but the webhook has not reached the maximum number of attempts\nallowed")])]),e._v(" "),a("h3",{attrs:{id:"storemiddleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storemiddleware"}},[e._v("#")]),e._v(" "),a("code",[e._v("StoreMiddleware")])]),e._v(" "),a("p",[e._v("This middleware stores the webhook and webhook result in the configured stores after a response has been received from\nthe webhook HTTP request. See "),a("RouterLink",{attrs:{to:"/packages/easy-webhook/stores.html"}},[e._v("Stores")]),e._v(" for more information.")],1),e._v(" "),a("h3",{attrs:{id:"syncretrymiddleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syncretrymiddleware"}},[e._v("#")]),e._v(" "),a("code",[e._v("SyncRetryMiddleware")])]),e._v(" "),a("p",[e._v("If the webhook was sent synchronously, and it failed, this middleware retries sending the webhook.\nIt provides a simple out-of-the-box solution for handling retries. However, we strongly recommend sending webhooks\nasynchronously, so your application is not blocked by retries.")]),e._v(" "),a("h2",{attrs:{id:"middleware-stack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#middleware-stack"}},[e._v("#")]),e._v(" Middleware stack")]),e._v(" "),a("p",[e._v("The following table show the middleware stack in priority order, with summaries of their actions:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Middleware")]),e._v(" "),a("th",[e._v("Action forward ⬇️")]),e._v(" "),a("th",[e._v("Action back ⬆️")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("em",[e._v("Begin initial core middleware")])]),e._v(" "),a("td"),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("code",[e._v("LockMiddleware")])]),e._v(" "),a("td",[e._v("Lock webhook")]),e._v(" "),a("td",[e._v("Unlock webhook")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("StoreMiddleware")])]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("Store webhook and result")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("StatusAndAttemptMiddleware")])]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("Update status and attempt")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("HandleExceptionsMiddleware")])]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("Handle exception thrown within the stack")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("ResetStoreMiddleware")])]),e._v(" "),a("td",[e._v("Reset webhook and result stores")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("code",[e._v("EventsMiddleware")])]),e._v(" "),a("td"),e._v(" "),a("td",[e._v("Dispatch event")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("RerunMiddleware")])]),e._v(" "),a("td",[e._v("If rerun allowed, reset status and current attempt"),a("br"),e._v("If not allowed, throw exception")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("em",[e._v("End initial core middleware")])]),e._v(" "),a("td"),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("em",[e._v("Begin custom middleware")]),a("br"),a("em",[e._v("(processed in priority order)")])]),e._v(" "),a("td"),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("code",[e._v("BodyFormatterMiddleware")])]),e._v(" "),a("td",[e._v("Format request body")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("code",[e._v("EventHeaderMiddleware")])]),e._v(" "),a("td",[e._v("Set Event request header")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("code",[e._v("IdHeaderMiddleware")])]),e._v(" "),a("td",[e._v("Set ID request header")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("code",[e._v("SignatureHeaderMiddleware")])]),e._v(" "),a("td",[e._v("Set Signature request header")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("Custom middleware")]),e._v(" "),a("td",[e._v("Custom pre-processing")]),e._v(" "),a("td",[e._v("Custom post-processing")])]),e._v(" "),a("tr",[a("td",[a("em",[e._v("End custom middleware")])]),e._v(" "),a("td"),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("em",[e._v("Begin final core middleware")])]),e._v(" "),a("td"),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("code",[e._v("MethodMiddleware")])]),e._v(" "),a("td",[e._v("Set request method")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("code",[e._v("SendAfterMiddleware")])]),e._v(" "),a("td",[e._v("If time is before "),a("code",[e._v("$sendAfter")]),e._v(", store webhook and return up stack"),a("br"),e._v("If time is after "),a("code",[e._v("$sendAfter")]),e._v(", continue down stack")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("code",[e._v("AsyncMiddleware")])]),e._v(" "),a("td",[e._v("If asynchronous, store webhook and return up stack"),a("br"),e._v("If synchronous, continue down stack")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("code",[e._v("SyncRetryMiddleware")])]),e._v(" "),a("td",[e._v("If asynchronous, continue down stack"),a("br"),e._v("If synchronous, retries webhook if not successful")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("code",[e._v("SendWebhookMiddleware")])]),e._v(" "),a("td",[e._v("Send request and return up stack")]),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[a("em",[e._v("End final core middleware")])]),e._v(" "),a("td"),e._v(" "),a("td")])])]),e._v(" "),a("h2",{attrs:{id:"custom-middleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-middleware"}},[e._v("#")]),e._v(" Custom middleware")]),e._v(" "),a("p",[e._v("Custom middleware must implement "),a("code",[e._v("EonX\\EasyWebhook\\Interfaces\\MiddlewareInterface")]),e._v(". However, it may be easier to extend\none of the following classes:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("EonX\\EasyWebhook\\Middleware\\AbstractConfigureOnceMiddleware")]),e._v(': For middleware that should not be processed if the\nwebhook is already "configured". Implement the '),a("code",[e._v("doProcess()")]),e._v(" method.")]),e._v(" "),a("li",[a("code",[e._v("EonX\\EasyWebhook\\Middleware\\AbstractMiddleware")]),e._v(': For middleware that should be processed regardless of whether the\nwebhook is "configured". Implement the '),a("code",[e._v("process()")]),e._v(" method.")])]),e._v(" "),a("p",[e._v("For example, here is how you would add a custom header to every webhook sent in configure once middleware:")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("EonX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("EasyWebhook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Interfaces"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("StackInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("EonX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("EasyWebhook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Interfaces"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("WebhookInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("EonX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("EasyWebhook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Interfaces"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("WebhookResultInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("final")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MyCustomHeaderMiddleware")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("extends")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("AbstractConfigureOnceMiddleware")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("protected")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("doProcess")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[e._v("WebhookInterface")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$webhook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[e._v("StackInterface")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$stack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name return-type"}},[e._v("WebhookResultInterface")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* Add custom header */")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$webhook")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'X-My-Header'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'my-value'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* Send webhook down stack */")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$stack")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("process")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$webhook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$stack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("This example shows placement of custom pre-processing and post-processing in normal middleware:")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("EonX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("EasyWebhook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Interfaces"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("StackInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("EonX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("EasyWebhook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Interfaces"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("WebhookInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("EonX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("EasyWebhook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Interfaces"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("WebhookResultInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("final")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MyCustomMiddleware")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("extends")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("AbstractMiddleware")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("process")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[e._v("WebhookInterface")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$webhook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[e._v("StackInterface")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$stack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name return-type"}},[e._v("WebhookResultInterface")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* Add custom pre-processing */")]),e._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* Send webhook down stack */")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$webhookResult")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$stack")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("process")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$webhook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$stack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* Add custom post-processing */")]),e._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* Return webhook result up stack */")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$webhookResult")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);