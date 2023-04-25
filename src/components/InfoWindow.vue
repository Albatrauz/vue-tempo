<script setup>
const props = defineProps({
  timer: {
    item: Object,
  },
});
</script>
<template>
  <div class="bg-base px-6 py-4 rounded-lg flex justify-between" @click="onVisible">
    <div class="timer-details">      
      <p class="timer-details__title">{{ props.timer.title }}</p>
      <p class="timer-details__description">{{ props.timer.description }}</p>
    </div>
    <div class="timer">
      {{ props.timer.endTime }}
    </div>
  </div>
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
