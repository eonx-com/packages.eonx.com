(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{258:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("For clients to receive real_time messages, they need to subscribe to topics. These subscriptions are secure and require\nsigned JWTs provided by the EonX Notification service. Each JWT is issued for a restricted list of topics, so a client\ncan subscribe only to topics listed in its JWT.")]),t._v(" "),a("p",[t._v("Each client MUST request the generation of new subscribe info in order to be able to actually subscribe to topics.\nSubscribe info is made of:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("url")]),t._v(": The URL to subscribe to")]),t._v(" "),a("li",[a("strong",[t._v("topics")]),t._v(": The list of formatted topics to subscribe to")]),t._v(" "),a("li",[a("strong",[t._v("jwt")]),t._v(": The JWT to send as Bearer Token within the subscription request")])]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"provide-subscribe-info-to-clients"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provide-subscribe-info-to-clients"}},[t._v("#")]),t._v(" Provide Subscribe Info to clients")]),t._v(" "),a("p",[t._v("This package provides you with a "),a("code",[t._v("EonX\\EasyNotification\\Interfaces\\SubscribeInfoFinderInterface")]),t._v(" service making generating\nthe subscription info from the EonX Notification service easy. You can use dependency injection to use anywhere you like\nin your code.")]),t._v(" "),a("p",[t._v("Here is an example how to generate subscription info within a Symfony Controller:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/Http/Controller/SubscribeInfoController.php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyNotification"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Interfaces"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SubscribeInfoFinderInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Symfony"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HttpFoundation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("JsonResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Symfony"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HttpFoundation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SubscribeInfoController")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @var string\n     */")]),t._v("    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$apiKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @var string\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$providerExternalId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @var \\EonX\\EasyNotification\\Interfaces\\SubscribeInfoFinderInterface\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscribeInfoFinder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__construct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$notificationApiKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$notificationProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("SubscribeInfoFinderInterface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscribeInfoFinder")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("apiKey")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$notificationApiKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("providerExternalId")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$notificationProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("subscribeInfoFinder")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscribeInfoFinder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__invoke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("Request")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Please do better in your code! :)")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$body")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \\"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("json_decode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscribeInfo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("subscribeInfoFinder")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("apiKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("providerExternalId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n            "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'topics'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get topics from request body")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JsonResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'jwt'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscribeInfo")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getJwt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'topics'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscribeInfo")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTopics")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'url'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$subscribeInfo")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);