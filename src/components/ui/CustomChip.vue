<template>
  <div
      @click="$emit('theme-selected', theme.title)"
      :class="['chip', { 'active': theme.selected }]"
  >
    {{ theme.title }}
  </div>
</template>

<script>
  export default {
    name: "CustomChip",
    props: {
      theme: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";

  .chip {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 21px 64px;
    border: 1px solid #EAEAEA;
    cursor: pointer;

    transition: all 0.2s ease;

    &:hover {
      border: 1px solid $blue-color;
    }

    @media (max-width: 378px) {
      justify-content: normal;
      font-size: 14px;
    }
  }

  .active {
    background: $blue-color;
    color: $white-color
  }
</style>
