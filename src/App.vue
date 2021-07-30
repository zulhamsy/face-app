<template>
  <div class="main-container">
    <the-navbar />
    <dashboard />
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'
import Dashboard from './views/Dashboard.vue'
export default {
  components: {
    Dashboard,
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
