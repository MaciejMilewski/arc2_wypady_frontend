import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Home'
import { auth } from '@/firebase'
import GoogleSignUp from "@/GoogleSignUp";

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
        component: GoogleSignUp
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login' && auth.currentUser) {
        next('/')
        return;
    }

    if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
        next('/login')
        return;
    }

    next();
})

export default router