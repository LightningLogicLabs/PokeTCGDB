import { createWebHistory, createRouter } from 'vue-router'

import SearchPage from './ui/pages/SearchPage.vue'
import NotFoundPage from './ui/pages/NotFoundPage.vue'
import CardDetailPage from './ui/pages/CardDetailPage.vue'

const routes = [
    { 
        path: '/', 
        name: "searchPage",
        component: SearchPage
    },
    {
        path: '/card/:id',
        name: "cardDetailPage",
        component: CardDetailPage,
        props: true
    },
    {
        path: "/:catchAll(.*)",
        name: "notFoundPage",
        component: NotFoundPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router