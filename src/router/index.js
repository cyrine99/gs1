import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue"
import About from "../views/About.vue";
import Help from "../views/Help.vue";
import Regist from "../views/Regist.vue";
import Login from "../views/dashboard/Login.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/blog",
        name: "Blog",
        component: Blog,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/help",
        name: "Help",
        component: Help,
    },
    {
        path: "/regist",
        name: "Regist",
        component: Regist,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;