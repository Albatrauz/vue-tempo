<script setup>
import { onMounted, reactive } from 'vue';
import { useCurrentTimer } from '../store/store.js';

// const currentTimer = useCurrentTimer();

const stopwatch = reactive({
  currentTime: '',
  elapsedTime: 0,
  startTime: 0,
  intervalId: '',
  isActive: false,
});

onMounted(() => {
  startStopwatch();
  stopwatch.isActive = true;
  // currentTimer.isActive = true;
  // currentTimer.startTime = stopwatch.startTime;
});

const pauseCurrentTimer = () => {
  stopwatch.elapsedTime += Date.now() - stopwatch.startTime;
  // currentTimer.elapsedTime = stopwatch.elapsedTime;
  // currentTimer.currentTime = stopwatch.currentTime;
  clearInterval(stopwatch.intervalId);
  stopwatch.isActive = false;
};

const resetCurrentTimer = () => {
  stopwatch.elapsedTime = 0;
  stopwatch.startTime = Date.now();
  displayTime(0, 0, 0);
  stopwatch.isActive = false;
};

const resumeCurrentTimer = () => {
  stopwatch.elapsedTime += Date.now() - stopwatch.startTime;
  clearInterval(stopwatch.intervalId);
  stopwatch.isActive = true;
};

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
    displayTime(hour, minutes, seconds);
  }, 100);
}

function displayTime(hour, minutes, seconds) {
  const leadZeroTime = [hour, minutes, seconds].map((time) =>
    time < 10 ? `0${time}` : time
  );
  stopwatch.currentTime = leadZeroTime.join(':');
}
</script>

<template>
  <div class="active-timer">
    <div class="active-timer--play"></div>
  </div>

  <div class="stopwatch-wrapper">
    <div class="active-timer__time">{{ stopwatch.currentTime }}</div>
    <div class="control-buttons-wrapper">
      <font-awesome-icon icon="circle-pause" fixed-width color="FF0000" />
      <button
        id="pause-button"
        class="control-buttons"
        @click="stopwatch.isActive ? pauseCurrentTimer() : resumeCurrentTimer()"
      >
        Pause
      </button>
      <button
        id="clear-button"
        class="control-buttons"
        @click="resetCurrentTimer"
      >
        Clear
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

.control__buttons-wrapper {
  svg {
    fill: white;
  }
}
</style>
