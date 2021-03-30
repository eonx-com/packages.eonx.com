(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{274:function(t,a,e){"use strict";e.r(a);var s=e(3),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("CLI tool to interact with AWS ParameterStore in a convenient way")]),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"require-package-composer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#require-package-composer"}},[t._v("#")]),t._v(" Require package (Composer)")]),t._v(" "),e("p",[t._v("We recommend to use "),e("a",{attrs:{href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Composer"),e("OutboundLink")],1),t._v(" to manage your dependencies. You can require this package as follows:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" require eonx-com/easy-ssm\n")])])]),e("br"),t._v(" "),e("h3",{attrs:{id:"commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[t._v("#")]),t._v(" Commands")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("apply:")]),t._v(" Apply local changes to remote AWS ParameterStore")]),t._v(" "),e("li",[e("strong",[t._v("diff:")]),t._v(" Resolve diff between local parameters and AWS ParameterStore")]),t._v(" "),e("li",[e("strong",[t._v("dump-envs:")]),t._v(" Dump env vars in a PHP file to improve loading time")]),t._v(" "),e("li",[e("strong",[t._v("export-envs:")]),t._v(" Fetch parameters from AWS ParameterStore and output shell syntax to export them as env variables")]),t._v(" "),e("li",[e("strong",[t._v("init:")]),t._v(" Initialise local parameters from AWS ParameterStore")]),t._v(" "),e("li",[e("strong",[t._v("local-apply:")]),t._v(' Apply changes locally when "*_old" file has been generated')]),t._v(" "),e("li",[e("strong",[t._v("local-diff:")]),t._v(' Resolve diff locally when "*_old" file has been generated')])]),t._v(" "),e("br"),t._v(" "),e("h3",{attrs:{id:"dotenv-integration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dotenv-integration"}},[t._v("#")]),t._v(" Dotenv integration")]),t._v(" "),e("p",[t._v("If working on a PHP project, you can use the Dotenv integration provided by this package to load your AWS ParameterStore\nparameters as env variables within PHP:")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bootstrap.php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require_once")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__DIR__")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/vendor/autoload.php'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Will fetch parameters from AWS ParameterStore and export them as env vars")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EonX"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasySsm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Dotenv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SsmDotenv")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadEnv")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Now your parameters from AWS ParameterStore are available in: $_ENV, $_SERVER and via \\getenv()")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);