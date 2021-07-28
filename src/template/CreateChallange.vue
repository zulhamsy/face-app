<template>
  <div class="container">
    <!-- App Bar -->
    <nav>
      <!-- Logo -->
      <h1 class="logo">FaCe</h1>
      <!-- Menu Links -->
      <ul class="menu-links">
        <li>Dashboard</li>
        <li>Sign Out</li>
      </ul>
    </nav>
    <!-- Main -->
    <main>
      <!-- Title Content -->
      <h2>Create Own Challange</h2>
      <!-- Create Form -->
      <form class="space-y-8 pb-5">
        <!-- Desc Section -->
        <div>
          <label for="title" class="input-label">Short Description</label>
          <input id="title" type="text" class="input" />
        </div>
        <div>
          <label for="longdesc" class="input-label"
            >Description
            <span class="text-xs text-gray-400 italic">(optional)</span></label
          >
          <textarea id="longdesc" rows="3" type="text" class="input" />
        </div>
        <!-- Duration Section -->
        <div class="duration">
          <label class="input-label">Duration Level</label>
          <div class="duration-container wrapper">
            <!-- 3D -->
            <input id="3days" type="radio" name="duration" />
            <label for="3days">
              <p>3</p>
              <p>Days</p>
            </label>
            <!-- 6D -->
            <input id="7days" type="radio" name="duration" />
            <label for="7days">
              <p>7</p>
              <p>Days</p>
            </label>
            <!-- 14D -->
            <input id="14days" type="radio" name="duration" />
            <label for="14days">
              <p>14</p>
              <p>Days</p>
            </label>
            <!-- 21D -->
            <input id="21days" type="radio" name="duration" />
            <label for="21days">
              <p>21</p>
              <p>Days</p>
            </label>
            <!-- 30D -->
            <input id="30days" type="radio" name="duration" />
            <label for="30days">
              <p>30</p>
              <p>Days</p>
            </label>
            <!-- 60D -->
            <input id="60days" type="radio" name="duration" />
            <label for="60days">
              <p>60</p>
              <p>Days</p>
            </label>
          </div>
        </div>
        <!-- Goal Section -->
        <div class="goal">
          <label class="input-label">Goal Category</label>
          <div class="goal-container wrapper">
            <!-- Healthy -->
            <input id="healthy" type="radio" name="goal" />
            <label for="healthy">
              <p>Healthy</p>
            </label>
            <!-- Religious -->
            <input id="religious" type="radio" name="goal" />
            <label for="religious">
              <p>Religious</p>
            </label>
            <!-- Productive -->
            <input id="productive" type="radio" name="goal" />
            <label for="productive">
              <p>Productive</p>
            </label>
            <button class="add-goal">+</button>
          </div>
        </div>
        <!-- Submit Button -->
        <button type="submit" class="btn-primary">
          <span class="material-icons mr-2 animate-spin">autorenew</span>
          <p>Create Challange</p>
        </button>
      </form>
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
h2 {
  @apply font-semibold;
  @apply mb-6;
}

.input-label {
  font-size: 14px;
  @apply text-gray-500;
  @apply mb-1 block;
}

.input {
  @apply border border-gray-200 shadow-inner;
  @apply rounded resize-none;
  @apply px-2 py-2 w-full;
  @apply focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500;
}

/* Radio Wrapper */
.duration-container {
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  grid-auto-rows: minmax(80px, 100px);
}

.goal-container {
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: 90px;
}

input#healthy[type='radio']:checked + label {
  @apply bg-gradient-to-r from-blue-300 to-blue-500;
  @apply text-white border-0;
}

input#religious[type='radio']:checked + label {
  @apply bg-gradient-to-r from-teal-300 to-teal-500;
  @apply text-white border-0;
}

input#productive[type='radio']:checked + label {
  @apply bg-gradient-to-r from-yellow-300 to-orange-500;
  @apply text-white border-0;
}

.wrapper {
  @apply w-full;
  display: grid;
  gap: 1em;
}

input[type='radio']:checked + label {
  @apply bg-gradient-to-r from-yellow-400 to-orange-500;
  @apply text-white border-0;
}

input[type='radio'] + label {
  @apply cursor-pointer;
  @apply rounded;
  @apply flex flex-col items-center justify-center space-y-2;
  @apply text-gray-400 text-sm;
  @apply border border-gray-200;
}

input[type='radio'] + label p:first-child {
  @apply font-medium text-xl;
}

input[type='radio'] {
  @apply hidden;
}

.add-goal {
  @apply text-3xl text-gray-300;
  @apply border-2 border-dashed border-gray-200;
}

.btn-primary {
  @apply text-white bg-gradient-to-r from-orange-500 to-yellow-400 font-semibold;
  @apply w-full py-3 flex items-center justify-center;
  @apply rounded;
}
</style>
