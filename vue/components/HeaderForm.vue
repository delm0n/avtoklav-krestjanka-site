<template>
  <form action="" method="post" class="spnForm header-form">
    <div class="header-form__wrapper">
      <div class="header-form__inputs">
        <div class="volume-tab">
          <div
            v-for="(item, index) in models"
            :key="index"
            :class="'volume-tab__item ' + (item.selected ? '--active' : '')"
            @click="selectedChange(index)"
          >
            {{ item.title }}
          </div>
        </div>

        <div class="ten-tab mobile-group">
          <p :class="'ten-item ' + (tenSelected ? '' : 'ten-item--active')">
            Без ТЭНа
          </p>
          <div
            class="ten-toggler"
            @click="
              tenSelected = !tenSelected;
              animationPrice();
            "
          >
            <div class="ten-toggler__container">
              <div
                :class="
                  'ten-toggler__circle ' + (tenSelected ? 'right' : 'left')
                "
              ></div>
            </div>
          </div>
          <p :class="'ten-item ' + (tenSelected ? 'ten-item--active' : '')">
            С ТЭНом
          </p>
        </div>

        <div class="user-info mobile-group">
          <div class="krestjanka-input__container">
            <input
              class="krestjanka-input"
              aria-label="Ваш номер телефона"
              type="tel"
              name="phone"
              autocomplete="off"
              placeholder="Ваш номер телефона"
              required=""
            />
          </div>
          <div class="krestjanka-input__container">
            <input
              class="krestjanka-input"
              aria-label="Ваше имя"
              type="text"
              name="name"
              autocomplete="off"
              placeholder="Ваше имя"
              required=""
            />
          </div>
        </div>
      </div>

      <div class="header-form__offer">
        <div class="prices">
          <div class="prices-img">
            <svg
              v-if="!mobile"
              xmlns="http://www.w3.org/2000/svg"
              width="97"
              height="95"
              viewBox="0 0 97 95"
              fill="none"
            >
              <path
                d="M0 4C0 1.79086 1.79086 0 4 0H93C95.2091 0 97 1.79086 97 4V90.955C97 93.8211 94.0741 95.7572 91.4361 94.6366L50.0639 77.0625C49.0645 76.638 47.9355 76.638 46.9361 77.0625L5.56388 94.6366C2.92586 95.7572 0 93.8211 0 90.955V4Z"
                fill="#F21C02"
                fill-opacity="0.7"
              />
            </svg>

            <svg
              v-if="mobile"
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="97"
              viewBox="0 0 75 97"
              fill="none"
            >
              <path
                d="M0 4C0 1.79086 1.79086 0 4 0H71C73.2091 0 75 1.79086 75 4V92.1713C75 95.2282 71.7101 97.1553 69.0437 95.6603L39.4563 79.0704C38.2411 78.389 36.7589 78.389 35.5437 79.0704L5.95629 95.6603C3.28994 97.1553 0 95.2282 0 92.1713V4Z"
                fill="#F55D5D"
              />
            </svg>

            <p>-14%</p>
          </div>

          <div class="prices-box">
            <p class="old --animation">{{ oldPrice }}</p>
            <p class="new --animation">{{ newPrice }}</p>
          </div>
        </div>
        <button @click="openModalSuccessOrder" class="button">
          Заказать автоклав
        </button>
      </div>
    </div>

    <div v-html="getMetric"></div>
    <input type="hidden" name="id[]" :value="idSelected" />
    <input type="hidden" :name="'quantity[' + idSelected + ']'" value="1" />
  </form>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      tenSelected: true,
      models: [
        {
          title: "15 л",
          selected: true,
          noten: {
            price: goodsJson[goods.avtoklav_l15].priceF,
            oldPrice: goodsJson[goods.avtoklav_l15].oldPriceF,
            id: goods.avtoklav_l15,
          },

          ten: {
            price: goodsJson[goods.avtoklav_l15_ten].priceF,
            oldPrice: goodsJson[goods.avtoklav_l15_ten].oldPriceF,
            id: goods.avtoklav_l15_ten,
          },
        },

        {
          title: "20 л",
          selected: false,
          noten: {
            price: goodsJson[goods.avtoklav_l20].priceF,
            oldPrice: goodsJson[goods.avtoklav_l20].oldPriceF,
            id: goods.avtoklav_l20,
          },

          ten: {
            price: goodsJson[goods.avtoklav_l20_ten].priceF,
            oldPrice: goodsJson[goods.avtoklav_l20_ten].oldPriceF,
            id: goods.avtoklav_l20_ten,
          },
        },

        {
          title: "26 л",
          selected: false,
          noten: {
            price: goodsJson[goods.avtoklav_l26].priceF,
            oldPrice: goodsJson[goods.avtoklav_l26].oldPriceF,
            id: goods.avtoklav_l26,
          },

          ten: {
            price: goodsJson[goods.avtoklav_l26_ten].priceF,
            oldPrice: goodsJson[goods.avtoklav_l26_ten].oldPriceF,
            id: goods.avtoklav_l26_ten,
          },
        },

        {
          title: "34 л",
          selected: false,
          noten: {
            price: goodsJson[goods.avtoklav_l34].priceF,
            oldPrice: goodsJson[goods.avtoklav_l34].oldPriceF,
            id: goods.avtoklav_l34,
          },

          ten: {
            price: goodsJson[goods.avtoklav_l34_ten].priceF,
            oldPrice: goodsJson[goods.avtoklav_l34_ten].oldPriceF,
            id: goods.avtoklav_l34_ten,
          },
        },
      ],
    };
  },

  props: {
    mobile: Boolean,
  },

  computed: {
    ...mapGetters(["getMetric"]),

    oldPrice() {
      return (
        (this.tenSelected
          ? this.models.find((el) => el.selected).ten.oldPrice
          : this.models.find((el) => el.selected).noten.oldPrice) + " РУБ."
      );
    },

    newPrice() {
      return (
        (this.tenSelected
          ? this.models.find((el) => el.selected).ten.price
          : this.models.find((el) => el.selected).noten.price) + " РУБ."
      );
    },

    idSelected() {
      return this.tenSelected
        ? this.models.find((el) => el.selected).ten.id
        : this.models.find((el) => el.selected).noten.id;
    },
  },

  methods: {
    selectedChange(i) {
      if (this.models[i].selected == false) {
        this.models.forEach((el, index) => {
          index == i ? (el.selected = true) : (el.selected = false);
          this.animationPrice();
        });
      }
    },

    ...mapMutations(["openModalSuccessOrder"]),

    animationPrice() {
      this.gsap.fromTo(
        ".header-main .--animation",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
        }
      );
    },
  },
};
</script>

