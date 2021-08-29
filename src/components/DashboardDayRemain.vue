<template>
  <span v-if="displayRemainingDays > 0">{{ displayRemainingDays }} days remaining</span>
  <span v-else>You completed this challenge!</span>
</template>

<script>
export default {
  name: 'DayRemainding',
  props: {
    endDate: {
      type: Date,
      default: null
    }
  },
  computed: {
    displayRemainingDays() {
      return Math.round((this.endDate - new Date()) / (1000 * 3600 * 24) + 1)
    }
  }
}
</script>