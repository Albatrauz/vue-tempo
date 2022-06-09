<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import AddTimer from './components/AddTimer.vue';
import InfoWindowContainer from './components/InfoWindowContainer.vue';
</script>

<template>
  <div class="flex items-center h-screen">
    <InfoWindowContainer />
  </div>
  <AddTimer />
  <Timer />
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