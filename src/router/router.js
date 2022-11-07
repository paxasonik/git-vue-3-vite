import {createRouter, createWebHistory} from "vue-router";
import Main from "../pages/Main.vue";
import PostsList from "../pages/PostsList.vue";

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/posts',
        name: 'PostsList',
        component: PostsList
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;
