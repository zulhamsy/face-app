<template>
  <div class="container">
    <!-- App Bar -->
    <nav>
      <!-- Logo -->
      <h1 class="logo">
        FaCe
      </h1>
      <!-- Menu Links -->
      <ul class="menu-links">
        <li>Dashboard</li>
        <li>Sign Out</li>
      </ul>
    </nav>
    <!-- Main -->
    <main class="space-y-8">
      <!-- Short Desc -->
      <div>
        <p class="card-label">
          Short Description
        </p>
        <p class="prominent">
          Minum Air Putih
        </p>
      </div>
      <!-- Desc -->
      <div>
        <p class="card-label">
          Description
        </p>
        <p class="card-text">
          Challenge agar hanya meminum air putih, boleh selain itu hanya susu
          dan jus buah
        </p>
      </div>
      <!-- Starting Date -->
      <div>
        <p class="card-label">
          Starting Date
        </p>
        <p class="card-text">
          Sunday, 25 July 2021
        </p>
      </div>
      <!-- Ending Date -->
      <div>
        <p class="card-label">
          Ending Date
        </p>
        <p class="card-text">
          Sunday, 01 August 2021
        </p>
      </div>
      <!-- Failed Times -->
      <div>
        <p class="card-label">
          Failed
        </p>
        <p class="card-text">
          2 times
        </p>
      </div>
      <!-- CTA -->
      <div class="space-y-3">
        <button
          type="submit"
          class="btn-outline"
        >
          <p>Lost This Challenge</p>
        </button>
        <button
          type="submit"
          class="btn-text"
        >
          <p>Delete Challenge</p>
        </button>
      </div>
    </main>
  </div>
</template>

<style scoped>
nav,
ul {
  @apply flex;
}

nav,
main {
  @apply px-4;
}

main {
  @apply mx-auto max-w-sm mt-16;
}

nav {
  @apply justify-between items-center w-full;
  @apply shadow-sm;
  @apply h-12 mb-7;
  @apply fixed top-0 bg-white;
}

.logo {
  @apply font-semibold text-orange-500;
}

.menu-links {
  font-size: 12px;
  @apply space-x-4;
  @apply text-gray-400 font-light;
}

.active {
  @apply text-gray-700 font-semibold;
}

/* Main Content */
.card-label {
  @apply text-gray-400 text-sm;
  @apply mb-1;
}

.card-text {
  max-width: 30ch;
}

.prominent {
  @apply text-lg font-medium;
}

.btn-outline {
  @apply font-medium text-gray-400;
  @apply w-full py-3 flex items-center justify-center;
  @apply rounded;
  @apply border border-gray-300;
}

.btn-text {
  @apply font-medium text-gray-300;
  @apply w-full py-3 flex items-center justify-center;
  @apply rounded;
}
</style>
