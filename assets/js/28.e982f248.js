(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{216:function(e,t,n){"use strict";n.r(t);var s=n(3),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"client-factory"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#client-factory"}},[e._v("#")]),e._v(" Client factory")]),e._v(" "),n("p",[e._v("The core functionality of the EasyBugsnag package is to create a Bugsnag client instance and make it available to your\napplication, so you can focus on notifying your errors/exceptions instead of the boilerplate Bugsnag setup. It uses a\n"),n("strong",[e._v("client factory")]),e._v(" to do this.")]),e._v(" "),n("p",[e._v("This factory implements "),n("code",[e._v("EonX\\EasyBugsnag\\Interfaces\\ClientFactoryInterface")]),e._v(" which is able to create the client from\njust your Bugsnag Integration API key.")]),e._v(" "),n("p",[e._v("However, if needed you can set your own implementations of the following additional objects used by the Bugsnag client:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("HttpClient")]),e._v(": HTTP client used to send notifications to Bugsnag.")]),e._v(" "),n("li",[n("code",[e._v("RequestResolver")]),e._v(": used to resolve request information for sending to Bugsnag.")]),e._v(" "),n("li",[n("code",[e._v("ShutdownStrategy")]),e._v(": used for determining when to send notifications to Bugsnag.")])]),e._v(" "),n("h2",{attrs:{id:"http-client"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http-client"}},[e._v("#")]),e._v(" HTTP client")]),e._v(" "),n("p",[e._v("By default, the Bugsnag client uses the "),n("a",{attrs:{href:"http://docs.guzzlephp.org/en/stable/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Guzzle HTTP client"),n("OutboundLink")],1),e._v(" to send notifications to Bugsnag. You can create your\nown HTTP client that implements "),n("code",[e._v("GuzzleHttp\\ClientInterface")]),e._v(" and set the Bugsnag client to use it instead via the client\nfactory's "),n("code",[e._v("setHttpClient()")]),e._v(" method.")]),e._v(" "),n("h2",{attrs:{id:"request-resolver"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#request-resolver"}},[e._v("#")]),e._v(" Request resolver")]),e._v(" "),n("p",[e._v("The Bugsnag client's "),n("strong",[e._v("request resolver")]),e._v(" determines information about the request that triggered the error or exception\nin your application, such as the request's method and headers.")]),e._v(" "),n("p",[e._v("By default, the EasyBugsnag package uses a framework-specific request resolver for the Bugsnag client. Thus Symfony uses\n"),n("code",[e._v("EonX\\EasyBugsnag\\Bridge\\Symfony\\Request\\SymfonyRequestResolver")]),e._v(" and Laravel uses\n"),n("code",[e._v("EonX\\EasyBugsnag\\Bridge\\Laravel\\Request\\LaravelRequestResolver")]),e._v(".")]),e._v(" "),n("p",[e._v("If required, you can create your own request resolver that implements "),n("code",[e._v("Bugsnag\\Request\\ResolverInterface")]),e._v(" and set the\nBugsnag client to use it via the client factory's "),n("code",[e._v("setRequestResolver()")]),e._v(" method.")]),e._v(" "),n("h2",{attrs:{id:"shutdown-strategy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shutdown-strategy"}},[e._v("#")]),e._v(" Shutdown strategy")]),e._v(" "),n("p",[e._v("By default, the Bugsnag client batches the sending of notifications to Bugsnag. The strategy for when to send\nnotifications is defined by the Bugsnag client's "),n("strong",[e._v("shutdown strategy")]),e._v(".")]),e._v(" "),n("p",[e._v("The EasyBugsnag package is configured to execute the Bugsnag client's shutdown strategy when triggered by the following\nevents:")]),e._v(" "),n("ul",[n("li",[e._v("application terminate")]),e._v(" "),n("li",[e._v("console terminate")]),e._v(" "),n("li",[e._v("worker running a new job")])]),e._v(" "),n("p",[e._v("The default EasyBugsnag shutdown strategy ("),n("code",[e._v("EonX\\EasyBugsnag\\Shutdown\\ShutdownStrategy")]),e._v(") will call "),n("code",[e._v("flush()")]),e._v(" and\n"),n("code",[e._v("clearBreadcrumbs()")]),e._v(" on the Bugsnag client.")]),e._v(" "),n("p",[e._v("You can create your own shutdown strategy that implements "),n("code",[e._v("Bugsnag\\Shutdown\\ShutdownStrategyInterface")]),e._v(" and set the\nBugsnag client to use it instead via the client factory's "),n("code",[e._v("setShutdownStrategy()")]),e._v(" method.")])])}),[],!1,null,null,null);t.default=a.exports}}]);