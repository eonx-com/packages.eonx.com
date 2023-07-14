(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{291:function(e,t,a){"use strict";a.r(t);var s=a(3),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"register-bundle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-bundle"}},[e._v("#")]),e._v(" Register Bundle")]),e._v(" "),a("p",[e._v("If you're using "),a("a",{attrs:{href:"https://flex.symfony.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Symfony Flex"),a("OutboundLink")],1),e._v(", this step has been done automatically for you. If not, you can register the bundle\nyourself:")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// config/bundles.php")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Other bundles ...")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[e._v("EonX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("EasyRandom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Bridge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Symfony"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("EasyRandomSymfonyBundle")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'all'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("br"),e._v(" "),a("h3",{attrs:{id:"uuid-v4-generator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uuid-v4-generator"}},[e._v("#")]),e._v(" UUID V4 Generator")]),e._v(" "),a("p",[e._v("In the case you want to generate UUID V4 in your application, you will need to set the UUID V4 generator of your choice\nonto the random generator instance. To do so, you will first need to register the UUID V4 generator of your choice as\na service and, then set the service id into the bundle configuration.")]),e._v(" "),a("h4",{attrs:{id:"register-uuid-v4-generator-as-a-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-uuid-v4-generator-as-a-service"}},[e._v("#")]),e._v(" Register UUID V4 generator as a service")]),e._v(" "),a("p",[e._v("By default, this package will register the built-in supported implementations as services:")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("easy_random.ramsey_uuid4")]),e._v(" alias for "),a("code",[e._v("EonX\\EasyRandom\\UuidV4\\RamseyUuidV4Generator")])]),e._v(" "),a("li",[a("em",[e._v("easy_random.symfony_uuid4")]),e._v(" alias for "),a("code",[e._v("EonX\\EasyRandom\\UuidV4\\SymfonyUidUuidV4Generator")])])]),e._v(" "),a("h4",{attrs:{id:"set-the-service-id-into-the-bundle-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-the-service-id-into-the-bundle-configuration"}},[e._v("#")]),e._v(" Set the service id into the bundle configuration")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# config/packages/easy_random.yaml")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("easy_random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("uuid_v4_generator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" EonX\\EasyRandom\\UuidV4\\RamseyUuidV4Generator "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The service id")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);