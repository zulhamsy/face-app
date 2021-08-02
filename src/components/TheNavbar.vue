<template>
  <nav class="px-4 z-50">
    <!-- Logo -->
    <h1 class="logo">
      FaCe
    </h1>
    <!-- Menu Links -->
    <ul class="menu-links space-x-4">
      <li class="active">
        Dashboard
      </li>
      <li>Sign Out</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>

<style scoped>
nav,
ul {
  @apply flex;
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

.active {
  @apply text-gray-700 font-semibold;
}
</style>
