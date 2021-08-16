<template>
  <div class="main-container">
    <router-view />
  </div>
</template>

<script>
import { auth } from './firebase'
import { mapMutations } from 'vuex'
export default {
  created() {
    if (auth.currentUser) {
      this.toggleLogin()
    }
  },
  methods: { ...mapMutations(['toggleLogin']) }
}
</script>

<style>
.main-container {
  @apply w-full;
  @apply text-gray-800;
}
</style>
