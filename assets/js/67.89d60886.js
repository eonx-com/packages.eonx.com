(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{261:function(e,t,s){"use strict";s.r(t);var a=s(3),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h3",{attrs:{id:"register-bundle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#register-bundle"}},[e._v("#")]),e._v(" Register Bundle")]),e._v(" "),s("p",[e._v("If you're using "),s("a",{attrs:{href:"https://flex.symfony.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Symfony Flex"),s("OutboundLink")],1),e._v(", this step has been done automatically for you. If not, you can register the bundle\nyourself:")]),e._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// config/bundles.php")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Other bundles ...")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[e._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("EasyLock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Bridge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Symfony"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("EasyLockSymfonyBundle")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'all'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token constant boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("h3",{attrs:{id:"messenger-integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#messenger-integration"}},[e._v("#")]),e._v(" Messenger Integration")]),e._v(" "),s("p",[e._v("When running multiple workers simultaneously, it is a good practice to implement a locking mechanism to guarantee\na single queue message is handled only once. A common use case, multiple workers consume the same message at the same\ntime.")]),e._v(" "),s("p",[e._v("This package comes with a Messenger Middleware handling lock out of the box. Two options are available:")]),e._v(" "),s("ul",[s("li",[e._v("Make your message implement "),s("code",[e._v("EonX\\EasyLock\\Interfaces\\WithLockDataInterface")])]),e._v(" "),s("li",[e._v("Add "),s("code",[e._v("EonX\\EasyLock\\Bridge\\Symfony\\Messenger\\WithLockDataStamp")]),e._v(" to the envelope")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Remember to update your messenger configuration to add the middleware")])])])}),[],!1,null,null,null);t.default=n.exports}}]);