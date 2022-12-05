<script setup>
import AddTimer from '../AddTimer.vue';
import InfoWindowContainer from '../InfoWindowContainer.vue';
</script>

<template>
  <div class="flex items-center h-screen">
    <InfoWindowContainer />
  </div>
  <AddTimer />
  <Timer />
</template>
