<script>
import { mapState } from 'vuex'
import { numberWithCommas } from '@/utils/formatter'
export default {
  data: () => ({ to: 0, from: 0 }),
  computed: {
    ...mapState(['budget']),
  },
  watch: {
    budget(newValue, oldValue) {
      this.from = oldValue
      this.to = newValue
    },
  },
  mounted() {
    this.from = this.budget
    this.to = this.budget
    this.pauseAnimation = false
  },
  methods: {
    format(number) {
      return numberWithCommas(Math.floor(number))
    },
  },
}
</script>

<template>
  <div class="money-counter">
    <h1 class="money-counter__value">
      $<number
        ref="number1"
        :from="from"
        :to="to"
        :format="format"
        :duration="5"
        easing="Power1.easeOut"
      />
    </h1>
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
