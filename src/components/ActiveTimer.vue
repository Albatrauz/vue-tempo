<script setup>
import { onMounted, reactive } from "vue";
import displayTime from "../utils/displayTime.js";

const stopwatch = reactive({
  currentTime: "",
  elapsedTime: 0,
  startTime: 0,
  intervalId: "",
  isRunning: false,
  isActive: false,
  details: {},
});

function startStopwatch() {
  //reset start time
  stopwatch.startTime = Date.now();
  //run `setInterval()` and save id
  stopwatch.intervalId = setInterval(() => {
    //calculate elapsed time
    const elapsedTime = Date.now() - stopwatch.startTime + stopwatch.elapsedTime;
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
};

const resumeCurrentTimer = () => {
  startStopwatch();
  stopwatch.isRunning = true;
};

const toggleInfo = () => {
  console.log("dit is de info window");
};
</script>

<template>
  <div
    v-if="stopwatch.isActive"
    class="stopwatch-wrapper bg-lead px-3 ml-2 py-2 flex items-center rounded-full"
  >
    <div class="active-timer__time" @click="toggleInfo">{{ stopwatch.currentTime }}</div>
    <div class="control-buttons-wrapper">
      <button
        id="pause-button"
        class="rounded-full bg-secondary px-6 py-2 font-medium ml-6 text-blank hover:bg-secondary/60"
        @click="pauseCurrentTimer"
        v-if="stopwatch.isRunning"
      >
        Pause
      </button>
      <button
        id="clear-button"
        class="rounded-full bg-secondary px-6 py-2 font-medium text-blank hover:bg-secondary/60"
        @click="resumeCurrentTimer"
        v-else
      >
        Resume
      </button>
      <button
        v-if="!stopwatch.isRunning"
        class="rounded-full bg-yellow px-3 py-2 text-blank hover:text-blank/60"
        @click="deleteCurrentTimer"
      >
        Send
      </button>
    </div>
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
</style>
