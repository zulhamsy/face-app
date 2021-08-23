<template>
  <!-- Navbar -->
  <the-navbar />
  <!-- Content -->
  <div class="container mx-auto px-4 pt-16">
    <main
      v-if="selectedChallenge"
      class="space-y-8"
    >
      <!-- Short Desc -->
      <div>
        <base-input-label>Short Description</base-input-label>
        <p>{{ selectedChallenge.title }}</p>
      </div>
      <!-- Description -->
      <div>
        <base-input-label>Description</base-input-label>
        <p>{{ selectedChallenge.desc }}</p>
      </div>
      <!-- Starting Date -->
      <div>
        <base-input-label>Starting Date</base-input-label>
        <p>{{ dayName(selectedChallenge.startDate) }}</p>
      </div>
      <!-- Ending Date-->
      <div>
        <base-input-label>Ending Date</base-input-label>
        <p>{{ dayName(selectedChallenge.endDate) }}</p>
      </div>
      <!-- Failed Times -->
      <div>
        <base-input-label>Failed</base-input-label>
        <p>{{ selectedChallenge.failed ? selectedChallenge.failed : 0 }} times</p>
      </div>
      <!-- CTA -->
      <div class="space-y-3">
        <base-button
          class="w-full"
          color="outlined"
        >
          Lost This Challenge
        </base-button>
        <base-button
          class="w-full"
          color="text"
        >
          Delete Challenge
        </base-button>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ViewChallenge',
  computed: {
    ...mapState(['challenges']),
    selectedChallenge() {
      if (this.challenges.length) {
        return this.challenges.filter(
          (challenge) => challenge.id == this.$route.params.id
        )[0]
      } else {
        return false
      }
    }
  },
  created() {
    if (this.challenges.length == 0) {
      this.fetchChallenge()
    }
  },
  methods: {
    dayName(date) {
      const day = [
        'Minggu',
        'Senin',
        'Selasa',
        'Rabu',
        'Kamis',
        'Jumat',
        'Sabtu'
      ]
      const month = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember'
      ]
      return `${day[date.getDay()]}, ${date.getDate()} ${
        month[date.getMonth()]
      } ${date.getFullYear()}`
    },
    ...mapActions(['fetchChallenge'])
  }
}
</script>

<style scoped>
.container {
  @apply max-w-sm;
}
</style>