import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { router } from './router';
import { store } from './store';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Menu from 'primevue/menu';

createApp(App)
.use(store)
.use(router)
.use(PrimeVue)
.use(ToastService)
.component('Menu', Menu)
.mount('#app')
