(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{282:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("This document describes the steps to use this package into a "),a("a",{attrs:{href:"https://laravel.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel"),a("OutboundLink")],1),t._v(" and/or "),a("a",{attrs:{href:"https://lumen.laravel.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lumen"),a("OutboundLink")],1),t._v(" application with the\n"),a("a",{attrs:{href:"https://www.doctrine-project.org/projects/orm.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Doctrine ORM"),a("OutboundLink")],1),t._v(" implementation.")]),t._v(" "),a("br"),t._v(" "),a("h1",{attrs:{id:"install-with-doctrine-orm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-with-doctrine-orm"}},[t._v("#")]),t._v(" Install With Doctrine ORM")]),t._v(" "),a("p",[t._v("For this package install please refer to the related "),a("RouterLink",{attrs:{to:"/packages/easy-repository/laravel_install.html"}},[t._v("documentation")]),t._v(". Regarding Doctrine ORM, we\nstrongly recommend you to use the "),a("a",{attrs:{href:"https://www.laraveldoctrine.org/docs/1.3/orm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel Doctrine ORM package"),a("OutboundLink")],1),t._v(", please refer to its documentation for its install.")],1),t._v(" "),a("br"),t._v(" "),a("h1",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("h2",{attrs:{id:"abstractdoctrinerepository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstractdoctrinerepository"}},[t._v("#")]),t._v(" AbstractDoctrineRepository")]),t._v(" "),a("p",[t._v("This package provides you with "),a("code",[t._v("EonX\\EasyRepository\\Implementations\\Doctrine\\ORM\\AbstractDoctrineRepository")]),t._v(" which\nhas everything setup for you to implement the generic "),a("code",[t._v("ObjectRepositoryInterface")]),t._v(" using Doctrine ORM, and take advantage\nof the dependency injection. Using this abstraction is completely optional you could create your own, but we recommend\nto use it to avoid you doing work already done.")]),t._v(" "),a("p",[t._v("Make sure all your repositories extend it, then you will be able to use the existing methods and/or create your own. To\nbe able to work properly this abstraction will ensure an entity class is provided.")]),t._v(" "),a("p",[t._v("Here is a simple example how to use it:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app/Repositories/PostRepositoryInterface.php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Entities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PostRepositoryInterface")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findByTitle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token class-name return-type"}},[t._v("Post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app/Repositories/PostRepository.php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Entities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyRepository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Implementations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Doctrine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ORM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("AbstractDoctrineRepository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PostRepository")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractDoctrineRepository")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PostRepositoryInterface")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Find a post by its title.\n     *\n     * @param string $title The post title\n     *\n     * @return null|\\App\\Database\\Entities\\Post\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findByTitle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token class-name return-type"}},[t._v("Post")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The abstraction provides you the Doctrine Repository for Post::class as a protected property")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("repository")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findOneBy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'title'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Get entity class managed by the repository.\n     *\n     * @return string\n     */")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntityClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword return-type"}},[t._v("string")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Post")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"abstractpaginateddoctrineormrepository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstractpaginateddoctrineormrepository"}},[t._v("#")]),t._v(" AbstractPaginatedDoctrineOrmRepository")]),t._v(" "),a("p",[t._v("If you need to deal with paginated sets of objects, this package provides you with "),a("code",[t._v("EonX\\EasyRepository\\Implementations\\Doctrine\\ORM\\AbstractPaginatedDoctrineOrmRepository")]),t._v("\nwhich has everything setup for you. This repository has a dependency on the "),a("code",[t._v("StartSizeDataInterface")]),t._v(" from the "),a("code",[t._v("eonx/pagination")]),t._v("\npackage so to be able to use it you first need to update your project's dependencies:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" require eonx/pagination\n")])])]),a("p",[t._v("And then don't forget to register the service provider into your application, please refer to the "),a("a",{attrs:{href:"https://github.com/eonx/easy-pagination/blob/master/docs/install_laravel.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Once everything setup, the pagination data will be resolved and injected automatically into your repositories. You will\nhave access to the method "),a("code",[t._v("public function paginate(?StartSizeDataInterface $startSizeData = null): LengthAwarePaginatorInterface")]),t._v("\nwhich will allow you to pass an optional pagination data object, if you don't it will then use the resolved data.\nOn the top of this public method, this abstraction provides an internal "),a("code",[t._v("protected function doPaginate(\\Doctrine\\ORM\\Query $query): LengthAwarePaginatorInterface")]),t._v("\nwhich allows you to easily paginate any custom query you build.")]),t._v(" "),a("p",[t._v("Here is a simple example how to use it:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app/Repositories/PostRepositoryInterface.php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Entities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyPagination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Interfaces"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("LengthAwarePaginatorInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PostRepositoryInterface")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getByCategoryPaginatedList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$category")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name return-type"}},[t._v("LengthAwarePaginatorInterface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app/Repositories/PostRepository.php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Entities"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("EonX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EasyRepository"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Implementations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Doctrine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ORM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("AbstractPaginatedDoctrineOrmRepository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PostRepository")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractPaginatedDoctrineOrmRepository")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PostRepositoryInterface")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getByCategoryPaginatedList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword type-hint"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$category")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name return-type"}},[t._v("LengthAwarePaginatorInterface")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$query")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createQueryBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("where")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'p.category = :category'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setParameter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'category'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$category")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getQuery")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                      \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doPaginate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Get entity class managed by the repository.\n     *\n     * @return string\n     */")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntityClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword return-type"}},[t._v("string")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Post")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);