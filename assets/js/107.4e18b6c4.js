(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{300:function(t,e,s){"use strict";s.r(e);var a=s(3),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"easyutils"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#easyutils"}},[t._v("#")]),t._v(" EasyUtils")]),t._v(" "),s("p",[t._v("This package provides helper classes.")]),t._v(" "),s("h2",{attrs:{id:"require-package-composer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#require-package-composer"}},[t._v("#")]),t._v(" Require package (Composer)")]),t._v(" "),s("p",[t._v("The recommended way to install this package is to use "),s("a",{attrs:{href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Composer"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" require eonx-com/easy-utils\n")])])]),s("h2",{attrs:{id:"helper-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#helper-list"}},[t._v("#")]),t._v(" Helper list")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("CollectorHelper")]),t._v(": provides methods to facilitate implementation of the "),s("a",{attrs:{href:"https://tomasvotruba.com/blog/2018/06/14/collector-pattern-for-dummies/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Collector Design Pattern"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("code",[t._v("Math")]),t._v(": provides methods to facilitate numbers manipulation")])]),t._v(" "),s("h2",{attrs:{id:"collectorhelper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#collectorhelper"}},[t._v("#")]),t._v(" CollectorHelper")]),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://tomasvotruba.com/blog/2018/06/14/collector-pattern-for-dummies/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Collector Design Pattern"),s("OutboundLink")],1),t._v(" is a great method for keeping your code SOLID. However, using it in multiple parts of\nyour project can lead to significant repetition. The main purpose of the "),s("code",[t._v("CollectorHelper")]),t._v(" is to prevent duplicated code\nand facilitate implementation of the "),s("a",{attrs:{href:"https://tomasvotruba.com/blog/2018/06/14/collector-pattern-for-dummies/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Collector Design Pattern"),s("OutboundLink")],1),t._v(" in your project.")]),t._v(" "),s("p",[t._v("Most popular PHP frameworks provide features to tag services, and then define all services for a specific tag as\ndependencies to other services. See the following resources for examples:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://book.cakephp.org/4.next/en/development/dependency-injection.html#tagging-services",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tagging Services in CakePHP"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://symfony.com/doc/current/service_container/tags.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to Work with Service Tags in Symfony"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://laravel.com/docs/8.x/container#tagging",target:"_blank",rel:"noopener noreferrer"}},[t._v("Service Tagging in Laravel"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("Those features help you implement the "),s("a",{attrs:{href:"https://tomasvotruba.com/blog/2018/06/14/collector-pattern-for-dummies/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Collector Design Pattern"),s("OutboundLink")],1),t._v(" in your project because they allow you to easily\ninject a collection of services sharing the same tag into other services.")]),t._v(" "),s("p",[t._v("However, there are some things you need to consider:")]),t._v(" "),s("ul",[s("li",[t._v("There is no guarantee that all given services are instances of a specific class/interface")]),t._v(" "),s("li",[t._v("You have no control on the order the services are organised within the given collection")])]),t._v(" "),s("p",[t._v("Let's elaborate on the above points.")]),t._v(" "),s("h4",{attrs:{id:"no-guarantee-on-the-content-of-tagged-services"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#no-guarantee-on-the-content-of-tagged-services"}},[t._v("#")]),t._v(" No guarantee on the content of tagged services")]),t._v(" "),s("p",[t._v("The service tagging features do not allow you to ensure all services sharing the same tag meet common criteria. Symfony\nhas a feature to "),s("a",{attrs:{href:"https://symfony.com/blog/new-in-symfony-3-3-simpler-service-configuration#interface-based-service-configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("automatically tag services based on their class"),s("OutboundLink")],1),t._v(", but nothing stops you from manually tagging a\nservice with the same tag or even one of your dependencies.")]),t._v(" "),s("p",[t._v("This is why we strongly recommend you always filter the given "),s("code",[t._v("iterable")]),t._v(" of services by a given class/interface of your\nchoice by using the "),s("code",[t._v("filterByClass()")]),t._v(" or "),s("code",[t._v("filterByClassAsArray()")]),t._v(" methods of the "),s("code",[t._v("CollectorHelper")]),t._v(".")]),t._v(" "),s("h4",{attrs:{id:"no-control-on-the-order-the-services-are-organised"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#no-control-on-the-order-the-services-are-organised"}},[t._v("#")]),t._v(" No control on the order the services are organised")]),t._v(" "),s("p",[t._v("When using service tagging features, you can control the order that the services are organised by simply changing the\norder in which you define the services. However, as above, there is nothing stopping you or one of your dependencies\nfrom tagging a service with the same tag. Therefore, you cannot guarantee the order as you cannot modify the\ndependencies' service definitions. But the "),s("code",[t._v("CollectorHelper")]),t._v(" can help us!")]),t._v(" "),s("p",[t._v("In some cases, the order of the given services does not matter, so there is no need to do anything. But if your logic\nrequires the services be used in a specific order, then use the "),s("code",[t._v("orderHigherPriorityFirst()")]),t._v(" and/or\n"),s("code",[t._v("orderLowerPriorityFirst()")]),t._v(" methods!")]),t._v(" "),s("p",[t._v("These methods will sort the objects within the given "),s("code",[t._v("iterable")]),t._v(" based on their priority. In order to define an object's\npriority, it must implement the "),s("code",[t._v("EonX\\EasyUtils\\Interfaces\\HasPriorityInterface")]),t._v(" provided by this package. If an object\ndoesn't implement this interface then its priority will default to "),s("code",[t._v("0")]),t._v(" automatically.")]),t._v(" "),s("h3",{attrs:{id:"collectorhelper-converttoarray"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#collectorhelper-converttoarray"}},[t._v("#")]),t._v(" CollectorHelper::convertToArray()")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("convertToArray()")]),t._v(" method will convert any iterable to a simple PHP array. It is useful when you want to use array\nmethods on an "),s("code",[t._v("iterable")]),t._v(".")]),t._v(" "),s("p",[t._v("For a simple example of when to use the "),s("code",[t._v("convertToArray()")]),t._v(" method, imagine you have a class which accepts an "),s("code",[t._v("iterable")]),t._v('\nof "workers" in its constructor. To safely use these "workers", you want to ensure each of them implements the right\ninterface, so you filter them to keep only the "good workers" by using the '),s("code",[t._v("array_filter()")]),t._v(' function. If the "workers"\nwere already an '),s("code",[t._v("array")]),t._v(", then there would be no problem. However, because they are defined as "),s("code",[t._v("iterable")]),t._v(", you cannot\nguarantee you will receive an "),s("code",[t._v("array")]),t._v(". So use the "),s("code",[t._v("convertToArray()")]),t._v(" method!")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Domain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("WorkerInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyUtils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CollectorHelper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @var \\App\\Domain\\WorkerInterface[]\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("array")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @param iterable<mixed> $workers\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__construct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[t._v("iterable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $workers could be any type of iterable, convert it to array")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("CollectorHelper")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("convertToArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Now we are sure $workers is an array, we can use array_filter()")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \\"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("array_filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$worker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword return-type"}},[t._v("bool")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$worker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WorkerInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $workers is now an array of WorkerInterface for sure")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("workers")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"collectorhelper-filterbyclass"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#collectorhelper-filterbyclass"}},[t._v("#")]),t._v(" CollectorHelper::filterByClass()")]),t._v(" "),s("p",[t._v("The use case of filtering by class (used above to explain the "),s("code",[t._v("convertToArray()")]),t._v(" method) is very common (at least in our\nprojects 😃 ), which is why "),s("code",[t._v("CollectorHelper")]),t._v(" provides the "),s("code",[t._v("filterByClass()")]),t._v(" method to do it for you.")]),t._v(" "),s("p",[t._v("The following example is the same as for the "),s("code",[t._v("convertToArray()")]),t._v(" method above. If you have an "),s("code",[t._v("iterable")]),t._v(" and you want to\nensure each item is an instance of a specific class/interface, use the "),s("code",[t._v("filterByClass()")]),t._v(" method!")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Domain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("WorkerInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyUtils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CollectorHelper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @var iterable<\\App\\Domain\\WorkerInterface>\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("array")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @param iterable<mixed> $workers\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__construct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[t._v("iterable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $workers now contains only WorkerInterface instances")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("CollectorHelper")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("filterByClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("WorkerInterface")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The filterByClass() method still returns an iterable, a generator more precisely")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If you need an array, you can use the filterByClassAsArray() method")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("workers")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("filterByClass()")]),t._v(" method still returns an iterable (or, more precisely, a generator). If you need an "),s("code",[t._v("array")]),t._v(", you\ncan use the "),s("code",[t._v("filterByClassAsArray()")]),t._v(" method instead.")])]),t._v(" "),s("h3",{attrs:{id:"collectorhelper-filterbyclassasarray"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#collectorhelper-filterbyclassasarray"}},[t._v("#")]),t._v(" CollectorHelper::filterByClassAsArray()")]),t._v(" "),s("p",[t._v("This method is similar to the "),s("code",[t._v("filterByClass()")]),t._v(" method, but with a little tweak. If you have an "),s("code",[t._v("iterable")]),t._v(" and you want\nto make sure each item is an instance of a specific class/interface, but you need the output to be an "),s("code",[t._v("array")]),t._v(", use the\n"),s("code",[t._v("filterByClassAsArray()")]),t._v(" method!")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Domain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("WorkerInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyUtils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CollectorHelper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @var \\App\\Domain\\WorkerInterface[]\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("array")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @param iterable<mixed> $workers\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__construct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[t._v("iterable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $workers now contains only WorkerInterface instances")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("CollectorHelper")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("filterByClassAsArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("WorkerInterface")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $workers is now an array containing only WorkerInterface instances")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("workers")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"collectorhelper-ensureclass-and-collectorhelper-ensureclassasarray"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#collectorhelper-ensureclass-and-collectorhelper-ensureclassasarray"}},[t._v("#")]),t._v(" CollectorHelper::ensureClass() and CollectorHelper::ensureClassAsArray()")]),t._v(" "),s("p",[t._v("Those methods are similar to the "),s("code",[t._v("filterByClass()")]),t._v(" and "),s("code",[t._v("filterByClassAsArray()")]),t._v(" methods, however they will throw an\nexception if at least of the items is not an instance of the given class.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Domain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("WorkerInterface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyUtils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CollectorHelper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @var \\App\\Domain\\WorkerInterface[]\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("array")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @param iterable<mixed> $workers\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__construct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[t._v("iterable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $workers now contains only WorkerInterface instances")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("CollectorHelper")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ensureClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("WorkerInterface")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$workers")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$worker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This code will be executed only if all items are instances of WorkerInterface")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Please note that with the "),s("code",[t._v("ensureClass()")]),t._v(" method, the exception will be thrown only when iterating through the generator.")])]),t._v(" "),s("h3",{attrs:{id:"collectorhelper-orderhigherpriorityfirst"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#collectorhelper-orderhigherpriorityfirst"}},[t._v("#")]),t._v(" CollectorHelper::orderHigherPriorityFirst()")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("orderHigherPriorityFirst()")]),t._v(" method will ensure the object with the highest priority is placed first, and the object\nwith the lowest priority is placed last.")]),t._v(" "),s("p",[t._v("In order to define an object's priority, it must implement the "),s("code",[t._v("EonX\\EasyUtils\\Interfaces\\HasPriorityInterface")]),t._v(" provided\nby this package. If an object doesn't implement this interface then its priority will default to "),s("code",[t._v("0")]),t._v(" automatically.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Foo and Bar both implement EonX\\EasyUtils\\Interfaces\\HasPriorityInterface")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$foo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Has a priority of 10")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$bar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Has a priority of 100")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $foo is added to the array first, and $bar second")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$objects")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $bar is now first as it has a higher priority than $foo")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$objects")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("CollectorHelper")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("orderHigherPriorityFirst")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$objects")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [$bar, $foo]")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("orderHigherPriorityFirst()")]),t._v(" method still returns an iterable (or, more precisely, a generator). If you need an "),s("code",[t._v("array")]),t._v(", you\ncan use the "),s("code",[t._v("orderHigherPriorityFirstAsArray()")]),t._v(" method instead.")])]),t._v(" "),s("h3",{attrs:{id:"collectorhelper-orderlowerpriorityfirst"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#collectorhelper-orderlowerpriorityfirst"}},[t._v("#")]),t._v(" CollectorHelper::orderLowerPriorityFirst()")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("orderLowerPriorityFirst()")]),t._v(" method is the opposite of "),s("code",[t._v("orderHigherPriorityFirst()")]),t._v(". It will ensure the object with\nthe lowest priority is placed first, and the object with the highest priority is placed last.")]),t._v(" "),s("p",[t._v("In order to define an object's priority, it must implement the "),s("code",[t._v("EonX\\EasyUtils\\Interfaces\\HasPriorityInterface")]),t._v(" provided\nby this package. If an object doesn't implement this interface then its priority will default to "),s("code",[t._v("0")]),t._v(" automatically.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Foo and Bar both implement EonX\\EasyUtils\\Interfaces\\HasPriorityInterface")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$foo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Has a priority of 10")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$bar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Has a priority of 100")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $foo is added to the array first, and $bar second")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$objects")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $foo is still first as it has a lower priority than $bar")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$objects")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("CollectorHelper")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("orderLowerPriorityFirst")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$objects")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [$foo, $bar]")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("orderLowerPriorityFirst()")]),t._v(" method still returns an iterable (or, more precisely, a generator). If you need an "),s("code",[t._v("array")]),t._v(", you\ncan use the "),s("code",[t._v("orderLowerPriorityFirstAsArray()")]),t._v(" method instead.")])]),t._v(" "),s("h2",{attrs:{id:"math"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#math"}},[t._v("#")]),t._v(" Math")]),t._v(" "),s("p",[t._v("The Math helper provides the following methods:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("abs:")]),t._v(" returns the absolute value for the given number")]),t._v(" "),s("li",[s("code",[t._v("add:")]),t._v(" adds two numbers and returns the result")]),t._v(" "),s("li",[s("code",[t._v("comp:")]),t._v(" compares two numbers")]),t._v(" "),s("li",[s("code",[t._v("divide:")]),t._v(" divides one number by the other and returns the result")]),t._v(" "),s("li",[s("code",[t._v("multiply:")]),t._v(" multiplies one number by the other and returns the result")]),t._v(" "),s("li",[s("code",[t._v("round:")]),t._v(" rounds the given number and returns the result")]),t._v(" "),s("li",[s("code",[t._v("sub:")]),t._v(" subs tow numbers and returns the result")])])])}),[],!1,null,null,null);e.default=r.exports}}]);