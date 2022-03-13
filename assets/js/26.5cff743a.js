(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{219:function(t,a,e){"use strict";e.r(a);var o=e(3),s=Object(o.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"aws-ecs-fargate-information"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aws-ecs-fargate-information"}},[t._v("#")]),t._v(" AWS ECS Fargate information")]),t._v(" "),e("p",[t._v("If required, you can include information about your application's AWS ECS Fargate task as metadata in Bugsnag reports.\nThe AWS ECS Fargate information is shown on the "),e("em",[t._v("AWS")]),t._v(" tab of Bugsnag.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("The EasyBugsnag package currently only supports AWS ECS Fargate instances.")])]),t._v(" "),e("p",[t._v("Set the "),e("code",[t._v("aws_ecs_fargate.enabled")]),t._v(" configuration option to "),e("code",[t._v("true")]),t._v(" to enable this feature (see "),e("RouterLink",{attrs:{to:"/packages/easy-bugsnag/config.html"}},[t._v("Configuration")]),t._v("\nfor more information).")],1),t._v(" "),e("p",[t._v("Note that the default configurators (which includes the "),e("code",[t._v("AwsEcsFargateConfigurator")]),t._v(") must also be enabled by setting the\n"),e("code",[t._v("use_default_configurators")]),t._v(" configuration option to "),e("code",[t._v("true")]),t._v(".")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("AwsEcsFargateConfigurator")]),t._v(" automatically resolves information about the AWS ECS Fargate task ("),e("code",[t._v("AvailabilityZone")]),t._v(",\n"),e("code",[t._v("Cluster")]),t._v(", "),e("code",[t._v("TaskARN")]),t._v(" and "),e("code",[t._v("TaskDefinition")]),t._v(") and adds it as metadata to Bugsnag reports.")]),t._v(" "),e("p",[t._v("For custom AWS implementation, you can also set "),e("code",[t._v("aws_ecs_fargate.meta_url")]),t._v(" for the URL to fetch AWS ECS Fargate task\nmetadata and "),e("code",[t._v("aws_ecs_fargate.meta_storage_filename")]),t._v(" for the filename to cache AWS ECS Fargate task metadata into.")])])}),[],!1,null,null,null);a.default=s.exports}}]);