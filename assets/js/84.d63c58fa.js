(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{273:function(a,t,e){"use strict";e.r(t);var s=e(3),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("CLI tool to interact with AWS ParameterStore in a convenient way")]),a._v(" "),e("br"),a._v(" "),e("h3",{attrs:{id:"require-package-composer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#require-package-composer"}},[a._v("#")]),a._v(" Require package (Composer)")]),a._v(" "),e("p",[a._v("We recommend to use "),e("a",{attrs:{href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Composer"),e("OutboundLink")],1),a._v(" to manage your dependencies. You can require this package as follows:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" require eonx-com/easy-ssm\n")])])]),e("br"),a._v(" "),e("h3",{attrs:{id:"commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[a._v("#")]),a._v(" Commands")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("apply:")]),a._v(" Apply local changes to remote AWS ParameterStore")]),a._v(" "),e("li",[e("strong",[a._v("diff:")]),a._v(" Resolve diff between local parameters and AWS ParameterStore")]),a._v(" "),e("li",[e("strong",[a._v("dump-envs:")]),a._v(" Dump env vars in a PHP file to improve loading time")]),a._v(" "),e("li",[e("strong",[a._v("export-envs:")]),a._v(" Fetch parameters from AWS ParameterStore and output shell syntax to export them as env variables")]),a._v(" "),e("li",[e("strong",[a._v("init:")]),a._v(" Initialise local parameters from AWS ParameterStore")]),a._v(" "),e("li",[e("strong",[a._v("local-apply:")]),a._v(' Apply changes locally when "*_old" file has been generated')]),a._v(" "),e("li",[e("strong",[a._v("local-diff:")]),a._v(' Resolve diff locally when "*_old" file has been generated')])]),a._v(" "),e("br"),a._v(" "),e("h3",{attrs:{id:"dotenv-integration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dotenv-integration"}},[a._v("#")]),a._v(" Dotenv integration")]),a._v(" "),e("p",[a._v("If working on a PHP project, you can use the Dotenv integration provided by this package to load your AWS ParameterStore\nparameters as env variables within PHP:")]),a._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// bootstrap.php")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("require_once")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("__DIR__")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(".")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'/vendor/autoload.php'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Will fetch parameters from AWS ParameterStore and export them as env vars")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("EonX"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("EasySsm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Dotenv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("SsmDotenv")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("loadEnv")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Now your parameters from AWS ParameterStore are available in: $_ENV, $_SERVER and via \\getenv()")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);