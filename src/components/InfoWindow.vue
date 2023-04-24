<script setup>
import ReviewTimer from './ReviewTimer.vue';
import { defineEmits } from 'vue';
const props = defineProps({
  timer: {
    item: Object,
  },
});
const emits = defineEmits(['toggle'])

const toggleComponent = () => {
  emits.toggle;
}
</script>
<template>
  <div class="bg-base px-6 py-4 rounded-lg flex justify-between" @click="toggleComponent()">
    <div class="timer-details">      
      <p class="timer-details__title">{{ props.timer.title }}</p>
      <p class="timer-details__description">{{ props.timer.description }}</p>
    </div>
    <div class="timer">
      {{ props.timer.endTime }}
    </div>
  </div>
  <ReviewTimer :toggleVisibility="toggleVisibility" />
</template>

<style lang="scss" scoped>
  .timer {
    @apply text-xl font-bold text-text opacity-20;
  }

  .timer-details {
    .timer-details__title {
      @apply font-bold text-2xl text-springGreenHover mb-3;
    }

    .timer-details__description {
      @apply text-text;
    }
  }
</style>
