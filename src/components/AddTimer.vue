<script setup>
import { useMainStore }  from '../store/store.js';

// get the store 
const mainStore = useMainStore();

const props = defineProps({

})
let countState = 0;

function test() {
    console.log('lol')
}


</script>

<template>

    <div class="active-timers__wrapper">
        <div class="active-timers__inner" v-for="item in mainStore.numberOfActiveTimers" :key="item">
            <div class="active-timer">
                <div class="active-timer--play"></div>
                <div class="active-timer__time">
                    00h 00m 26s
                </div>
            </div>
        </div>
        <div class="start-timer-block" @click="mainStore.numberOfActiveTimers++">
            +
        </div>
    </div>


</template>

<style scoped lang="scss">
    .active-timers__wrapper {
        position: fixed;
        display: flex;
        justify-content: flex-end;
        background: blue;
        width: 100%;
        left: 0;
        bottom: 0;
    }

    .active-timer__time {
        color: white;
        padding: 0 6px;
        display: flex;
        align-items: center;
        height: 100%;
    }
    .start-timer-block {
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
        background-color: red;
        color: white;

        &:hover {
            background-color: blue; 
            cursor: pointer;
        }
    }
</style>

