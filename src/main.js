import { createApp, onMounted, toRefs } from 'vue';
import App from './App.vue';
import { createPinia, defineStore } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import Auth from './components/Login/Auth.vue';
import Dashboard from './components/Dashboard/Dashboard.vue';
import Profile from './components/Profile/Profile.vue';
import './index.css';

export const useStore = defineStore('main');

const routes = [
  { path: '/login', component: Auth },
  { path: '/dashboard', component: Dashboard },
  { path: '/profile', component: Profile },
];

const pinia = createPinia();
const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(pinia);
app.use(router);

app.mount('#app');
