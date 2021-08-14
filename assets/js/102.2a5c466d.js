(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{291:function(e,o,t){"use strict";t.r(o);var a=t(3),r=Object(a.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"stores"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stores"}},[e._v("#")]),e._v(" Stores")]),e._v(" "),t("p",[e._v("The EasyWebhook package allows you to store webhooks and webhook results within the persisting layer of your choice.\nDifferent stores can be used for webhooks and webhook results.")]),e._v(" "),t("p",[e._v("You can implement your own stores, but the package comes with three store options out of the box: null store, array\nstore and Doctrine DBAL store.")]),e._v(" "),t("p",[e._v("To set the "),t("strong",[e._v("webhook store")]),e._v(", set the "),t("code",[e._v("EonX\\EasyWebhook\\Interfaces\\Stores\\StoreInterface")]),e._v(" service to be one of:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("EonX\\EasyWebhook\\Stores\\NullStore")]),e._v(": Webhooks are not stored. This is the default store option for webhooks.")]),e._v(" "),t("li",[t("code",[e._v("EonX\\EasyWebhook\\Stores\\ArrayStore")]),e._v(": Webhooks are stored in an array in memory. Note that the array store will not\npersist beyond the life of your application.")]),e._v(" "),t("li",[t("code",[e._v("EonX\\EasyWebhook\\Stores\\DoctrineDbalStore")]),e._v(": Webhooks are stored in a database accessed through Doctrine DBAL. Provide\na "),t("code",[e._v("Doctrine\\DBAL\\Connection")]),e._v(" connection and an optional table name (the default table name is "),t("code",[e._v("easy_webhooks")]),e._v(").")]),e._v(" "),t("li",[e._v("Your own webhook store implementation.")])]),e._v(" "),t("p",[e._v("To set the "),t("strong",[e._v("webhook results store")]),e._v(", set the "),t("code",[e._v("EonX\\EasyWebhook\\Interfaces\\Stores\\ResultStoreInterface")]),e._v(" service to be\none of:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("EonX\\EasyWebhook\\Stores\\NullResultStore")]),e._v(": Webhook results are not stored. This is the default store option for\nwebhook results.")]),e._v(" "),t("li",[t("code",[e._v("EonX\\EasyWebhook\\Stores\\ArrayResultStore")]),e._v(": Webhook results are stored in an array in memory. Note that the array\nstore will not persist beyond the life of your application.")]),e._v(" "),t("li",[t("code",[e._v("EonX\\EasyWebhook\\Stores\\DoctrineDbalResultStore")]),e._v(": Webhook results are stored in a database accessed through Doctrine\nDBAL. Provide a "),t("code",[e._v("Doctrine\\DBAL\\Connection")]),e._v(" connection and an optional table name (the default table name is\n"),t("code",[e._v("easy_webhook_results")]),e._v(").")]),e._v(" "),t("li",[e._v("Your own webhook results store implementation.")])]),e._v(" "),t("h2",{attrs:{id:"datacleaner"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#datacleaner"}},[e._v("#")]),e._v(" DataCleaner")]),e._v(" "),t("p",[e._v("In case the webhooks and/or webhook results contain sensitive data, it is possible to remove it before persisting them.\nTo do so, create your own implementation of "),t("code",[e._v("EonX\\EasyWebhook\\Interfaces\\Stores\\DataCleanerInterface")]),e._v(" and replace the\nexisting service into your service container.")]),e._v(" "),t("p",[e._v("This interface defines a single method "),t("code",[e._v("cleanUpData(array $data): array")]),e._v(", it will receive the formatted data that you\ncan modify as desired and return it.")]),e._v(" "),t("p",[e._v("::: info\nBecause the data given to "),t("code",[e._v("cleanUpData")]),e._v(" is formatted, any array will be represented as JSON string.\n:::")])])}),[],!1,null,null,null);o.default=r.exports}}]);