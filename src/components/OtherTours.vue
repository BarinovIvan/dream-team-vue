<template>
  <div class="tours">
    <h1 class="tours__title">Other tours</h1>
    <div class="tours__list">
      <template v-if="!isMobile">
        <tour-card
            v-for="(tour, index) in tours"
            :key="index"
            :tour="tour"
            class="tours__list-item"
        />
      </template>
    </div>
    <template v-if="isMobile">
      <picture-carousel :item-list="tours"/>
    </template>
  </div>
</template>

<script>
  import TourCard from "@/components/TourCard.vue";
  import PictureCarousel from "@/components/ui/PictureCarousel.vue";

  export default {
    name: "OtherTours",
    components: {
      PictureCarousel,
      TourCard
    },
    data() {
      return {
        tours: [
          {
            id: 1,
            title: 'St. Isaac\'s Cathedral in St. Petersburg',
            caption: 'One of the highest domed structures in the world.',
            imgName: 'Tour1.png',
            favourite: false
          },
          {
            id: 2,
            title: 'The Bridge of Peace, Tbilisi',
            caption: 'Arc-shaped pedestrian bridge made of glass and steel',
            imgName: 'Tour2.png',
            favourite: false
          },
          {
            id: 3,
            title: 'El Caminito del Rey, Argentina',
            caption: 'Tango, Open-air Museum, Painting, Art and History',
            imgName: 'Tour3.png',
            favourite: false
          }
        ]
      }
    },
    computed: {
      isMobile() {
        return this.$breakpoints.md
      }
    },
    mounted() {
      this.$breakpoints.init()
    },
    watch: {
      isMobile() {
        if (this.isMobile) {
          this.doubleList()
        }
        if (!this.isMobile) {
          this.dissectList()
        }
      }
    },
    methods: {
      doubleList() {
        const tempArray = [...this.tours]
        this.tours = this.tours.concat(tempArray)

      },
      dissectList() {
        this.tours.splice(this.tours.length/2)
      }
    },
    beforeDestroy() {
      this.$breakpoints.remove()
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";

  .tours {
    &__title {
      margin-bottom: 64px;

      @media (max-width: $breakpoint-md) {
        margin-bottom: 40px;
      }
    }
    &__list {
      display: flex;
      justify-content: space-between;
      gap: 32px;

      &-item {
        width: calc(100% / 3 );

        @media (max-width: $breakpoint-lg) {
          padding: 0;
        }
      }
    }
  }
</style>
