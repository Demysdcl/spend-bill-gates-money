<script>
import { mapGetters } from 'vuex'
import ReceiptItem from './ReceiptItem.vue'
import { numberWithCommas } from '@/utils/formatter'

export default {
  components: { ReceiptItem },
  data: () => ({ key: 'value' }),
  computed: {
    ...mapGetters(['receiptProducts']),
  },
  methods: {
    totalReceipts() {
      return numberWithCommas(
        this.receiptProducts.reduce(
          (acc, product) => acc + product.price * product.qty,
          0,
        ),
      )
    },
  },
}
</script>

<template>
  <div class="your-receipt" v-if="receiptProducts.length">
    <h1 class="your-receipt__title">Your Receipt</h1>
    <receipt-item
      v-for="product in receiptProducts"
      :key="product.name"
      :product="product"
    />
    <div class="your-receipt__total">
      <span class="your-receipt__label">Total</span>
      <div class="your-receipt__money">${{ totalReceipts() }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.your-receipt {
  background-color: $color-white;
  margin-top: $gap-10;
  padding: $gap-15 $gap-15 $gap-30;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    padding: $gap-15 $gap-15 $gap-25;
  }

  &__total {
    display: flex;
    min-width: 290px;
    justify-content: space-between;
    font-size: $font-18;
    font-weight: bold;
    margin-top: $gap-10;
    padding-top: $gap-10;
    border-top: 1px solid $color-black;
  }

  &__label {
    text-transform: uppercase;
  }

  &__money {
    color: $color-green;
  }
}
</style>
