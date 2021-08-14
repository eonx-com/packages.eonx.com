(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{215:function(a,t,s){"use strict";s.r(t);var n=s(3),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),s("h2",{attrs:{id:"require-package-composer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#require-package-composer"}},[a._v("#")]),a._v(" Require package (Composer)")]),a._v(" "),s("p",[a._v("The recommended way to install this package is to use "),s("a",{attrs:{href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Composer"),s("OutboundLink")],1),a._v(":")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" require eonx-com/easy-bugsnag\n")])])]),s("h2",{attrs:{id:"symfony"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symfony"}},[a._v("#")]),a._v(" Symfony")]),a._v(" "),s("h3",{attrs:{id:"register-bundle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#register-bundle"}},[a._v("#")]),a._v(" Register bundle")]),a._v(" "),s("p",[a._v("If you're using "),s("a",{attrs:{href:"https://flex.symfony.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Symfony Flex"),s("OutboundLink")],1),a._v(", then the bundle is automatically registered. If not, you can register the bundle\nyourself:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// config/bundles.php")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Other bundles ...")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[a._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("EasyBugsnag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Bridge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Symfony"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("EasyBugsnagSymfonyBundle")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'all'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token constant boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[a._v("#")]),a._v(" Configuration")]),a._v(" "),s("p",[a._v("The minimum configuration required is your Bugsnag Integration API key. See "),s("RouterLink",{attrs:{to:"/packages/easy-bugsnag/config.html"}},[a._v("Configuration")]),a._v(" for more\ninformation about configuration options.")],1),a._v(" "),s("h2",{attrs:{id:"laravel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#laravel"}},[a._v("#")]),a._v(" Laravel")]),a._v(" "),s("h3",{attrs:{id:"package-service-provider"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-service-provider"}},[a._v("#")]),a._v(" Package service provider")]),a._v(" "),s("p",[a._v("In a Laravel application, you must tell your application to use the package. Laravel uses service providers to do this\n(see "),s("a",{attrs:{href:"https://laravel.com/docs/8.x/providers",target:"_blank",rel:"noopener noreferrer"}},[a._v("Service Providers"),s("OutboundLink")],1),a._v(" in the Laravel documentation for more information).")]),a._v(" "),s("p",[a._v("For example:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// config/app.php")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'providers'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Other Service Providers...")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("EasyBugsnag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Bridge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Laravel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("EasyBugsnagServiceProvider")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),s("h3",{attrs:{id:"configuration-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-2"}},[a._v("#")]),a._v(" Configuration")]),a._v(" "),s("p",[a._v("The minimum configuration required is your Bugsnag Integration API key. See "),s("RouterLink",{attrs:{to:"/packages/easy-bugsnag/config.html"}},[a._v("Configuration")]),a._v(" for more\ninformation about configuration options.")],1),a._v(" "),s("h2",{attrs:{id:"lumen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lumen"}},[a._v("#")]),a._v(" Lumen")]),a._v(" "),s("h3",{attrs:{id:"register-service-provider"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#register-service-provider"}},[a._v("#")]),a._v(" Register service provider")]),a._v(" "),s("p",[a._v("In a Lumen application you must explicitly tell the application to register the package's service provider as follows:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// bootstrap/app.php")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$app")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified"}},[a._v("Laravel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Lumen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\\"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("dirname")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("__DIR__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Other actions...")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$app")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("EasyBugsnag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Bridge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Laravel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("EasyBugsnagServiceProvider")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"configuration-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-3"}},[a._v("#")]),a._v(" Configuration")]),a._v(" "),s("p",[a._v("In Lumen, you must explicitly call "),s("code",[a._v("configure()")]),a._v(" for the package:")]),a._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// bootstrap/app.php")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$app")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Laravel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Lumen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\\"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("realpath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\\"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("dirname")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("__DIR__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ...")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$app")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("configure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'easy-bugsnag'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ...")]),a._v("\n")])])]),s("p",[a._v("The minimum configuration required is your Bugsnag Integration API key. See "),s("RouterLink",{attrs:{to:"/packages/easy-bugsnag/config.html"}},[a._v("Configuration")]),a._v(" for more\ninformation about configuration options.")],1)])}),[],!1,null,null,null);t.default=e.exports}}]);