<template>
  <transition name="fade" appear>
    <div
        v-if="value"
        class="modal-wrapper"
        @click.self="closeModal()"
    >
      <div class="modal">
        <close-icon @click="closeModal()" class="modal__close" />
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
import CloseIcon from "@/components/IconComponents/CloseIcon";
export default {
  name: "CustomDialog",
  components: {
    CloseIcon
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    closeModal() {
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";

  .modal-wrapper {
    position: fixed;
    z-index: 20;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(35, 35, 35, 0.78);
    opacity: 1;

    .modal {
      position: relative;
      padding: 64px 40px;
      margin: 0 auto;
      background: $white-color;
      max-height: calc(100vh - 210px);
      overflow-y: auto;
      overflow-x: hidden;

      &::-webkit-scrollbar
      {
        width: 4px;
      }

      &::-webkit-scrollbar-thumb
      {
        border-radius: 4px;
        background: #b4b4b4;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: #525252;
        cursor: pointer;
      }

      &__close {
        position: absolute;
        top: 10px;
        right: 10px;
        background: transparent;
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
