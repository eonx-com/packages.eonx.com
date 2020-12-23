(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{422:function(e,t,a){"use strict";a.r(t);var n=a(25),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("This document describes the concept of middleware and how to use them.")]),e._v(" "),a("h1",{attrs:{id:"what-s-a-middleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-a-middleware"}},[e._v("#")]),e._v(" What's a middleware")]),e._v(" "),a("p",[e._v("If you're not familiar with the Pipeline Design Pattern we recommend you to have a look at this "),a("a",{attrs:{href:"https://www.cise.ufl.edu/research/ParallelPatterns/PatternLanguage/AlgorithmStructure/Pipeline.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),a("OutboundLink")],1),e._v('.\nIn this package the "tasks or stages" are the middleware and are defined by the '),a("code",[e._v("EonX\\EasyPipeline\\Interfaces\\MiddlewareInterface")]),e._v(".")]),e._v(" "),a("br"),e._v(" "),a("h1",{attrs:{id:"how-to-create-a-middleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-a-middleware"}},[e._v("#")]),e._v(" How to create a middleware")]),e._v(" "),a("p",[e._v("A middleware is a simple PHP object implementing the "),a("code",[e._v("EonX\\EasyPipeline\\Interfaces\\MiddlewareInterface")]),e._v(", this\ninterface defines only one method "),a("code",[e._v("handle($input, callable $next)")]),e._v(" where "),a("code",[e._v("$input")]),e._v(" is the pipeline input data, potentially\nmodified by a previous middleware, and "),a("code",[e._v("$next")]),e._v(" is the callable to tell the next middleware it can proceed with the input.")]),e._v(" "),a("p",[e._v("To ensure the pipeline works as expected, each middleware MUST keep passing the input to the next middleware. Here is\nthe minimum required code for a middleware:")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("EonX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("EasyPipeline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Interfaces"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("MiddlewareInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("final")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MyMiddleware")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("implements")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MiddlewareInterface")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * Handle given input and pass return through next.\n     *\n     * @param mixed $input\n     * @param callable $next\n     *\n     * @return mixed\n     */")]),e._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("handle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("callable")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Do stuff here...")]),e._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Return the output of the next middleware for the given input")]),e._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("br"),e._v(" "),a("h1",{attrs:{id:"log-each-step-of-your-pipeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-each-step-of-your-pipeline"}},[e._v("#")]),e._v(" Log each step of your pipeline")]),e._v(" "),a("p",[e._v("This package comes with all the tools to allow your middleware to log information for each step of your pipeline, this\ncan be really handy for debugging purposes. In order to allow your middleware to log information, it must implement\nthe "),a("code",[e._v("EonX\\EasyPipeline\\Interfaces\\MiddlewareLoggerAwareInterface")]),e._v(" so that the pipeline know your middleware\nrequires the "),a("code",[e._v("EonX\\EasyPipeline\\Interfaces\\MiddlewareLoggerInterface")]),e._v(" instance.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("MiddlewareLoggerInterface")]),e._v(" defines one method "),a("code",[e._v("log(string $middleware, $content): void")]),e._v(", the first "),a("code",[e._v("$middleware")]),e._v("\nparameter is to categorise the "),a("code",[e._v("$content")]),e._v(" under a single identifier, it can be any string you want.")]),e._v(" "),a("p",[e._v("This package provides you with the "),a("code",[e._v("EonX\\EasyPipeline\\Traits\\MiddlewareLoggerAwareTrait")]),e._v(" which defines the setter\nfor the "),a("code",[e._v("MiddlewareLoggerInterface")]),e._v(" and also the "),a("code",[e._v("log($content, ?string $middleware = null)")]),e._v(" method to easily log content.\nThe "),a("code",[e._v("$middleware")]),e._v(" parameter is optional, when it is not set the trait will default it to your middleware class name.\nThe trait is a convenient way of allowing your middleware to log content but if you do not like using traits you're free\nto implement the logging logic yourself.")]),e._v(" "),a("p",[e._v("Here is the minimum required code for your middleware to log content:")]),e._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("EonX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("EasyPipeline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Interfaces"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("MiddlewareInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("EonX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("EasyPipeline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Interfaces"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("MiddlewareLoggerAwareInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("EonX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("EasyPipeline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Traits"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("MiddlewareLoggerAwareTrait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("final")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MyMiddlewareWithLog")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("implements")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MiddlewareInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" MiddlewareLoggerAwareInterface\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("use")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[e._v("MiddlewareLoggerAwareTrait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Will handle the setter for the MiddlewareLoggerInterface")]),e._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/**\n     * Handle given input and pass return through next.\n     *\n     * @param mixed $input\n     * @param callable $next\n     *\n     * @return mixed\n     */")]),e._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("handle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("callable")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Do stuff here...")]),e._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'Content to log'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Return the output of the next middleware for the given input")]),e._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);