<template>
  <div class="tour">
    <img :src="getImgUrl(tour.imgName)" class="tour__image" alt="tour image">
    <h2 class="tour__title">
      {{ tour.title }}
    </h2>
    <p class="tour__caption">
      {{ tour.caption }}
    </p>
  </div>
</template>

<script>
  export default {
    name: "TourCard",
    props: {
      tour: {
        type: Object,
        required: true
      }
    },
    methods: {
      getImgUrl(path) {
        return  require('@/assets/images/' + path)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";

  .tour {
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: left;

    &__image {
      width: 100%;
      margin-bottom: 24px;
    }
    &__title {
      color: $font-primary;
      font-weight: 500;
      font-size: 32px;
      line-height: 38px;
      margin-bottom: 16px;

      @media (max-width: $breakpoint-md) {
        font-size: 20px;
        line-height: 28px;
      }
    }
    &__caption {
      color: $font-secondary;
      font-weight: 400;
      font-size: 16px;

      @media (max-width: $breakpoint-md) {
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
</style>
