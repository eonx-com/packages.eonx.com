(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{233:function(e,t,o){"use strict";o.r(t);var n=o(3),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("The purpose of this package isn't to be used within a project by the application as there is no point in creating\nanother level of abstraction in that case BUT only to allow eonx-com packages to dispatch events without\nhaving to think about the event dispatcher used by each of our projects.")]),e._v(" "),o("h3",{attrs:{id:"require-package-composer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#require-package-composer"}},[e._v("#")]),e._v(" Require package (Composer)")]),e._v(" "),o("p",[e._v("The recommended way to install this package is to use "),o("a",{attrs:{href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Composer"),o("OutboundLink")],1),e._v(":")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("$ "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("composer")]),e._v(" require eonx-com/easy-lock\n")])])]),o("br"),e._v(" "),o("h3",{attrs:{id:"usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),o("p",[e._v("The Symfony Lock component has an excellent "),o("a",{attrs:{href:"https://symfony.com/doc/current/components/lock.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),o("OutboundLink")],1),e._v(" and we recommend referring to it.")]),e._v(" "),o("h6",{attrs:{id:"connection"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connection"}},[e._v("#")]),e._v(" Connection")]),e._v(" "),o("p",[e._v("To work with this package you simply have to register the connection to use for the locks store as a service under\nthe "),o("code",[e._v("easy_lock.connection")]),e._v(" id. This connection will be given to the "),o("a",{attrs:{href:"https://github.com/symfony/symfony/blob/master/src/Symfony/Component/Lock/Store/StoreFactory.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("StoreFactory"),o("OutboundLink")],1),e._v(", so its value can be anything\nsupported by the Lock component.")]),e._v(" "),o("h6",{attrs:{id:"store"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#store"}},[e._v("#")]),e._v(" Store")]),e._v(" "),o("p",[e._v("If defining the connection doesn't work for you, you can override the store instance within the service container under\nthe "),o("code",[e._v("easy_lock.store")]),e._v(" id.")])])}),[],!1,null,null,null);t.default=r.exports}}]);