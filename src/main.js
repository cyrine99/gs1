import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



import "./style/style.css"

import "./Filters/Filter.js"

Vue.config.productionTip = false;

//مكتوب بال  ES 6
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");

//نفس الشي كأنه الفوقي
/*new Vue({
    el: '#app',
    router,
    store,
    render: function(createElement) {
        return createElement(App);
    },
})*/