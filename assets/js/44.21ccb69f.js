(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{401:function(t,e,s){"use strict";s.r(e);var a=s(25),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"register-bundle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#register-bundle"}},[t._v("#")]),t._v(" Register Bundle")]),t._v(" "),s("p",[t._v("If you're using "),s("a",{attrs:{href:"https://flex.symfony.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Symfony Flex"),s("OutboundLink")],1),t._v(", this step has been done automatically for you. If not, you can register the bundle\nyourself:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config/bundles.php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other bundles ...")]),t._v("\n    \n    EonX\\"),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EasyLock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Bridge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Symfony"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyLockBundle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'all'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"messenger-integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#messenger-integration"}},[t._v("#")]),t._v(" Messenger Integration")]),t._v(" "),s("p",[t._v("When running multiple workers simultaneously, it is a good practice to implement a locking mechanism to guarantee\na single queue message is handled only once. A common use case, multiple workers consume the same message at the same\ntime.")]),t._v(" "),s("p",[t._v("This package comes with a Messenger Middleware handling lock out of the box. Two options are available:")]),t._v(" "),s("ul",[s("li",[t._v("Make your message implement "),s("code",[t._v("EonX\\EasyLock\\Interfaces\\WithLockDataInterface")])]),t._v(" "),s("li",[t._v("Add "),s("code",[t._v("EonX\\EasyLock\\Bridge\\Symfony\\Messenger\\WithLockDataStamp")]),t._v(" to the envelope")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("| Tip")]),t._v(" "),s("p",[t._v("Remember to update your messenger configuration to add the middleware")])])])}),[],!1,null,null,null);e.default=n.exports}}]);