<template>
  <div class="main-container">
    <the-navbar />
    <login-page />
  </div>
</template>

<script>
import LoginPage from './views/Login.vue'
import TheNavbar from './components/TheNavbar.vue'
export default {
  components: {
    LoginPage,
    TheNavbar
  }
}
</script>

<style>
.main-container {
  @apply w-full;
  @apply text-gray-800;
}
</style>
