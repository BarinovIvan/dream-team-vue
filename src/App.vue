<template>
  <div class="main">
    <img src="@/assets/images/MainBanner.png" class="main__image" alt="main banner image">
    <div class="container">
      <welcome-block class="main__welcome"/>
      <picture-carousel :item-list="imageList" class="main__carousel" />
    </div>
  </div>
</template>

<script>
  import WelcomeBlock from "@/components/WelcomeBlock.vue";
  import PictureCarousel from "@/components/ui/PictureCarousel";

  export default {
    name: 'App',
    components: {
      PictureCarousel,
      WelcomeBlock
    },
    data() {
      return {
        imageList: [
          {
            imgName: 'Carousel1.png'
          },
          {
            imgName: 'Carousel2.png'
          },
          {
            imgName: 'Carousel3.png'
          },
          {
            imgName: 'Carousel4.png'
          },
          {
            imgName: 'Carousel1.png'
          },
          {
            imgName: 'Carousel2.png'
          },
          {
            imgName: 'Carousel3.png'
          },
          {
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
    &__image {
      width: 100%;
      height: 480px;
      object-fit: cover;
      margin-bottom: 64px;

      @media (max-width: $breakpoint-md) {
        height: 160px;
        margin-bottom: 40px;
      }
    }
    &__welcome {
      margin-bottom: 64px;
    }
    &__carousel {

    }
  }
</style>
