(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{313:function(e,t,r){"use strict";r.r(t);var l=r(3),i=Object(l.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"retry-strategies"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#retry-strategies"}},[e._v("#")]),e._v(" Retry strategies")]),e._v(" "),r("p",[e._v("By default, the EasyWebhook package uses a "),r("strong",[e._v("multiplier retry strategy")]),e._v(" for retrying webhooks if sending fails. The\nmultiplier retry strategy can increase the delay between retries exponentially.")]),e._v(" "),r("p",[e._v("The multiplier retry strategy has the following properties:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("$delayMilliseconds")]),e._v(": Delay between retries (in milliseconds). The default value is "),r("code",[e._v("1000")]),e._v(".")]),e._v(" "),r("li",[r("code",[e._v("$multiplier")]),e._v(": Multiplier for the delay for each retry. The default value is "),r("code",[e._v("1.0")]),e._v(".")]),e._v(" "),r("li",[r("code",[e._v("$maxDelayMilliseconds")]),e._v(": Maximum delay between retries (in milliseconds). There is no default value.")])]),e._v(" "),r("p",[e._v("With the default values, there will be 1 second delay between each retry.")]),e._v(" "),r("p",[e._v("You can modify the multiplier retry strategy by setting its arguments when registering the\n"),r("code",[e._v("EonX\\EasyWebhook\\Interfaces\\WebhookRetryStrategyInterface")]),e._v(" service.")]),e._v(" "),r("p",[e._v("For example, if you set "),r("code",[e._v("$delayMilliseconds")]),e._v(" to "),r("code",[e._v("10000")]),e._v(" and "),r("code",[e._v("$multiplier")]),e._v(" to "),r("code",[e._v("2.0")]),e._v(", the retry delays will be:")]),e._v(" "),r("ul",[r("li",[e._v("Retry 1: 10 second delay.")]),e._v(" "),r("li",[e._v("Retry 2: 20 second delay (10000 * 2 = 20000).")]),e._v(" "),r("li",[e._v("Retry 3: 40 second delay (20000 * 2 = 40000).")])]),e._v(" "),r("p",[e._v("You can also create your own retry strategy by overriding the\n"),r("code",[e._v("EonX\\EasyWebhook\\Interfaces\\WebhookRetryStrategyInterface")]),e._v(" service with your own implementation.")])])}),[],!1,null,null,null);t.default=i.exports}}]);