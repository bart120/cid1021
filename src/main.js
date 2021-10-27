import { createApp } from 'vue'
import App from './App.vue'
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import { createRouter, createWebHistory } from 'vue-router';
import routes from './config/routes'
import PrimeVue from "primevue/config";
import userStore from './stores/userStore';
import { createStore } from 'vuex';

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

const store = createStore(userStore);

createApp(App)
    .use(router)
    .use(store)
    .use(PrimeVue)
    .mount('#app')
