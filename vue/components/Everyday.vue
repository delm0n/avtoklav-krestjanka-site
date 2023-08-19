<template>
  <section id="everyday">
    <div class="container">
      <div class="title-box">
        <h2>Домашняя <span> еда на каждый&nbsp;день</span></h2>
        <p class="subtitle">От каши и варенья до мясных деликатесов</p>
      </div>
      <div class="everyday-wrapper">
        <div class="swiper-wrapper">
          <div
            class="everyday-item swiper-slide"
            v-for="(item, index) in dishes"
            :key="index"
          >
            <my-image
              class="everyday-item__img"
              :alt="item.title + ' в автоклаве крестьянка'"
              :floder="'everyday'"
              :imgName="item.img"
              :media="769"
            />
            <p class="everyday-item__title" v-html="item.title"></p>
          </div>
        </div>
        <div class="everyday-pagination" style="display: none"></div>

        <div class="everyday-next" style="display: none">
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
        <div class="everyday-prev" style="display: none">
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
      <div class="everyday-footer">
        <p>
          С автоклавом «Крестьянка» <span> вы сможете готовить </span> полезную
          пищу <span>на месяцы вперёд ещё быстрее</span>. Полезную, потому что в
          автоклаве продукты почти не теряют влагу, а значит
          <span>сохраняют полезные вещества: витамины, минералы и соли</span>.
          На месяцы, потому что под давлением продукты консервируются без
          пищевых добавок, надолго сохраняя вкус и пользу продукта.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Pagination, Navigation } from "swiper";
import MyImage from "../UI/MyImage.vue";
export default {
  components: { MyImage },
  data() {
    return {
      dishes: [
        {
          img: "dish-1",
          title: "Тушенка",
        },

        {
          img: "dish-2",
          title: "Маринованные грибы",
        },

        {
          img: "dish-3",
          title: "Каши",
        },

        {
          img: "dish-4",
          title: "Заправки для супов",
        },

        {
          img: "dish-5",
          title: "Рыба",
        },

        {
          img: "dish-6",
          title: "Овощные ассорти",
        },

        {
          img: "dish-7",
          title: "Компоты",
        },

        {
          img: "dish-8",
          title: "Соусы",
        },
      ],
    };
  },

  mounted() {
    let myPhotoSwiper;
    const PhotoSwiper = () => {
      myPhotoSwiper = new Swiper(".everyday-wrapper", {
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: true,
        pagination: {
          el: ".everyday-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".everyday-next",
          prevEl: ".everyday-prev",
        },
        loop: true,
        modules: [Pagination, Navigation],
      });
    };

    const windowbreakpoint = window.matchMedia("(max-width: 768px)");
    const breakpointChecker = () => {
      if (!windowbreakpoint.matches) {
        if (myPhotoSwiper) {
          return myPhotoSwiper.destroy(true, true);
        }
      } else {
        return PhotoSwiper();
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#everyday {
  overflow: hidden;
  @extend %padd;

  .everyday-wrapper {
    position: relative;

    @media (max-width: 768px) {
      max-width: 420px;
      overflow: hidden;
      margin: 0 auto;
    }

    .swiper-wrapper {
      @media (min-width: 769px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr 1fr;
        gap: 50px 20px;

        @media (max-width: 992px) {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 40px 20px;
        }
      }
    }
  }

  .everyday-item {
    @media (max-width: 992px) and (min-width: 769px) {
      width: calc((100% - 40px) / 3);
    }

    &__title {
      color: #565656;
      text-align: center;
      font-family: "Roboto";
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 29px;
      margin-top: 20px;

      @include fluidFontSize(18, 22, 992, 1440);

      @media (max-width: 1280px) {
        margin-top: 15px;
      }

      @media (max-width: 768px) {
        font-size: 18px;
        line-height: 25px;
      }
    }

    &__img {
      @include aspect {
        aspect-ratio: 1/1;
        width: 100%;

        @media (max-width: 768px) {
          max-width: 250px;
        }
      }

      picture {
        @media (max-width: 768px) {
          justify-content: center;
        }
        img {
          max-width: 100%;
        }
      }
    }
  }

  //pagination-navigation
  @media (max-width: 768px) {
    .everyday-next,
    .everyday-prev {
      display: flex !important;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #323232;
      cursor: pointer;
      user-select: none;
      opacity: 1;
      transition: 300ms opacity ease;
      top: 50%;
      transform: scale(0.7) translateY(calc(-50% - 61px));
      position: absolute;
      z-index: 2;
    }
    .everyday-next {
      right: -7px;
    }
    .everyday-prev {
      left: -7px;
    }

    .everyday-pagination {
      display: flex !important;
      width: auto !important;
      margin-top: 30px;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;

      .swiper-pagination-bullet {
        width: 11px;
        height: 11px;
        margin: 0 !important;
        background: transparent;
        border-radius: 50%;
        border: 2px solid #323232;
        opacity: 1;
        transition: 0.3s all;

        &-active {
          background: #323232;
        }
      }
    }
  }

  .everyday-footer {
    margin-top: 50px;
    border: 2px solid #e8e8e8;
    border-radius: 20px;
    padding: 20px;

    @media (max-width: 768px) {
      border-radius: 15px;
      padding: 15px;
      margin-top: 40px;
    }

    p {
      color: #565656;
      font-family: "Roboto";
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;

      @include fluidFontSize(18, 22, 992, 1440);

      @media (max-width: 768px) {
        font-size: 18px;
        line-height: 25px;
      }

      span {
        color: $main;
        font-weight: 600;
      }
    }
  }
}
</style>
