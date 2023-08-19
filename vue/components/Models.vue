<template>
  <section :class="uniqClass">
    <div class="container">
      <div class="title-box">
        <h2 v-html="title"></h2>
      </div>

      <div class="models-toggle">
        <div
          :class="'toggle-item ' + (!tenSelected ? 'toggle-item--active' : '')"
          @click="changeActive(false)"
        >
          <p>Без ТЭНа</p>
        </div>
        <div
          :class="'toggle-item ' + (tenSelected ? 'toggle-item--active' : '')"
          @click="changeActive(true)"
        >
          <p>С ТЭНом</p>
          <span class="prompt">?</span>
        </div>
      </div>

      <div class="models-wrapper">
        <div v-for="(model, index) in models" :key="index" class="models-item">
          <div class="models-item__img">
            <picture>
              <img
                :src="
                  '/build/images/models/' +
                  (tenSelected ? model.ten.img : model.noten.img) +
                  (getWebp == 'webp' ? '.webp' : '.png')
                "
                :alt="'автоклав объёмом ' + model.title"
                :onload="animationImage"
              />
            </picture>

            <div class="models-item__title">
              <p v-html="model.title"></p>
            </div>
          </div>

          <div class="models-item__text">
            <transition
              name="collapse"
              v-on:before-enter="beforeEnter"
              v-on:enter="enter"
              v-on:before-leave="beforeLeave"
              v-on:leave="leave"
            >
              <div
                style="transition: height 0.2s ease"
                v-show="!mobile || model.mobileToggle"
              >
                <p class="models-item__decr" v-html="model.decr"></p>
                <ul class="models-item__list">
                  <li>
                    <b>Высота: </b>
                    <span
                      class="--animation"
                      v-html="
                        tenSelected ? model.ten.height : model.noten.height
                      "
                    ></span>
                  </li>
                  <li>
                    <b>Толщина стенок: </b>
                    <span
                      class="--animation"
                      v-html="tenSelected ? model.ten.wall : model.noten.wall"
                    >
                    </span>
                  </li>
                  <li>
                    <b>Толщина крышки: </b>
                    <span
                      class="--animation"
                      v-html="tenSelected ? model.ten.roof : model.noten.roof"
                    >
                    </span>
                  </li>
                  <li>
                    <b>Толщина дна: </b>
                    <span
                      class="--animation"
                      v-html="
                        tenSelected ? model.ten.bottom : model.noten.bottom
                      "
                    ></span>
                  </li>
                  <li>
                    <b>Кран для слива: </b>
                    <span
                      class="--animation"
                      v-html="tenSelected ? model.ten.crane : model.noten.crane"
                    ></span>
                  </li>
                  <li>
                    <b>Вес: </b>
                    <span
                      class="--animation"
                      v-html="
                        tenSelected ? model.ten.weight : model.noten.weight
                      "
                    ></span>
                  </li>
                  <li>
                    <b>Вместимость: </b>
                    <ul class="models-item__sublist">
                      <li v-for="(li, idx) in model.capacityList" :key="idx">
                        <span v-html="li"></span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </transition>
            <div class="show-modal" @click="showModalChar(index)">
              {{ !model.mobileToggle ? "Характеристики" : "Скрыть" }}
            </div>

            <div class="models-item__offer">
              <div class="models-item__offer-prices">
                <p
                  class="new --animation"
                  v-html="
                    (tenSelected ? model.ten.price : model.noten.price) +
                    ' руб.'
                  "
                ></p>
                <p
                  class="old --animation"
                  v-html="
                    (tenSelected ? model.ten.oldPrice : model.noten.oldPrice) +
                    ' руб.'
                  "
                ></p>
              </div>

              <button
                @click="openModal(tenSelected ? model.ten.id : model.noten.id)"
                class="button"
              >
                Заказать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import { mapGetters, mapMutations } from "vuex";
import tippy from "tippy.js";
import transitionHeight from "../mixins/transitionHeight";

