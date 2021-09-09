(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{265:function(e,t,a){"use strict";a.r(t);var n=a(3),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("This document describes the concept of middleware providers and how to use them.")]),e._v(" "),a("h1",{attrs:{id:"what-s-a-pipeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-a-pipeline"}},[e._v("#")]),e._v(" What's a pipeline?")]),e._v(" "),a("p",[e._v("If you're not familiar with the Pipeline Design Pattern we recommend you to have a look at this "),a("a",{attrs:{href:"https://www.cise.ufl.edu/research/ParallelPatterns/PatternLanguage/AlgorithmStructure/Pipeline.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),a("OutboundLink")],1),e._v('.\nIn this package the "tasks or stages" are represented by the '),a("code",[e._v("EonX\\EasyPipeline\\Interfaces\\MiddlewareInterface")]),e._v(".\nSo the pipelines created using this package will allow you to process input data through a collection of middleware.\nThe only way to define the middleware each pipeline will use is via "),a("code",[e._v("EonX\\EasyPipeline\\Interfaces\\MiddlewareProviderInterface")]),e._v(".")]),e._v(" "),a("br"),e._v(" "),a("h1",{attrs:{id:"how-middlewareproviders-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-middlewareproviders-work"}},[e._v("#")]),e._v(" How MiddlewareProviders work?")]),e._v(" "),a("p",[e._v("Each middleware provider must be an instance of the "),a("code",[e._v("EonX\\EasyPipeline\\Interfaces\\MiddlewareProviderInterface")]),e._v(",\nthis interface defines one simple method "),a("code",[e._v("getMiddlewareList(): array")]),e._v(". The objective of this method is to return a list\nof middleware to use within a pipeline instance.")]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"what-values-can-my-middlewareproviders-return"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-values-can-my-middlewareproviders-return"}},[e._v("#")]),e._v(" What values can my MiddlewareProviders return?")]),e._v(" "),a("p",[e._v("The middleware providers must return an array of "),a("code",[e._v("MiddlewareInterface")]),e._v(".")]),e._v(" "),a("p",[e._v("That's it!? That's all!? Not really handy, I'm sure we can do better!")]),e._v(" "),a("p",[e._v("Yes you're right, this package comes with an implementation for any application using a PSR Service Container!\nThat means you can also register your middleware inside the service container and return its service locator from your\nMiddlewareProvider and this package will know how to instantiate it! We recommend you to register your middleware using\nits "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Fully_qualified_name",target:"_blank",rel:"noopener noreferrer"}},[e._v("FQCN"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("br"),e._v(" "),a("h3",{attrs:{id:"illuminate-pipeline-implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#illuminate-pipeline-implementation"}},[e._v("#")]),e._v(" Illuminate Pipeline implementation")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://packagist.org/packages/illuminate/pipeline",target:"_blank",rel:"noopener noreferrer"}},[e._v("Illuminate Pipeline"),a("OutboundLink")],1),e._v(" knows how to resolve middleware using the PSR Service Container as well, and on the top of\nthat it also allows you to define your middleware using "),a("code",[e._v("callable")]),e._v(". So if you're a using the "),a("code",[e._v("IlluminatePipeline")]),e._v("\nimplementation of this package your MiddlewareProviders can return closures and any kind of "),a("code",[e._v("callable")]),e._v(" as well.")]),e._v(" "),a("br"),e._v(" "),a("h4",{attrs:{id:"accessing-the-pipeline-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-pipeline-name"}},[e._v("#")]),e._v(" Accessing the Pipeline name")]),e._v(" "),a("p",[e._v("If you're using the IlluminatePipelineFactory, a MiddlewareProvider can access the name it was registered under by implementing the "),a("code",[e._v("EonX\\EasyPipeline\\Interfaces\\PipelineNameAwareInterface")]),e._v(".\nThe factory will call "),a("code",[e._v("setPipelineName()")]),e._v(" on any MiddlewareProviders implementing this.")]),e._v(" "),a("p",[e._v("To save time, the "),a("code",[e._v("EonX\\EasyPipeline\\Traits\\PipelineNameAwareTrait")]),e._v(" is available, providing an implementation of this function and the private property "),a("code",[e._v("$pipelineName")]),e._v(".")]),e._v(" "),a("br"),e._v(" "),a("h1",{attrs:{id:"dependency-injection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dependency-injection"}},[e._v("#")]),e._v(" Dependency Injection")]),e._v(" "),a("p",[e._v("This package is using the PSR Service Container to instantiate your MiddlewareProviders which means you can use\ndependency injection on them, how convenient!")]),e._v(" "),a("br"),e._v(" "),a("h1",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Validator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("MyValidatorInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("EonX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("EasyPipeline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Interfaces"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("MiddlewareProviderInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("final")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MyPipeline1MiddlewareProvider")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("implements")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MiddlewareProviderInterface")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * @var App\\Validator\\MyValidatorInterface\n     */")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("private")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$validator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("__construct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[e._v("MyValidatorInterface")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$validator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("validator")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$validator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// You can use dependency injection")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * Get middleware list, middleware could be anything your container can resolve.\n     *\n     * @return mixed[]\n     */")]),e._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("getMiddlewareList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword return-type"}},[e._v("array")]),e._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ChangeNameMiddleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Instance of the middleware")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[e._v("ChangeAddressMiddleware")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// FQCN of the middleware to be resolve by the service container")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MyValidatorMiddleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("validator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Instance of the middleware with dependency injection")]),e._v("\n            \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// If you're using the IlluminatePipeline implementation")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Do stuff here...")]),e._v("\n                \n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            \n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Or even")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'actAsMiddleware'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n     \n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n      * This method will act as a middleware.\n      * \n      * @param mixed $input\n      * @param \\Closure $next\n      *\n      * @return mixed\n      */")]),e._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("actAsMiddleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified type-declaration"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Closure")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Do stuff here...")]),e._v("\n                        \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);