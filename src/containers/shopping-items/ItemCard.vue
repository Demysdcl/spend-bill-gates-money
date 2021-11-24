<script>
import { BASE_URL_IMG } from '@/utils/constants'
import { numberWithCommas } from '@/utils/formatter'
import VButton from '../../components/VButton.vue'
import { mapState } from 'vuex'
export default {
  components: { VButton },
  data: () => ({ previousQty: 0 }),
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(['budget', 'products']),
    formatedPrice() {
      return numberWithCommas(this.product.price)
    },
    imageUrl() {
      return `${BASE_URL_IMG}/images/${this.product.img}.jpg`
    },
    canBuy() {
      return (
        this.budget >= this.product.price &&
        (!this.product.limit || this.product.qty < this.product.limit)
      )
    },
    canSell() {
      return this.product.qty > 0
    },
  },
  methods: {
    reachedLimit(quantity) {
      return this.product.limit && quantity > this.product.limit
    },
    handleInput(quantity) {
      if (this.canBuy && quantity > this.previousQty) {
        const currentReceiptQty = quantity - this.previousQty
        const nextBudget = this.budget - currentReceiptQty * this.product.price
        this.product.qty =
          nextBudget >= 0
            ? quantity
            : quantity - Math.ceil((nextBudget * -1) / this.product.price)

        this.previousQty = this.product.qty
      } else if (!this.canBuy && quantity > this.previousQty) {
        this.product.qty = this.previousQty
      } else if (this.reachedLimit(quantity)) {
        this.product.qty = this.product.limit
        this.previousQty = this.product.limit
      } else {
        this.product.qty = quantity
        this.previousQty = quantity
      }
      this.$emit('updateProduct')
    },
    handleBuy() {
      this.handleInput(this.product.qty + 1)
    },
    handleSell() {
      this.handleInput(this.product.qty - 1)
    },
  },
}
</script>

<template>
  <div class="item-card">
    <div class="item-card__details">
      <img class="item-card__img" :src="imageUrl" :ref="product.name" />
      <h2 class="item-card__desc">{{ product.name }}</h2>
      <h2 class="item-card__price">${{ formatedPrice }}</h2>
    </div>
    <div class="item-card__actions">
      <v-button @click="handleSell" :type="canSell ? 'secondary' : 'disabled'">
        Sell
      </v-button>

      <input
        @input="(event) => handleInput(+event.target.value)"
        v-model="product.qty"
        class="item-card__input"
        type="number"
      />

      <v-button @click="handleBuy" :type="canBuy ? 'primary' : 'disabled'">
        Buy
      </v-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item-card {
  background-color: $color-white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: $gap-15 $gap-20;

  &__details {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__img {
    height: 120px;
    max-width: 100%;
    margin: $gap-15 0;
  }

  &__desc {
    font-size: $font-22;
  }

  &__price {
    font-size: $font-20;
    font-weight: normal;
    color: $color-medium-green;
  }

  &__actions {
    margin-top: $gap-20;
    display: flex;
    gap: 10px;
  }

  &__input {
    text-align: center;
    font-size: $font-16;
    width: 78.2px;
  }
}
</style>
