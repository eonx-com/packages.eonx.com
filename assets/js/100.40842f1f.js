(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{292:function(e,o,t){"use strict";t.r(o);var s=t(3),a=Object(s.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("The "),t("strong",[e._v("EasyWebhook")]),e._v(" package allows you to implement flexible, configurable webhook functionality in your projects. A\n"),t("strong",[e._v("webhook")]),e._v(" is a mechanism for sending HTTP requests to URLs, typically with information about an event that has\noccurred in your application.")]),e._v(" "),t("p",[e._v("Using the EasyWebhook package, you can:")]),e._v(" "),t("ul",[t("li",[e._v("Configure webhooks")]),e._v(" "),t("li",[e._v("Send webhooks as HTTP requests to URLs and retry them if they fail")]),e._v(" "),t("li",[e._v("Send webhooks synchronously or asynchronously")]),e._v(" "),t("li",[e._v("Receive webhook responses")]),e._v(" "),t("li",[e._v("Persist webhooks and results into a store of your choice")]),e._v(" "),t("li",[e._v("Dispatch events upon success or failure of webhooks")])]),e._v(" "),t("h2",{attrs:{id:"require-package-composer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#require-package-composer"}},[e._v("#")]),e._v(" Require package (Composer)")]),e._v(" "),t("p",[e._v("The recommended way to install this package is to use "),t("a",{attrs:{href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Composer"),t("OutboundLink")],1),e._v(":")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("composer")]),e._v(" require eonx-com/easy-webhook\n")])])]),t("h2",{attrs:{id:"usage-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-overview"}},[e._v("#")]),e._v(" Usage overview")]),e._v(" "),t("p",[e._v("The "),t("strong",[t("RouterLink",{attrs:{to:"/packages/easy-webhook/webhook.html"}},[e._v("Webhook class")])],1),e._v(" defines the configuration for a webhook, e.g. the URL to send webhook HTTP requests.")]),e._v(" "),t("p",[e._v("The "),t("strong",[t("RouterLink",{attrs:{to:"/packages/easy-webhook/webhook-client.html"}},[e._v("WebhookClient class")])],1),e._v(" triggers the processing of the stack of middleware that applies to the\nwebhook.")]),e._v(" "),t("p",[e._v("The "),t("strong",[e._v("middleware stack")]),e._v(" is the workhorse of the EasyWebhook package. Each middleware in the stack is responsible for a\ndistinct part of the webhook processing, including:")]),e._v(" "),t("ul",[t("li",[e._v("Sending webhooks as HTTP requests.")]),e._v(" "),t("li",[e._v("Getting the responses of the HTTP requests, using the "),t("strong",[t("RouterLink",{attrs:{to:"/packages/easy-webhook/webhook-result.html"}},[e._v("WebhookResult class")])],1),e._v(" class to hold the\nresponses.")]),e._v(" "),t("li",[e._v("Retrying webhooks if necessary. The EasyWebhook package has a default retry strategy but you can implement your own.\nSee "),t("RouterLink",{attrs:{to:"/packages/easy-webhook/retry-strategies.html"}},[e._v("Retry strategies")]),e._v(" for more information.")],1),e._v(" "),t("li",[e._v("Persisting webhooks and their responses in stores. You can implement your own stores, but the EasyWebhook package\ncomes with three store options out of the box: null store, array store and Doctrine DBAL store. See\n"),t("RouterLink",{attrs:{to:"/packages/easy-webhook/stores.html"}},[e._v("Stores")]),e._v(" for more information.")],1),e._v(" "),t("li",[e._v("Dispatching events upon success or failure of webhooks. See "),t("RouterLink",{attrs:{to:"/packages/easy-webhook/events.html"}},[e._v("Events")]),e._v(" for more information.")],1)]),e._v(" "),t("p",[e._v("See "),t("RouterLink",{attrs:{to:"/packages/easy-webhook/middleware.html"}},[e._v("Middleware")]),e._v(" for detailed information about middleware, including how to implement custom middleware.")],1),e._v(" "),t("p",[e._v("By default, webhooks are sent asynchronously, but you can configure a webhook to be sent synchronously. See\n"),t("RouterLink",{attrs:{to:"/packages/easy-webhook/sync.html"}},[e._v("Sending synchronously")]),e._v(" for more information.")],1),e._v(" "),t("p",[e._v("Webhooks can be configured to be sent after a particular date and time. You can run the\n"),t("code",[e._v("easy-webhooks:send-due-webhooks")]),e._v(" console command in a cron job to send due webhooks. See "),t("RouterLink",{attrs:{to:"/packages/easy-webhook/console.html"}},[e._v("Console")]),e._v(" for more\ninformation.")],1),e._v(" "),t("p",[e._v("Global settings for the EasyWebhook package can be configured via a configuration file in your application. See\n"),t("RouterLink",{attrs:{to:"/packages/easy-webhook/config.html"}},[e._v("Configuration")]),e._v(" for more information.")],1)])}),[],!1,null,null,null);o.default=a.exports}}]);