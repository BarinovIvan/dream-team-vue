<template>
  <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      type="text"
      placeholder="Placeholder"
      class="input"
  />
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .input {
    padding: 21px 24px;
    border: 1px #EAEAEA solid;
    line-height: 22px;
    font-size: 16px;
    outline: none;

    transition: all 0.2s ease;
  }

  .input:hover {
    border: 1px solid #659DBD;
    border-radius: 0;
  }
  .input:active {
    border: 1px solid #659DBD;
  }

  .success {
    border: 1px solid #A2E0B2;
  }
  .error {
    border: 1px solid #E7717D;
  }
</style>