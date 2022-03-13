(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{226:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("You can configure global settings for the EasyBugsnag package via a configuration file in your application.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The only configuration required is the Bugsnag Integration API Key for your project.")])]),t._v(" "),a("h2",{attrs:{id:"configuration-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files"}},[t._v("#")]),t._v(" Configuration files")]),t._v(" "),a("p",[t._v("For Laravel applications, the EasyBugsnag configuration file must be called "),a("code",[t._v("easy-bugsnag.php")]),t._v(" and be located in the\n"),a("code",[t._v("config")]),t._v(" directory.")]),t._v(" "),a("p",[t._v("For Symfony applications, the EasyBugnag configuration file can be a YAML, XML or PHP file located under the\n"),a("code",[t._v("config/packages")]),t._v(" directory, with a name like "),a("code",[t._v("easy_bugsnag.<format>")]),t._v(". The root node of the configuration must be called\n"),a("code",[t._v("easy_bugsnag")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"configuration-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-options"}},[t._v("#")]),t._v(" Configuration options")]),t._v(" "),a("p",[t._v("The common configuration options for Laravel and Symfony are as follows:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Configuration")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("enabled")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("Enable/disable the entire EasyBugsnag package.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("api_key")])]),t._v(" "),a("td",[t._v("N/A")]),t._v(" "),a("td",[t._v("Bugsnag Integration API Key of your project.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("project_root")])]),t._v(" "),a("td",[a("code",[t._v("%kernel.project_dir%/src")]),t._v(" (Symfony)"),a("br"),a("code",[t._v("\\base_path('app')")]),t._v(" (Laravel)")]),t._v(" "),a("td",[t._v("Project root.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("release_stage")])]),t._v(" "),a("td",[a("code",[t._v("%env(APP_ENV)%")]),t._v(" (Symfony)"),a("br"),a("code",[t._v("\\env('APP_ENV')")]),t._v(" (Laravel)")]),t._v(" "),a("td",[t._v("Release stage.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("strip_path")])]),t._v(" "),a("td",[a("code",[t._v("%kernel.project_dir%")]),t._v(" (Symfony)"),a("br"),a("code",[t._v("\\base_path()")]),t._v(" (Laravel)")]),t._v(" "),a("td",[t._v("Strip path.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("app_name.enabled")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Enable/disable APP name data in Bugsnag.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("app_name.env_var")])]),t._v(" "),a("td",[a("code",[t._v("APP_NAME")])]),t._v(" "),a("td",[t._v("Env var used by default APP name resolver.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("aws_ecs_fargate.enabled")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Enable/disable AWS ECS Fargate data in Bugsnag. See "),a("RouterLink",{attrs:{to:"/packages/easy-bugsnag/aws.html"}},[t._v("AWS ECS Fargate information")]),t._v(" for more information.")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("aws_ecs_fargate.meta_url")])]),t._v(" "),a("td",[a("code",[t._v("%env(ECS_CONTAINER_METADATA_URI_V4)%/task")]),t._v(" (Symfony)"),a("br"),t._v(" "),a("code",[t._v("\\sprintf('%s/task', \\env('ECS_CONTAINER_METADATA_URI_V4'))")]),t._v(" (Laravel)")]),t._v(" "),a("td",[t._v("URL used to fetch AWS ECS Fargate task metadata.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("aws_ecs_fargate.meta_storage_filename")])]),t._v(" "),a("td",[a("code",[t._v("%kernel.cache_dir%/aws_ecs_fargate_meta.json")]),t._v(" (Symfony)"),a("br"),t._v(" "),a("code",[t._v("\\storage_path('aws_ecs_fargate_meta.json')")]),t._v(" (Laravel)")]),t._v(" "),a("td",[t._v("Filename to cache AWS ECS Fargate task metadata into.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("session_tracking.enabled")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Enable session tracking. See "),a("RouterLink",{attrs:{to:"/packages/easy-bugsnag/session-tracking.html"}},[t._v("Session tracking")]),t._v(" for more information.")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("session_tracking.cache_expires_after")])]),t._v(" "),a("td",[a("code",[t._v("3600")])]),t._v(" "),a("td",[t._v("Expiry for sessions cache in seconds.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("session_tracking.exclude_urls")])]),t._v(" "),a("td",[a("code",[t._v("[]")])]),t._v(" "),a("td",[t._v("List of URLs (or regular expression) to exclude from session tracking.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("session_tracking.exclude_urls_delimiter")])]),t._v(" "),a("td",[a("code",[t._v("#")])]),t._v(" "),a("td",[t._v("Delimiter used in regular expression to resolve excluded URLs.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("use_default_configurators")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("Enable/disable the default configurators.")])])])]),t._v(" "),a("p",[t._v("Laravel has the following additional configuration option:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Configuration")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("doctrine_orm")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("Enable SQL query logging (see "),a("RouterLink",{attrs:{to:"/packages/easy-bugsnag/sql-logging.html"}},[t._v("SQL query logging")]),t._v(").")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("session_tracking.cache_store")])]),t._v(" "),a("td",[a("code",[t._v("file")])]),t._v(" "),a("td",[t._v("Cache store used by the default cache implementation provided by the package.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("session_tracking.queue_job_count_for_sessions")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Enable/disable session tracking for queue jobs.")])])])]),t._v(" "),a("p",[t._v("Symfony has the following additional configuration options:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Configuration")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("runtime")])]),t._v(" "),a("td",[a("code",[t._v("symfony")])]),t._v(" "),a("td",[t._v("Set the Symfony runtime.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("runtime_version")])]),t._v(" "),a("td",[a("code",[t._v("Kernel::VERSION")])]),t._v(" "),a("td",[t._v("Set the Symfony runtime version.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("doctrine_dbal.enabled")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("Enable SQL query logging (see "),a("RouterLink",{attrs:{to:"/packages/easy-bugsnag/sql-logging.html"}},[t._v("SQL query logging")]),t._v(").")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("doctrine_dbal.connections")])]),t._v(" "),a("td",[a("code",[t._v("['default']")])]),t._v(" "),a("td",[t._v("Connections to log SQL queries for.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("session_tracking.cache_directory")])]),t._v(" "),a("td",[a("code",[t._v("%kernel.cache_dir%")])]),t._v(" "),a("td",[t._v("Directory used by the default cache implementation provided by the package.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("session_tracking.cache_namespace")])]),t._v(" "),a("td",[a("code",[t._v("easy_bugsnag_sessions")])]),t._v(" "),a("td",[t._v("Namespace used by the default cache implementation provided by the package.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("session_tracking.messenger_message_count_for_sessions")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Enable/disable session tracking for messenger messages.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("worker_info.enabled")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Enable/disable worker information data in Bugsnag. See "),a("RouterLink",{attrs:{to:"/packages/easy-bugsnag/worker-info.html"}},[t._v("Worker information")]),t._v(" for more information.")],1)])])]),t._v(" "),a("h2",{attrs:{id:"example-configuration-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-configuration-files"}},[t._v("#")]),t._v(" Example configuration files")]),t._v(" "),a("h3",{attrs:{id:"symfony"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#symfony"}},[t._v("#")]),t._v(" Symfony")]),t._v(" "),a("p",[t._v("In Symfony, you could have a configuration file called "),a("code",[t._v("easy_bugsnag.yaml")]),t._v(" that looks like the following:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("easy_bugsnag")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("api_key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%env(BUGSNAG_API_KEY)%'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("project_root")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%kernel.project_dir%/src'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("release_stage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%env(APP_ENV)%'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("strip_path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%kernel.project_dir%'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runtime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'symfony'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runtime_version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Symfony\\Component\\HttpKernel\\Kernel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("VERSION\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("aws_ecs_fargate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("meta_url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%env(ECS_CONTAINER_METADATA_URI_V4)%/task'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("meta_storage_filename")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%kernel.cache_dir%/aws_ecs_fargate_meta.json'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("doctrine_dbal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("connections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'default'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("session_tracking")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache_directory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%kernel.cache_dir%'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache_expires_after")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache_namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'easy_bugsnag_sessions'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exclude_urls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exclude_urls_delimiter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("messenger_message_count_for_sessions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("worker_info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("use_default_configurators")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),a("h3",{attrs:{id:"laravel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#laravel"}},[t._v("#")]),t._v(" Laravel")]),t._v(" "),a("p",[t._v("In Laravel, the "),a("code",[t._v("easy-bugsnag.php")]),t._v(" configuration file could look like the following:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strict_types"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'enabled'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'api_key'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" \\"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'BUGSNAG_API_KEY'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'project_root'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" \\"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("base_path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'release_stage'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" \\"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'APP_ENV'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'strip_path'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" \\"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("base_path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'aws_ecs_fargate'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'enabled'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'meta_url'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" \\"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sprintf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'%s/task'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \\"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'ECS_CONTAINER_METADATA_URI_V4'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'meta_storage_filename'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" \\"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("storage_path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'aws_ecs_fargate_meta.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'doctrine_orm'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'session_tracking'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'enabled'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'cache_expires_after'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'cache_store'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'file'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'exclude_urls'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'exclude_urls_delimiter'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'#'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'queue_job_count_for_sessions'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'use_default_configurators'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);