<template>
  <div class="welcome">
    <div class="welcome__title">
      <h1>Walking in Old Tallinn</h1>
      <custom-button @click="isModalOpen=true" title="Feedback"></custom-button>
    </div>
    <custom-dialog v-model="isModalOpen" >
      <feedback-form />
    </custom-dialog>
    <div class="welcome__text">
      <p>
        Welcome to Old Tallinn, the heart of the Estonian capital!
        The history of the settlement once began from here, and today it is one of the best preserved medieval cities in Europe.
      </p>
      <p>
        I will take you through the streets and doorways and show you where they traded, what they ate,
        what they sued about and what our Estonian ancestors aspired to.
      </p>
      <p>
        You will visit the oldest pharmacy, get acquainted with the royal privileges, see firsthand a real
        "gingerbread" house, look into an old tavern, walk along the widest and longest streets of the city
        and even find out that Tallinn is a lame city!
      </p>
      <p>
        And you will also find beautiful and interesting souvenirs, of course!
      </p>
    </div>
  </div>
</template>

<script>
  import CustomButton from "@/components/ui/CustomButton.vue";
  import CustomDialog from "@/components/ui/CustomDialog.vue";
  import FeedbackForm from "@/components/FeedbackForm.vue";

  export default {
    name: "WelcomeBlock",
    components: {
      FeedbackForm,
      CustomDialog,
      CustomButton
    },
    data() {
      return {
        isModalOpen: false
      }
    }

  }
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/variables.scss";

  .welcome {
    display: flex;
    flex-direction: column;

    &__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 50px;

      h1 {
        margin-right: 5px;
      }

      @media (max-width: $breakpoint-md) {
        flex-direction: column;
        align-items: normal;

        h1 {
          margin-bottom: 40px;
        }
      }
    }
    &__text {
      display: flex;
      flex-direction: column;
      width: 586px;
      gap: 24px;

      @media (max-width: $breakpoint-md) {
        width: 100%;
        gap: 16px;
      }
    }
  }
</style>