export default {
  mixins: [transitionHeight],
  components: { MyImage },

  props: {
    title: String,
    uniqClass: String,
  },

  data() {
    return {
      tenSelected: true,
      mobile: window.innerWidth < 993,
      models: [
        {
          title: "15 литров",
          decr: "Поместится даже на самой маленькой кухне.",
          capacityList: [
            "- 14 банок по 0,5 л;",
            "- 7 банок по 0,65 л;",
            "- 5 банок по 0,8 л;",
            "- 4 банки по 1 л.",
          ],
          mobileToggle: false,
          noten: {
            height: "346 мм",
            wall: "1,5 мм",
            roof: "1,5 мм",
            bottom: "2 мм",
            crane: "нет",
            weight: "5 кг",
            img: "m-15",
            price: goodsJson[goods.avtoklav_l15].priceF,
            oldPrice: goodsJson[goods.avtoklav_l15].oldPriceF,
            id: goods.avtoklav_l15,
          },

          ten: {
            height: "446 мм",
            wall: "1,5 мм",
            roof: "1,5 мм",
            bottom: "2 мм",
            crane: "нет",
            weight: "7,1 кг",
            img: "m-15-ten",
            price: goodsJson[goods.avtoklav_l15_ten].priceF,
            oldPrice: goodsJson[goods.avtoklav_l15_ten].oldPriceF,

            id: goods.avtoklav_l15_ten,
          },
        },

        {
          title: "20 литров",
          decr: "Обеспечит создание запаса обедов и закусок.",
          capacityList: [
            "- 14 банок по 0,5 л;",
            "- 14 банок по 0,65 л;",
            "- 10 банок по 0,8 л;",
            "- 8 банок по 1 л.",
          ],
          mobileToggle: false,

          noten: {
            height: "439 мм",
            wall: "1,5 мм",
            roof: "1,5 мм",
            bottom: "2 мм",
            crane: "есть",
            weight: "5,7 кг",
            img: "m-20",
            price: goodsJson[goods.avtoklav_l20].priceF,
            oldPrice: goodsJson[goods.avtoklav_l20].oldPriceF,

            id: goods.avtoklav_l20,
          },

          ten: {
            height: "538 мм",
            wall: "1,5 мм",
            roof: "1,5 мм",
            bottom: "2 мм",
            crane: "есть",
            weight: "7,8 кг",
            img: "m-20-ten",
            price: goodsJson[goods.avtoklav_l20_ten].priceF,
            oldPrice: goodsJson[goods.avtoklav_l20_ten].oldPriceF,

            id: goods.avtoklav_l20_ten,
          },
        },

        {
          title: "26 литров",
          decr: "Вариант для большой семьи или малого бизнеса.",
          capacityList: [
            "- 21 банка по 0,5 л;",
            "- 21 банка по 0,65 л;",
            "- 10 банок по 0,8 л;",
            "- 8 банок по 1 л.",
          ],
          mobileToggle: false,

          noten: {
            height: "538 мм",
            wall: "1,5 мм",
            roof: "1,5 мм",
            bottom: "2 мм",
            crane: "есть",
            weight: "6,4 кг",
            img: "m-26",

            price: goodsJson[goods.avtoklav_l26].priceF,
            oldPrice: goodsJson[goods.avtoklav_l26].oldPriceF,

            id: goods.avtoklav_l26,
          },

          ten: {
            height: "637 мм",
            wall: "1,5 мм",
            roof: "1,5 мм",
            bottom: "2 мм",
            crane: "есть",
            weight: "8,1 кг",
            img: "m-26-ten",
            price: goodsJson[goods.avtoklav_l26_ten].priceF,
            oldPrice: goodsJson[goods.avtoklav_l26_ten].oldPriceF,

            id: goods.avtoklav_l26_ten,
          },
        },

        {
          title: "34 литров",
          decr: "Оптимален для владельцев крупных хозяйств и ферм.",
          capacityList: [
            "- 28 банок по 0,5 л;",
            "- 28 банок по 0,65 л;",
            "- 15 банок по 0,8 л;",
            "- 12 банок по 1 л.",
          ],
          mobileToggle: false,

          noten: {
            height: "683 мм",
            wall: "1,5 мм",
            roof: "1,5 мм",
            bottom: "2 мм",
            crane: "есть",
            weight: "7,4 кг",
            img: "m-34",
            price: goodsJson[goods.avtoklav_l34].priceF,
            oldPrice: goodsJson[goods.avtoklav_l34].oldPriceF,

            id: goods.avtoklav_l34,
          },

          ten: {
            height: "783 мм",
            wall: "1,5 мм",
            roof: "1,5 мм",
            bottom: "2 мм",
            crane: "есть",
            weight: " 9,5 кг",
            img: "m-34-ten",
            price: goodsJson[goods.avtoklav_l34_ten].priceF,
            oldPrice: goodsJson[goods.avtoklav_l34_ten].oldPriceF,

            id: goods.avtoklav_l34_ten,
          },
        },
      ],
    };
  },

  computed: mapGetters(["getWebp"]),

  mounted() {
    const windowbreakpoint = window.matchMedia("(max-width: 992px)");
    const breakpointChecker = () => {
      if (!windowbreakpoint.matches) {
        this.mobile = false;
      } else {
        this.mobile = true;
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();

    this.animationImage();

    this.$nextTick(function () {
      tippy(".prompt", {
        content:
          "Позволяет работать <br> автоклаву от розетки (сети 220&nbsp;В)",
        theme: "prompt",
        allowHTML: true,
        delay: 100,
        animation: "scale",
        arrow: true,
        placement: window.innerWidth > 576 ? "top-end" : "top",
      });
    });
  },

  methods: {
    ...mapMutations(["selectMain"]),

    changeActive(bool) {
      if (this.tenSelected != bool) {
        this.tenSelected = bool;

        this.gsap.fromTo(
          "." + this.uniqClass + " .--animation",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
          }
        );
      }
    },

    animationImage() {
      this.gsap.fromTo(
        "." + this.uniqClass + " .models-item__img img",
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          duration: 0.4,
          scale: 1,
        }
      );
    },

    openModal(id) {
      this.selectMain(id);
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#modal-order",
          },
        ]);
      }, 10);
    },

    showModalChar(index) {
      if (window.innerWidth < 993) {
        this.models[index].mobileToggle = !this.models[index].mobileToggle;
      }
    },
  },
};
</script>

