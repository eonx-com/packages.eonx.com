(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{282:function(e,o,t){"use strict";t.r(o);var s=t(3),n=Object(s.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"console"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#console"}},[e._v("#")]),e._v(" Console")]),e._v(" "),t("p",[e._v("The EasyWebhook packages provides the following console command:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("easy-webhooks:send-due-webhooks")])])]),e._v(" "),t("h2",{attrs:{id:"send-due-webhooks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#send-due-webhooks"}},[e._v("#")]),e._v(" Send due webhooks")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("easy-webhooks:send-due-webhooks")]),e._v(" command finds stored webhooks that are due to be sent, i.e. webhooks that were not\nsent because they had the "),t("code",[e._v("$sendAfter")]),e._v(" property set to a date and time in the future, but can now be sent because the\n"),t("code",[e._v("$sendAfter")]),e._v(" date and time has passed.")]),e._v(" "),t("p",[e._v("Note that the webhook store must implement "),t("code",[e._v("EonX\\EasyWebhook\\Interfaces\\Stores\\SendAfterStoreInterface")]),e._v(" in order to be\nable to find due webhooks. Of the stores provided by the EasyWebhook package, only the Doctrine DBAL webhook store\nsupports finding due webhooks.")]),e._v(" "),t("p",[e._v("The command has the following options:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("--bulk")]),e._v(": Number of webhooks to send.")]),e._v(" "),t("li",[t("code",[e._v("--sendAfter")]),e._v(': DateTime to start fetching due webhooks from, in "Y-m-d H:i:s" format.')]),e._v(" "),t("li",[t("code",[e._v("--timezone")]),e._v(": The time zone of the "),t("code",[e._v("sendAfter")]),e._v(" DateTime, given as a valid "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Tz_database",target:"_blank",rel:"noopener noreferrer"}},[e._v("tz database"),t("OutboundLink")],1),e._v(" name, e.g.\n"),t("code",[e._v("Australia/Melbourne")]),e._v(".")])])])}),[],!1,null,null,null);o.default=n.exports}}]);