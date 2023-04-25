<script setup>
import { onMounted, reactive, ref } from 'vue';
import displayTime from '../utils/displayTime.js';
import InfoModal from './InfoModal.vue';
import { useCurrentTimer } from '../store/store.js';
const timerStore = useCurrentTimer();
const isVisible = ref(false);

const stopwatch = reactive({
  currentTime: '',
  endTime: '',
  elapsedTime: 0,
  startTime: 0,
  intervalId: '',
  isRunning: false,
  isActive: false,
  isModalActive: false,
  title: '',
  description: '',
});

function startStopwatch() {
  //reset start time
  stopwatch.startTime = Date.now();
  //run `setInterval()` and save id
  stopwatch.intervalId = setInterval(() => {
    //calculate elapsed time
    const elapsedTime =
      Date.now() - stopwatch.startTime + stopwatch.elapsedTime;
    //calculate different time measurements based on elapsed time
    const seconds = parseInt((elapsedTime / 1000) % 60);
    const minutes = parseInt((elapsedTime / (1000 * 60)) % 60);
    const hour = parseInt((elapsedTime / (1000 * 60 * 60)) % 24);
    //display time
    displayTime(hour, minutes, seconds, stopwatch);
  }, 100);
}
const onVisible = () => {
  isVisible.value = !isVisible.value;
}

const onHidden = () => {
  isVisible.value = !isVisible.value;
}

onMounted(() => {
  startStopwatch();
  stopwatch.isRunning = true;
  stopwatch.isActive = true;
});

const pauseCurrentTimer = () => {
  stopwatch.elapsedTime += Date.now() - stopwatch.startTime;
  clearInterval(stopwatch.intervalId);
  stopwatch.isRunning = false;
};

const setCurrentTimerText = (timer) => {
  stopwatch.endTime = stopwatch.currentTime;
  stopwatch.isModalActive = true;
  timerStore.addTimer(timer);
};


const resumeCurrentTimer = () => {
  startStopwatch();
  stopwatch.isRunning = true;
};
</script>

<template>
  <InfoModal :timer="stopwatch" @visible="onVisible" @hidden="onHidden"/>
  <div
    v-if="stopwatch.isActive"
    class="stopwatch-wrapper bg-secondary px-3 ml-2 py-2 flex items-center rounded flex-row"
  >
    <div class="active-timer__time">{{ stopwatch.currentTime }}</div>
    <button
      id="pause-button"
      class="rounded-full pl-6 font-medium ml-6"
      @click="pauseCurrentTimer"
      v-if="stopwatch.isRunning"
    >
      <svg
        class="w-12 h-12 text-lead hover:fill-base fill-green"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <button
      id="clear-button"
      class="rounded-full bg-secondary px-6 py-2 font-medium text-base hover:text-green/60"
      @click="resumeCurrentTimer"
      v-else
    >
      Resume
    </button>
    <button
      v-if="!stopwatch.isRunning"
      class="rounded-full bg-yellow px-3 py-2 text-lead hover:text-blank/60"
      @click="setCurrentTimerText(stopwatch)"
    >
      <svg
        class="w-8 h-8 text-blank hover:fill-base fill-[#ffffff]"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
</template>

<style scoped lang="scss">
.active-timer__time {
  width: 85px;
  text-align: center;
  color: white;
  padding: 0 6px;
  display: flex;
  align-items: center;
  height: 100%;
}

button, svg {
  @apply transition-all duration-300;
}
</style>
