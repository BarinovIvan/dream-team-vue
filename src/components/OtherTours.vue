<template>
  <div class="tours">
    <h1 class="tours__title">Other tours</h1>
    <div class="tours__list">
      <tour-card
          v-for="tour in tours"
          :key="tour.id"
          :tour="tour"
          class="tours__list-item"
      />
    </div>
  </div>
</template>

<script>
  import TourCard from "@/components/TourCard.vue";

  export default {
    name: "OtherTours",
    components: {
      TourCard
    },
    data() {
      return {
        tours: [
          {
            id: 1,
            title: 'St. Isaac\'s Cathedral in St. Petersburg',
            caption: 'One of the highest domed structures in the world.',
            imgName: 'Tour1.png'
          },
          {
            id: 2,
            title: 'The Bridge of Peace, Tbilisi',
            caption: 'Arc-shaped pedestrian bridge made of glass and steel',
            imgName: 'Tour2.png'
          },
          {
            id: 3,
            title: 'El Caminito del Rey, Argentina',
            caption: 'Tango, Open-air Museum, Painting, Art and History',
            imgName: 'Tour3.png'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tours {
    &__title {
      margin-bottom: 64px;
    }
    &__list {
      display: flex;
      justify-content: space-between;

      &-item {
        width: calc(100% / 3 - 66px/2);
      }
    }
  }
</style>