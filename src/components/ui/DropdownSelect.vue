<template>
  <div class="relative">
    <div class="select">
      <input
          :value="value"
          @click="toggleDropdown()"
          type="text"
          placeholder="Placeholder"
          class="input"
          readonly
      />
    </div>
    <transition name="slide" appear>
      <div v-if="isDropdownShown" class="dropdown">
        <p
            v-for="(item, index) in tripList"
            :key="index"
            @click="selectTrip(item)"
            class="dropdown__item"
        >
          {{ item }}
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "DropdownSelect",
    data() {
      return {
        isDropdownShown: false,
        tripList: [
          'Walking in Old Tallinn',
          'St. Isaac\'s Cathedral',
          'The Bridge of Peace',
          'El Caminito del Rey'
        ]
      }
    },
    props: {
      value: {
        type: String,
        default: 'Choose'
      }
    },
    methods: {
      toggleDropdown() {
        this.isDropdownShown = !this.isDropdownShown
      },
      selectTrip(item) {
        this.$emit('input', item)
        this.toggleDropdown()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";

  .select {
    .input {
      padding: 21px 24px;
      width: 100%;
      box-sizing: border-box;
      border: 1px #EAEAEA solid;
      line-height: 22px;
      font-size: 16px;
      outline: none;
      cursor: pointer;

      :hover {
        border: 1px solid #659DBD;
        border-radius: 0;
      }
      :active {
        border: 1px solid #659DBD;
      }
    }
  }

  .dropdown {
    position: absolute;
    z-index: 30;
    width: 100%;
    height: fit-content;
    overflow: hidden;
    top: 100%;
    left: 0;
    background: $white-color;
    box-shadow: 0px 0px 24px rgba(35, 35, 35, 0.05);

    &__item {
      padding: 13px 24px;
      line-height: 22px;
      font-size: 16px;
      cursor: pointer;

      transition: background-color 0.2s linear;

      &:hover {
        background: #EAEAEA;
      }
    }
  }

  .relative {
    position: relative;
  }

  .success {
    border: 1px solid #A2E0B2;
  }

  .slide-enter-active {
    animation: slideDown 0.2s linear;
  }
  .slide-leave-active {
    animation: slideDown 0.2s linear reverse;
  }
  @keyframes slideDown{
    0% {
      height: 0;
    }
    100% {
      height: 260px;
    }
  }
</style>
