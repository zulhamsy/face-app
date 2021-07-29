<template>
  <!-- Variant:
-> Primary
-> Gray
-> Outlined
-> Text

State:
-> Base
-> Loading State with animation -->
  <button class="rounded py-3" :class="colorClass[color]">
    <slot>Custom Button</slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    color: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
      colorClass: {
        primary:
          'bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold focus:from-yellow-400 focus:to-orange-500 focus:ring-4 focus:ring-inset focus:ring-yellow-200',
        gray: 'bg-gray-200 text-gray-400 font-medium focus:ring-4 focus:ring-inset focus:ring-gray-100',
        outlined:
          'font-medium text-gray-400 border border-gray-300 focus:bg-gray-300 focus:text-white',
        text: 'font-medium text-gray-300 focus:border-b-2 focus:border-gray-300 focus:text-gray-400'
      }
    }
  }
}
</script>

<style></style>
