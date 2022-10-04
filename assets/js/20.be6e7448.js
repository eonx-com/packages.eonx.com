(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{209:function(t,a,s){"use strict";s.r(a);var n=s(3),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"create-the-configuration-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-the-configuration-file"}},[t._v("#")]),t._v(" Create the configuration file")]),t._v(" "),s("p",[t._v("This package defines the "),s("code",[t._v("easy_api_token")]),t._v(" extension, so to implement your own configuration simply create the following\nfile:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# config/packages/easy_api_token.yaml")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("easy_api_token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Your configuration here...")]),t._v("\n")])])]),s("h3",{attrs:{id:"configure-decoders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-decoders"}},[t._v("#")]),t._v(" Configure decoders")]),t._v(" "),s("p",[t._v("Define your decoders under the "),s("code",[t._v("decoders")]),t._v(" key in your configuration as:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# config/packages/easy_api_token.yaml")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("easy_api_token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("decoders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("basic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null important"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Built-in decoder for BasicAuth")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("user-apikey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null important"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Built-in decoder for ApiKey")]),t._v("\n")])])]),s("h3",{attrs:{id:"built-in-decoders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#built-in-decoders"}},[t._v("#")]),t._v(" Built-in Decoders")]),t._v(" "),s("p",[t._v("This package comes with built-in decoders, let's see which ones and how to configure them.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# config/packages/easy_api_token.yaml")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("easy_api_token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("decoders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("chain")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" basic\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("apikey\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" jwt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("header\n\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("basic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null important"}},[t._v("null")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("user-apikey")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null important"}},[t._v("null")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jwt-header")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("driver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auth0\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache_path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path/to/cache "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Optional")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("valid_audiences")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("authorized_iss")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xyz.auth0'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc.goog'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("private_key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" someprivatekeystring "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Required only for HS256")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allowed_algos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HS256'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'RS256'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jwt-param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("driver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" firebase\n            "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("algo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HS256\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allowed_algos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HS256'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'RS256'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("leeway")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("param")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" authParam\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("private_key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" someprivatekeystring\n                "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("public_key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" somepublickeystring\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);