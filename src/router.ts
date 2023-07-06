import { createRouter, createWebHistory } from 'vue-router';
import indexPage from './pages/indexPage.vue';

const routes = [
    { path: '/', component: indexPage },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})