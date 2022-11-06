import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Home'
import store from "../store";
import Register from "../Register";
import Login from "../Login";
import RestaurantAdd from "../RestaurantAdd";
import Food from "../Food";
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
    },
    {
        path: '/addRestaurant',
        name: "Adding new Restaurant",
        component: RestaurantAdd
    },
    {
        path: '/addFood',
        name: "Adding new Food",
        component: Food
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.StateUser && to.path === "/" ) {
            next()
        }
        else if(!store.getters.StateUser && to.path === "/"){
            next('/login')
            return
        }
    } else {
        next()
    }
})

export default router