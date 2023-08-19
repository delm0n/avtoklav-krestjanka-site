<template>
  <div>
    <opt-modal />
    <opt-hero />
    <!-- <header-top :navigations="nav" :refHeader="refHeader" /> -->
    <opt-models />
    <opt-partner />
    <opt-made />
  </div>
</template>

<script>
import MyFooter from "../components/Footer.vue";
import HeaderTop from "../components/HeaderTop.vue";
import OptHero from "../components/OptHero.vue";
import OptMade from "../components/OptMade.vue";
import OptModal from "../components/OptModal.vue";
import OptModels from "../components/OptModels-v2.vue";
import OptPartner from "../components/OptPartner.vue";

export default {
  data() {
    return {
      nav: [
        {
          name: "Преимущества",
          selector: "#opt-partner",
        },

        {
          name: "О производителе",
          selector: "#opt-made",
        },
      ],
      refHeader: "#opt-modal",
    };
  },

  components: {
    MyFooter,
    HeaderTop,
    OptModels,
    OptPartner,
    OptMade,
    OptModal,
    OptHero,
  },
};
</script>

<style lang="scss">
@import "../../scss/_fonts.scss";
@import "../../scss/_main.scss";
@import "../../scss/_global.scss";
</style>
