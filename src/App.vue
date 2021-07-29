<template>
  <div class="main-container p-2">
    <login-page :load-icon="false" color="primary" class="w-2/3"
      >Submit</login-page
    >
  </div>
</template>

<script>
import LoginPage from './components/BaseButton.vue'
export default {
  components: {
    LoginPage
  }
}
</script>

<style>
.main-container {
  @apply w-full;
  @apply text-gray-700;
}
</style>
