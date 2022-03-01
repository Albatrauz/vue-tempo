import { createApp } from 'vue'
import App from './App.vue'
import { createPinia, defineStore } from 'pinia';

export const useStore = defineStore('main');

const pinia = createPinia()
const app = createApp(App);

app.use(pinia);

app.mount('#app')
