(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{284:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("This document describes the steps to install this package into a "),a("a",{attrs:{href:"https://laravel.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel"),a("OutboundLink")],1),t._v(" and/or "),a("a",{attrs:{href:"https://lumen.laravel.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lumen"),a("OutboundLink")],1),t._v(" application.")]),t._v(" "),a("br"),t._v(" "),a("h1",{attrs:{id:"service-provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-provider"}},[t._v("#")]),t._v(" Service Provider")]),t._v(" "),a("p",[t._v("Once the package required, you must tell your application to use it. Laravel uses service providers to do so, if you are\nnot familiar with this concept make sure to have a look at the "),a("a",{attrs:{href:"https://laravel.com/docs/5.7/providers",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("This package provides you with a service provider which will register your repositories into the services container\nautomatically. Make sure to register it:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config/app.php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'providers'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other Service Providers...")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EonX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyRepository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Bridge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Laravel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyRepositoryProvider")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("br"),t._v(" "),a("h1",{attrs:{id:"config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[t._v("#")]),t._v(" Config")]),t._v(" "),a("p",[t._v("To allow this package to work with your own repositories you must let it know about your repositories structure. To do\nso you will use the configuration file "),a("code",[t._v("src/Bridge/Laravel/config/easy-repository.php")]),t._v(". Copy/Paste this file into your\n"),a("code",[t._v("config")]),t._v(" folder and then update it with your own repositories list.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'repositories'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Repositories"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PostRepositoryInterface")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Repositories"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PostRepository")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Repositories"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CommentRepositoryInterface")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Repositories"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CommentRepository")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("Repositories list must be an associative array where the keys are the abstraction of your repositories\nand the values the concrete class of your repositories. The keys of this array can technically be anything, however,\nwe strongly recommend you to use the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Fully_qualified_name",target:"_blank",rel:"noopener noreferrer"}},[t._v("FQCN"),a("OutboundLink")],1),t._v(" of the interface your repository implements this way you can use\n"),a("a",{attrs:{href:"http://php-di.org/doc/autowiring.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("autowiring"),a("OutboundLink")],1),t._v(" for your dependency injection.")]),t._v(" "),a("br"),t._v(" "),a("h1",{attrs:{id:"lumen-actions-required"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lumen-actions-required"}},[t._v("#")]),t._v(" Lumen Actions Required")]),t._v(" "),a("p",[t._v("To install this package in a Lumen application the procedures are a bit different.")]),t._v(" "),a("h2",{attrs:{id:"register-service-provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-service-provider"}},[t._v("#")]),t._v(" Register Service Provider")]),t._v(" "),a("p",[t._v("In a Lumen application you must explicitly tell the application to register the package's service provider as following:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bootstrap/app.php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$app")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified"}},[t._v("Laravel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Lumen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__DIR__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other actions...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EonX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyRepository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Bridge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Laravel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyRepositoryProvider")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"add-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-config"}},[t._v("#")]),t._v(" Add Config")]),t._v(" "),a("p",[t._v("In a Lumen application you must explicitly tell the application to add the package's config as following:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bootstrap/app.php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$app")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified"}},[t._v("Laravel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Lumen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__DIR__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other actions...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'easy-repository'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("br"),t._v(" "),a("h1",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("That's it you're all setup! You're now able to use your repositories as services anywhere you want, using dependency\ninjection or service locator (we strongly recommend to use the first one haha).")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Dependency Injection")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__construct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified type-declaration"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Repositories"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PostRepositoryInterface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$postRepository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("postRepository")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$postRepository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Will be your configured repository implementation")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Service Locator")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$app")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Repositories"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("PostRepositoryInterface")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Will be your configured repository implementation as well")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);