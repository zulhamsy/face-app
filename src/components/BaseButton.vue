<template>
  <!-- Variant:
-> Primary
-> Gray
-> Outlined
-> Text

State:
-> Base
-> Loading State with animation -->
  <button
    class="rounded py-3 flex items-center justify-center"
    :color="color"
  >
    <slot
      v-if="loadIcon"
      name="load-icon"
    >
      <span class="material-icons mr-2 animate-spin">autorenew</span>
    </slot>
    <slot>Custom Button</slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    loadIcon: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
button[color='primary'] {
  @apply bg-gradient-to-r from-orange-500 to-yellow-400;
  @apply text-white font-semibold;
  @apply focus:from-yellow-400 focus:to-orange-500 focus:ring-4 focus:ring-inset focus:ring-yellow-200;
  @apply disabled:from-gray-200 disabled:to-gray-200 disabled:text-gray-400;
}

button[color='secondary'] {
  @apply text-orange-700 bg-orange-200;
  @apply focus:ring-2 focus:ring-orange-300;
}

button[color='gray'] {
  @apply bg-gray-200 text-gray-400 font-medium;
  @apply focus:ring-4 focus:ring-inset focus:ring-gray-100;
}

button[color='outlined'] {
  @apply font-medium text-gray-400;
  @apply border border-gray-300;
  @apply focus:bg-gray-300 focus:text-white;
}

button[color='text'] {
  @apply font-medium text-gray-300;
  @apply focus:border-b-2 focus:border-gray-300 focus:text-gray-400;
}
</style>
