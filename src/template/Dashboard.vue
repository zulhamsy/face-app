<template>
  <div class="container">
    <!-- App Bar -->
    <nav>
      <!-- Logo -->
      <h1 class="logo">FaCe</h1>
      <!-- Menu Links -->
      <ul class="menu-links">
        <li class="active">Dashboard</li>
        <li>Sign Out</li>
      </ul>
    </nav>
    <!-- Main -->
    <main>
      <form>
        <!-- Search Bar -->
        <input type="text" class="input" placeholder="Search Challange..." />
        <button type="submit" class="block">
          <span class="material-icons"> search </span>
        </button>
      </form>
    </main>
  </div>
</template>

<style scoped>
nav,
ul,
form {
  @apply flex;
}

nav,
main {
  @apply px-4;
}

nav {
  @apply justify-between items-center bg-gradient-to-l from-orange-400 to-yellow-200;
  @apply h-12 mb-6;
}

.logo {
  @apply font-semibold text-orange-500;
}

.menu-links {
  font-size: 12px;
  @apply space-x-4;
  @apply text-gray-50 font-light;
}

.active {
  @apply text-white font-semibold;
}

/* Form */
form {
  @apply space-x-1;
}

.input {
  @apply border border-gray-200 w-full;
  @apply rounded;
  @apply px-2 py-2;
  @apply focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500;
  @apply placeholder-gray-200;
}

button {
  @apply flex justify-center items-center px-3 text-white bg-orange-400 rounded;
}
</style>
