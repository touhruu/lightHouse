import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { router } from './router';
import { store } from './store';
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import ColorPicker from 'primevue/colorpicker';
import Checkbox from 'primevue/checkbox';

createApp(App)
.use(store)
.use(router)
.use(PrimeVue)
.component('Dialog', Dialog)
.component('ColorPicker', ColorPicker)
.component('Checkbox', Checkbox)
.mount('#app')
