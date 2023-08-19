<template>
  <section id="reason">
    <div class="container">
      <div class="title-box">
        <h2>
          <span> Почему «Крестьянку» </span> выбрали <br />
          тысячи наших покупателей?
        </h2>
        <p class="subtitle">
          {{ reasons.length }}
          {{ reasons.length > 4 ? "аргументов" : "аргументa" }} в её пользу
        </p>
      </div>
      <div class="reason-wrapper">
        <div class="swiper-wrapper">
          <div
            v-for="(item, index) in reasons"
            :key="index"
            class="reason-item swiper-slide"
          >
            <div class="reason-item__img">
              <my-image
                :alt="item.alt"
                :floder="'reason'"
                :imgName="item.img"
                :media="1025"
              />
            </div>
            <div class="reason-item__content-box">
              <div class="reason-item__content">
                <div class="reasons-item__number">{{ index + 1 }}</div>
                <h3 v-html="item.title"></h3>
                <p v-html="item.decr"></p>
                <ul>
                  <li
                    v-for="(li, idx) in item.list"
                    :key="idx"
                    v-html="li"
                  ></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="reason-next" style="display: none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="23"
            viewBox="0 0 14 23"
            fill="none"
          >
            <path
              d="M13.0933 12.027C13.6605 11.4232 13.6308 10.4739 13.027 9.90673L3.18756 0.663609C2.58377 0.096405 1.63448 0.12607 1.06728 0.729868C0.500075 1.33367 0.52974 2.28295 1.13354 2.85015L9.87971 11.0663L1.66361 19.8124C1.09641 20.4162 1.12607 21.3655 1.72987 21.9327C2.33367 22.4999 3.28295 22.4703 3.85015 21.8665L13.0933 12.027ZM11.0469 12.5305L12.0469 12.4993L11.9531 9.50073L10.9531 9.53198L11.0469 12.5305Z"
              fill="white"
            />
          </svg>
        </div>
        <div class="reason-prev" style="display: none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="23"
            viewBox="0 0 14 23"
            fill="none"
          >
            <path
              d="M0.719991 12.0282C0.153444 11.425 0.184207 10.4758 0.788702 9.90795L10.6395 0.654542C11.244 0.086707 12.1933 0.115314 12.7599 0.718437C13.3264 1.32156 13.2957 2.27081 12.6912 2.83864L3.93488 11.0639L12.1415 19.8003C12.708 20.4034 12.6773 21.3527 12.0728 21.9205C11.4683 22.4883 10.519 22.4597 9.9524 21.8566L0.719991 12.0282ZM2.80298 12.5305L1.76594 12.4992L1.86311 9.50079L2.90015 9.53204L2.80298 12.5305Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import { Swiper, Navigation } from "swiper";

