<template>
  <div class="tour">
<!--    hover выключен на touch девайсах-->
    <LikeDefault
        @click="toggleFavourite()"
        :active="tour.favourite"
        :class="['tour__like', { 'isLiked': tour.favourite }]"
    />
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
import LikeDefault from "@/components/IconComponents/LikeDefault.vue";
export default {
  name: "TourCard",
  components: {
    LikeDefault
  },
  props: {
    tour: {
      type: Object,
      required: true
    }
  },
  methods: {
    getImgUrl(path) {
      return  require('@/assets/images/' + path)
    },
    toggleFavourite() {
      this.tour.favourite = !this.tour.favourite
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.tour {
  position: relative;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  cursor: pointer;
  transition: all 0.4s ease;
  &__image {
    width: 100%;
    margin-bottom: 24px;
    transition: all 0.4s ease;
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
  &__like {
    position: absolute;
    z-index: 10;
    top: 16px;
    right: 16px;
    opacity: 0;
    padding: 24px;
    transition: all 0.4s ease;

    @media (max-width: $breakpoint-lg) {
      padding: 0;
    }

    @media (max-width: $breakpoint-md) {
      opacity: 1;
    }
  }
  .isLiked {
    opacity: 1;
  }

  @media (hover: hover) {
    &:hover {
      .tour__image {
        transform: scale(1.155);
        transform-origin: bottom;
      }
    }
    &:hover .tour__like {
      opacity: 1;
      top: -32px;
      right: -8px;
    }
  }
}
</style>