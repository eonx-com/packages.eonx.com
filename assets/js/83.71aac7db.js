(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{272:function(t,a,s){"use strict";s.r(a);var e=s(3),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("This document describes the steps to install this package into a "),s("a",{attrs:{href:"https://laravel.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel"),s("OutboundLink")],1),t._v(" and/or "),s("a",{attrs:{href:"https://lumen.laravel.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lumen"),s("OutboundLink")],1),t._v(" application.")]),t._v(" "),s("h1",{attrs:{id:"require-package-composer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#require-package-composer"}},[t._v("#")]),t._v(" Require package (Composer)")]),t._v(" "),s("p",[t._v("Laravel uses "),s("a",{attrs:{href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Composer"),s("OutboundLink")],1),t._v(" to manage its dependencies. You can require this package as following:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" require eonx/easy-pipeline\n")])])]),s("br"),t._v(" "),s("h1",{attrs:{id:"service-provider"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-provider"}},[t._v("#")]),t._v(" Service Provider")]),t._v(" "),s("p",[t._v("Once the package required, you must tell your application to use it. Laravel uses service providers to do so, if you are\nnot familiar with this concept make sure to have a look at the "),s("a",{attrs:{href:"https://laravel.com/docs/5.7/providers",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("This package provides you with a service provider which will register your pipelines into the services container\nautomatically. Make sure to register it:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config/app.php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'providers'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other Service Providers...")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyPipeline"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Bridge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Laravel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyIlluminatePipelineServiceProvider")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("br"),t._v(" "),s("h1",{attrs:{id:"config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[t._v("#")]),t._v(" Config")]),t._v(" "),s("p",[t._v("To allow this package to work with your own pipelines you must let it know about your pipelines and\nmiddleware providers structure. To do so you will use the configuration file\n"),s("code",[t._v("src/Bridge/Laravel/config/easy-pipeline.php")]),t._v(". Copy/Paste this file into your "),s("code",[t._v("config")]),t._v(" folder and then\nupdate it with your own pipelines list.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'pipelines'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'pipeline-1'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Pipelines"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Pipeline1MiddlewareProvider")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'pipeline-2'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Pipelines"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Pipeline2MiddlewareProvider")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Pipelines list must be an associative array where the keys are the names of your pipelines\nand the values the class of your middleware provider for each pipeline.")]),t._v(" "),s("br"),t._v(" "),s("h1",{attrs:{id:"lumen-actions-required"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lumen-actions-required"}},[t._v("#")]),t._v(" Lumen Actions Required")]),t._v(" "),s("p",[t._v("To install this package in a Lumen application the procedures are a bit different.")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"register-service-provider"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#register-service-provider"}},[t._v("#")]),t._v(" Register Service Provider")]),t._v(" "),s("p",[t._v("In a Lumen application you must explicitly tell the application to register the package's service provider as following:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bootstrap/app.php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$app")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified"}},[t._v("Laravel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Lumen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\\"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__DIR__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other actions...")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$app")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyPipeline"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Bridge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Laravel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyIlluminatePipelineServiceProvider")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"add-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-config"}},[t._v("#")]),t._v(" Add Config")]),t._v(" "),s("p",[t._v("In a Lumen application you must explicitly tell the application to add the package's config as following:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bootstrap/app.php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$app")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified"}},[t._v("Laravel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Lumen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\\"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__DIR__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other actions...")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$app")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'easy-pipeline'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("br"),t._v(" "),s("h1",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("p",[t._v("Prior to be able to use the pipelines in your application you will need create your middleware providers for each\nof your pipeline, for more information please have a look at the "),s("RouterLink",{attrs:{to:"/packages/easy-pipeline/middleware_providers.html"}},[t._v("documentation")]),t._v(".")],1),t._v(" "),s("p",[t._v("That's it you're all setup! You're now able to use your pipelines anywhere you want, using dependency\ninjection or service locator (we strongly recommend using the first one haha). To do so, you need to use the\n"),s("code",[t._v("EonX\\EasyPipeline\\Interfaces\\PipelineFactoryInterface")]),t._v(" to create your pipelines and their middleware list.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyPipeline"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Interfaces"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PipelineFactoryInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Dependency Injection")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("processMyPipeline")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("PipelineFactoryInterface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pipelineFactory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pipeline")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pipelineFactory")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'my-pipeline'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Will be your configured pipeline implementation")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pipeline")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("process")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Return the potentially modified version of $input")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$logs")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pipeline")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Return the logs from last process")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Service Locator")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("processMyPipelineToo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Will be your configured repository implementation as well")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pipeline")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$app")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyPipeline"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Interfaces"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PipelineFactoryInterface")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'my-pipeline'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pipeline")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("process")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Return the potentially modified version of $input")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$logs")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pipeline")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Return the logs from last process")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);