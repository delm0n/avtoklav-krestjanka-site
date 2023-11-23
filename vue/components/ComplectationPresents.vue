<template>
  <div class="complectation-presents">
    <div class="presents-title">
      <p>
        <span> + {{ presents.length }} </span>
      </p>

      <my-image
        :alt="'#'"
        :floder="'src'"
        :mobile="false"
        :imgName="'present-icon-red'"
      />

      <p>
        <span>при заказе</span>
      </p>

      <p class="last-row">
        с {{ getToday }} по {{ getTomorrow3 }}&nbsp;{{ getMonthForHeader }}
      </p>
    </div>

    <div class="complectation-presents__container">
      <div class="complectation-presents__slider">
        <div class="swiper-wrapper">
          <div
            v-for="(item, index) in presents"
            :key="index"
            class="swiper-slide present-item"
          >
            <my-image
              :alt="'#'"
              :floder="'presents'"
              :mobile="false"
              :imgName="item.img"
            />
            <p v-html="item.name"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import { Swiper } from "swiper";
import { mapGetters } from "vuex";

export default {
  components: {
    MyImage,
  },
  computed: mapGetters(["getToday", "getTomorrow3", "getMonthForHeader"]),

  data() {
    return {
      presents: [
        {
          img: "present-1",
          name: "Зажимы для<br>крышек СКО",
        },

        {
          img: "present-2",
          name: "Ключ для<br>твист-офф",
        },

        {
          img: "present-3",
          name: "Шланг для<br>отвода пара",
        },

        {
          img: "present-4",
          name: "Книга<br>рецептов",
        },

        {
          img: "present-6",
          name: "Купон<br>на 1000 руб.",
        },
      ],
    };
  },

  mounted() {
    let myCompSwiper;
    const CompSwiper = () => {
      myCompSwiper = new Swiper(".complectation-presents__slider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        grabCursor: true,
      });
    };

    const windowbreakpoint = window.matchMedia("(max-width: 768px)");
    const breakpointChecker = () => {
      if (!windowbreakpoint.matches) {
        if (myCompSwiper) {
          return myCompSwiper.destroy(true, true);
        }
      } else {
        return CompSwiper();
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.complectation-presents {
  border-radius: 0px 0px 10px 10px;
  background: #f9f9f9;
  padding: 30px 26px;
  max-width: 1180px;
  width: 98%;
  margin: 0 auto;
  @media (max-width: 1136px) {
    //   max-width: 900px;
    // }

    // @media (max-width: 1136px) {
    max-width: 740px;
  }

  .complectation-presents__container {
    overflow: hidden;
  }

  @media (max-width: 768px) {
    padding: 20px 10px;
  }

  .presents-title {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 7px;
    justify-content: center;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      margin-bottom: 20px;
    }

    @media (max-width: 576px) {
      grid-template-columns: repeat(3, auto);

      .last-row {
        grid-column: 1/4;
        text-align: center;
        align-self: center;
      }
    }

    p {
      color: #323232;
      font-family: "Roboto";
      font-size: 22px;
      font-style: normal;
      font-weight: 500;
      line-height: 29px;

      @media (max-width: 576px) {
        font-size: 18px;

        span {
          font-weight: 700;

          &:first-child {
            font-size: 22px;
          }
        }
      }

      span {
        color: #ff5655;
      }
    }
  }
  @media (min-width: 769px) {
    .swiper-wrapper {
      display: flex;
      justify-content: center;
      gap: 30px;
      flex-wrap: wrap;
      @media (max-width: 993px) {
        gap: 20px;
      }
    }
  }

  .present-item {
    border-radius: 10px;
    height: auto;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px;

    @media (min-width: 769px) {
      min-width: 135px;
      // min-width: 135px;
      width: calc((100% - 30px * 6) / 7);
      @media (max-width: 1136px) {
        width: calc((100% - 30px * 2) / 3);
      }
      // @media (max-width: 1136px) {
      //   width: calc((100% - 30px * 3) / 4);
      // }
      // @media (max-width: 993px) {
      //   width: calc((100% - 20px * 3) / 4);
      // }
    }
    @media (max-width: 768px) {
      width: 135px;
    }

    @include aspect() {
      max-width: 94px;
      aspect-ratio: 1/1;
    }

    p {
      color: #323232;
      text-align: center;
      font-family: "Roboto";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px; /* 138.889% */
    }
  }
}
</style>