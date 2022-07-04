<script setup>
const props = defineProps({
  timer: {
    item: Object,
  },
});
</script>
<template>
  <div class="bg-lead px-3 py-4 rounded-full text-center">
    <h1 class="text-xl font-bold text-blank">{{ props.timer.endTime }}</h1>
    <p>{{ props.timer.title }}</p>
    <p>{{ props.timer.description }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
