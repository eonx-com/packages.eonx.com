(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{220:function(t,a,s){"use strict";s.r(a);var n=s(3),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"sql-query-logging"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-query-logging"}},[t._v("#")]),t._v(" SQL query logging")]),t._v(" "),s("p",[t._v("Since having the list of SQL queries executed during a request that triggered an error or exception can make debugging\nmuch easier, the EasyBugsnag package provides logging of SQL queries for Bugsnag. The SQL queries are shown on the\n"),s("em",[t._v("Breadcrumbs")]),t._v(" tab of Bugsnag.")]),t._v(" "),s("h2",{attrs:{id:"symfony"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#symfony"}},[t._v("#")]),t._v(" Symfony")]),t._v(" "),s("p",[t._v("To add SQL queries details to your Bugsnag reports in Symfony, simply set the "),s("code",[t._v("doctrine_dbal.enabled")]),t._v(" configuration to\n"),s("code",[t._v("true")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# config/packages/easy_bugsnag.yaml")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("easy_bugsnag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("api_key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%env(BUGSNAG_API_KEY)%'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("doctrine_dbal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),s("p",[t._v("You can also explicitly define the connections you want to log the queries for:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# config/packages/easy_bugsnag.yaml")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("easy_bugsnag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("api_key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%env(BUGSNAG_API_KEY)%'")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("doctrine_dbal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("connections")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" default\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" secure\n")])])]),s("p",[t._v("You are now all set up to start logging SQL queries into your Bugsnag reports.")]),t._v(" "),s("h2",{attrs:{id:"laravel-lumen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#laravel-lumen"}},[t._v("#")]),t._v(" Laravel/Lumen")]),t._v(" "),s("p",[t._v("To add SQL queries details to your Bugsnag reports if your application is using Laravel/Lumen and\n"),s("a",{attrs:{href:"http://www.laraveldoctrine.org/docs/1.4/orm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel Doctrine ORM"),s("OutboundLink")],1),t._v(", simply set the "),s("code",[t._v("doctrine_orm")]),t._v(" configuration to "),s("code",[t._v("true")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config/easy-bugsnag.php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'api_key'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" \\"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'BUGSNAG_API_KEY'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'doctrine_orm'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("You must also register the SQL Logger from EasyBugsnag into the Doctrine configuration:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config/doctrine.php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'logger'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyBugsnag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Bridge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Laravel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Doctrine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SqlOrmLogger")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);