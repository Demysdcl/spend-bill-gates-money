<script>
export default {
  data: () => ({ key: 'value' }),
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    total() {
      const total = this.product.price * this.product.qty

      const format = (max, unit) =>
        (total / max).toFixed(1).replace('.0', '') + unit

      if (total > 999_999_999) {
        return format(1_000_000_000, 'b')
      } else if (total > 999_999) {
        return format(1_000_000, 'm')
      } else if (total > 999) {
        return format(1_000, 'k')
      }
      return total
    },
  },
}
</script>

<template>
  <div class="receipt-item">
    <div class="receipt-item__name">{{ product.name }}</div>
    <div class="receipt-item__qty">x{{ product.qty }}</div>
    <div class="receipt-item__total">${{ total }}</div>
  </div>
</template>

<style scoped lang="scss">
.receipt-item {
  display: flex;

  font-size: $font-18;

  &__name {
    width: 170px;
  }

  &__qty {
    width: 45px;
  }

  &__total {
    width: 75px;
    text-align: right;
    color: $color-green;
    font-weight: bold;
  }
}
</style>
