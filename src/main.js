import { createApp } from 'vue'
import App from './App.vue'
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import { createRouter, createWebHistory } from 'vue-router';
import routes from './config/routes'


const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

createApp(App)
    .use(router)
    .mount('#app')
