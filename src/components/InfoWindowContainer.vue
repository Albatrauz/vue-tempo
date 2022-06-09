<script setup>
import { useMainStore } from '../store/store';
import InfoWindow from './InfoWindow.vue';

const mainStore = useMainStore();

</script>

<template class="">
  <div class="container w-full bg-secondary-100 h-auto mx-auto grid grid-cols-3 rounded-full">
    <div 
      v-for="item in mainStore.numberOfActiveTimers">
        <InfoWindow />
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>