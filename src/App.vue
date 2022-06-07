<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import AddTimer from './components/AddTimer.vue';
</script>

<template>
  <AddTimer />
  <Timer />
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
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