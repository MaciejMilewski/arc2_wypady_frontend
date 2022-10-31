import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Home'
import store from "../store";
import Register from "../Register";
import Login from "../Login";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login' && store.getters.StateUser) {
        next('/')
        return;
    }

    if (to.matched.some(record => record.meta.requiresAuth) && !store.getters.StateUser) {
        next('/login')
        return;
    }

    next();
})

export default router