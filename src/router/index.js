import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import cookie from 'js-cookie'
import test from '../views/test.vue'

import Home from "../views/Home.vue"

import Main from "../views/Main.vue"

import login from "../views/Login.vue"
import xiaofen from "../views/xiaofen.vue"

import ckz_show from "../views/chikazhe/show.vue";
import ckz_select from "../views/chikazhe/select.vue";
import ckz_update from "../views/chikazhe/update.vue"

import fanka_show from "../views/fanka/show.vue";
import fanka_select from "../views/fanka/select.vue";
import fanka_update from "../views/fanka/update.vue";

import history_show from "../views/history/show.vue"
import history_select from "../views/history/select.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Main,
        redirect: '/home',
        children: [
            {
                path: 'home',
                component: Home
            },
            {
                path: 'ckz_show',
                component: ckz_show
            },
            {
                path: 'ckz_select',
                component: ckz_select
            },
            {
                path: 'ckz_update',
                component: ckz_update
            },
            {
                path: 'fanka_show',
                component: fanka_show
            },
            {
                path: 'fanka_delete',
                component: fanka_select
            },
            {
                path: 'fanka_update',
                component: fanka_update
            },
            {
                path: 'history_show',
                component: history_show
            },
            {
                path: 'history_select',
                component: history_select
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/xiaofen',
        name: 'xiaofen',
        component: xiaofen
    },
    {
        path: '/test',
        name: 'test',
        component: test
    }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    const token = cookie.get('token')
    // console.log("token", token);
    if (!token && to.name !== 'login') {
        next({ name: 'login' })
    } else if (token && to.name === 'login') {
        next({ name: 'home' })
    } else {
        next()
    }
})

export default router
