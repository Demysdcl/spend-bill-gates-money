<script>
import constants from '@/constants'
import VButton from '../components/VButton.vue'
export default {
  components: { VButton },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageUrl() {
      return `${constants.BASE_URL_IMG}/images/${this.product.img}.jpg`
    },
  },
}
</script>

<template>
  <div class="item-card">
    <div class="item-card__details">
      <img class="item-card__img" :src="imageUrl" :ref="product.name" />
      <h2 class="item-card__desc">{{ product.name }}</h2>
      <h2 class="item-card__price">${{ product.price }}</h2>
    </div>
    <div class="item-card__actions">
      <v-button type="secondary">Sell</v-button>
      <input v-model="product.qty" class="item-card__input" type="number" />
      <v-button>Buy</v-button>
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
