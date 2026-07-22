<template>
  <div
    class="card"
    :class="[
      `elevation-${elevation}`,
      `size-${size}`,
      `variant-${variant}`,
      { 'has-border': border },
      { rounded: rounded },
      { 'hover-effect': hoverEffect },
      customClass
    ]"
    :style="cardStyles"
  >
    <!-- Card Header (optional) -->

    <div v-if="$slots.header || title" class="card-header">
      <slot name="header">
        <img :class="iconName" />

        <h3 v-if="title" class="card-title">{{ title }}</h3>
      </slot>
    </div>

    <!-- Image slot (optional) -->
    <div v-if="$slots.image" class="card-image">
      <slot name="image"></slot>
    </div>

    <!-- Card Content -->
    <div v-if="contents.length" class="card-content" :class="{ 'no-padding': noPadding }">
      <slot :contents="contents"></slot>
    </div>

    <!-- Card Footer (optional) -->
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    // Content data to be passed to the default slot
    contents: {
      type: [Object, Array],
      default: () => ({})
    },
    // Card title (used if no header slot is provided)
    title: {
      type: String,
      default: ''
    },
    // Icon name (used if no header slot is provided)
    iconName: {
      type: String,
      default: ''
    },
    // Visual style variant - can be 'primary', 'secondary', 'info', 'warning', 'danger', etc.
    variant: {
      type: String,
      default: 'default'
    },
    // Shadow depth - 0 to 5
    elevation: {
      type: [Number, String],
      default: 1,
      validator: (val) => parseInt(val) >= 0 && parseInt(val) <= 5
    },
    // Size - can be 'small', 'medium', 'large', or 'fluid'
    size: {
      type: String,
      default: 'medium'
    },
    // Whether to show border
    border: {
      type: Boolean,
      default: true
    },
    // Whether to have rounded corners
    rounded: {
      type: Boolean,
      default: true
    },
    // Whether to apply hover effects
    hoverEffect: {
      type: Boolean,
      default: false
    },
    // Whether to remove padding from content area
    noPadding: {
      type: Boolean,
      default: false
    },
    // Pass additional custom classes
    customClass: {
      type: String,
      default: ''
    },
    // Pass inline styles as an object
    customStyle: {
      type: Object,
      default: () => ({})
    },
    // Width of the card - can be percentage, px, rem, etc.
    width: {
      type: String,
      default: '100%'
    }
  },
  computed: {
    cardStyles() {
      return {
        ...this.customStyle,
        width: this.width
      }
    }
  }
}
</script>

<style scoped>
.card {
  width: 100%;
  /* Default width */
  box-sizing: border-box;
}
</style>
