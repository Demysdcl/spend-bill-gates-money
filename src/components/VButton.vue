<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: (value) =>
        ['primary', 'secondary', 'disabled'].includes(value),
    },
  },
  computed: {
    isDisabled() {
      return this.type === 'disabled'
    },
  },
}
</script>

<template>
  <button
    :disabled="isDisabled"
    :class="`v-button v-button--${type}`"
    type="button"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.v-button {
  width: 5.7637rem;
  padding: $gap-10 $gap-12;
  color: $color-white;
  border-radius: 3px;
  font-weight: 700;
  font-size: $font-16;
  border: none;
  cursor: pointer;

  &--primary {
    background: linear-gradient(180deg, $color-green, $color-dark-green);
  }

  &--secondary {
    background: linear-gradient(180deg, $color-dark-red, $color-red);
  }

  &--disabled {
    cursor: normal;
    background-color: $color-light-gray;
    color: $color-black;
  }
}
</style>
