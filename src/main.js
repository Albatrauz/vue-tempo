import { createApp } from "vue";
import App from "./App.vue";
import { createPinia, defineStore } from "pinia";
import supabase from './utils/supabase';
import "./index.css";

console.log(import.meta.env.VITE_SUPABASE_URL);

export const useStore = defineStore("main");

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);

app.mount("#app");