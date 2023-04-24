<script setup>
import { ref } from "vue";
import useAuthUser from "@/composables/UseAuthUser";
import { useRouter } from "vue-router";

// Use necessary composables
const router = useRouter();
const { register } = useAuthUser();

// Form reactive ref to keep up with the form data
const form = ref({
  name: "",
  email: "",
  password: "",
});

// function to hand the form submit
const handleSubmit = async () => {
  try {
    // use the register method from the AuthUser composable
    // console.log(form.value.email);
    await register(form.value);

    // and redirect to a EmailConfirmation page the will instruct
    // the user to confirm they're email address
    await router.push({
      name: "EmailConfirmation",
      query: {email: form.value.email},
    });
  } catch (error) {
    console.log(error);
    // alert(error.message);
  }
};
</script>
<template>
  <div class="login-wrapper">
    <form @submit.prevent="handleSubmit">
      <h1 class="login-wrapper__title">Register</h1>
      <label>Name <input v-model="form.name" type="text" /></label>
      <label>Email <input v-model="form.email" type="email" /></label>
      <label>Password <input v-model="form.password" type="password" /></label>
      <div class="login-wrapper__action">
        <button class="login__button">Register</button>
      </div>
    </form>
  </div>
</template>
<style scoped lang="scss">
  .login-wrapper {
    @apply max-w-lg m-auto bg-tertiary rounded-2xl p-md;
  }

  .login-wrapper__title {
    @apply text-3xl font-bold text-text mb-def;
  }

  label {
    @apply text-text flex justify-between flex-col gap-y-xs;

    &:not(:last-of-type) {
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

  .login-wrapper__action {
    @apply flex justify-end items-center gap-sm;
  }

  .login__button {
    @apply bg-green rounded px-mob py-xs transition-all duration-300 text-lg;
    @apply hover:bg-base hover:text-green;
  }
</style>