<template>
  <div class="main-container">
    <dashboard />
  </div>
</template>

<script>
import Dashboard from './views/Dashboard.vue'
export default {
  components: {
    Dashboard
  }
}
</script>

<style>
.main-container {
  @apply w-full;
  @apply text-gray-800;
}
</style>
