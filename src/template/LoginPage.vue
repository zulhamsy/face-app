<template>
  <div class="container">
    <!-- Title -->
    <div class="big-title">
      <h1 class="mb-1">Face Challanges</h1>
      <h1>Be a <span class="text-orange-500 font-bold">Challanger</span></h1>
    </div>
    <!-- Login Form -->
    <form>
      <div class="email mb-5">
        <label for="email" class="input-label">Email</label>
        <input type="email" class="input" id="email" />
      </div>
      <div class="email mb-8">
        <label for="password" class="input-label">Password</label>
        <input type="password" class="input" id="password" />
      </div>
      <button type="submit" class="btn-primary">Login</button>
    </form>
  </div>
</template>

<style scoped>
.container {
  @apply min-h-screen;
  @apply flex flex-col justify-center;
  @apply text-gray-800;
}

.big-title {
  @apply text-3xl font-semibold;
  @apply mb-14;
}

.input-label {
  font-size: 12px;
  @apply text-gray-500;
  @apply mb-1 block;
}

.input {
  @apply border border-gray-400 shadow-inner;
  @apply rounded;
  @apply px-2 py-2 w-full;
  @apply focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500;
}

.btn-primary {
  @apply text-white bg-gray-700 font-semibold;
  @apply w-full py-2;
  @apply rounded;
}
</style>
