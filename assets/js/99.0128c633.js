(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{292:function(t,s,e){"use strict";e.r(s);var a=e(3),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"register-your-scheduled-commands"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#register-your-scheduled-commands"}},[t._v("#")]),t._v(" Register Your Scheduled Commands")]),t._v(" "),e("p",[t._v('To register the scheduled commands this bundle implements a concept of "schedule providers", thanks to Symfony\'s\nautoconfigure feature, the only thing required is to create services that implement '),e("code",[t._v("EonX\\EasySchedule\\Interfaces\\ScheduleProviderInterface")]),t._v(".\nThe "),e("code",[t._v("ScheduleInterface")]),t._v(" passed to the "),e("code",[t._v("schedule")]),t._v(" method offers all the features of the "),e("a",{attrs:{href:"https://laravel.com/docs/5.8/scheduling",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel Console Scheduling"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/Schedule/MyScheduleProvider.php")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasySchedule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Interfaces"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ScheduleInterface")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasySchedule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Interfaces"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ScheduleProviderInterface")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyScheduleProvider")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScheduleProviderInterface")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("schedule")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("ScheduleInterface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$schedule")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword return-type"}},[t._v("void")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$schedule")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'poc:hello-world'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'-v'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("everyMinute")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMaxLockTime")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$schedule")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'poc:hello-world-2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("everyFiveMinutes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("br"),t._v(" "),e("h3",{attrs:{id:"run-the-schedule"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-the-schedule"}},[t._v("#")]),t._v(" Run The Schedule")]),t._v(" "),e("p",[t._v("This bundle providers a console command to run the schedule:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ php bin/console schedule:run\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);