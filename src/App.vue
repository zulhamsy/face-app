<template>
  <div class="main-container">
    <login-page />
  </div>
</template>

<script>
import LoginPage from './template/Dashboard.vue'
export default {
  components: {
    LoginPage
  }
}
</script>

<style>
.main-container {
  max-width: 360px;
  @apply text-gray-700;
}
</style>
