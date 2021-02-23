(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{279:function(t,a,s){"use strict";s.r(a);var e=s(3),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("This package is a way to centralise reusable classes used for coding standards. It contains:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/rectorphp/rector",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rectors"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/squizlabs/PHP_CodeSniffer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sniffs"),s("OutboundLink")],1)])]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"require-package-composer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#require-package-composer"}},[t._v("#")]),t._v(" Require package (Composer)")]),t._v(" "),s("p",[t._v("We recommend using "),s("a",{attrs:{href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Composer"),s("OutboundLink")],1),t._v(" to manage your dependencies. You can require this package as follows:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" require --dev eonx/easy-standard\n")])])]),s("h3",{attrs:{id:"prepare-configuration-file-for-ecs-easy-coding-standard-sniffs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prepare-configuration-file-for-ecs-easy-coding-standard-sniffs"}},[t._v("#")]),t._v(" Prepare configuration file for ECS (Easy Coding Standard) Sniffs")]),t._v(" "),s("p",[t._v("You can use one of the following names for a configuration file: "),s("code",[t._v("ecs.php")]),t._v(", "),s("code",[t._v("ecs.yml")]),t._v(", "),s("code",[t._v("ecs.yaml")]),t._v(", "),s("code",[t._v("easy-coding-standard.yml")]),t._v(", or "),s("code",[t._v("easy-coding-standard.yaml")]),t._v(". Create this file in the root folder of the project.")]),t._v(" "),s("p",[s("strong",[t._v("Note")]),t._v(": The YAML configuration is deprecated in the new ECS versions. Use the PHP configuration if possible.")]),t._v(" "),s("p",[t._v("The basic structure of the configuration file follows:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ecs.php")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strict_types"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Symfony"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("DependencyInjection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Configurator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ContainerConfigurator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ContainerConfigurator "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$containerConfigurator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" void "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$parameters")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$containerConfigurator")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parameters")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n     * List of parameters\n     */")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$services")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$containerConfigurator")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n     * List of services\n     */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ecs.yml")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("parameters")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# List of parameters")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# List of services")]),t._v("\n")])])]),s("h3",{attrs:{id:"run-ecs-check"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-ecs-check"}},[t._v("#")]),t._v(" Run ECS check")]),t._v(" "),s("p",[t._v("Go to the root folder of the project and run")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("vendor/bin/ecs check\n")])])]),s("p",[t._v("Expected output:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[OK] No errors found. Great job - your code is shiny in style!\n")])])]),s("h3",{attrs:{id:"prepare-configuration-file-for-rector"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prepare-configuration-file-for-rector"}},[t._v("#")]),t._v(" Prepare configuration file for Rector")]),t._v(" "),s("p",[t._v("You can use one of the following names for a configuration file: "),s("code",[t._v("rector.php")]),t._v(", "),s("code",[t._v("rector.yml")]),t._v(" or "),s("code",[t._v("rector.yaml")]),t._v(". Create this file in the root folder of the project.")]),t._v(" "),s("p",[s("strong",[t._v("Note")]),t._v(": The YAML configuration is deprecated in the new Rector versions. Use the PHP configuration if possible.")]),t._v(" "),s("p",[t._v("The basic structure of the configuration file follows:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// rector.php")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strict_types"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Symfony"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("DependencyInjection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Configurator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ContainerConfigurator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ContainerConfigurator "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$containerConfigurator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" void "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$parameters")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$containerConfigurator")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parameters")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n     * List of parameters\n     */")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$services")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$containerConfigurator")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n     * List of services\n     */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rector.yml")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("parameters")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# List of parameters")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# List of services")]),t._v("\n")])])]),s("h3",{attrs:{id:"run-rector-check"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-rector-check"}},[t._v("#")]),t._v(" Run Rector check")]),t._v(" "),s("p",[t._v("Go to the root folder of the project and run")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("php -r "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"echo sys_get_temp_dir() . '/_rector_type_probe.txt';\"")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" vendor/bin/rector process --dry-run\n")])])]),s("p",[t._v("Expected output:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[OK] Rector is done!\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);