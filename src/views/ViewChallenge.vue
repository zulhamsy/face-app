<template>
  <!-- Navbar -->
  <the-navbar />
  <!-- Content -->
  <div
    v-if="Object.keys(challenge).length"
    class="container mx-auto px-4 pt-16"
  >
    <main
      class="space-y-8"
    >
      <!-- Short Desc -->
      <div>
        <base-input-label>Short Description</base-input-label>
        <p>{{ challenge.title }}</p>
      </div>
      <!-- Description -->
      <div>
        <base-input-label>Description</base-input-label>
        <p>{{ challenge.desc }}</p>
      </div>
      <!-- Starting Date -->
      <div>
        <base-input-label>Starting Date</base-input-label>
        <p>{{ dayName(challenge.startDate) }}</p>
      </div>
      <!-- Ending Date-->
      <div>
        <base-input-label>Ending Date</base-input-label>
        <p>{{ dayName(challenge.endDate) }}</p>
      </div>
      <!-- Failed Times -->
      <div>
        <base-input-label>Failed</base-input-label>
        <p>{{ challenge.failed.length ? challenge.failed.length : 0 }} times</p>
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
// import { challengesDB } from '../firebase'
export default {
  name: 'ViewChallenge',
  computed: {
    ...mapState(['challenge'])
  },
  created() {
    this.fetchSingleChallenge(this.$route.params.id)
    // this.fetchHistory(this.$route.params.id)
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
    ...mapActions(['fetchHistory', 'fetchSingleChallenge'])
  }
}
</script>

<style scoped>
.container {
  @apply max-w-sm;
}
</style>