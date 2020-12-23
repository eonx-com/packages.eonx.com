(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{365:function(e,a,t){"use strict";t.r(a);var r=t(25),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Let's have a look at the built-in decoders!")]),e._v(" "),t("h3",{attrs:{id:"basic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic"}},[e._v("#")]),e._v(" Basic")]),e._v(" "),t("p",[e._v("This decoder will handle BasicAuth using the Authorization header and return a\n"),t("code",[e._v("EonX\\EasyApiToken\\Interfaces\\Tokens\\BasicAuthEasyApiTokenInterface")]),e._v(" instance. This interface allows you to retrieve\nthe username and password provided on the request.")]),e._v(" "),t("br"),e._v(" "),t("h3",{attrs:{id:"user-apikey"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user-apikey"}},[e._v("#")]),e._v(" User ApiKey")]),e._v(" "),t("p",[e._v("This decoder will handle an ApiKey passed as the BasicAuth username in the Authorization header and return a\n"),t("code",[e._v("EonX\\EasyApiToken\\Interfaces\\Tokens\\ApiKeyEasyApiTokenInterface")]),e._v(" instance.\nThis interface allows you to retrieve the ApiKey given on the request.")]),e._v(" "),t("p",{staticStyle:{display:"none"}},[e._v("Required otherwise it breaks the warning format below")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("| Warning")]),e._v(" "),t("p",[e._v("If a password is given as part of the BasicAuth this decoder will not consider it as an ApiKey.")])]),e._v(" "),t("br"),e._v(" "),t("h3",{attrs:{id:"jwt-header"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jwt-header"}},[e._v("#")]),e._v(" JWT Header")]),e._v(" "),t("p",[e._v("This decoder will handle Bearer token using the Authorization header and return a\n"),t("code",[e._v("EonX\\EasyApiToken\\Interfaces\\Tokens\\JwtEasyApiTokenInterface")]),e._v(" instance. This interface allows you to retrieve any\nclaim on the JWT, retrieve claims as array (useful for hash) and check the presence of a claim.")]),e._v(" "),t("br"),e._v(" "),t("h3",{attrs:{id:"jwt-param"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jwt-param"}},[e._v("#")]),e._v(" JWT Param")]),e._v(" "),t("p",[e._v("This decoder will handle a JWT as query parameter, it will return the same instance as "),t("code",[e._v("JWT Header")]),e._v(".")]),e._v(" "),t("br"),e._v(" "),t("h3",{attrs:{id:"jwt-drivers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jwt-drivers"}},[e._v("#")]),e._v(" JWT Drivers")]),e._v(" "),t("p",[e._v("When using the JWT decoders, you will have to configure the underlying driver you want to use or even create your own.\nBy default, this package comes with 2 built-in drivers:")]),e._v(" "),t("ul",[t("li",[e._v("Auth0: Allows you to decode JWT from "),t("a",{attrs:{href:"https://auth0.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Auth0"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Firebase: Allows you to decode JWT using the "),t("a",{attrs:{href:"https://github.com/firebase/php-jwt",target:"_blank",rel:"noopener noreferrer"}},[e._v("Firebase PHP package"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=s.exports}}]);