(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{213:function(t,e,a){"use strict";a.r(e);var i=a(3),o=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"activitylogentry-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activitylogentry-class"}},[t._v("#")]),t._v(" ActivityLogEntry class")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("EonX\\EasyActivity\\ActivityLogEntry")]),t._v(" class defines the data that can be recorded in an activity log entry.")]),t._v(" "),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),a("p",[t._v("An ActivityLogEntry object has the following properties:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("action")]),t._v(": The type of action performed on the subject, which may be one of:\n"),a("ul",[a("li",[a("code",[t._v("ActivityLogEntry::ACTION_CREATE")]),t._v(" (i.e. "),a("code",[t._v("create")]),t._v("): Create subject")]),t._v(" "),a("li",[a("code",[t._v("ActivityLogEntry::ACTION_DELETE")]),t._v(" (i.e. "),a("code",[t._v("delete")]),t._v("): Delete subject")]),t._v(" "),a("li",[a("code",[t._v("ActivityLogEntry::ACTION_UPDATE")]),t._v(" (i.e. "),a("code",[t._v("update")]),t._v("): Update subject")])])]),t._v(" "),a("li",[a("code",[t._v("actorId")]),t._v(": An optional identifier for an actor in the application.")]),t._v(" "),a("li",[a("code",[t._v("actorName")]),t._v(": An optional name for an actor in the application.")]),t._v(" "),a("li",[a("code",[t._v("actorType")]),t._v(": A mandatory actor type. The actor type could be a "),a("code",[t._v("user")]),t._v(", "),a("code",[t._v("provider")]),t._v(", "),a("code",[t._v("customer")]),t._v(", "),a("code",[t._v("jwt:provider")]),t._v(",\n"),a("code",[t._v("api_key:customer")]),t._v(", or something similar in an application. The default value is\n"),a("code",[t._v("ActivityLogEntry::DEFAULT_ACTOR_TYPE")]),t._v(" (i.e. "),a("code",[t._v("system")]),t._v(").")]),t._v(" "),a("li",[a("code",[t._v("subjectId")]),t._v(": An optional identifier for a subject in the application.")]),t._v(" "),a("li",[a("code",[t._v("subjectType")]),t._v(": A mandatory subject type in the application. The subject type can be a short class name, a FQCN (Fully\nQualified Class Name), or any arbitrary string that an application maps in the package "),a("RouterLink",{attrs:{to:"/packages/easy-activity/config.html"}},[t._v("configuration")]),t._v(".")],1),t._v(" "),a("li",[a("code",[t._v("data")]),t._v(": An optional representation of the state of the subject after applying the action (i.e. a serialized\nentity/model containing the new attribute values of the subject after updating the entity/model). This is a simple\nkey-value array with attribute names in keys.")]),t._v(" "),a("li",[a("code",[t._v("oldData")]),t._v(": An optional representation of the state of the subject before applying the action (i.e. a serialized\nentity/model containing the original attribute values before updating the entity/model). This is a simple key-value\narray with attribute names in keys.")]),t._v(" "),a("li",[a("code",[t._v("id")]),t._v(": A UUID generated in the default store implementation.")]),t._v(" "),a("li",[a("code",[t._v("createdAt")]),t._v(': Always set to "now" by the default store implementation.')]),t._v(" "),a("li",[a("code",[t._v("updatedAt")]),t._v(': Always set to "now" by the default store implementation.')])]),t._v(" "),a("h2",{attrs:{id:"activitylogentry-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activitylogentry-creation"}},[t._v("#")]),t._v(" ActivityLogEntry creation")]),t._v(" "),a("p",[t._v("The package provides "),a("code",[t._v("EonX\\EasyActivity\\Interfaces\\ActivityLogEntryFactoryInterface")]),t._v(" that takes care of activity log\nentry creation. A default implementation "),a("code",[t._v("EonX\\EasyActivity\\ActivityLogEntryFactory")]),t._v(" is also provided by the package.\nSee "),a("RouterLink",{attrs:{to:"/packages/easy-activity/usage.html"}},[t._v("Usage")]),t._v(" for more information on using the package.")],1)])}),[],!1,null,null,null);e.default=o.exports}}]);