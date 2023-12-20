import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FriendView from '../views/FriendView.vue'
import GiftsView from '../views/GiftsView.vue'
import DesignationOfGifts from '../views/DesignationOfGifts.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/friend',
        name: 'friend',
        component: FriendView,
    },
    {
        path: '/gift',
        name: 'gift',
        component: GiftsView,
    },
    {
        path: '/designation',
        name: 'designation',
        component: DesignationOfGifts,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
