<template>
  <div>
    <div class="carousel">
      <div class="carousel__inner" ref="inner" :style="innerStyles">
        <img
            v-for="(item, index) in cards"
            :key="index"
            :src="getImgUrl(item)"
            alt="Carousel image"
        />

      </div>
    </div>
    <div class="carousel__buttons">
      <button @click="prev()"> <- </button>
      <button @click="next()"> -> </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PictureCarousel",
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
      }
    },
    mounted() {
      setTimeout(this.setStep, 10)
      setTimeout(this.resetTranslate, 10)
    },
    methods: {
      setStep() {
        const innerWidth = this.$refs.inner.scrollWidth
        const itemAmount = this.itemList.length
        this.step = `${innerWidth / itemAmount}px`
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
      getImgUrl(pet) {
        return  require('@/assets/images/' + pet.imgName)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";

  .carousel {
    width: fit-content;
    overflow: hidden;

    &__inner {
      white-space: nowrap;
      display: flex;
      gap: 32px;

      transition: transform 0.4s;
    }
    &__buttons {
      button {
        padding: 20px;
        cursor: pointer;
      }
    }

    @media (max-width: $breakpoint-md) {
      &__image {
        width: 266px;
        height: 284px;
      }
    }
  }
</style>