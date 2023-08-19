<template>
  <header-top :path="$route.path" />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <my-footer :path="$route.path" />
</template>

<script>
import HeaderTop from "./components/HeaderTop.vue";
import { defineAsyncComponent } from "vue";

export default {
  components: {
    HeaderTop,
    MyFooter: defineAsyncComponent(() => import("./components/Footer.vue")),
  },
};
</script>

<style lang="scss">
@import "../scss/_fonts.scss";
@import "../scss/_normalize.scss";
@import "../scss/_main.scss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.bottom-indent {
  margin-top: 90px;
  @media (max-width: 576px) {
    margin-top: 60px;
  }
}
</style>