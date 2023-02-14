<template>
  <div class="themes__list">
    <custom-chip
        v-for="theme in themeList"
        :theme="theme"
        @theme-selected="selectTheme($event)"
        class="themes__list-item"
    />
  </div>
</template>

<script>
  import CustomChip from "@/components/ui/CustomChip.vue";

  export default {
    name: "FeedbackChips",
    components: {
      CustomChip
    },
    data() {
      return {
        themeList: [
          {
            title: 'Reviews and suggestions',
            selected: false
          },
          {
            title: 'Questions about content',
            selected: false
          },
          {
            title: 'Complaints',
            selected: false
          },
          {
            title: 'Other',
            selected: false
          }
        ]
      }
    },
    methods: {
      selectTheme(title) {
        this.themeList = this.themeList.map(item => ({
          ...item,
          selected: false
        }))
        this.themeList.find(item => item.title === title).selected = true
        this.$emit('theme-selected', title)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";

  .themes__list {
    display: flex;
    justify-content: space-between;
    gap: 5px;

    &-item {
      box-sizing: border-box;

      @media (max-width: $breakpoint-lg) {
        width: 100%;
      }

      @media (max-width: 378px) {
        width: auto;
        gap: 24px;
      }
    }

    @media (max-width: $breakpoint-lg) {
      flex-wrap: wrap;
    }
  }
</style>
