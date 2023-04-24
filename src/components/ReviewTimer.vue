<script setup>
import { ref } from 'vue';
// const props = defineProps({
//   timer: Object,
// });
emits: [
    'toggle'
]

const isVisible = ref(false);

const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
}
</script>
<template>
<div class="rekt" v-show="isVisible">HALLO</div>
</template>