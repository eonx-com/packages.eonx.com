(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{260:function(t,e,a){"use strict";a.r(e);var s=a(3),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"register-bundle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-bundle"}},[t._v("#")]),t._v(" Register Bundle")]),t._v(" "),a("p",[t._v("If you're using "),a("a",{attrs:{href:"https://flex.symfony.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Symfony Flex"),a("OutboundLink")],1),t._v(", this step has been done automatically for you. If not, you can register the bundle\nyourself:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config/bundles.php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other bundles ...")]),t._v("\n    \n    EonX\\"),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("EasyRandom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Bridge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Symfony"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyRandomBundle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'all'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("br"),t._v(" "),a("h3",{attrs:{id:"uuid-v4-generator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uuid-v4-generator"}},[t._v("#")]),t._v(" UUID V4 Generator")]),t._v(" "),a("p",[t._v("In the case you want to generate UUID V4 in your application, you will need to set the UUID V4 generator of your choice\nonto the random generator instance. To do so, you will first need to register the UUID V4 generator of your choice as\na service and, then set the service id into the bundle configuration.")]),t._v(" "),a("h4",{attrs:{id:"register-uuid-v4-generator-as-a-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-uuid-v4-generator-as-a-service"}},[t._v("#")]),t._v(" Register UUID V4 generator as a service")]),t._v(" "),a("p",[t._v("By default, this package will register the built-in supported implementations as services:")]),t._v(" "),a("ul",[a("li",[a("em",[t._v("easy_random.ramsey_uuid4")]),t._v(" alias for "),a("code",[t._v("EonX\\EasyRandom\\UuidV4\\RamseyUuidV4Generator")])]),t._v(" "),a("li",[a("em",[t._v("easy_random.symfony_uuid4")]),t._v(" alias for "),a("code",[t._v("EonX\\EasyRandom\\UuidV4\\SymfonyUidUuidV4Generator")])])]),t._v(" "),a("h4",{attrs:{id:"set-the-service-id-into-the-bundle-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-the-service-id-into-the-bundle-configuration"}},[t._v("#")]),t._v(" Set the service id into the bundle configuration")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# config/packages/easy_random.yaml")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("easy_random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uuid_v4_generator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" EonX\\EasyRandom\\UuidV4\\RamseyUuidV4Generator "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The service id")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);