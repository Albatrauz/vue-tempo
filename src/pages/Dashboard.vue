<script setup>
  import AddTimer from '@/components/AddTimer.vue';
  import InfoWindowContainer from '@/components/InfoWindowContainer.vue';
  import ActiveTimer from '@/components/ActiveTimer.vue';
  import ReviewTimer from '@/components/ReviewTimer.vue';
  import InfoModal from '@/components/InfoModal.vue';
  import { useMainStore } from "../store/store.js";

  // get the store
  const mainStore = useMainStore();
</script>

<template>
  <div class="flex items-center h-screen">
    <InfoWindowContainer />
  </div>
    <!-- <InfoModal :timer="item"  v-if="item.isModalActive && item.isActive" /> -->
  <AddTimer />
    <div
        class="active-timers__inner"
        v-for="item in mainStore.numberOfActiveTimers"
        :key="item"
      >
        <ActiveTimer />
    </div>
</template>
