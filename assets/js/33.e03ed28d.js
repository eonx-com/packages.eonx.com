(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{229:function(e,a,t){"use strict";t.r(a);var s=t(3),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"session-tracking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session-tracking"}},[e._v("#")]),e._v(" Session tracking")]),e._v(" "),t("p",[e._v("Bugsnag can track the number of "),t("strong",[e._v("sessions")]),e._v(" that happen in your application, which enables Bugsnag to provide stability\nscores for comparison across releases of your application.")]),e._v(" "),t("p",[e._v("You can enable session tracking by simply setting the "),t("code",[e._v("session_tracking.enabled")]),e._v(" configuration option to "),t("code",[e._v("true")]),e._v(" (see\n"),t("RouterLink",{attrs:{to:"/packages/easy-bugsnag/config.html"}},[e._v("Configuration")]),e._v(").")],1),e._v(" "),t("h2",{attrs:{id:"excluding-urls"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#excluding-urls"}},[e._v("#")]),e._v(" Excluding URLs")]),e._v(" "),t("p",[e._v("Since you may not want every request to count towards a session, the EasyBugsnag package allows you to exclude specific\nrequest URLs. For example, you might want to exclude the "),t("code",[e._v("/ping")]),e._v(" URL from session tracking.")]),e._v(" "),t("p",[e._v("There are two configuration options that can help with excluding URLs from session tracking:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("session_tracking.exclude_urls")]),e._v(": An array of URLs or regular expressions to exclude from session tracking. For\nexample, you could use the URL "),t("code",[e._v("/ping")]),e._v(" or the regular expression "),t("code",[e._v("(ping|pong)")]),e._v(". Note that all elements of the array\nare treated as regular expressions when matching URLs to exclude. Do not include regular expression delimiters in the\nelements of the array.")]),e._v(" "),t("li",[t("code",[e._v("session_tracking.exclude_urls_delimiter")]),e._v(": Delimiter used in regular expressions for matching URLs to exclude from\nsession tracking. By default, the delimiter is "),t("code",[e._v("#")]),e._v(" but you should use another delimiter character if you want to\nexclude URLs that contain the "),t("code",[e._v("#")]),e._v(" character.")])]),e._v(" "),t("h2",{attrs:{id:"cache-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cache-configuration"}},[e._v("#")]),e._v(" Cache configuration")]),e._v(" "),t("p",[e._v("In order to persist session information across individual requests, the EasyBugsnag package uses a cache. The package\nuses a default cache implementation for both Symfony and Laravel frameworks, which uses files for caching.")]),e._v(" "),t("p",[e._v("The default cache expiry is set to one hour for performance reasons. If necessary, you can explicitly set the cache\nexpiry via the "),t("code",[e._v("session_tracking.cache_expires_after")]),e._v(" configuration option.")]),e._v(" "),t("p",[e._v("You can tweak the default Symfony cache implementation through the following configuration options:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("session_tracking.cache_directory")]),e._v(": Set the cache directory (the default is "),t("code",[e._v("%kernel.cache_dir%")]),e._v(").")]),e._v(" "),t("li",[t("code",[e._v("session_tracking.cache_namespace")]),e._v(": Set the cache namespace (the default is "),t("code",[e._v("easy_bugsnag_sessions")]),e._v(").")])]),e._v(" "),t("p",[e._v("You can tweak the default Laravel cache implementation through the following configuration option:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("session_tracking.cache_store")]),e._v(": Set the cache store to use (the default is "),t("code",[e._v("file")]),e._v(").")])]),e._v(" "),t("h3",{attrs:{id:"custom-cache-implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#custom-cache-implementation"}},[e._v("#")]),e._v(" Custom cache implementation")]),e._v(" "),t("p",[e._v("You can even create your own cache implementation if required. For Symfony applications, create a cache that implements\n"),t("code",[e._v("Symfony\\Contracts\\Cache\\CacheInterface")]),e._v(". For Laravel applications, create a cache that implements\n"),t("code",[e._v("Illuminate\\Contracts\\Cache\\Repository")]),e._v(".")]),e._v(" "),t("p",[e._v("When you register your cache implementation as a service, use the "),t("code",[e._v("SERVICE_SESSION_TRACKING_CACHE")]),e._v(" constant from\n"),t("code",[e._v("EonX\\EasyBugsnag\\Bridge\\BridgeConstantsInterface")]),e._v(" as the service ID.")]),e._v(" "),t("h2",{attrs:{id:"tracking-queue-jobs-in-laravel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tracking-queue-jobs-in-laravel"}},[e._v("#")]),e._v(" Tracking queue jobs in Laravel")]),e._v(" "),t("p",[e._v("For Laravel applications, you can enable session tracking for queue jobs by setting the\n"),t("code",[e._v("session_tracking.queue_job_count_for_sessions")]),e._v(" configuration option to "),t("code",[e._v("true")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"tracking-messages-in-symfony"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tracking-messages-in-symfony"}},[e._v("#")]),e._v(" Tracking messages in Symfony")]),e._v(" "),t("p",[e._v("For Symfony applications, you can enable session tracking for messenger messages by setting the\n"),t("code",[e._v("session_tracking.messenger_message_count_for_sessions")]),e._v(" configuration option to "),t("code",[e._v("true")]),e._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);