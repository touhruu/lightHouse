import './style.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import ColorPicker from 'primevue/colorpicker';
import Checkbox from 'primevue/checkbox';
import { createApp } from 'vue';
import { router } from './router';
import { store } from './store';

createApp(App)
.use(store)
.use(router)
.use(PrimeVue)
.component('Dialog', Dialog)
.component('ColorPicker', ColorPicker)
.component('Checkbox', Checkbox)
.mount('#app')
