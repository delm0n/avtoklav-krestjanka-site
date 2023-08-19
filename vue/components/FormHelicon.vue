<template>
  <div></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters([
    "getUserRassrochka",
    "getMetric",
    "getMainId",
    "getDops",
  ]),
  props: {
    rassr: {
      type: Boolean,
      default: false,
    },
    main: {
      type: Boolean,
      default: false,
    },

    dops: {
      type: Boolean,
      default: true,
    },
  },
};
</script>