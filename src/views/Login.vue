<template>
  <div class="container space-y-8 mx-auto px-4">
    <!-- Title Section -->
    <div>
      <!-- Title -->
      <h1 class="mb-2">
        Face Challenges
      </h1>
      <h1>
        Be a
        <span class="px-2 py-1">Challenger</span>
      </h1>
    </div>
    <!-- Form Section -->
    <ValidForm
      class="space-y-6"
      :validation-schema="schema"
      @submit="proceedLogin"
    >
      <!-- Email -->
      <div>
        <base-input-label for="email">
          Email
        </base-input-label>
        <Field
          v-slot="{ field }"
          name="email"
        >
          <base-input
            id="email"
            v-bind="field"
            class="w-full"
            type="email"
            autocomplete="off"
          />
        </Field>
        <ErrorMessage
          name="email"
          class="error"
        />
      </div>
      <!-- Password -->
      <div>
        <base-input-label for="password">
          Password
        </base-input-label>
        <Field
          v-slot="{ field }"
          name="password"
        >
          <base-input
            id="password"
            v-bind="field"
            class="w-full"
            type="password"
          />
        </Field>
        <ErrorMessage
          name="password"
          class="error"
        />
      </div>
      <!-- Submit Button -->
      <base-button
        type="submit"
        :load-icon="loadIcon"
        class="w-full"
      >
        Login
      </base-button>
    </ValidForm>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'LoginPage',
  data() {
    return {
      loadIcon: false,
      schema: {
        email: 'required|email',
        password: 'required'
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    async proceedLogin(payload) {
      try {
        this.loadIcon = true
        await this.login(payload)
        this.$router.push({
          name: 'dashboard'
        })
      } catch (error) {
        console.log(error.message)
      }
      this.loadIcon = false
    }
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
  @apply h-screen max-w-sm;
  @apply flex flex-col justify-center;
}

.error {
  @apply inline-block px-2 py-1 rounded mt-2;
  @apply text-red-500 bg-red-50 text-sm;
}
</style>
