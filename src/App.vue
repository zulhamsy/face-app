<template>
  <div class="main-container">
    <login-page />
  </div>
</template>

<script>
import LoginPage from './template/SingleCard.vue'
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
