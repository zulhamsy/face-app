<template>
  <div class="main-container">
    <login-page />
  </div>
</template>

<script>
import LoginPage from './template/LoginPage.vue'
export default {
  components: {
    LoginPage
  }
}
</script>

<style>
.main-container {
  @apply px-4;
}
</style>
