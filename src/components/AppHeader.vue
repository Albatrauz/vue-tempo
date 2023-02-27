<script setup>
import useAuthUser from "@/composables/UseAuthUser";
const { isLoggedIn } = useAuthUser();
</script>
<template>
  <div class="flex bg-gray-500 text-white justify-between">
    <ul class="flex gap-5 p-5">
      <li v-if="isLoggedIn()"><router-link :to="{ name: 'Dashboard' }">Home</router-link></li>
      <li v-if="isLoggedIn()"><router-link :to="{ name: 'Profile' }">Profile</router-link></li>
    </ul>
    <ul v-if="isLoggedIn()" class="flex gap-5 bg-gray-700 p-5">
      <li><router-link :to="{ name: 'Logout' }">Logout</router-link></li>
    </ul>
    <ul v-else class="flex gap-5 bg-gray-700 p-5">
      <li><router-link :to="{ name: 'Login' }">Login</router-link></li>
      <li><router-link :to="{ name: 'Register' }">Register</router-link></li>
    </ul>
  </div>
</template>
<style scoped lang="postcss">
  .router-link-active {
    @apply text-springGreenHover;
  }
</style>