<style lang="scss">
.header-form {
  margin-top: 20px;

  &__wrapper {
    display: flex;

    @media (max-width: 1280px) {
      flex-direction: column;
      gap: 30px;
    }

    @media (max-width: 768px) {
      gap: 20px;
    }
  }

  &__inputs {
    @media (min-width: 1281px) {
      max-width: 50%;
      padding-right: 30px;
      @media (max-width: 1300px) {
        padding-right: 20px;
      }
    }

    @media (min-width: 577px) {
      min-width: 266px;
    }

    @media (max-width: 992px) {
      .mobile-group {
        max-width: 450px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;

        @media (min-width: 769px) {
          &.ten-tab {
            margin-top: 35px;
          }
        }
      }
    }

    .volume-tab {
      display: flex;
      flex-wrap: nowrap;
      gap: 15px;
      justify-content: space-between;
      margin-bottom: 20px;

      @media (max-width: 425px) {
        gap: 10px;
      }

      @media (max-width: 375px) {
        gap: 5px;
      }

      &__item {
        flex: 1 1 0;
        cursor: pointer;

        color: rgba(50, 50, 50, 0.5);
        text-align: center;
        font-family: "Inter";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        padding: 14px 4px;
        border-radius: 30px;
        border: 1px solid rgba(50, 50, 50, 0.5);

        transition: color 0.2s, background-color 0.2s, border 0.2s;

        @media (max-width: 576px) {
          font-size: 15px;
          padding: 10px 4px;
        }

        &.--active {
          color: #fff;
          font-weight: 600;

          background-color: #00ac07;
          border: 1px solid #00ac07;
        }
      }
    }

    .ten-tab {
      display: flex;
      width: 100%;
      padding: 10px;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      border-radius: 30px;
      background: #00ac07;
      margin-bottom: 20px;

      @media (max-width: 1280px) {
        padding: 15px 20px;
      }

      @media (max-width: 576px) {
        padding: 10px 20px;
      }

      @media (max-width: 375px) {
        padding: 10px;
        gap: 0;
      }

      .ten-toggler {
        cursor: pointer;
        height: 22px;
        width: 43px;
        border-radius: 10px;
        border: #fff solid 1px;
        padding: 2px;

        &__container {
          position: relative;
        }

        &__circle {
          background: #fff;
          border-radius: 100%;
          height: 16px;
          width: 16px;
          transition: all 0.4s;
          position: absolute;

          &.left {
            right: 100%;
            transform: translateX(100%);
          }

          &.right {
            right: 0;
          }
        }
      }

      p.ten-item {
        color: rgba(255, 255, 255, 0.5);
        width: 85px;
        text-align: center;
        font-family: "Inter";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        @media (max-width: 576px) {
          font-size: 15px;
        }

        &--active {
          color: #fff;
          font-weight: 600;
        }
      }
    }
  }

  &__offer {
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media (min-width: 1281px) {
      padding-left: 30px;
      @media (max-width: 1300px) {
        padding-left: 20px;
      }
    }
    @media (max-width: 1280px) {
      gap: 20px;
      flex-direction: row;
      flex-wrap: wrap;
    }

    @media (min-width: 1281px) {
      &::before {
        content: "";
        background: #828282;
        width: 1px;
        height: 100%;
        position: absolute;
        left: 0;
      }
    }

    .prices {
      display: flex;
      gap: 15px;
      align-items: flex-end;

      .prices-img {
        position: relative;

        p {
          position: absolute;
          top: 20px;
          left: 12px;

          color: var(--white, #fff);
          text-align: center;
          font-family: "Roboto";
          font-size: 32px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;

          @media (max-width: 992px) {
            text-align: center;
            font-family: "Stolzl";
            font-size: 22px;
            top: 32px;
            left: 8px;
            font-weight: 700;
          }
        }
      }

      .prices-box {
        padding-bottom: 20px;
      }

      .old {
        color: rgba(79, 79, 79, 0.5);
        font-family: "Roboto";
        font-size: 22px;
        font-style: normal;
        font-weight: 900;
        line-height: normal;
        text-decoration: line-through;
        white-space: nowrap;

        @media (max-width: 992px) {
          font-size: 18px;
        }

        @media (max-width: 576px) {
          font-size: 14px;
        }
      }

      .new {
        color: var(--gray-2, #4f4f4f);
        font-family: "Roboto";
        font-size: 29px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 0.58px;
        white-space: nowrap;

        @media (max-width: 992px) {
          font-size: 27px;
        }
      }
    }
  }

  .user-info {
    .krestjanka-input {
      color: rgba(50, 50, 50, 0.5);
      font-family: "Inter";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      padding: 14px 14px 14px 53px;
      line-height: normal;
      border-radius: 30px;
      border: 1px solid #000;
      width: 100%;
      transition: all 0.4s;
      &:hover,
      &:focus {
        border: 1px solid #00ac07;
        box-shadow: inset 0px 0px 4px 2px rgb(0, 172, 7, 0.25);
      }

      @media (max-width: 576px) {
        padding: 10px 10px 10px 40px;
        font-size: 14px;
      }
    }

    .krestjanka-input__container {
      @mixin icon-input() {
        position: absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        transform: translateY(-50%);
        left: 13px;

        @media (max-width: 576px) {
          width: 26px;
          height: 26px;
          left: 7px;
        }
      }

      position: relative;
      &:first-child {
        margin-bottom: 20px;
        &::before {
          content: "";
          background: url("../images/src/tel.svg");
          background-size: 100%;
          @include icon-input;
        }

        @media (max-width: 768px) {
          margin-bottom: 10px;
        }
      }

      &:last-child {
        &::before {
          @include icon-input;
          content: "";
          background: url("../images/src/usr.svg");
          background-size: 100%;
        }
      }
    }
  }
}
</style>