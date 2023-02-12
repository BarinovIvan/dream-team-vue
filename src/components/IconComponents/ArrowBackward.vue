<template>
  <svg @click="$emit('click')" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
    <circle cx="20" cy="20" r="19.5" fill="#fff" stroke="#E7717D" transform="rotate(-90 20 20)"/>
    <path stroke="#E7717D" stroke-linecap="round" d="m22 26 -6 -6 6 -6"/>
  </svg>
</template>

<script>
  export default {
    name: "ArrowBackwards"
  }
</script>

<style scoped>
  svg {
    cursor: pointer;
  }
</style>