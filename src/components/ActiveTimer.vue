<script setup>
import { onMounted, reactive } from 'vue';
import displayTime from '../utils/displayTime.js';

const stopwatch = reactive({
  currentTime: '',
  elapsedTime: 0,
  startTime: 0,
  intervalId: '',
  isRunning: false,
  isActive: false
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

const deleteCurrentTimer = () => {
  stopwatch.isActive = false;
}

const resumeCurrentTimer = () => {
  startStopwatch();
  stopwatch.isRunning = true;
};
</script>

<template>
  <div class="active-timer">
    <div class="active-timer--play"></div>
  </div>

  <div v-if="stopwatch.isActive" class="stopwatch-wrapper bg-teal-900 px-6 py-2 flex items-center">
    <div class="active-timer__time">{{ stopwatch.currentTime }}</div>
    <div class="control-buttons-wrapper">
      <button
        id="pause-button"
        class="rounded-full bg-cyan-300 px-6 py-2 font-medium"
        @click="pauseCurrentTimer"
        v-if="stopwatch.isRunning"
      >
        Pause
      </button>
      <button
        id="clear-button"
        class="rounded-full bg-cyan-300 px-6 py-2 font-medium"
        @click="resumeCurrentTimer"
        v-else
      >
        Resume
      </button>
      <button v-if="!stopwatch.isRunning" class="rounded-full bg-rose-700 px-6 py-2 text-white" @click="deleteCurrentTimer">
        
        Delete
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.active-timer__time {
  color: white;
  padding: 0 6px;
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
