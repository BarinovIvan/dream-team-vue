<template>
  <button @click="$emit('click')">
    {{ title }}
  </button>
</template>

<script>
  export default {
    name: "CustomButton",
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";

  button {
    font-family: 'Ubuntu', sans-serif;
    padding: 21px 142px;
    height: fit-content;
    background: $blue-color;
    color: $white-color;
    font-size: 16px;
    line-height: 22px;
    cursor: pointer;

    &:hover {
      background: $blue-dark;
    }
    
    @media (max-width: $breakpoint-sm) {
      padding: 21px 71px;
    }
  }
</style>