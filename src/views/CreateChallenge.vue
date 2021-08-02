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
      <!-- Goal Section -->
      <!-- Submit Button -->
    </form>
  </div>
</template>

<script>
import BaseInput from '../components/BaseInput.vue'
export default {
  components: { BaseInput }
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

textarea {
}

.optional {
  @apply italic;
}
</style>