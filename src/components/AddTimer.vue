<script setup>
import ActiveTimer from "./ActiveTimer.vue";
import { useMainStore } from "../store/store.js";

// get the store
const mainStore = useMainStore();

const props = defineProps({});
</script>

<template>
  <div class="active-timers__wrapper">
    <div
      class="active-timers__inner"
      v-for="item in mainStore.numberOfActiveTimers"
      :key="item"
    >
      <ActiveTimer />
    </div>
    <div
      class="start-timer-block rounded-full text-4xl bg-tertiary hover:bg-tertiary/90 hover:cursor-pointer"
      @click="mainStore.numberOfActiveTimers++"
    >
      +
    </div>
  </div>
</template>

<style scoped lang="scss">
.active-timers__wrapper {
  position: fixed;
  display: flex;
  padding: 0 12px 12px 0;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  left: 0;
  bottom: 0;
}
.start-timer-block {
  font-family: "Outfit", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 55px;
  color: white;
  margin-left: 12px;
}
</style>
