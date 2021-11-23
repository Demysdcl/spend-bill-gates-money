<script>
import ItemCard from './ItemCard.vue'
import { products } from '@/data'
export default {
  components: { ItemCard },
  data: () => ({
    products: products,
  }),
}
</script>

<template>
  <div class="shopping-items">
    <item-card
      v-for="product in products"
      :key="product.name"
      :product="product"
    />
  </div>
</template>

<style scoped lang="scss">
.shopping-items {
  background-color: $color-light-gray;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px 10px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 950px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
