<script>
import { BASE_URL_IMG } from '@/utils/constants'
export default {
  computed: {
    imageURL() {
      return `${BASE_URL_IMG}/billgates.jpg`
    },
  },
}
</script>

<template>
  <div class="image-card">
    <img class="image-card__img" :src="imageURL" />
    <h1 class="image-card__title">Spend Bill Gates' Money</h1>
  </div>
</template>

<style scoped lang="scss">
.image-card {
  background-color: $color-white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;

  &__img {
    border-radius: 50%;
    width: 7.8rem;
    margin-top: $gap-10;
    margin-bottom: $gap-20;
  }

  &__title {
    text-align: center;
  }
}
</style>
