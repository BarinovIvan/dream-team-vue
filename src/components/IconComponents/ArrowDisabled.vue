<template>
  <svg @click="$emit(click)" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="15.5" stroke="#EAEAEA"/>
    <path d="M22 13L16 19L10 13" stroke="#EAEAEA" stroke-linecap="round"/>
  </svg>

</template>

<script>
export default {
  name: "ArrowDisabled"
}
</script>
