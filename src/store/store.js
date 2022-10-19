import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", {
  state: () => {
    return {
      numberOfActiveTimers: 0,
    };
  },
});

export const useCurrentTimer = defineStore("currentTimer", {
  state: () => ({
    timers: [],
  }),
  actions: {
    addTimer(item) {  
      this.timers.push({ item });
    },
  },
});
