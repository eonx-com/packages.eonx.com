(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{276:function(s,e,n){"use strict";n.r(e);var t=n(3),a=Object(t.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("The "),n("a",{attrs:{href:"https://symfony.com/doc/current/components/security.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Security Component"),n("OutboundLink")],1),s._v(" offers the ability to define complex security strategies by using the "),n("a",{attrs:{href:"https://symfony.com/doc/current/security/expressions.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("expressions"),n("OutboundLink")],1),s._v(" based\non the "),n("a",{attrs:{href:"https://symfony.com/doc/current/components/expression_language.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("ExpressionLanguage Component"),n("OutboundLink")],1),s._v(".")]),s._v(" "),n("p",[s._v("This package recommends defining your permissions using public constants on an interface as:")]),s._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token package"}},[s._v("App"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Security"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Interfaces")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PermissionsInterface")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PERMISSION_OBJECT_CREATE")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'object:create'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("p",[s._v("Based on the example provided by the "),n("a",{attrs:{href:"https://symfony.com/doc/current/security/expressions.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Symfony documentation"),n("OutboundLink")],1),s._v(", creating an expression to check if the user is granted\nour permissions we would have to do something like that:")]),s._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token package"}},[s._v("Symfony"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("ExpressionLanguage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Expression")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("denyAccessUnlessGranted")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Expression")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v("\"is_granted(constant('\\\\App\\\\Security\\\\Interfaces\\\\PermissionInterface::PERMISSION_OBJECT_CREATE'), object)\"")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("p",[s._v("It works fine, but it requires you to write the fully qualified name of the constant each time and when used as part\nof annotations (e.g. on an ApiResource from ApiPlatform) it can break your coding standards because the line is too long...")]),s._v(" "),n("br"),s._v(" "),n("p",[s._v("To simplify all that, this package provides an expression function to help us to use our permissions within expressions.")]),s._v(" "),n("h3",{attrs:{id:"define-your-permissions-locations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#define-your-permissions-locations"}},[s._v("#")]),s._v(" Define your permissions locations")]),s._v(" "),n("p",[s._v("In the config, define your permissions locations by providing a list of the classes/interfaces where your permissions\nare defined:")]),s._v(" "),n("div",{staticClass:"language-yaml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# config/packages/easy_security.yaml")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("easy_security")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("permissions_locations")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" App\\Security\\Interfaces\\PermissionsInterface\n")])])]),n("p",[s._v("The package will now know where to look for your permissions.")]),s._v(" "),n("h3",{attrs:{id:"use-the-function-in-your-expressions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-the-function-in-your-expressions"}},[s._v("#")]),s._v(" Use the function in your expressions")]),s._v(" "),n("p",[s._v("Once the configuration is defined, we just have to use the "),n("code",[s._v("permission")]),s._v(" expression function in our expressions and only\ngive it the name of the constant:")]),s._v(" "),n("div",{staticClass:"language-diff extra-class"},[n("pre",{pre:!0,attrs:{class:"language-diff"}},[n("code",[s._v("use Symfony\\Component\\ExpressionLanguage\\Expression;\n// ...\n\npublic function index()\n{\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   $this->denyAccessUnlessGranted(new Expression(\n")])]),n("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[n("span",{pre:!0,attrs:{class:"token prefix deleted"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("        \"is_granted(constant('\\\\App\\\\Security\\\\Interfaces\\\\PermissionInterface::PERMISSION_OBJECT_CREATE'), object)\"\n")])]),n("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[n("span",{pre:!0,attrs:{class:"token prefix inserted"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("        \"is_granted(permission('PERMISSION_OBJECT_CREATE'), object)\"\n")])]),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   ));\n")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token unchanged"}},[n("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[s._v(" ")]),n("span",{pre:!0,attrs:{class:"token line"}},[s._v("   // ...\n")])]),s._v("}\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);