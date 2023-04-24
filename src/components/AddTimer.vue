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
      class="start-timer-block rounded text-4xl bg-tertiary hover:bg-tertiary/40 hover:cursor-pointer"
      @click="mainStore.numberOfActiveTimers++"
    >
      <svg
        class="w-10 h-10"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
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
  @apply transition-all duration-300;
  font-family: "Outfit", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  color: white;
  margin-left: 12px;
}
</style>
