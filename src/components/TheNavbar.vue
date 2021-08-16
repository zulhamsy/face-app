<template>
  <nav class="px-4 z-50">
    <!-- Logo -->
    <h1 class="logo">
      FaCe
    </h1>
    <!-- Menu Links -->
    <ul class="menu-links space-x-4">
      <li>
        <router-link :to="{ name: 'dashboard' }">
          Dashboard
        </router-link>
      </li>
      <li @click.prevent="logoutUser">
        Sign Out
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'TheNavbar',
  methods: {
    ...mapActions(['logout']),
    logoutUser() {
      this.logout()
      if (this.$route.meta.requiresAuth) {
        this.$router.push({
          name: 'login'
        })
      }
    }
  }
}
</script>

<style scoped>
nav,
ul {
  @apply flex;
}

li {
  @apply cursor-pointer;
}

nav {
  @apply justify-between items-center w-full;
  @apply shadow-sm;
  @apply h-12;
  @apply fixed top-0 bg-white;
}

.logo {
  @apply font-semibold text-orange-500;
}

.menu-links {
  font-size: 12px;
  @apply text-gray-400 font-light;
}
</style>