<style lang="scss">
@mixin centered() {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin list() {
  @media (min-width: 1367px) {
    margin-bottom: 30px;
    width: calc(100% + 9px);
  }

  & > li {
    position: relative;

    color: #565656;
    font-family: "Roboto";
    font-size: 22px;
    font-style: normal;
    line-height: 131.818%;

    @include fluidFontSize(18, 22, 992, 1920);

    @media (max-width: 768px) {
      font-size: 16px;
    }

    b {
      font-weight: 600;
    }
    span {
      font-weight: 300;
      white-space: nowrap;
    }

    @media (min-width: 993px) {
      padding-left: 40px;
      @media (max-width: 1280px) {
        padding-left: 35px;
      }
      @media (max-width: 768px) {
        padding-left: 30px;
      }

      &:before {
        position: absolute;
        top: 1px;
        width: 26px;
        height: 26px;

        @media (max-width: 1280px) {
          width: 22px;
          height: 22px;
        }

        @media (max-width: 768px) {
          width: 20px;
          height: 20px;
        }

        background-position: center;
        background-size: contain;
        left: 0;
        content: "";
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAyOSAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IkVsbGlwc2UgMjQ0Ij4KPHJlY3Qgd2lkdGg9IjI5IiBoZWlnaHQ9IjI5IiByeD0iMTQuNSIgZmlsbD0iIzAwREIyOSIvPgo8cGF0aCBpZD0iVmVjdG9yIDcxIiBkPSJNNi42NDQ1MyAxMy44OTU4TDEyLjA4MiAxOS4zMzMzTDIxLjE0NDUgMTAuMjcwOCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9nPgo8L3N2Zz4K);
      }
    }

    &:not(:last-child) {
      margin-bottom: 20px;

      @media (max-width: 992px) {
        margin-bottom: 10px;
      }
    }
  }

  .models-item__sublist {
    margin-top: 4px;
    span {
      color: #565656;
      font-family: "Roboto";
      font-size: 22px;
      font-style: normal;
      font-weight: 300;
      line-height: 131.818%;

      @include fluidFontSize(18, 22, 992, 1920);

      @media (max-width: 768px) {
        font-size: 16px;
      }

      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }
  }
}

@import "../../scss/_global.scss";

