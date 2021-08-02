<template>
  <div
    class="card w-full px-4 py-5"
    :class="colorClass[goalType]"
  >
    <!-- Goal Tag -->
    <p class="tag mb-12">
      <slot name="tag">
        {{ goalType }} goal
      </slot>
    </p>
    <!-- Goal Title -->
    <p class="title">
      <slot name="title">
        Goal Title #title
      </slot>
    </p>
    <!-- Remaining Day -->
    <p class="day">
      <slot name="day">
        Remaining Day #day
      </slot>
    </p>
    <!-- Image -->
    <img
      class="w-40"
      :src="imgSrc[goalType]"
      alt=""
    >
  </div>
</template>

<script>
import HealthyImg from '../assets/img/healthy.png'
import ReligiousImg from '../assets/img/religious.png'
import ProductiveImg from '../assets/img/productive.png'
export default {
  name: 'CardGoal',
  props: {
    goalType: {
      type: String,
      required: true,
      validator(value) {
        return ['healthy', 'religious', 'productive'].includes(value)
      }
    }
  },
  data() {
    return {
      colorClass: {
        healthy: 'from-blue-400 to-blue-700',
        religious: 'from-teal-400 to-teal-700',
        productive: 'from-orange-400 to-orange-700'
      },
      imgSrc: {
        healthy: HealthyImg,
        religious: ReligiousImg,
        productive: ProductiveImg
      }
    }
  }
}
</script>

<style scoped>
.card {
  @apply bg-gradient-to-l;
  @apply relative overflow-hidden;
  @apply rounded-md shadow-md;
  @apply text-gray-50;
}

.tag {
  font-size: 10px;
  @apply opacity-60;
  @apply capitalize;
}

.title {
  @apply font-medium;
  @apply mb-1;
}

.day {
  font-size: 12px;
  @apply opacity-70;
}

.card img {
  @apply absolute top-0 right-0;
  @apply filter grayscale opacity-30;
}
</style>