<script setup>
import AppHeaderVue from "@/components/AppHeader.vue";

// document.addEventListener('visibilitychange', function () {
//   document.title = document.hidden ? "I'm away" : "I'm here";
// });

</script>

<template>
  <AppHeaderVue />
  <div class="max-w-7xl p-10 m-auto">
    <router-view />
  </div>
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