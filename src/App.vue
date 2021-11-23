<script>
import MoneyCounter from './components/MoneyCounter.vue'
import ImageCard from './containers/ImageCard.vue'
import ShoppingItems from './containers/ShoppingItems.vue'
import VHeader from './containers/VHeader.vue'
export default {
  components: { VHeader, ImageCard, MoneyCounter, ShoppingItems },
}
</script>
<template>
  <main class="main" id="app">
    <v-header />
    <div class="main__container">
      <image-card />
      <money-counter />
      <shopping-items />
    </div>
  </main>
</template>

<style lang="scss">
.main {
  background-color: $color-light-gray;
  width: 100%;

  .v-header {
    margin-bottom: 1.56em;
  }

  &__container {
    width: 100%;
    max-width: $width-container;
    margin: 0 auto;

    .money-counter {
      margin: $gap-10 0;
      position: sticky;
      z-index: 9999;
    }
  }
}
</style>
