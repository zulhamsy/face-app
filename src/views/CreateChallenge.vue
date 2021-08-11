<template>
  <!-- Navbar -->
  <the-navbar />
  <!-- Content -->
  <div class="container mx-auto px-4 pt-16">
    <h1 class="mb-6">
      Create New Challenge
    </h1>
    <!-- Form -->
    <form class="space-y-8 pb-5">
      <!-- Desc Section -->
      <div>
        <base-input-label for="shortdesc">
          <p class="shortdesc">
            <span>Short Description</span>
            <span class="counter">0 / 20</span>
          </p>
        </base-input-label>
        <base-input
          id="shortdesc"
          class="w-full"
        />
      </div>
      <div>
        <base-input-label for="longdesc">
          <span>Description</span>
          <span class="optional"> (optional)</span>
        </base-input-label>
        <base-input
          id="longdesc"
          class="w-full"
          mode="textarea"
        />
      </div>
      <!-- Duration Section -->
      <div>
        <base-input-label>Duration Level</base-input-label>
        <div class="radio-wrapper goals">
          <custom-radio
            v-for="day in duration"
            :id="day + 'd'"
            :key="day"
            name="days"
            class="flex flex-col items-center justify-center"
          >
            <template #label>
              <span class="font-semibold text-lg">{{ day }}</span>
              <span class="opacity-80">Days</span>
            </template>
          </custom-radio>
        </div>
      </div>
      <!-- Goal Section -->
      <!-- Submit Button -->
    </form>
  </div>
</template>

<script>
import CustomRadio from '../components/CustomRadio.vue'
export default {
  name: 'CreateChallange',
  components: {
    CustomRadio
  },
  data() {
    return {
      duration: [3, 7, 14, 21, 30, 60]
    }
  }
}
</script>

<style scoped>
.container {
  @apply max-w-sm;
}

h1 {
  @apply font-semibold;
}

.shortdesc {
  @apply flex justify-between items-center;
}

.shortdesc .counter,
.optional {
  @apply text-xs text-gray-300;
}

.optional {
  @apply italic;
}

.radio-wrapper {
  @apply grid gap-4;
}

.goals {
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  grid-auto-rows: minmax(50px, 80px);
}
</style>