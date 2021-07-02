(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{265:function(t,a,s){"use strict";s.r(a);var e=s(3),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Provides an easy way to create PSR7 Request/Response from Symfony Request/Response.")]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v("The recommended way to install this package is to use "),s("a",{attrs:{href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Composer"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" require eonx/psr7-factory\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"how-it-works"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[t._v("#")]),t._v(" How it works")]),t._v(" "),s("p",[t._v("You are working on a PHP application using the well known "),s("a",{attrs:{href:"https://symfony.com/doc/current/components/http_foundation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Symfony HttpFoundation Component"),s("OutboundLink")],1),t._v(" and you want to\nimplement some logic which can be used in any other PHP application using Request/Response? This package is for you!")]),t._v(" "),s("p",[t._v("The EasyPsr7Factory will allow you to create a PSR-7 ServerRequestInterface implementation from a Symfony HttpFoundation\nRequest and then will also allow you to create a Symfony Response from a PSR-7 ResponseInterface.")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyPsr7Factory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyPsr7Factory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Gives you a \\Psr\\Http\\Message\\ServerRequestInterface based on all values from the $symfonyRequest")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$serverRequest")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EasyPsr7Factory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$symfonyRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Gives you a \\Symfony\\Component\\HttpFoundation\\Response based on all values from the $psr7Response")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$symfonyResponse")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EasyPsr7Factory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$psr7Response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"laravel-lumen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#laravel-lumen"}},[t._v("#")]),t._v(" Laravel / Lumen")]),t._v(" "),s("p",[t._v("You like the idea and you're not using Symfony but "),s("a",{attrs:{href:"https://laravel.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel"),s("OutboundLink")],1),t._v("/"),s("a",{attrs:{href:"https://lumen.laravel.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lumen"),s("OutboundLink")],1),t._v(" instead? Lucky you this is an easy use case 😃\nLaravel/Lumen Request/Response classes both extend the Symfony ones so this EasyPsr7Factory works for you too!")]),t._v(" "),s("p",[t._v("And just to make your day, it comes with a service provider allowing you to create requests and responses from anywhere\nyou want in your application 😃")]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"laravel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#laravel"}},[t._v("#")]),t._v(" Laravel")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config/app.php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'providers'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Other Service Providers...")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyPsr7Factory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Bridge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Laravel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyPsr7FactoryServiceProvider")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("br"),t._v(" "),s("h3",{attrs:{id:"lumen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lumen"}},[t._v("#")]),t._v(" Lumen")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bootstrap/app.php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$app")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyPsr7Factory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Bridge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Laravel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyPsr7FactoryServiceProvider")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"contributing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[t._v("#")]),t._v(" Contributing")]),t._v(" "),s("p",[t._v("None of the existing implementations fit your needs? Don't hesitate to create an "),s("a",{attrs:{href:"https://github.com/EonX/EonX/issues/new/choose",target:"_blank",rel:"noopener noreferrer"}},[t._v("Issue"),s("OutboundLink")],1),t._v(" about it\nor event a "),s("a",{attrs:{href:"https://github.com/EonX/EonX/compare",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pull Request"),s("OutboundLink")],1),t._v(" to help us grow the package.")])])}),[],!1,null,null,null);a.default=n.exports}}]);