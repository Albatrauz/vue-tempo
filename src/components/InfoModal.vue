<script setup>
import { useCurrentTimer } from '@/store/store';
import {ref, defineEmits, onMounted, onBeforeUnmount, watchEffect} from 'vue';

const isVisible = ref(false);
const toggle = () => {
  isVisible.value = !isVisible.value
}

const timerStore = useCurrentTimer();
const props = defineProps({
  timer: Object,
});

const emit = defineEmits(['visible', 'hidden'])

onMounted(() => {
  const unwatch = watchEffect(() => {
    if (isVisible.value) {
      emit('visible')
    } else {
      emit('hidden')
    }
  })

  onBeforeUnmount(() => {
    unwatch()
  })
})

const saveTimeEntry = (timer) => {
  timerStore.addTimer(timer);
  timer.isModalActive = false
  timer.isActive = false
};
</script>
<template>
  <div
    v-on:keypress.ctrl.enter="saveTimeEntry(props.timer)" v-if="isVisible"
    class="bg-black/60 fixed inset-0 flex justify-center items-center w-screen h-screen backdrop-blur-sm"
  >
    <div class="bg-tertiary rounded w-3/6 flex flex-col p-10">
      <input v-model="props.timer.title" class="mb-3 rounded-sm p-2 text-lg" type="text" />
      <textarea
        v-model="props.timer.description"
        class="w-full mb-4 p-2 rounded-sm text-lg"
        name=""
        id=""
        rows="5"
      ></textarea>
      <!-- {{ props.timer }} -->

      <button @click="saveTimeEntry(props.timer)" class="btn inline-block bg-green w-max px-3 py-2 rounded self-end hover:bg-base hover:text-green transition-all duration-300">
        Save entry
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
