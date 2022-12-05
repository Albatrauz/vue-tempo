<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onMounted, ref } from 'vue';
import { supabase } from './utils/supabase';

// document.addEventListener('visibilitychange', function () {
//   document.title = document.hidden ? "I'm away" : "I'm here";
// });

const session = ref();

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session;
  });

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session;
  });
});
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/dashboard">Dashboard</router-link> |
    <router-link v-if="session" to="/profile">Profiel</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;800&display=swap');
  font-family: 'Outfit', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
