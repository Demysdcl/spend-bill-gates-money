<script>
import { mapState } from 'vuex'
import { numberWithCommas } from '@/utils/formatter'
export default {
  computed: {
    ...mapState(['budget']),
  },

  methods: {
    format() {
      return numberWithCommas(this.budget)
    },
  },
}
</script>

<template>
  <div class="money-counter">
    <h1 class="money-counter__value">${{ format() }}</h1>
  </div>
</template>

<style scoped lang="scss">
.money-counter {
  padding: $gap-20;
  text-align: center;
  color: $color-white;
  background: linear-gradient(180deg, $color-green, $color-dark-green);

  &__value {
    font-weight: 700;
  }
}
</style>
