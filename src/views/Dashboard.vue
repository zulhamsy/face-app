<template>
  <div class="container mx-auto px-4 pt-16">
    <form class="search-bar space-x-1">
      <!-- Search bar -->
      <base-input
        type="text"
        placeholder="Search Challange..."
        class="w-full"
      />
      <base-button
        type="submit"
        color="secondary"
        class="px-3"
      >
        <span class="material-icons"> search </span>
      </base-button>
    </form>
  </div>
</template>

<script>
import BaseInput from '../components/BaseInput.vue'
import BaseButton from '../components/BaseButton.vue'
export default {
  name: 'Dashboard',
  components: {
    BaseInput,
    BaseButton
  }
}
</script>

<style scoped>
.container {
  @apply max-w-sm;
}

.search-bar {
  @apply flex;
}
</style>