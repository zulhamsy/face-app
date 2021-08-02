<template>
  <!-- Color tersedia: default, healthy, religious, productive -->
  <input
    :id="$attrs.id"
    type="radio"
    :name="$attrs.name"
    :color="color"
    v-bind="$attrs"
  >
  <label
    :for="$attrs.id"
    :class="[$attrs.class]"
  >
    <slot name="label">Radio Label</slot>
  </label>
</template>

<script>
export default {
  name: 'CustomRadio',
  props: {
    color: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'healthy', 'religious', 'productive'].includes(value)
      }
    }
  }
}
</script>

<style scoped>
input[type='radio'] {
  @apply hidden;
}

input[type='radio'] + label {
  @apply cursor-pointer;
  @apply rounded;
  @apply text-gray-400 text-sm;
  @apply border border-gray-200;
}

input[type='radio']:checked + label {
  @apply bg-gradient-to-r from-yellow-400 to-orange-500;
  @apply text-white border-0;
}

input[color='healthy']:checked + label {
  @apply bg-gradient-to-r from-blue-400 to-blue-500;
}

input[color='religious']:checked + label {
  @apply bg-gradient-to-r from-teal-400 to-teal-500;
}

input[color='productive']:checked + label {
  @apply bg-gradient-to-r from-orange-400 to-orange-600;
}
</style>