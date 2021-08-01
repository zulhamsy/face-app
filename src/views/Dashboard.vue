<template>
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
    <card-goal goal-type="religious" />
  </div>
</template>

<script>
import BaseInput from '../components/BaseInput.vue'
import BaseButton from '../components/BaseButton.vue'
import CardGoal from '../components/CardGoal.vue'
export default {
  name: 'Dashboard',
  components: {
    BaseInput,
    BaseButton,
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