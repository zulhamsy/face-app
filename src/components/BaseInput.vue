<template>
  <input
    class="p-2 rounded"
    :class="colorClass[color]"
  >
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    color: {
      type: String,
      default: 'primary'
    }
  },
  data() {
    return {
      colorClass: {
        primary:
          'border border-gray-200 shadow-inner focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500'
      }
    }
  }
}
</script>
