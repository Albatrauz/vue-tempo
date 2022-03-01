<script setup>

defineProps({

})

</script>

<template>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">Start timer</button>
  <button type="button" @click="count++">Pause timer</button>
  <button type="button" @click="count++">Start timer</button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>

