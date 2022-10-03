(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{245:function(r,e,o){"use strict";o.r(e);var t=o(3),a=Object(t.a)({},(function(){var r=this,e=r.$createElement,o=r._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[o("h1",{attrs:{id:"error-reporters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#error-reporters"}},[r._v("#")]),r._v(" Error reporters")]),r._v(" "),o("p",[r._v("The "),o("strong",[r._v("error reporters")]),r._v(" are used by the ErrorHandler's "),o("code",[r._v("report()")]),r._v(" method to generate a report to the reporting\nmechanism(s) of your choice. See "),o("RouterLink",{attrs:{to:"/packages/easy-error-handler/error-handler.html"}},[r._v("ErrorHandler")]),r._v(".")],1),r._v(" "),o("p",[r._v("The error reporters implement "),o("code",[r._v("EonX\\EasyErrorHandler\\Interfaces\\ErrorReporterInterface")]),r._v(", which defines the "),o("code",[r._v("report()")]),r._v("\nmethod. The ErrorHandler loops through the provided error reporters and calls the "),o("code",[r._v("report()")]),r._v(" method on each one.")]),r._v(" "),o("p",[r._v("Error reporters are provided to the ErrorHandler via implementations of\n"),o("code",[r._v("EonX\\EasyErrorHandler\\Interfaces\\ErrorReporterProviderInterface")]),r._v(".")]),r._v(" "),o("h2",{attrs:{id:"default-reporters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#default-reporters"}},[r._v("#")]),r._v(" Default reporters")]),r._v(" "),o("p",[r._v("The default error reporter logs to the main logging channel of your application.")]),r._v(" "),o("p",[r._v("If you use the "),o("a",{attrs:{href:"https://packages.eonx.com/projects/eonx-com/easy-bugsnag/",target:"_blank",rel:"noopener noreferrer"}},[r._v("easy-bugsnag"),o("OutboundLink")],1),r._v(" package, then the ErrorHandler will also notify Bugsnag based on the log level of the\nexception.")]),r._v(" "),o("h2",{attrs:{id:"custom-reporters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#custom-reporters"}},[r._v("#")]),r._v(" Custom reporters")]),r._v(" "),o("p",[r._v("You can create your own custom error reporters, e.g. to send email or other notifications, and provide them to the\nErrorHandler.")]),r._v(" "),o("p",[r._v("Create your own custom error reporters by implementing "),o("code",[r._v("EonX\\EasyErrorHandler\\Interfaces\\ErrorReporterInterface")]),r._v(".")]),r._v(" "),o("p",[r._v("Provide your error reporters to the ErrorHandler by using\n"),o("code",[r._v("EonX\\EasyErrorHandler\\Interfaces\\ErrorReporterProviderInterface")]),r._v(". This interface defines the "),o("code",[r._v("getReporters()")]),r._v(" method\nwhich returns a collection of your "),o("code",[r._v("EonX\\EasyErrorHandler\\Interfaces\\ErrorReporterInterface")]),r._v(" implementations. The\nErrorHandler accepts a collection of all error reporter providers via its constructor.")])])}),[],!1,null,null,null);e.default=a.exports}}]);