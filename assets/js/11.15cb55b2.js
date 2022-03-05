(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{216:function(t,e,a){"use strict";a.r(e);var n=a(3),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("You can configure settings for the EasyActivity package via a configuration file in your application.")]),t._v(" "),a("p",[t._v("By default, the EasyActivity package includes all properties of subjects in activity log entries. If desired, you can\nconfigure activity log entries for each subject to only include specific properties or to always exclude specific\nproperties.")]),t._v(" "),a("h2",{attrs:{id:"configuration-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files"}},[t._v("#")]),t._v(" Configuration files")]),t._v(" "),a("p",[t._v("For Symfony applications, the EasyActivity configuration file can be a YAML, XML or PHP file located under the\n"),a("code",[t._v("config/packages")]),t._v(" directory, with a name like "),a("code",[t._v("easy_activity.<format>")]),t._v(". The root node of the configuration must be\ncalled "),a("code",[t._v("easy_activity")]),t._v(".")]),t._v(" "),a("p",[t._v("If you're using "),a("a",{attrs:{href:"https://flex.symfony.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Symfony Flex"),a("OutboundLink")],1),t._v(", the "),a("code",[t._v("config/packages/easy_activity.yaml")]),t._v(" configuration file will be created for you\nautomatically.")]),t._v(" "),a("h2",{attrs:{id:"configuration-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-options"}},[t._v("#")]),t._v(" Configuration options")]),t._v(" "),a("p",[t._v("The configuration options are as follows:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("disallowed_properties")]),t._v(": An optional array of subject property names to be excluded from activity log entries globally\n(i.e. the list will be applied to all subjects defined in the "),a("code",[t._v("subjects")]),t._v(" configuration option).")]),t._v(" "),a("li",[a("code",[t._v("subjects")]),t._v(": A set of subject classes to be logged. Each subject can contain the following parameters:\n"),a("ul",[a("li",[a("code",[t._v("allowed_properties")]),t._v(": An optional array of subject property names to be allowed for activity log entries. If the\noption is present, only the specified properties will be included in activity log entries for the relevant subject.")]),t._v(" "),a("li",[a("code",[t._v("disallowed_properties")]),t._v(": An optional array of subject property names to be excluded from activity log entries for\nthe relevant subject.")]),t._v(" "),a("li",[a("code",[t._v("nested_object_allowed_properties")]),t._v(": By default, nested objects within a subject only contain the "),a("code",[t._v("id")]),t._v(" key. You can\nspecify an optional set of classes that describe nested objects within the subject, each containing an array of\nproperty names to be included for activity log entries.")]),t._v(" "),a("li",[a("code",[t._v("type")]),t._v(": an optional subject type mapping. If no type is provided, a FQCN (Fully Qualified Class Name) will be used\nby default.")])])]),t._v(" "),a("li",[a("code",[t._v("table_name")]),t._v(": Table name for storing activity log entries (the default is "),a("code",[t._v("easy_activity_logs")]),t._v(").")])]),t._v(" "),a("h2",{attrs:{id:"example-configuration-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-configuration-file"}},[t._v("#")]),t._v(" Example configuration file")]),t._v(" "),a("p",[t._v("In Symfony, you could have a configuration file called "),a("code",[t._v("easy_activity.yaml")]),t._v(" that looks like the following:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("easy_activity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("disallowed_properties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" updatedAt\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("subjects")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("App\\Entity\\SomeEntity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("allowed_properties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" content\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" description\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("disallowed_properties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" author\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nested_object_allowed_properties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("App\\Entity\\SomeOtherEntity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" processingDate\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SomeEntity\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("table_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" activity_logs\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);