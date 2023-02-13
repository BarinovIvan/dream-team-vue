<template>
  <div class="main">
    <img src="@/assets/images/MainBanner.png" class="main__image" alt="main banner image">
    <div class="container">
      <welcome-block class="main__welcome"/>
      <picture-carousel :item-list="imageList" class="main__carousel" />
      <other-tours />
    </div>
  </div>
</template>

<script>
  import WelcomeBlock from "@/components/WelcomeBlock.vue";
  import PictureCarousel from "@/components/ui/PictureCarousel.vue";
  import OtherTours from "@/components/OtherTours.vue";

  export default {
    name: 'App',
    components: {
      OtherTours,
      PictureCarousel,
      WelcomeBlock
    },
    data() {
      return {
        imageList: [
          {
            id: 1,
            imgName: 'Carousel1.png'
          },
          {
            id: 2,
            imgName: 'Carousel2.png'
          },
          {
            id: 3,
            imgName: 'Carousel3.png'
          },
          {
            id: 4,
            imgName: 'Carousel4.png'
          },
          {
            id: 5,
            imgName: 'Carousel1.png'
          },
          {
            id: 6,
            imgName: 'Carousel2.png'
          },
          {
            id: 7,
            imgName: 'Carousel3.png'
          },
          {
            id: 8,
            imgName: 'Carousel4.png'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";

  .main {
    overflow-x: hidden;

    .container > *, & > * {
      margin-bottom: 64px;

      @media (max-width: $breakpoint-md) {
        & > * {
          margin-bottom: 40px;
        }
      }
    }
    &__image {
      width: 100%;
      height: 480px;
      object-fit: cover;

      @media (max-width: $breakpoint-md) {
        height: 160px;
        margin-bottom: 40px;
      }
    }
  }
</style>
