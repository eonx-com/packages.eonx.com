(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{233:function(a,t,s){"use strict";s.r(t);var e=s(3),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("div",{attrs:{align:"center"}},[s("h1",[a._v("EonX - EasyDecision")]),a._v(" "),s("p",[a._v("Your most complex decisions taken the easiest way.")])]),a._v(" "),s("hr"),a._v(" "),s("p",[a._v("This document describes the steps to install this package into a "),s("a",{attrs:{href:"https://laravel.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Laravel"),s("OutboundLink")],1),a._v(" and/or "),s("a",{attrs:{href:"https://lumen.laravel.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Lumen"),s("OutboundLink")],1),a._v(" application.")]),a._v(" "),s("h1",{attrs:{id:"require-package-composer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#require-package-composer"}},[a._v("#")]),a._v(" Require package (Composer)")]),a._v(" "),s("p",[a._v("Laravel uses "),s("a",{attrs:{href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Composer"),s("OutboundLink")],1),a._v(" to manage its dependencies. You can require this package as following:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" require eonx/easy-decision\n")])])]),s("h1",{attrs:{id:"service-provider"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-provider"}},[a._v("#")]),a._v(" Service Provider")]),a._v(" "),s("p",[a._v("Once the package required, you must tell your application to use it. Laravel uses service providers to do so, if you are\nnot familiar with this concept make sure to have a look at the "),s("a",{attrs:{href:"https://laravel.com/docs/5.7/providers",target:"_blank",rel:"noopener noreferrer"}},[a._v("documentation"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// config/app.php")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'providers'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Other Service Providers...")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("EasyDecision"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Bridge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Laravel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("EasyDecisionServiceProvider")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),s("h1",{attrs:{id:"config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[a._v("#")]),a._v(" Config")]),a._v(" "),s("h1",{attrs:{id:"lumen-actions-required"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lumen-actions-required"}},[a._v("#")]),a._v(" Lumen Actions Required")]),a._v(" "),s("p",[a._v("To install this package in a Lumen application the procedures are a bit different.")]),a._v(" "),s("h2",{attrs:{id:"register-service-provider"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#register-service-provider"}},[a._v("#")]),a._v(" Register Service Provider")]),a._v(" "),s("p",[a._v("In a Lumen application you must explicitly tell the application to register the package's service provider as following:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// bootstrap/app.php")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$app")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified"}},[a._v("Laravel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Lumen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\\"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("dirname")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("__DIR__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Other actions...")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$app")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("EasyDecision"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Bridge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Laravel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("EasyDecisionServiceProvider")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"add-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-config"}},[a._v("#")]),a._v(" Add Config")]),a._v(" "),s("p",[a._v("In a Lumen application you must explicitly tell the application to add the package's config as following:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// bootstrap/app.php")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$app")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified"}},[a._v("Laravel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Lumen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\\"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("dirname")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("__DIR__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Other actions...")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$app")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("configure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'easy-decision'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);