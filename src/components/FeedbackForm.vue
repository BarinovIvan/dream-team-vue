<template>
  <div class="form">
    <h2>Feedback</h2>
    <div class="form__inputs inputs">
      <div class="inputs__item">
        <label for="name-input">Your name</label>
        <custom-input v-model="feedbackData.name" name="name-input"/>
      </div>
      <div class="inputs__item">
        <label for="email-input">Email address </label>
        <custom-input v-model="feedbackData.email" name="email-input"/>
      </div>
      <div class="inputs__item">
        <label for="phone-input">Your phone</label>
        <custom-input v-model="feedbackData.phone" name="phone-input"/>
      </div>
      <div class="inputs__item">
        <label for="phone-input">Choose a trip</label>
        <dropdown-select v-model="feedbackData.trip" name="trip-input"/>
      </div>
    </div>
    <feedback-chips @theme-selected="changeTheme($event)"/>
    <div class="form__item message">
      <label for="message-input">Describe your question</label>
      <custom-input v-model="feedbackData.message" name="message-input" type="textarea"/>
    </div>
    <div class="form__bottom">
      <div class="form__bottom-agreement">
        <custom-checkbox v-model="feedbackData.agreement" />
        <p>Даю согласие на обработку</p>
      </div>
      <custom-button title="Send" :disabled="!feedbackData.agreement"/>
    </div>
  </div>
</template>

<script>
  import CustomInput from "@/components/ui/CustomInput.vue";
  import DropdownSelect from "@/components/ui/DropdownSelect.vue";
  import CustomChip from "@/components/ui/CustomChip.vue";
  import FeedbackChips from "@/components/FeedbackChips";
  import CustomCheckbox from "@/components/ui/CustomCheckbox";
  import CustomButton from "@/components/ui/CustomButton";

  export default {
    name: "FeedbackForm",
    components: {
      CustomButton,
      CustomCheckbox,
      FeedbackChips,
      CustomChip,
      DropdownSelect,
      CustomInput
    },
    data() {
      return {
        feedbackData: {
          name: '',
          phone: '',
          email: '',
          trip: '',
          theme: '',
          message: '',
          agreement: false
        }
      }
    },
    methods: {
      changeTheme(theme) {
        this.feedbackData.theme = theme
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";

  .form {
    width: 80vw;
    display: flex;
    flex-direction: column;
    gap: 64px;

    label {
      font-size: 16px;
      line-height: 22px;
      color: $font-primary;
      opacity: 0.7;
    }

    &__inputs {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 24px;

      .inputs__item {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: calc(100% / 2 - 32px);

        @media (max-width: $breakpoint-md) {
          width: 100%;
        }
      }

      @media (max-width: $breakpoint-md) {
        width: 100%;
      }
    }

    .form__item {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: calc(100% / 2 - 32px);

      @media (max-width: $breakpoint-md) {
        width: 100%;
      }
    }

    .form__bottom {
      display: flex;
      justify-content: space-between;

      &-agreement {
        display: flex;
        gap: 16px;
        justify-content: center;
        align-items: center;
      }

      @media (max-width: $breakpoint-md) {
        flex-direction: column;
        gap: 20px;
      }
    }

    .message {
      width: 100%;

     textarea {
        min-height: 128px;
        resize: none;
      }
    }
  }
</style>
