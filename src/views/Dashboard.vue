<template>
  <!-- Navbar -->
  <the-navbar />
  <div class="container mx-auto px-4 pt-16">
    <!-- Search bar -->
    <form
      class="search-bar space-x-1 mb-9"
      @submit.prevent="search"
    >
      <base-input
        v-model="keyword"
        type="text"
        placeholder="Search Challenge..."
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
      <card-goal
        v-for="challenge in challenges"
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
    ...mapState(['challenges'])
  },
  methods: {
    search() {
      console.log(this.keyword)
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