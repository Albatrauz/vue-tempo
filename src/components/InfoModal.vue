<script setup>
import { storeToRefs } from 'pinia';
import { useCurrentTimer } from '../store/store';
const timerCollection = useCurrentTimer();
const { timerList } = storeToRefs(timerCollection);
const timerStore = useCurrentTimer();
const props = defineProps({
  timer: {
    item: Object,
  },
});

const saveTimeEntry = (timer) => {
  timerStore.addTimer(timer);
  timer.isModalActive = false;
};
</script>
<template>
  <div
    v-on:keypress.ctrl.enter="saveTimeEntry(props.timer)"
    class="bg-black/60 fixed inset-0 flex justify-center items-center w-screen h-screen backdrop-blur-sm"
  >
    <div class="bg-tertiary rounded-full w-3/6 flex flex-col px-20 py-10">
      <input v-model="props.timer.title" class="mb-3" type="text" />
      <textarea
        v-model="props.timer.description"
        class="w-full"
        name=""
        id=""
        rows="5"
      ></textarea>
      {{ props.timer }}

      <div @click="saveTimeEntry(props.timer)" class="btn inline-block bg-lead">
        Save entry
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
