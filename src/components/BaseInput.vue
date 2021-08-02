<template>
  <input
    v-if="mode === 'input'"
    :color="color"
  >
  <textarea
    v-else
    rows="3"
    :color="color"
  />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    mode: {
      type: String,
      default: 'input',
      validator(value) {
        return ['input', 'textarea'].includes(value)
      }
    }
  }
}
</script>
<style scoped>
input,
textarea {
  @apply p-2;
  @apply resize-none rounded;
}

input[color='primary'],
textarea[color='primary'] {
  @apply border border-gray-200 shadow-inner;
  @apply focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500;
}
</style>
