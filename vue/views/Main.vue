<template>
  <div>
    <!-- <header-top :navigations="nav" :refHeader="refHeader" /> -->
    <header-main />
    <features />
    <models :uniqClass="'models'" :title="'Модельный ряд'" />
    <kit />
    <tinkoff-block />
    <everyday />
    <reason />
    <faq />
    <models
      :uniqClass="'made'"
      :title="'Закажите <span> напрямую от производителя</span>'"
    />
    <photo />
    <map-vue />

    <modal-order />
    <modal-call />
    <modal-success />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { defineAsyncComponent } from "vue";
import MapVue from "../components/Map.vue";
import Features from "../components/Features.vue";
import HeaderTop from "../components/HeaderTop.vue";
import HeaderMain from "../components/HeaderMain.vue";
import TinkoffBlock from "../components/TinkoffBlock.vue";
import Faq from "../components/FAQ.vue";
import FooterDionis from "../components/Footer.vue";
import Everyday from "../components/Everyday.vue";
import Reason from "../components/Reason.vue";
import Photo from "../components/Photo.vue";
import Kit from "../components/Kit.vue";
import Models from "../components/Models.vue";
import ModalOrder from "../components/ModalOrder.vue";
import ModalCall from "../components/ModalCall.vue";
import ModalSuccess from "../components/ModalSuccess.vue";

export default {
  data() {
    return {
      nav: [
        {
          name: "Преимущества",
          selector: "#reason",
        },

        {
          name: "Оплата и доставка",
          selector: "#tinkoff-block",
        },

        {
          name: "Галерея",
          selector: "#photo",
        },
      ],

      refHeader: "#modal-call",
    };
  },
  components: {
    MapVue,
    Features,
    HeaderTop,
    HeaderMain,
    TinkoffBlock,
    Faq,
    FooterDionis,
    Everyday,
    Reason,
    Photo,
    Kit,
    Models,
    ModalOrder,
    ModalCall,
    ModalSuccess,
  },
};
</script>

<style lang="scss">
@import "../../scss/_fonts.scss";
@import "../../scss/_normalize.scss";
@import "../../scss/_main.scss";
</style>
