<script setup>
import { storeToRefs } from "pinia";
import { useMainStore, useCurrentTimer } from "../store/store";
import InfoWindow from "./InfoWindow.vue";

const mainStore = useMainStore();
const timerCollection = useCurrentTimer();
const { timerList } = storeToRefs(timerCollection);
</script>

<template class="">
  <div
    class="container w-full bg-secondary-100 h-auto mx-auto grid grid-cols-3 rounded-3xl p-12 gap-6"
  >
    <div v-for="timer in timerCollection.timers" :key="id">
      <InfoWindow :timer="timer.item" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