.models,
.made {
  overflow: hidden;
  @extend %padd;
  background: var(
    --unnamed,
    linear-gradient(
      143deg,
      rgba(244, 244, 244, 0.78) 0%,
      rgba(238, 238, 238, 0.24) 100%
    )
  );

  .models-toggle {
    @include centered();
    gap: 30px;
    margin-bottom: 30px;

    @media (max-width: 576px) {
      flex-direction: column;
      gap: 10px;
    }

    .toggle-item {
      padding: 15px 10px;
      border-radius: 75px;
      border: 1px solid #323232;
      transition: all 0.4s;
      @include centered();
      width: 183px;
      gap: 10px;
      cursor: pointer;

      span {
        transition: all 0.4s;
        background: #e1e1e1;
        width: 20px;
        height: 20px;
        @include centered();
        border-radius: 100%;
        color: rgba(50, 50, 50, 0.7);
        font-family: "Inter";
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
      p {
        color: #323232;
        font-family: "Inter";
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px; /* 131.818% */
      }

      &--active {
        background: #00ac07;
        border: 1px solid #00ac07;

        p {
          color: #fff;
          font-weight: 600;
        }

        span {
          background: rgba(255, 255, 255, 0.7);
        }
      }
    }
  }

  .models-wrapper {
    display: flex;
    gap: 30px;
    align-items: stretch;

    @media (max-width: 1440x) {
      gap: 25px;
    }

    @media (max-width: 1366px) {
      flex-direction: column;
    }

    @media (max-width: 992px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: baseline;
    }

    @media (max-width: 768px) {
      gap: 20px;
      grid-template-columns: 1fr;
    }
  }

  .models-item {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;

    @media (max-width: 1366px) and (min-width: 993px) {
      flex-direction: row;
    }

    &__img {
      // padding: 20px 20px 0;
      background: rgba(255, 255, 255, 0.5);
      display: flex;
      flex-direction: column;
      border-radius: 10px 10px 0px 0px;

      img {
        max-width: 100%;
        opacity: 0;
      }

      @media (max-width: 768px) {
        picture {
          justify-content: center;
        }
      }

      @media (min-width: 993px) {
        align-self: end;
        @media (max-width: 1366px) {
          width: 38%;
          height: 100%;
          justify-content: flex-end;
          border-radius: 10px 0px 0px 10px;
        }

        @media (max-width: 1125px) {
          width: 34%;
        }
      }
    }

    &__text {
      flex-grow: 1;
      padding: 30px 20px;
      border-radius: 0px 0px 10px 10px;
      background: #fff;
      box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);
      position: relative;
      z-index: 2;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media (max-width: 1366px) and (min-width: 993px) {
        flex-direction: row;
        padding: 40px;
        gap: 20px;
        align-items: center;
        border-radius: 0px 10px 10px 0px;

        &::before {
          content: "";
          height: 100%;
          width: 2px;
          background: #e0e0e0;
          order: 1;
        }
      }

      @media (max-width: 1125px) {
        padding: 30px;
      }

      @media (max-width: 992px) {
        padding: 20px 30px 30px;
      }
    }

    &__decr {
      color: #565656;
      font-family: "Roboto";
      font-size: 22px;
      font-style: normal;
      font-weight: 300;
      line-height: 131.818%;
      margin-bottom: 30px;

      @include fluidFontSize(18, 22, 992, 1920);

      @media (max-width: 1570px) {
        min-height: 80px;
      }

      @media (max-width: 1366px) {
        display: none;
      }
    }

    &__list {
      @include list();
    }

    &__title {
      border-radius: 10px 10px 0px 0px;
      background: rgba(4, 125, 217, 0.7);
      margin: 10px auto 0;
      max-width: 100%;
      min-width: 163px;
      padding: 10px;
      text-align: center;
      width: max-content;

      p {
        color: #fff;
        text-align: center;
        font-family: "Roboto";
        font-size: 22px;
        font-style: normal;
        font-weight: 500;
        line-height: 29px;
      }
    }

    .show-modal {
      @media (min-width: 993px) {
        display: none;
      }
      margin: 10px auto 20px;
      cursor: pointer;
      color: rgba(50, 50, 50, 0.8);
      text-align: center;
      font-family: "Inter";
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 153.846% */
      text-decoration-line: underline;
    }

    &__offer {
      @media (max-width: 1366px) {
        order: 2;
      }

      &-prices {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        align-items: center;
        gap: 5px 15px;
        margin-bottom: 22px;

        .new {
          color: #323232;
          font-family: "Roboto";
          font-size: 32px;
          font-style: normal;
          font-weight: 900;
          line-height: 121.875%;

          @include fluidFontSize(26, 32, 992, 1920);
        }

        .old {
          color: #323232;
          font-family: "Roboto";
          font-size: 22px;
          font-style: normal;
          font-weight: 300;
          line-height: 131.818%;
          text-decoration: line-through;

          @include fluidFontSize(16, 22, 992, 1920);
        }
      }

      .button {
        font-size: 22px;
        @include fluidFontSize(18, 22, 992, 1920);

        @media (max-width: 992px) {
          margin: 0 auto;
        }
      }
    }
  }
}

@import "tippy.js/animations/scale.css";
@import "tippy.js/dist/tippy.css";

.tippy-box[data-theme~="prompt"] {
  background: #fff !important;
  padding: 10px;
  min-width: 276px !important;
  box-sizing: border-box;
  padding: 15px 10px;
  border-radius: 4px;
  max-width: 420px;

  &[data-placement^="top"] > .tippy-arrow {
    @media (min-width: 577px) {
      transform: translate(43px, 3px) !important;
      left: 66% !important;

      &:before {
        content: url("../images/src/arrow-tippy.svg");
        bottom: -30px;
        right: 0;
        border: none;

        transform: rotate(4deg);
      }
    }

    &:before {
      border-top-color: #fff !important;
    }
  }

  &[data-placement^="bottom"] > .tippy-arrow {
    transform: translate(38px, 0px) !important;

    &:before {
      border-bottom-color: #fff !important;
    }
  }
}

.tippy-content {
  color: #323232;
  font-family: "Roboto";
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 131%;

  @include fluidFontSize(18, 22, 992, 1920);

  @media (max-width: 768px) {
    font-size: 16px;
  }
}
</style>