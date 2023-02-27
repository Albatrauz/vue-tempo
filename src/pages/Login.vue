<script setup>
import { ref } from "vue";
import useAuthUser from "@/composables/UseAuthUser";
import { useRouter } from "vue-router";

// Use necessary composables
const router = useRouter();
const { login, loginWithSocialProvider } = useAuthUser();

// keep up with form data
const form = ref({
  email: "",
  password: "",
});

// call the proper login method from the AuthUser composable
// on the submit of the form
const handleLogin = async (provider) => {
  try {
    provider
        ? await loginWithSocialProvider(provider)
        : await login(form.value);
    router.push({ name: "Dashboard" });
  } catch (error) {
    alert(error.message);
  }
};
</script>
<template>
  <div class="login-wrapper">
    <form @submit.prevent="handleLogin()">
      <h1 class="login-wrapper__title">Login</h1>
      <label>Email <input v-model="form.email" type="email" /></label>
      <label>Password <input v-model="form.password" type="password" /></label>
      <div class="login-wrapper__action">
        <router-link to="/forgotPassword" class="login-wrapper__forgot">Forgot Password?</router-link>
        <button class="login__button">Login</button>
      </div>
    </form>
<!--    <div class="login__button">-->
<!--      <a @click.prevent="handleLogin('github')">Github</a>-->
<!--    </div>-->
  </div>
</template>
<style scoped lang="postcss">
  .login-wrapper {
    @apply max-w-lg m-auto bg-tertiary rounded-2xl p-md;
  }

  .login-wrapper__title {
    @apply text-3xl font-bold text-text mb-def;
  }

  label {
    @apply block text-text flex justify-between flex-col gap-y-xs;

    &:first-of-type {
      @apply mb-def;
    }

    &:last-of-type {
      @apply mb-lg;
    }
  }
  input {
    @apply bg-base rounded p-4 outline-0;

    &:focus {
      @apply outline-0;
    }
  }

  .login__button {
    @apply bg-green rounded px-mob py-xs transition-all duration-300 text-lg;
    @apply hover:bg-base hover:text-green;
  }

  .login-wrapper__action {
    @apply flex justify-end items-center gap-sm;
    .login-wrapper__forgot {
      @apply text-sm;
    }
  }
</style>
