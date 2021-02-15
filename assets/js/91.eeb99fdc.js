(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{279:function(t,e,a){"use strict";a.r(e);var s=a(3),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"easyutils"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#easyutils"}},[t._v("#")]),t._v(" EasyUtils")]),t._v(" "),a("p",[t._v("This package provides helper classes.")]),t._v(" "),a("h2",{attrs:{id:"require-package-composer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#require-package-composer"}},[t._v("#")]),t._v(" Require package (Composer)")]),t._v(" "),a("p",[t._v("The recommended way to install this package is to use "),a("a",{attrs:{href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Composer"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" require eonx-com/easy-utils\n")])])]),a("h2",{attrs:{id:"helper-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helper-list"}},[t._v("#")]),t._v(" Helper list")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("CollectorHelper")]),t._v(": provides methods to facilitate implementation of the "),a("a",{attrs:{href:"https://tomasvotruba.com/blog/2018/06/14/collector-pattern-for-dummies/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Collector Design Pattern"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"collectorhelper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collectorhelper"}},[t._v("#")]),t._v(" CollectorHelper")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://tomasvotruba.com/blog/2018/06/14/collector-pattern-for-dummies/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Collector Design Pattern"),a("OutboundLink")],1),t._v(" is a great method for keeping your code SOLID. However, using it in multiple parts of\nyour project can lead to significant repetition. The main purpose of the "),a("code",[t._v("CollectorHelper")]),t._v(" is to prevent duplicated code\nand facilitate implementation of the "),a("a",{attrs:{href:"https://tomasvotruba.com/blog/2018/06/14/collector-pattern-for-dummies/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Collector Design Pattern"),a("OutboundLink")],1),t._v(" in your project.")]),t._v(" "),a("p",[t._v("Most popular PHP frameworks provide features to tag services, and then define all services for a specific tag as\ndependencies to other services. See the following resources for examples:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://book.cakephp.org/4.next/en/development/dependency-injection.html#tagging-services",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tagging Services in CakePHP"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://symfony.com/doc/current/service_container/tags.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to Work with Service Tags in Symfony"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://laravel.com/docs/8.x/container#tagging",target:"_blank",rel:"noopener noreferrer"}},[t._v("Service Tagging in Laravel"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Those features help you implement the "),a("a",{attrs:{href:"https://tomasvotruba.com/blog/2018/06/14/collector-pattern-for-dummies/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Collector Design Pattern"),a("OutboundLink")],1),t._v(" in your project because they allow you to easily\ninject a collection of services sharing the same tag into other services.")]),t._v(" "),a("p",[t._v("However, there are some things you need to consider:")]),t._v(" "),a("ul",[a("li",[t._v("There is no guarantee that all given services are instances of a specific class/interface")]),t._v(" "),a("li",[t._v("You have no control on the order the services are organised within the given collection")])]),t._v(" "),a("p",[t._v("Let's elaborate on the above points.")]),t._v(" "),a("h4",{attrs:{id:"no-guarantee-on-the-content-of-tagged-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-guarantee-on-the-content-of-tagged-services"}},[t._v("#")]),t._v(" No guarantee on the content of tagged services")]),t._v(" "),a("p",[t._v("The service tagging features do not allow you to ensure all services sharing the same tag meet common criteria. Symfony\nhas a feature to "),a("a",{attrs:{href:"https://symfony.com/blog/new-in-symfony-3-3-simpler-service-configuration#interface-based-service-configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("automatically tag services based on their class"),a("OutboundLink")],1),t._v(", but nothing stops you from manually tagging a\nservice with the same tag or even one of your dependencies.")]),t._v(" "),a("p",[t._v("This is why we strongly recommend you always filter the given "),a("code",[t._v("iterable")]),t._v(" of services by a given class/interface of your\nchoice by using the "),a("code",[t._v("filterByClass()")]),t._v(" or "),a("code",[t._v("filterByClassAsArray()")]),t._v(" methods of the "),a("code",[t._v("CollectorHelper")]),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"no-control-on-the-order-the-services-are-organised"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-control-on-the-order-the-services-are-organised"}},[t._v("#")]),t._v(" No control on the order the services are organised")]),t._v(" "),a("p",[t._v("When using service tagging features, you can control the order that the services are organised by simply changing the\norder in which you define the services. However, as above, there is nothing stopping you or one of your dependencies\nfrom tagging a service with the same tag. Therefore, you cannot guarantee the order as you cannot modify the\ndependencies' service definitions. But the "),a("code",[t._v("CollectorHelper")]),t._v(" can help us!")]),t._v(" "),a("p",[t._v("In some cases, the order of the given services does not matter, so there is no need to do anything. But if your logic\nrequires the services be used in a specific order, then use the "),a("code",[t._v("orderHigherPriorityFirst()")]),t._v(" and/or\n"),a("code",[t._v("orderLowerPriorityFirst()")]),t._v(" methods!")]),t._v(" "),a("p",[t._v("These methods will sort the objects within the given "),a("code",[t._v("iterable")]),t._v(" based on their priority. In order to define an object's\npriority, it must implement the "),a("code",[t._v("EonX\\EasyUtils\\Interfaces\\HasPriorityInterface")]),t._v(" provided by this package. If an object\ndoesn't implement this interface then its priority will default to "),a("code",[t._v("0")]),t._v(" automatically.")]),t._v(" "),a("h3",{attrs:{id:"collectorhelper-converttoarray"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collectorhelper-converttoarray"}},[t._v("#")]),t._v(" CollectorHelper::convertToArray()")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("convertToArray()")]),t._v(" method will convert any iterable to a simple PHP array. It is useful when you want to use array\nmethods on an "),a("code",[t._v("iterable")]),t._v(".")]),t._v(" "),a("p",[t._v("For a simple example of when to use the "),a("code",[t._v("convertToArray()")]),t._v(" method, imagine you have a class which accepts an "),a("code",[t._v("iterable")]),t._v('\nof "workers" in its constructor. To safely use these "workers", you want to ensure each of them implements the right\ninterface, so you filter them to keep only the "good workers" by using the '),a("code",[t._v("array_filter()")]),t._v(' function. If the "workers"\nwere already an '),a("code",[t._v("array")]),t._v(", then there would be no problem. However, because they are defined as "),a("code",[t._v("iterable")]),t._v(", you cannot\nguarantee you will receive an "),a("code",[t._v("array")]),t._v(". So use the "),a("code",[t._v("convertToArray()")]),t._v(" method!")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("WorkerInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyUtils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CollectorHelper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @var \\App\\Domain\\WorkerInterface[]\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @param iterable<mixed> $workers\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__construct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iterable "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $workers could be any type of iterable, convert it to array")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CollectorHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("convertToArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Now we are sure $workers is an array, we can use array_filter()")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \\"),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("array_filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$worker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bool "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$worker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WorkerInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $workers is now an array of WorkerInterface for sure")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("workers")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"collectorhelper-filterbyclass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collectorhelper-filterbyclass"}},[t._v("#")]),t._v(" CollectorHelper::filterByClass()")]),t._v(" "),a("p",[t._v("The use case of filtering by class (used above to explain the "),a("code",[t._v("convertToArray()")]),t._v(" method) is very common (at least in our\nprojects 😃 ), which is why "),a("code",[t._v("CollectorHelper")]),t._v(" provides the "),a("code",[t._v("filterByClass()")]),t._v(" method to do it for you.")]),t._v(" "),a("p",[t._v("The following example is the same as for the "),a("code",[t._v("convertToArray()")]),t._v(" method above. If you have an "),a("code",[t._v("iterable")]),t._v(" and you want to\nensure each item is an instance of a specific class/interface, use the "),a("code",[t._v("filterByClass()")]),t._v(" method!")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("WorkerInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyUtils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CollectorHelper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @var iterable<\\App\\Domain\\WorkerInterface>\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @param iterable<mixed> $workers\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__construct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iterable "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $workers now contains only WorkerInterface instances")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CollectorHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filterByClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" WorkerInterface"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The filterByClass() method still returns an iterable, a generator more precisely")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If you need an array, you can use the filterByClassAsArray() method")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("workers")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("filterByClass()")]),t._v(" method still returns an iterable (or, more precisely, a generator). If you need an "),a("code",[t._v("array")]),t._v(", you\ncan use the "),a("code",[t._v("filterByClassAsArray()")]),t._v(" method instead.")])]),t._v(" "),a("h3",{attrs:{id:"collectorhelper-filterbyclassasarray"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collectorhelper-filterbyclassasarray"}},[t._v("#")]),t._v(" CollectorHelper::filterByClassAsArray()")]),t._v(" "),a("p",[t._v("This method is similar to the "),a("code",[t._v("filterByClass()")]),t._v(" method, but with a little tweak. If you have an "),a("code",[t._v("iterable")]),t._v(" and you want\nto make sure each item is an instance of a specific class/interface, but you need the output to be an "),a("code",[t._v("array")]),t._v(", use the\n"),a("code",[t._v("filterByClassAsArray()")]),t._v(" method!")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("WorkerInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyUtils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CollectorHelper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @var \\App\\Domain\\WorkerInterface[]\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @param iterable<mixed> $workers\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__construct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iterable "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $workers now contains only WorkerInterface instances")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CollectorHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filterByClassAsArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" WorkerInterface"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $workers is now an array containing only WorkerInterface instances")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("workers")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"collectorhelper-ensureclass-and-collectorhelper-ensureclassasarray"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collectorhelper-ensureclass-and-collectorhelper-ensureclassasarray"}},[t._v("#")]),t._v(" CollectorHelper::ensureClass() and CollectorHelper::ensureClassAsArray()")]),t._v(" "),a("p",[t._v("Those methods are similar to the "),a("code",[t._v("filterByClass()")]),t._v(" and "),a("code",[t._v("filterByClassAsArray()")]),t._v(" methods, however they will throw an\nexception if at least of the items is not an instance of the given class.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("WorkerInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyUtils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CollectorHelper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @var \\App\\Domain\\WorkerInterface[]\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @param iterable<mixed> $workers\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__construct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iterable "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $workers now contains only WorkerInterface instances")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CollectorHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ensureClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("WorkerInterface"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$worker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This code will be executed only if all items are instances of WorkerInterface")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Please note that with the "),a("code",[t._v("ensureClass()")]),t._v(" method, the exception will be thrown only when iterating through the generator.")])]),t._v(" "),a("h3",{attrs:{id:"collectorhelper-orderhigherpriorityfirst"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collectorhelper-orderhigherpriorityfirst"}},[t._v("#")]),t._v(" CollectorHelper::orderHigherPriorityFirst()")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("orderHigherPriorityFirst()")]),t._v(" method will ensure the object with the highest priority is placed first, and the object\nwith the lowest priority is placed last.")]),t._v(" "),a("p",[t._v("In order to define an object's priority, it must implement the "),a("code",[t._v("EonX\\EasyUtils\\Interfaces\\HasPriorityInterface")]),t._v(" provided\nby this package. If an object doesn't implement this interface then its priority will default to "),a("code",[t._v("0")]),t._v(" automatically.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Foo and Bar both implement EonX\\EasyUtils\\Interfaces\\HasPriorityInterface")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Has a priority of 10")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$bar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Has a priority of 100")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $foo is added to the array first, and $bar second")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$objects")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $bar is now first as it has a higher priority than $foo")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$objects")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CollectorHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("orderHigherPriorityFirst")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$objects")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [$bar, $foo]")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("orderHigherPriorityFirst()")]),t._v(" method still returns an iterable (or, more precisely, a generator). If you need an "),a("code",[t._v("array")]),t._v(", you\ncan use the "),a("code",[t._v("orderHigherPriorityFirstAsArray()")]),t._v(" method instead.")])]),t._v(" "),a("h3",{attrs:{id:"collectorhelper-orderlowerpriorityfirst"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collectorhelper-orderlowerpriorityfirst"}},[t._v("#")]),t._v(" CollectorHelper::orderLowerPriorityFirst()")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("orderLowerPriorityFirst()")]),t._v(" method is the opposite of "),a("code",[t._v("orderHigherPriorityFirst()")]),t._v(". It will ensure the object with\nthe lowest priority is placed first, and the object with the highest priority is placed last.")]),t._v(" "),a("p",[t._v("In order to define an object's priority, it must implement the "),a("code",[t._v("EonX\\EasyUtils\\Interfaces\\HasPriorityInterface")]),t._v(" provided\nby this package. If an object doesn't implement this interface then its priority will default to "),a("code",[t._v("0")]),t._v(" automatically.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Foo and Bar both implement EonX\\EasyUtils\\Interfaces\\HasPriorityInterface")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Has a priority of 10")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$bar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Has a priority of 100")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $foo is added to the array first, and $bar second")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$objects")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $foo is still first as it has a lower priority than $bar")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$objects")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CollectorHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("orderLowerPriorityFirst")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$objects")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [$foo, $bar]")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("orderLowerPriorityFirst()")]),t._v(" method still returns an iterable (or, more precisely, a generator). If you need an "),a("code",[t._v("array")]),t._v(", you\ncan use the "),a("code",[t._v("orderLowerPriorityFirstAsArray()")]),t._v(" method instead.")])])])}),[],!1,null,null,null);e.default=r.exports}}]);