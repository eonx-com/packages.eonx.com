(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{377:function(t,s,n){"use strict";n.r(s);var a=n(25),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("Having the list of SQL queries executed during a request which triggered an error/exception to be notified is really\nimportant, it makes debugging easier. That's why "),n("code",[t._v("easy-bugsnag")]),t._v(" got you sorted!")]),t._v(" "),n("p",[t._v("If your app is using Laravel/Lumen and "),n("a",{attrs:{href:"http://www.laraveldoctrine.org/docs/1.4/orm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel Doctrine ORM"),n("OutboundLink")],1),t._v(", this section is for you.")]),t._v(" "),n("br"),t._v(" "),n("h3",{attrs:{id:"enable-logging-in-easybugsnag-config"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#enable-logging-in-easybugsnag-config"}},[t._v("#")]),t._v(" Enable Logging In EasyBugsnag Config")]),t._v(" "),n("p",[t._v("To enable SQL queries logging into your Bugsnag reports, simply set the "),n("code",[t._v("doctrine_orm")]),t._v(" config to true:")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config/easy-bugsnag.php")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'api_key'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \\"),n("span",{pre:!0,attrs:{class:"token package"}},[t._v("env")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'BUGSNAG_API_KEY'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'doctrine_orm'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),n("br"),t._v(" "),n("h3",{attrs:{id:"register-sql-logger-into-doctrine-config"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#register-sql-logger-into-doctrine-config"}},[t._v("#")]),t._v(" Register SQL Logger Into Doctrine Config")]),t._v(" "),n("p",[t._v("Then you will need to register the SQL Logger from EasyBugsnag into Doctrine configuration:")]),t._v(" "),n("div",{staticClass:"language-php extra-class"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config/doctrine.php")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'logger'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" EonX\\"),n("span",{pre:!0,attrs:{class:"token package"}},[t._v("EasyBugsnag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Bridge"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Laravel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Doctrine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SqlOrmLogger")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);