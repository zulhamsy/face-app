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
      <!-- Search Bar -->
      <form>
        <input type="text" class="input" placeholder="Search Challange..." />
        <button type="submit" class="block">
          <span class="material-icons"> search </span>
        </button>
      </form>
      <!-- List of Cards -->
      <div class="cards">
        <div class="card healthy">
          <!-- Goal Tag -->
          <p class="tag">Healthy Goal</p>
          <!-- Goal Title -->
          <p class="title">Minum Air Putih</p>
          <!-- Remaining Day -->
          <p class="day">7 days remaining</p>
          <!-- image -->
          <img src="../assets/img/healthy.png" alt="" />
        </div>
        <div class="card religious">
          <!-- Goal Tag -->
          <p class="tag">Religious Goal</p>
          <!-- Goal Title -->
          <p class="title">Sholat Dhuha 2 Rakaat</p>
          <!-- Remaining Day -->
          <p class="day">7 days remaining</p>
          <!-- image -->
          <img src="../assets/img/religious.png" alt="" />
        </div>
        <div class="card productive">
          <!-- Goal Tag -->
          <p class="tag">Productivity Goal</p>
          <!-- Goal Title -->
          <p class="title">Reduce Screen Time</p>
          <!-- Remaining Day -->
          <p class="day">7 days remaining</p>
          <!-- image -->
          <img src="../assets/img/Computer.png" alt="" />
        </div>
      </div>
    </main>
    <!-- Create Button -->
    <button class="create">Create New Challange</button>
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

main {
  @apply mx-auto max-w-sm;
}

nav {
  @apply justify-between items-center w-full;
  /* @apply bg-gradient-to-l from-orange-400 to-yellow-200; */
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

/* Form */
form {
  @apply space-x-1 mb-9 mt-16;
}

.input {
  @apply border border-gray-200 w-full;
  @apply rounded;
  @apply px-2 py-2;
  @apply focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500;
  @apply placeholder-gray-200;
}

button[type='submit'] {
  @apply flex justify-center items-center px-3 text-orange-700 bg-orange-200 rounded;
}

/* Cards */
.healthy {
  @apply from-blue-400 to-blue-700;
}

.religious {
  @apply from-teal-400 to-teal-700;
}

.productive {
  @apply from-orange-400 to-orange-700;
}

.cards {
  @apply space-y-5 mb-20;
}

.card {
  @apply px-4 py-5 relative overflow-hidden;
  @apply w-full rounded-md shadow-md bg-gradient-to-l;
  @apply text-gray-50;
}

.card img {
  @apply w-40;
  @apply absolute top-0 right-0;
  @apply filter grayscale opacity-30;
}

.tag {
  font-size: 10px;
  @apply mb-12;
  @apply opacity-60;
}

.title {
  @apply font-medium;
  @apply mb-1;
}

.day {
  font-size: 12px;
  @apply opacity-70;
}

.create {
  @apply w-full py-3 fixed bottom-0;
  @apply bg-gray-200 text-gray-400 font-medium;
}
</style>
