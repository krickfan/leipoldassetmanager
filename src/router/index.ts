// src/router/index.js
import { createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import { UserHandler } from "../handler/UserHandler.mts";

import Login from '../views/Login.vue';
import Main from '../views/Main.vue';

import AssetCategory from "../components/topics/AssetCategory.vue";
import Placeholder from "../components/topics/Placeholder.vue";
import Overview from "../components/topics/Overview.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect: "/main",
        children : [
        {
            path : "main",
            name : "Main.Main",
            component : Overview
        },
        {
            path : "assetcategory",
            name : "Main.AssetCategory",
            component : AssetCategory
        },
        {
            path : "assetmenu2",
            name : "Main.AssetMenu2",
            component : Placeholder
        }
        ]
    },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, from, next) => { 
    if (!UserHandler.getCurrentUser() && to.path != "/login") {
      return next("/login");
    }

    next();
});

export default router;