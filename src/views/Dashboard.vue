<template>
  <!-- Navbar -->
  <the-navbar />
  <div class="container mx-auto px-4 pt-16">
    <!-- Search bar -->
    <form class="search-bar space-x-1 mb-9">
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
    <!-- Card -->
    <div class="space-y-3 pb-16">
      <card-goal goal-type="religious" />
      <card-goal goal-type="religious" />
      <card-goal goal-type="religious" />
      <card-goal goal-type="religious" />
      <card-goal goal-type="religious" />
    </div>
    <!-- Create Button -->
    <base-button
      color="gray"
      class="fixed bottom-0 left-0 w-full"
    >
      Create Challenge
    </base-button>
  </div>
</template>

<script>
import CardGoal from '../components/CardGoal.vue'
export default {
  name: 'Dashboard',
  components: {
    CardGoal
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