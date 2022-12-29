import { createApp } from 'vue';
import App from './App.vue';
import { createPinia, defineStore } from 'pinia';
import router from "./router";
import './index.css';

export const useStore = defineStore('main');

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');
