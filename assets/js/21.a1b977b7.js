(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{220:function(t,a,s){"use strict";s.r(a);var e=s(3),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("For the examples used in this document, we will assume we're working on a Symfony project. For any information regarding\nanother framework you can refer to its dedicated section. If the section doesn't exist it means that it is not supported\nyet! Please feel free to contribute.")]),t._v(" "),s("p",{staticStyle:{display:"none"}},[t._v("Required not to break format below")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("PSR7")]),t._v(" "),s("p",[t._v("Decoders will expect a PSR7 Request to work, you can use any library to convert Symfony Requests to PSR7 ones.\nIn the following examples we will be using "),s("a",{attrs:{href:"https://github.com/eonx-com/easy-psr7-factory"}},[t._v("EasyPsr7Factory")])])]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"decoding-basicauth-only"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decoding-basicauth-only"}},[t._v("#")]),t._v(" Decoding BasicAuth only")]),t._v(" "),s("p",[t._v("To decode BasicAuth only we will register a single decoder for BasicAuth.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# config/packages/easy_api_token.yaml")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("easy_api_token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("decoders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("basic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null important"}},[t._v("null")]),t._v("\n")])])]),s("br"),t._v(" "),s("p",[t._v("Once the configuration done, we will be able to use the "),s("code",[t._v("EasyApiTokenDecoderFactoryInterface")]),t._v(" to build our decoder using\nits name. The name of a decoder is the key used to register it under "),s("code",[t._v("decoders")]),t._v(" in the configuration, so in our case it\nis "),s("code",[t._v("basic")]),t._v(".")]),t._v(" "),s("p",[t._v("Once the decoder built, we just have to use it to decode the ApiToken for a given request. Let's take the example of\ncontroller.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/Controller/MyController.php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controller")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyApiToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Interfaces"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Factories"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ApiTokenDecoderFactoryInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyPsr7Factory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Interfaces"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyPsr7FactoryInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Symfony"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HttpFoundation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyController")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__invoke")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("ApiTokenDecoderFactoryInterface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$decoderFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("EasyPsr7FactoryInterface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$psr7Factory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("Request")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$decoder")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$decoderFactory")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'basic'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use the name of the decoder as an argument")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$psr7Request")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$psr7Factory")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Convert Symfony request to PSR7 request")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$apiToken")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$decoder")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$psr7Request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Decode token for given PSR7 request")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n         * $apiToken will be either a EonX\\EasyApiToken\\Interfaces\\Tokens\\BasicAuthEasyApiTokenInterface instance\n         * or null if no BasicAuth provided on the given request.\n         */")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use the $apiToken...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("br"),t._v(" "),s("h3",{attrs:{id:"decoding-user-apikey-only"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decoding-user-apikey-only"}},[t._v("#")]),t._v(" Decoding User ApiKey only")]),t._v(" "),s("p",[t._v("Let's start from the previous example and see how to decode User ApiKey only instead of BasicAuth.\nFirst, modify your configuration to add the "),s("code",[t._v("user-apikey")]),t._v(" decoder.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# config/packages/easy_api_token.yaml")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("easy_api_token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("decoders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("basic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null important"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Already there from previous example")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("user-apikey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null important"}},[t._v("null")]),t._v("\n")])])]),s("p",[t._v("Once the configuration updated, simply change the argument given to the decoder factory to be "),s("code",[t._v("user-apikey")]),t._v(" and... done!")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/Controller/MyController.php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controller")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyApiToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Interfaces"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Factories"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ApiTokenDecoderFactoryInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyPsr7Factory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Interfaces"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyPsr7FactoryInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Symfony"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HttpFoundation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyController")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__invoke")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("ApiTokenDecoderFactoryInterface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$decoderFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("EasyPsr7FactoryInterface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$psr7Factory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("Request")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$decoder")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$decoderFactory")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'user-apikey'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use the name of the decoder as an argument")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$psr7Request")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$psr7Factory")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Convert Symfony request to PSR7 request")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$apiToken")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$decoder")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$psr7Request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Decode token for given PSR7 request")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n         * $apiToken will now be either a EonX\\EasyApiToken\\Interfaces\\Tokens\\ApiKeyEasyApiTokenInterface instance\n         * or null if no BasicAuth provided on the given request.\n         */")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use the $apiToken...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("br"),t._v(" "),s("h3",{attrs:{id:"decoding-basicauth-and-user-apikey"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#decoding-basicauth-and-user-apikey"}},[t._v("#")]),t._v(" Decoding BasicAuth and User ApiKey")]),t._v(" "),s("p",[t._v("We now know how to decode BasicAuth or User ApiKey, good but...\nHow are we supposed to know when to use one or the other?")]),t._v(" "),s("p",[t._v("Here comes the "),s("code",[t._v("chain")]),t._v(" decoder, this decoder isn't made to handle any ApiToken strategy but to accept a list of decoders\nand loop through each of them until an ApiToken is decoded! Let's see how that works.")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("Modify your configuration to add the "),s("code",[t._v("chain")]),t._v(" decoder and set the other decoders into its "),s("code",[t._v("list")]),t._v(" option.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# config/packages/easy_api_token.yaml")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("easy_api_token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("decoders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("chain")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The list option contains a list of other decoders name")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" basic\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("apikey\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Existing decoders")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("basic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null important"}},[t._v("null")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("user-apikey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null important"}},[t._v("null")]),t._v("\n")])])]),s("br"),t._v(" "),s("p",[t._v("Once the configuration updated, replace the argument for the decoder factory to "),s("code",[t._v("chain")]),t._v(" and... Again we're done!")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/Controller/MyController.php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Controller")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyApiToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Interfaces"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Factories"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ApiTokenDecoderFactoryInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyPsr7Factory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Interfaces"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyPsr7FactoryInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Symfony"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("HttpFoundation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyController")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__invoke")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("ApiTokenDecoderFactoryInterface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$decoderFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("EasyPsr7FactoryInterface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$psr7Factory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("Request")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$decoder")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$decoderFactory")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'chain'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use the name of the decoder as an argument")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$psr7Request")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$psr7Factory")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Convert Symfony request to PSR7 request")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$apiToken")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$decoder")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$psr7Request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Decode token for given PSR7 request")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n         * $apiToken now be an instance of any ApiToken returned by the configured decoders under chain.list\n         * So in our case, $apiToken can be either:\n         *\n         * - EonX\\EasyApiToken\\Interfaces\\Tokens\\BasicAuthEasyApiTokenInterface: BasicAuth provided\n         * - EonX\\EasyApiToken\\Interfaces\\Tokens\\ApiKeyEasyApiTokenInterface: User ApiKey provided\n         * - null: neither BasicAuth or User ApiKey provided\n         */")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use the $apiToken...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("br"),t._v(" "),s("p",{staticStyle:{display:"none"}},[t._v("Required not to break format below")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Congratulations")]),t._v(" "),s("p",[t._v("The logic illustrated within the previous examples applies to any decoders, so you now know how to handle multiple\nauthentication mechanism (ApiToken strategy) for any of your API endpoints and with only 3 lines of code!")])])])}),[],!1,null,null,null);a.default=n.exports}}]);