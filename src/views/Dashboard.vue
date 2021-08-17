<template>
  <!-- Navbar -->
  <the-navbar />
  <div class="container mx-auto px-4 pt-16">
    <!-- Search bar -->
    <div
      class="search-bar space-x-1 mb-6"
    >
      <base-input
        v-model="keyword"
        type="text"
        placeholder="Search Challenge..."
        class="w-full"
      />
      <!-- <base-button
        type="submit"
        color="secondary"
        class="px-3"
      >
        <span class="material-icons"> search </span>
      </base-button> -->
    </div>
    <!-- Card -->
    <div class="space-y-3 pb-16">
      <card-goal
        v-for="challenge in filteredChallenges"
        :key="challenge.id"
        :goal-type="challenge.goalType"
      >
        <template #title>
          {{ challenge.title }}
        </template>
        <template #day>
          {{ challenge.endDate.getDate() - new Date().getDate() }} days remaining
        </template>
      </card-goal>
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
import { mapState } from 'vuex'
import CardGoal from '../components/CardGoal.vue'
export default {
  name: 'Dashboard',
  components: {
    CardGoal
  },
  data() {
    return {
      keyword: ''
    }
  },
  computed: {
    ...mapState(['challenges']),
    filteredChallenges() {
      const regex = new RegExp(this.keyword)
      if (!this.keyword) {
        return this.challenges
      } else {
        return this.challenges.filter((challenge) =>
          regex.test(challenge.title.toLowerCase())
        )
      }
    }
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