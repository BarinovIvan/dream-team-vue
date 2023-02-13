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
  </div>
</template>

<script>
  import CustomInput from "@/components/ui/CustomInput.vue";
  import DropdownSelect from "@/components/ui/DropdownSelect";

  export default {
    name: "FeedbackForm",
    components: {
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
        width: calc(100%/2 - 32px);
      }
    }

  }
</style>