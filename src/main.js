import { createApp } from 'vue';
import App from './App.vue';
import { createPinia, defineStore } from 'pinia';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fas);

export const useStore = defineStore('main');

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
