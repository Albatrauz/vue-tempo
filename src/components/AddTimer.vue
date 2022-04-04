<script setup>
import ActiveTimer from './ActiveTimer.vue';
import { useMainStore } from '../store/store.js';

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
    <div class="start-timer-block" @click="mainStore.numberOfActiveTimers++">
      +
    </div>
  </div>
</template>

<style scoped lang="scss">
.active-timers__wrapper {
  position: fixed;
  display: flex;
  justify-content: flex-end;
  background: blue;
  width: 100%;
  left: 0;
  bottom: 0;
}
.start-timer-block {
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  background-color: red;
  color: white;

  &:hover {
    background-color: blue;
    cursor: pointer;
  }
}
</style>
