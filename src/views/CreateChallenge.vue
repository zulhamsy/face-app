<template>
  <!-- Navbar -->
  <the-navbar />
  <!-- Content -->
  <div class="container mx-auto px-4 pt-16">
    <h1 class="mb-6">
      Create New Challenge
    </h1>
    <!-- Form -->
    <ValidForm
      class="space-y-8 pb-5"
      :validation-schema="schema"
      @submit="addChallenge"
    >
      <!-- Desc Section -->
      <div>
        <base-input-label for="shortdesc">
          <p class="shortdesc">
            <span>Short Description</span>
            <span
              class="text-xs text-gray-300"
              :class="{'text-red-300': shortdesc.length > 20}"
            >{{ shortdesc.length }} / 20</span>
          </p>
        </base-input-label>
        <Field
          v-slot="{ field }"
          v-model="shortdesc"
          name="shortdesc"
          label="Short Description"
          :validate-on-model-update="false"
        >
          <base-input
            id="shortdesc"
            v-bind="field"
            class="w-full"
            autocomplete="off"
          />
        </Field>
        <ErrorMessage
          name="shortdesc"
          class="error"
        />
      </div>
      <div>
        <base-input-label for="longdesc">
          <span>Description</span>
          <span class="optional"> (optional)</span>
        </base-input-label>
        <Field
          v-slot="{ field }"
          name="description"
        >
          <base-input
            id="longdesc"
            v-bind="field"
            class="w-full"
            mode="textarea"
          />
        </Field>
      </div>
      <!-- Duration Section -->
      <div>
        <base-input-label>Duration Level</base-input-label>
        <div class="radio-wrapper duration">
          <div
            v-for="day in duration"
            :key="day"
          >
            <Field
              v-slot="{ field }"
              type="radio"
              name="days"
              :value="day"
            >
              <custom-radio
                :id="day + 'd'"
                v-bind="field"
                name="days"
                :value="day"
                class="flex flex-col items-center justify-center h-full"
              >
                <template #label>
                  <span class="font-semibold text-lg">{{ day }}</span>
                  <span class="opacity-80">Days</span>
                </template>
              </custom-radio>
            </Field>
          </div>
        </div>
        <ErrorMessage
          name="days"
          class="error"
        />
      </div>
      <!-- Goal Section -->
      <div>
        <base-input-label>Goal Category</base-input-label>
        <div class="radio-wrapper goals">
          <div
            v-for="goal in goals"
            :key="goal"
          >
            <Field
              v-slot="{ field }"
              type="radio"
              name="goals"
              :value="goal"
            >
              <custom-radio
                :id="goal"
                v-bind="field"
                name="goals"
                :color="goal"
                :value="goal"
                class="h-full w-full flex items-center justify-center capitalize font-medium text-md"
              >
                <template #label>
                  <span>{{ goal }}</span>
                </template>
              </custom-radio>
            </Field>
          </div>
          <!-- Coming Feature / Add New Category -->
          <div class="add-goal">
            +
          </div>
        </div>
        <ErrorMessage
          name="goals"
          class="error"
        />
      </div>
      <!-- Submit Button -->
      <base-button
        class="w-full"
      >
        Create Challange
      </base-button>
    </ValidForm>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CustomRadio from '../components/CustomRadio.vue'
export default {
  name: 'CreateChallange',
  components: {
    CustomRadio
  },
  data() {
    return {
      schema: {
        shortdesc: 'required|shortdesc:20',
        days: 'level',
        goals: 'goal'
      },
      duration: [3, 7, 14, 21, 30, 60],
      goals: ['healthy', 'religious', 'productive'],
      shortdesc: ''
    }
  },
  methods: {
    ...mapActions(['addChallenge'])
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

.optional {
  @apply italic text-xs text-gray-300;
}

.radio-wrapper {
  @apply grid gap-4;
}

.duration {
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  grid-auto-rows: minmax(50px, 80px);
}

.goals {
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: 90px;
}

.add-goal {
  @apply flex justify-center items-center;
  @apply text-3xl text-gray-200;
  @apply border-2 border-dashed border-gray-200;
}

.error {
  @apply inline-block px-2 py-1 rounded mt-2;
  @apply text-red-500 bg-red-50 text-sm;
}
</style>