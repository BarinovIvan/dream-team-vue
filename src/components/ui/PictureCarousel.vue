<template>
  <div>
    <div class="carousel">
      <div class="carousel__inner" ref="inner" :style="innerStyles">
        <div
            v-for="(item, index) in cards"
            :key="index"
            class="carousel__inner-card card"
        >
          <img
              v-if="!item.title && !item.caption"
              :src="getImgUrl(item.imgName)"
              alt="Carousel image"
              class="card__image"
          />
          <template v-else>
            <tour-card :tour="item" class="card__item"/>
          </template>
        </div>
      </div>
    </div>
    <div class="buttons">
      <arrow-backwards @click="prev()"/>
      <arrow-forward @click="next()" />
    </div>
  </div>
</template>

<script>
  import ArrowBackwards from "@/components/IconComponents/ArrowBackward.vue";
  import ArrowForward from "@/components/IconComponents/ArrowForward.vue";
  import TourCard from "@/components/TourCard";

  export default {
    name: "PictureCarousel",
    components: {
      TourCard,
      ArrowForward,
      ArrowBackwards
    },
    data() {
      return {
        innerStyles: {},
        step: '',
        transitioning: false
      }
    },
    props: {
      itemList: {
        type: Array,
        required: true
      }
    },
    computed: {
      cards() {
        return this.itemList
      },
      isMobile() {
        return this.$breakpoints.md
      }
    },
    mounted() {
      setTimeout(this.setStep, 100)
      setTimeout(this.resetTranslate, 100)
      this.$breakpoints.init()
    },
    methods: {
      setStep() {
        const innerWidth = this.$refs.inner.scrollWidth
        const itemAmount = this.itemList.length
        const mobileFix = this.isMobile ? 0 : 13
        this.step = `${ innerWidth / itemAmount + mobileFix }px`
      },
      next() {
        if (this.transitioning) return
        this.transitioning = true

        this.moveLeft()

        this.afterTransition(() => {
          const card = this.cards.shift()
          this.cards.push(card)
          this.resetTranslate()
          this.transitioning = false
        })
      },
      prev() {
        if (this.transitioning) return
        this.transitioning = true

        this.moveRight()

        this.afterTransition(() => {
          const card = this.cards.pop()
          this.cards.unshift(card)
          this.resetTranslate()
          this.transitioning = false
        })
      },
      moveLeft() {
        this.innerStyles = {
          transform: `translateX(-${this.step})
                      translateX(-${this.step})`
        }
      },
      moveRight() {
        this.innerStyles = {
          transform: `translateX(-${this.step})
                      translateX(${this.step})`
        }
      },
      afterTransition(callback) {
        const listener = () => {
          callback()
          this.$refs.inner.removeEventListener('transitionend', listener)
        }
        this.$refs.inner.addEventListener('transitionend', listener)
      },
      resetTranslate() {
        this.innerStyles = {
          transition: 'none',
          transform: `translateX(-${this.step})`
        }
      },
      getImgUrl(path) {
        return  require('@/assets/images/' + path)
      },
      beforeDestroy() {
        this.$breakpoints.remove()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";

  .carousel {
    width: fit-content;
    overflow: hidden;
    margin-bottom: 32px;

    &__inner {
      white-space: nowrap;
      display: flex;
      gap: 32px;

      transition: transform 0.4s;

      &-card {
        .card__item {
          width: 266px;
          padding: 0;
        }
      }

      @media (max-width: $breakpoint-md) {
        .card__image {
          width: 266px;
          height: 284px;
        }
      }
      @media (max-width: $breakpoint-md) {
        white-space: normal;
      }
    }
  }
  .buttons {
    display: flex;
    justify-content: center;
    gap: 32px;
  }
</style>
