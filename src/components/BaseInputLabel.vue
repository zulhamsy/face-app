<template>
  <label class="input-label">
    <slot>Label for Input</slot>
  </label>
</template>

<style scoped>
.input-label {
  font-size: 14px;
  @apply text-gray-500;
  @apply mb-1 block;
}
</style>
