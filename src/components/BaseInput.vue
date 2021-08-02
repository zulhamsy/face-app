<template>
  <input
    class="p-2 rounded"
    :color="color"
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
  }
}
</script>
<style scoped>
input[color='primary'] {
  @apply border border-gray-200 shadow-inner;
  @apply focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500;
}
</style>