export default {
  components: { MyImage },
  data() {
    return {
      reasons: [
        {
          alt: "стоимость автоклава крестьянка",
          img: "reason-1",
          title: "Самая доступная цена",
          decr: "Автоклав для консервирования «Крестьянка» дешевле прочих аналогичных моделей, при этом изготовлен из качественной медицинской стали AISI 304.",
          list: ["Гарантия честной цены"],
        },

        {
          alt: "автоклав самогонный аппарат коптильня крестьянка",
          img: "reason-2",
          title: "Автоклав + самогонный аппарат + коптильня",
          decr: ` Бак оснащён клампом на 1,5 дюйма. К нему подойдёт любой дистиллятор или ректификационная колонна.
            Вы сможете попробовать себя в самогоноварении, не тратя средства на дорогое оборудование.
            Дополните «Крестьянку» специальными решётками и готовьте деликатесы с дымком в баке автоклава.`,
          list: [
            "Покупайте сразу 3 устройства для домашнего хобби по цене одного! ",
          ],
        },

        {
          alt: "крышка автоклава крестьянка",
          img: "reason-3",
          title: "Крышка надёжно закреплена",
          decr: `Автоклав для домашнего консервирования «Крестьянка» оснащён 6 рым-болтами на крышке. 
          Они легко завинчиваются и обеспечивают герметичность ёмкости даже под давлением.`,
          list: [
            "Болты из нержавеющей медицинской стали не гнутся, не ломаются, не боятся коррозии.",
          ],
        },

        {
          alt: "безопасность автоклава крестьянка",
          img: "reason-4",
          title: "Полная безопасность",
          decr: "4 элемента отвечают за безопасную эксплуатацию аппарата:",
          list: [
            "<span>Силиконовая прокладка</span> — надёжность и герметичность крышки.",
            `<span>Защитный клапан </span> — не даёт давлению подниматься выше рабочих показателей
            (1,5 атм).`,
            `<span> Термометр и манометр </span> на крышке бака контролируют температуру и давление.`,
            `<span>Кламповое соединение</span> жёстко фиксирует насадку при использовании автоклава в качестве самогонного аппарата.`,
          ],
        },
      ],
    };
  },
  mounted() {
    let myReasonSwiper;
    const ReasonSwiper = () => {
      myReasonSwiper = new Swiper(".reason-wrapper", {
        slidesPerView: 1,
        spaceBetween: 40,
        grabCursor: true,
        autoHeight: true,
        navigation: {
          nextEl: ".reason-next",
          prevEl: ".reason-prev",
        },
        loop: true,
        modules: [Navigation],
      });
    };

    const windowbreakpoint = window.matchMedia("(max-width: 1024px)");
    const breakpointChecker = () => {
      if (!windowbreakpoint.matches) {
        if (myReasonSwiper) {
          return myReasonSwiper.destroy(true, true);
        }
      } else {
        return ReasonSwiper();
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#reason {
  overflow: hidden;
  @extend %padd;

  .container {
    @media (max-width: 768px) {
      padding: 0;
    }

    .title-box {
      h2 br {
        @media (max-width: 1024px) {
          display: none;
        }
      }
      @media (max-width: 768px) {
        padding: 0 20px;
      }
    }
  }

  .reason-wrapper {
    position: relative;
    @media (max-width: 1024px) {
      max-width: 520px;
      margin: 0 auto;
      overflow: hidden;
    }

    @media (max-width: 768px) {
      max-width: 400px;
      width: 100%;
      padding: 0 20px;
    }

    @media (max-width: 400px) {
      max-width: 320px;
    }

    .swiper-wrapper {
      @media (min-width: 1025px) {
        display: block;
        box-sizing: border-box;
      }
    }
  }

  .reason-item {
    display: flex;
    align-items: stretch;

    &:nth-child(2n) {
      flex-direction: row-reverse;
      .reason-item__content {
        border-radius: 10px 0px 0px 10px;
      }
    }

    &:nth-child(2n + 1) {
      .reason-item__content {
        border-radius: 0px 10px 10px 0px;
      }
    }

    &:not(:last-child) {
      margin-bottom: 50px;
    }

    @media (max-width: 1366px) {
      gap: 30px;
      .reason-item__content {
        border-radius: 10px !important;
      }
    }

    @media (max-width: 1024px) {
      gap: 20px;
      flex-direction: column !important;
    }

    &__img {
      position: relative;
      z-index: 2;
      border-radius: 11.741px;
      background: #fff;
      box-shadow: 0px 4.7px 17.6px 0px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      flex-shrink: 1;
      min-width: 50%;
      align-self: center;
      @media (max-width: 1366px) {
        min-width: calc(50% - 30px / 2);
      }

      @media (max-width: 1024px) {
        max-width: 408px;
        width: 100%;
      }

      @include aspect {
        aspect-ratio: 272/335;
        width: 100%;

        @media (max-width: 1024px) {
          aspect-ratio: 408/353;
        }
      }

      img {
        max-width: 100%;
      }
    }

    &__content-box {
      display: flex;
      align-items: center;
      max-width: 604px;
      width: 100%;
      position: relative;
    }

    &__content {
      padding: 30px 50px;
      min-height: 88%;

      @media (max-width: 1440px) {
        padding: 30px;
      }

      @media (max-width: 768px) {
        padding: 20px;
      }

      background: var(
        --unnamed,
        linear-gradient(
          143deg,
          rgba(244, 244, 244, 0.78) 0%,
          rgba(238, 238, 238, 0.24) 100%
        )
      );

      .reasons-item__number {
        color: #fff;
        text-align: center;
        font-family: "Roboto";
        font-size: 42px;
        font-style: normal;
        font-weight: 500;
        line-height: 140.476%;
        text-transform: uppercase;

        align-items: center;
        background: $main;
        border-radius: 10px;
        display: flex;
        justify-content: center;

        padding: 10px 27px;
        width: max-content;
        margin-bottom: 40px;

        @include fluidFontSize(28, 42, 992, 1920);

        @media (max-width: 1440px) {
          padding: 5px 15px;
          font-size: 28px;
          line-height: normal;
          margin-bottom: 25px;
        }

        @media (max-width: 1024px) {
          z-index: 5;
          position: absolute;
          transform: translateX(-50%);
          left: 50%;

          padding: 5px 13px;
          font-size: 22px;
          top: -74px;
        }
      }

      h3 {
        color: #4c4c4c;
        font-family: "Roboto";
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 121.875%;
        margin-bottom: 10px;

        @include fluidFontSize(24, 32, 992, 1440);

        @media (max-width: 768px) {
          font-size: 18px;
          line-height: 25px;
          margin-bottom: 10px;
        }
      }

      p {
        color: #323232;
        font-family: "Roboto";
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 131.818%;
        margin-bottom: 30px;

        @include fluidFontSize(18, 22, 992, 1440);

        @media (max-width: 1280px) {
          margin-bottom: 20px;
        }

        @media (max-width: 768px) {
          font-size: 15px;
          line-height: 22px;
          margin-bottom: 15px;
        }
      }

      ul {
        li {
          position: relative;
          padding-left: 44px;

          color: #323232;
          font-family: "Roboto";
          font-size: 22px;
          font-style: normal;
          font-weight: 300;
          line-height: 131%;

          @include fluidFontSize(18, 22, 992, 1440);

          @media (max-width: 1280px) {
            padding-left: 35px;
          }

          @media (max-width: 768px) {
            font-size: 15px;
            line-height: 22px;
            padding-left: 30px;
          }

          span {
            font-weight: 400;
          }

          &:not(:last-child) {
            margin-bottom: 10px;
          }

          &:before {
            position: absolute;
            top: 1px;
            width: 29px;
            height: 29px;

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
      }
    }
  }

  @media (max-width: 1024px) {
    .reason-next,
    .reason-prev {
      display: flex !important;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: $main;
      cursor: pointer;
      user-select: none;
      opacity: 1;
      transition: 300ms opacity ease;
      top: 291px;
      transform: scale(0.7);
      position: absolute;
      z-index: 2;

      @media (max-width: 768px) {
        top: 246px;
      }

      @media (max-width: 400px) {
        top: 176px;
      }
    }
    .reason-next {
      right: -7px;
    }
    .reason-prev {
      left: -7px;
    }
  }
}
</style>
