import { createRouter, createWebHistory } from "vue-router"
import authRoutes from '../modules/auth/routes/route.js'

const router = createRouter({
    history: createWebHistory(),
    routes: [...authRoutes]
})

export default router