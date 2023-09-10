import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import ColorPicker from 'primevue/colorpicker';
import Checkbox from 'primevue/checkbox';
import { router } from './router';
import { store } from './store';
import App from './App.vue';
import './style.css';

createApp(App)
.use(store)
.use(router)
.use(PrimeVue)
.component('Dialog', Dialog)
.component('ColorPicker', ColorPicker)
.component('Checkbox', Checkbox)
.mount('#app')
