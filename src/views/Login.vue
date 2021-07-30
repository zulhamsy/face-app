<template>
  <div class="container space-y-8">
    <!-- Title Section -->
    <div>
      <!-- Title -->
      <h1 class="mb-2">Face Challenges</h1>
      <h1>
        Be a
        <span class="px-2 py-1">Challenger</span>
      </h1>
    </div>
    <!-- Form Section -->
    <form class="space-y-6">
      <!-- Email -->
      <div>
        <base-input-label for="email"> Email </base-input-label>
        <base-input id="email" class="w-full" type="email" />
      </div>
      <!-- Password -->
      <div>
        <base-input-label for="password"> Password </base-input-label>
        <base-input id="password" class="w-full" type="password" />
      </div>
      <!-- Submit Button -->
      <base-button type="submit" :load-icon="false" class="w-full">
        Login
      </base-button>
    </form>
  </div>
</template>

<script>
import BaseInputLabel from '../components/BaseInputLabel.vue'
import BaseInput from '../components/BaseInput.vue'
import BaseButton from '../components/BaseButton.vue'
export default {
  name: 'LoginPage',
  components: {
    BaseInputLabel,
    BaseInput,
    BaseButton
  }
}
</script>

<style scoped>
h1 {
  @apply text-3xl font-semibold;
}

h1 > span {
  @apply bg-orange-50 text-orange-500;
}

.container {
  @apply mx-auto px-4;
  @apply h-screen max-w-sm;
  @apply flex flex-col justify-center;
}
</style>
