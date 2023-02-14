<template>
  <div class="wrapper">
    <input
        type="checkbox"
        class="custom-checkbox"
        id="custom-checkbox"
        name="custom-checkbox"
        @click="$emit('input', !value)"
        :checked="value"
    >
    <label for="custom-checkbox" />
  </div>
</template>

<script>
  export default {
    name: "CustomCheckbox",
    props: {
      value: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";

  .wrapper {
    margin-top: 8px;
  }

  .custom-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  .custom-checkbox + label {
    display: inline-flex;
    align-items: center;
  }

  .custom-checkbox+label::before {
    content: '';
    display: inline-block;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    cursor: pointer;

    transition: all 0.2s ease;
  }

  .custom-checkbox:checked+label:before {
    background: $blue-color;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    background-image: url("data:image/svg+xml,%3Csvg width='18' height='14' viewBox='0 0 18 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 6.33333L6.81818 13L17 1' stroke='white' stroke-linecap='round'/%3E%3C/svg%3E%0A");
  }
</style>
