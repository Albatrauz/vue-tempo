<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onMounted, ref } from 'vue';
import AddTimer from './components/AddTimer.vue';
import InfoWindowContainer from './components/InfoWindowContainer.vue';
import Auth from './components/Login/Auth.vue';
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
  <!-- <div class="flex items-center h-screen">
    <InfoWindowContainer />
  </div>
  <AddTimer />
  <Timer /> -->
  <Auth></Auth>
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
