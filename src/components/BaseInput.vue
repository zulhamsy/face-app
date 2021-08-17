<template>
  <input
    v-if="mode === 'input'"
    :color="color"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
  <textarea
    v-else
    rows="3"
    :color="color"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
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
  },
  emits: ['update:modelValue']
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
