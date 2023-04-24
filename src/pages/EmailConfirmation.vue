<template>
  <div class="email-confirmation-wrapper">
    <h1 class="text-3xl">Thanks for registering!</h1>
    <p>
      Please confirm your email to finishing registering:
      <span>
        {{ $route.query.email }}
      </span>
    </p>
  </div>
</template>
<style lang="scss" scoped>
  .email-confirmation-wrapper {
    @apply max-w-lg m-auto bg-tertiary rounded-2xl p-md;

    h1 {
      @apply text-text font-semibold mb-3;
    }

    p {
      @apply text-base text-lg;

      span {
        @apply underline font-semibold;
      }
    }
  }
</style>
