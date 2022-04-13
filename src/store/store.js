import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", {
  state: () => {
    return {
      numberOfActiveTimers: 0,
    };
  },
});

export const useCurrentTimer = defineStore("CurrentTimer", {
  state: () => {
    return {
      currentTime: "",
      elapsedTime: 0,
      isActive: false,
      startTime: 0,
      intervalId: "",
    };
  },
});
