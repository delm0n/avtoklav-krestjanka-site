<template>
  <div class="header-top" :class="{ 'header-top--scroll': scroll }">
    <div class="container">
      <div class="header-top__wrap">
        <div class="header-top__logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="58"
            height="60"
            viewBox="0 0 58 60"
            fill="none"
          >
            <g clip-path="url(#clip0_101_6498)">
              <path
                d="M40.8633 58.6553C40.946 57.0002 42.2081 54.6209 42.9322 53.3795L50.3805 46.7588C50.0702 47.5175 50.0702 48.5381 50.0702 48.6209C50.0702 48.7243 48.1047 51.0444 44.3805 54.1036C42.0012 56.058 40.9218 58.1381 40.8633 58.6553Z"
                fill="#047DD9"
              />
              <mask
                id="mask0_101_6498"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="58"
                height="63"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M34.7565 57.3521C34.5124 57.4016 34.2672 57.4479 34.021 57.4914L33.2069 49.7586C35.1025 49.2848 35.3483 46.6403 35.4557 45.4841C35.4654 45.3782 35.4741 45.2849 35.4828 45.2069C35.5655 44.4621 35.0346 39.8621 34.7586 37.6552L34.7243 37.685C34.1673 38.1674 32.4569 39.6488 31.5517 40.9655C30.6919 42.2162 31.0529 44.5895 31.3401 46.4779C31.433 47.0886 31.518 47.6485 31.5517 48.1034C31.1725 46.7932 30.2069 43.5931 29.3793 41.2759C28.5517 38.9586 25.1725 37.4828 23.5862 37.0345C24.138 38.0001 25.0759 41.0897 25.6552 43.6552C26.2281 46.1919 29.107 47.1509 30.3716 47.5721L30.4138 47.5862C31.9034 49.9034 32.6897 53.2759 33.2069 57.6207H33.2208C31.8319 57.8251 30.4111 57.931 28.9655 57.931C12.9683 57.931 0 44.9628 0 28.9655C0 12.9683 12.9683 0 28.9655 0C39.0989 0 48.017 5.20368 53.1933 13.0847C53.0524 15.7004 52.7129 19.2514 52.0345 22.4483C51.5427 24.7659 50.7505 26.741 49.9655 28.3448C48.1591 32.0363 46.9212 33.4169 44.9063 35.6644C43.6748 37.0382 42.1529 38.7358 40.0332 41.4828C35.5471 47.2972 34.6676 54.4492 34.7565 57.3521ZM39.9515 55.775C38.2916 56.4561 36.5543 56.9872 34.7565 57.3521C34.7572 57.3728 34.7578 57.3935 34.7586 57.4138L39.4128 62.4828L40.447 61.1379C40.5832 60.6348 40.6426 60.2394 40.7098 59.7923C40.813 59.1062 40.9345 58.2985 41.3793 56.7931C41.569 56.1507 41.8574 55.4553 42.2164 54.7293C51.5489 49.9196 57.931 40.1878 57.931 28.9655C57.931 26.0286 57.4939 23.1939 56.6812 20.5226C56.7526 19.1492 56.7931 17.6869 56.7931 16.1379C56.7122 17.3525 56.6168 18.6313 56.4981 19.9423C56.2283 19.119 55.9229 18.312 55.5832 17.5231C55.7727 14.7712 55.794 12.7514 55.7586 13.0345C55.7359 13.2167 55.7102 13.4278 55.6817 13.6647C55.5848 14.4635 55.4528 15.5556 55.2716 16.8246C54.7125 15.6158 54.073 14.452 53.3592 13.3402C53.3456 11.982 53.3063 10.8427 53.2748 10.1379C53.2821 10.8204 53.2599 11.848 53.1933 13.0847C53.2492 13.1695 53.3044 13.2547 53.3592 13.3402C53.3903 16.4343 53.2879 20.6646 52.6552 23.4828C51.7448 27.5379 49.9655 31.6552 46.6552 35.5862L43.3448 39.6207C43.3448 39.6207 47.4828 36.4138 49.4483 34.0345C51.4138 31.6552 52.2137 29.6156 53.069 27C54.1748 23.6183 54.8534 19.751 55.2716 16.8246C55.3783 17.0558 55.4822 17.2887 55.5832 17.5231C55.3574 20.8045 54.8926 25.127 54 27.8276C52.8563 31.2881 51.6207 34.0345 49.2414 37.1379C47.8028 39.0143 46.6668 40.399 45.5588 41.7497C44.8345 42.6327 44.1219 43.501 43.3448 44.4828C41.3793 46.9655 40.2521 51.6352 40.0332 53.2759C39.8857 54.3823 39.8961 55.0152 39.9515 55.775ZM39.9515 55.775C40.1733 55.6839 40.3939 55.5904 40.6128 55.4942C40.4278 55.9001 40.2722 56.2527 40.1487 56.5322C40.1065 56.628 40.068 56.7153 40.0332 56.7931C40.0194 56.6127 40.0055 56.4453 39.9925 56.287C39.9774 56.1066 39.9635 55.9378 39.9515 55.775ZM40.6128 55.4942C41.1563 55.2552 41.6909 54.9999 42.2164 54.7293C43.7994 51.5261 46.7547 47.7277 48.6724 45.2626C49.4003 44.3274 49.9785 43.584 50.2759 43.1379C52.5128 39.7825 53.3222 37.5188 54.0658 35.4389C54.1475 35.2103 54.2284 34.9839 54.3103 34.7586C54.9434 33.0178 56.2858 28.1379 56.6812 20.5226C56.6222 20.3283 56.561 20.1348 56.4981 19.9423C56.1617 23.6559 55.6378 27.6288 54.7241 31.1379C53.4621 35.9851 50.8965 40.6897 49.4483 42.6207C48.5394 43.8325 48.0103 44.4213 47.4492 45.0455C46.7166 45.8607 45.9298 46.7361 44.1724 49.1379C42.6325 51.2425 41.3748 53.8212 40.6128 55.4942ZM33.2208 57.6207H34.0345L34.021 57.4914C33.7554 57.5381 33.4887 57.5812 33.2208 57.6207ZM18.8324 12.4934C18.917 14.6408 22.0786 16.0725 23.1724 16.3448C23.1724 16.3448 23.1724 12.8435 22.6432 11.443C22.242 10.3818 20.6459 9.0079 19.5122 8.03212C19.1496 7.7201 18.8344 7.44875 18.6206 7.24138C18.7349 7.82096 18.7545 8.95223 18.7771 10.2609C18.7894 10.9727 18.8025 11.7369 18.8324 12.4934ZM25.9941 19.2414C24.9515 18.3807 23.1792 15.9923 24.4303 13.3241C25.6814 10.656 25.9941 8.98483 25.9941 8.48276C26.8196 9.84552 28.4443 12.9153 28.3401 14.2924C28.2739 15.1662 27.5696 16.2064 26.9433 17.1315C26.3357 18.0287 25.8017 18.8176 25.9941 19.2414ZM29.9615 38.1639V38.1641C30.1306 39.0741 30.2803 39.8803 30.3664 40.3533C32.2558 38.9894 34.0341 37.2163 33.7401 34.6713C33.4947 32.5459 33.3269 30.7074 33.186 29.1614V29.1612C33.0778 27.9766 32.9853 26.9634 32.8856 26.1242C32.8332 26.1784 32.6946 26.3139 32.5028 26.5014C31.765 27.2228 30.2419 28.7119 29.8337 29.2796C29.1908 30.1734 28.7191 31.2381 29.1025 33.4713C29.2597 34.3872 29.6439 36.4548 29.9607 38.1602L29.9615 38.1639ZM27.6474 27.4045L27.647 27.4032L27.6466 27.4012C27.3199 25.7872 26.9239 23.8308 26.7602 22.9637C26.3609 20.8494 26.7619 19.8251 27.3215 18.9587C27.6772 18.4085 29.0181 16.9539 29.6677 16.2492L29.6679 16.249C29.8366 16.0661 29.9586 15.9337 30.0048 15.8808C30.1146 16.6764 30.2222 17.6375 30.3478 18.7614V18.7618C30.5119 20.2286 30.707 21.9726 30.979 23.9878C31.3049 26.4006 29.7399 28.1319 28.0651 29.4768C27.9763 29.0297 27.822 28.2677 27.648 27.4078L27.6474 27.4049V27.4045ZM28.433 36.0033L28.4332 36.0046C28.5834 36.8514 28.7166 37.6018 28.7965 38.0412C26.6334 37.5242 24.4345 36.6141 23.8525 34.3086C23.3663 32.3832 22.9055 30.7334 22.518 29.3462L22.5178 29.346C22.2209 28.283 21.967 27.3739 21.7775 26.6127C21.8431 26.6412 22.0136 26.7097 22.2494 26.8047C23.1571 27.1701 25.0306 27.924 25.5888 28.272C26.4681 28.8199 27.2491 29.5754 27.6466 31.6425C27.8096 32.4906 28.1512 34.4158 28.433 36.0033ZM26.1368 25.2379L26.1366 25.2372L26.1364 25.2362C25.8004 23.6605 25.3926 21.7496 25.2006 20.9081C24.7326 18.8569 23.933 18.1242 23.0439 17.6013C22.4791 17.2692 20.5995 16.5673 19.6889 16.2272L19.6883 16.227C19.4521 16.1388 19.2812 16.075 19.2155 16.0484C19.4304 16.8025 19.7145 17.7025 20.0467 18.7549C20.4802 20.1283 20.9957 21.7614 21.5462 23.6688C22.2056 25.9527 24.4126 26.8016 26.5699 27.2594C26.4749 26.8231 26.316 26.0783 26.1368 25.2379Z"
                  fill="#FF9900"
                />
              </mask>
              <g mask="url(#mask0_101_6498)">
                <path
                  d="M28.9655 57.931C44.9627 57.931 57.931 44.9627 57.931 28.9655C57.931 12.9683 44.9627 0 28.9655 0C12.9683 0 0 12.9683 0 28.9655C0 44.9627 12.9683 57.931 28.9655 57.931Z"
                  fill="#047DD9"
                />
              </g>
              <path
                d="M40.2491 60.0052C40.2491 60.0052 39.6622 57.4745 39.7232 55.6364C39.7631 54.432 40.2396 52.1382 40.2396 52.1382L40.9193 54.8142C40.9193 54.8142 40.6592 55.4256 40.5324 55.8319C40.0474 57.3876 40.2491 60.0052 40.2491 60.0052Z"
                fill="#047DD9"
              />
              <path
                d="M52.5501 1.13818C53.688 9.8277 52.1363 16.138 51.582 18.8965C51.8733 20.1844 52.9012 20.0443 53.1911 13.1257C53.4809 6.2071 52.9953 3.68706 52.5501 1.13818Z"
                fill="#047DD9"
              />
              <path
                d="M55.7062 11.1831C54.9123 18.4082 54.4251 19.2619 53.8203 21.7796C54.0049 22.7812 54.2486 22.2439 54.7904 19.5963C55.616 15.5647 55.5907 13.3745 55.7062 11.1831Z"
                fill="#047DD9"
              />
              <path
                d="M56.8793 14.2158C56.3774 24.024 54.0672 32.1697 53.1953 34.4152C53.2746 35.9065 54.229 33.0623 55.0398 29.2055C56.2748 23.333 56.9068 17.1454 56.8793 14.2158Z"
                fill="#047DD9"
              />
            </g>
            <defs>
              <clipPath id="clip0_101_6498">
                <rect width="57.931" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>
            Официальный сайт <br />
            производителя
          </p>
        </div>

        <div class="header-top__nav">
          <ul
            ref="menu"
            class="menu-list"
            v-bind:class="{ 'menu-list--open': burger }"
          >
            <li v-for="(item, index) in navigations" v-bind:key="index">
              <p
                v-on:click="scrollToSection(item.selector)"
                v-text="item.name"
              ></p>
            </li>
            <li>
              <router-link :to="path == '/' ? '/opt' : '/'">
                {{ path == "/" ? "Купить оптом" : "Купить в розницу" }}
              </router-link>
            </li>

            <li class="mobile-phone">
              <a class="header-top__contact-phone" href="tel:88002505932">{{
                getPhone
              }}</a>
              <div class="header-top__contact-button" @click="openModalCall()">
                Заказать звонок
              </div>
            </li>
          </ul>
        </div>

        <div class="header-top__contact">
          <a href="tel:88002505932" class="header-top__contact-phone">{{
            getPhone
          }}</a>

          <div class="header-top__contact-button" @click="openModalCall()">
            Заказать звонок
          </div>

          <div
            class="burger-container"
            :class="{ 'burger-container--open': burger }"
            @click="burger = !burger"
          >
            <div class="burger" v-bind:class="{ 'burger--open': burger }">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      scroll: false,
      burger: false,

      navigations: [],
      refHeader: "",

      navMain: [
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
      refHeaderMain: "#modal-call",

      navOpt: [
        {
          name: "Преимущества",
          selector: "#opt-partner",
        },

        {
          name: "О производителе",
          selector: "#opt-made",
        },
      ],
      refHeaderOpt: "#opt-modal",
    };
  },

  props: {
    path: String,
  },
  computed: mapGetters(["getPhone"]),
  created() {
    this.urlPathChanger();

    window.addEventListener("scroll", () => {
      this.scroll = window.pageYOffset < 30 ? false : true;
    });
  },
  methods: {
    urlPathChanger() {
      switch (this.path) {
        case "/":
          this.navigations = this.navMain;
          this.refHeader = this.refHeaderMain;
          break;

        case "/opt":
          this.navigations = this.navOpt;
          this.refHeader = this.refHeaderOpt;
          break;
      }
    },

    scrollToSection(selector) {
      this.gsap.to(window, {
        duration: 1.5,
        // добавить в +
        scrollTo: { y: selector },

        // scrollTo:
        //   document.querySelector(selector).offsetTop -
        //   document.querySelector(selector).offsetHeight,
      });
      this.burger = false;
    },

    ...mapMutations(["openModalSuccessManager"]),

    openModalCall() {
      this.openModalSuccessManager();
      setTimeout(() => {
        Fancybox.show([
          {
            src: this.refHeader,
          },
        ]);
      }, 10);
    },
  },

  watch: {
    path: function () {
      this.urlPathChanger();
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

@mixin flex-center-x($gap) {
  display: flex;
  align-items: center;
  column-gap: $gap;
}

.header-top {
  position: fixed;
  background-color: #fff;
  width: 100%;
  border-bottom: 1px solid #e1e1e1;
  transition: all 0.4s ease-in-out;

  z-index: 20;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 576px) {
    padding: 0 10px;
  }

  // &--scroll {
  //   box-shadow: 0 7px 9px 1px transparentize(#323232, 0.95);
  // }

  &__wrap {
    display: flex;
    align-items: center;
    column-gap: 10px;
    justify-content: space-between;
    height: 100px;
    // position: relative;

    @media (max-width: 768px) {
      height: 70px;
    }
  }

  &__logo {
    @include flex-center-x(20px);

    @media (max-width: 768px) {
      gap: 10px;

      svg {
        width: 34px;
      }
    }

    p {
      white-space: nowrap;
      position: relative;
      color: #292929;
      font-family: "Inter";
      font-size: 14px;
      font-style: normal;
      font-weight: 200;
      line-height: 21px;

      @media (max-width: 768px) {
        font-size: 12px;
        line-height: 130%;
      }
    }

    img {
      max-width: 189px;
      @media (max-width: 576px) {
        max-width: 130px;
      }
    }
  }

  &__contact {
    &-phone {
      display: block;
      white-space: nowrap;
      transition: all 0.4s;
      color: #292929;
      text-align: right;
      font-family: "Roboto";
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.32px;

      &:hover {
        color: #047dd9;
      }

      @media (max-width: 1359px) {
        display: none;
      }

      @media (max-width: 768px) {
        font-size: 26px;
        padding: 10px 0 0px;
      }
    }

    &-button {
      cursor: pointer;
      text-align: right;
      color: #292929;
      font-family: "Inter";
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      letter-spacing: 0.18px;
      text-decoration-line: underline;

      @media (max-width: 1359px) {
        margin-top: 5px;
        display: none;
      }

      @media (max-width: 768px) {
        font-size: 15px;
      }
    }
  }

  &__nav {
    .menu-list {
      @include flex-center-x(40px);
      justify-content: center;

      @media (max-width: 1440px) {
        gap: 20px;
      }

      @media (max-width: 1359px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
        position: absolute;
        top: 100px;
        z-index: 10;
        width: 100%;
        right: 0px;
        transform: translateX(100%);
        opacity: 0;
        transition: transform 0.45s 0.1s, opacity 0.25s;
        max-width: 320px;
        background: #f4f4f4;
        border-radius: 0 0 10px 10px;
        box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
        padding: 30px 0;
      }

      @media (max-width: 768px) {
        top: 70px;
      }

      &--open {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 0.4s, opacity 0.3s 0.2s;
      }

      li:not(.mobile-phone) {
        p,
        a {
          transition: all 0.4s;
          cursor: pointer;
          white-space: nowrap;
          color: #292929;
          font-family: "Inter";
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 25px;

          &:hover {
            color: #047dd9;
          }

          @media (max-width: 1359px) {
            padding: 5px 0;
          }

          @media (max-width: 768px) {
            font-size: 16px;
            padding: 0;
          }
        }
      }

      .mobile-phone {
        display: none;
        @media (max-width: 1359px) {
          display: block;

          .header-top__contact-phone,
          .header-top__contact-button {
            display: block;
            text-align: center;
          }
        }
      }
    }
  }

  .burger {
    &-container {
      @media (min-width: 1360px) {
        display: none;
      }
      position: relative;
      cursor: pointer;
      display: block;
      height: 44px;
      width: 44px;
      background: #323232;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 20;
      transition: all 0.3s;

      @media (max-width: 576px) {
        width: 32px;
        height: 32px;
      }

      // &--open {
      //   border: 1px solid #323232;
      // }
    }

    position: relative;
    width: 40px;
    height: 14px;

    span {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 22px;
      height: 2px;
      border-radius: 0;
      background-color: #fff;
      transition: 0.4s all;

      @media (max-width: 576px) {
        width: 18px;
      }

      &:nth-child(1) {
        top: 1px;
      }

      &:nth-child(2),
      &:nth-child(3) {
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
      }

      &:nth-child(4) {
        top: calc(100% - 1px);
        transform: translateX(-50%) translateY(-50%);
      }
    }

    &--open {
      span {
        background-color: #fff;
        &:nth-child(1) {
          transition: 0.2s all;
          opacity: 0;
        }

        &:nth-child(2) {
          transform: translateX(-50%) translateY(-50%) rotate(45deg);

          @media (max-width: 576px) {
            width: 19px;
          }
        }

        &:nth-child(3) {
          transform: translateX(-50%) translateY(-50%) rotate(-45deg);

          @media (max-width: 576px) {
            width: 19px;
          }
        }

        &:nth-child(4) {
          transition: 0.2s all;
          opacity: 0;
        }
      }
    }
  }
}
</style>
