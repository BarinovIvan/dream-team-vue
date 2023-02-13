<template>
  <transition name="fade" appear>
    <div
        :class="['modal-wrapper', { 'open': value }]"
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
  components: {CloseIcon},
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
    display: none;
    background: rgba(35, 35, 35, 0.78);

    .modal {
      position: relative;
      padding: 64px 40px;
      margin: 0 auto;
      background: $white-color;

      &__close {
        position: absolute;
        top: 10px;
        right: 10px;
        background: transparent;
      }
    }
  }

  .open {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>