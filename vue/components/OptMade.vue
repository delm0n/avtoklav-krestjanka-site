<template>
  <section id="opt-made">
    <div class="container">
      <div class="opt-made__wrapper">
        <div class="opt-made__wrapper-swipers">
          <div class="about__swiper">
            <div class="swiper-wrapper">
              <div
                v-for="(item, index) in slides"
                :key="index"
                class="swiper-slide"
              >
                <my-image
                  :alt="'helicon автоклав крестьянка'"
                  :floder="'opt'"
                  :imgName="item.img"
                  :lazyLoad="false"
                  :media="993"
                  :format="'.jpg'"
                />
              </div>
            </div>

            <div class="about__controls">
              <div class="about-prev">
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
              <div class="about-pagination" style="display: none"></div>
              <div class="about-next">
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
            </div>
          </div>
          <div class="about__thumbs">
            <div className="swiper-wrapper">
              <div
                v-for="(item, index) in slides"
                :key="index"
                class="swiper-slide"
              >
                <my-image
                  v-if="!mobile"
                  :alt="item.alt"
                  :floder="'opt'"
                  :imgName="item.icon"
                  :format="'.jpg'"
                  :lazyLoad="false"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="opt-made__wrapper-content">
          <h2>О производителе</h2>

          <p class="text">
            Уже 11 лет компания Helicon занимает лидирующие позиции на
            отечественном рынке по производству товаров для хобби. Мы сами
            проектируем аппараты, которые выпускаем, и полностью отвечаем за их
            качество. 
          </p>

          <p class="text">
            Работы ведутся на автоматизированном оборудовании с учётом новейших
            технологий. Вся готовая продукция проходит трёхэтапный контроль, что
            полностью исключает возможность брака!
          </p>

          <div class="info-block">
            <my-image
              class="info-block__logo"
              :alt="'Helicon'"
              :floder="'opt'"
              :imgName="'logo'"
              :mobile="false"
            />
            <div>
              <p class="info-block__head">
                Мы гарантируем <br />
                правильные цены
              </p>

              <p class="info-block__link">
                Посетите наш
                <a target="_blank" href="https://samogon-optom.ru/"
                  >оптовый&nbsp;сайт</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import { Swiper, Navigation, Pagination, FreeMode, Thumbs } from "swiper";

export default {
  components: { MyImage },
  data() {
    return {
      mobile: window.innerWidth < 993,
      slides: [
        {
          img: "about-item-6",
          icon: "about-item-6-mob",
        },

        {
          img: "about-item-1",
          icon: "about-item-1-mob",
        },

        {
          img: "about-item-2",
          icon: "about-item-2-mob",
        },

        {
          img: "about-item-3",
          icon: "about-item-3-mob",
        },

        {
          img: "about-item-4",
          icon: "about-item-4-mob",
        },

        {
          img: "about-item-5",
          icon: "about-item-5-mob",
        },

        {
          img: "about-item-7",
          icon: "about-item-7-mob",
        },

        {
          img: "about-item-10",
          icon: "about-item-10-mob",
        },

        {
          img: "about-item-8",
          icon: "about-item-8-mob",
        },

        {
          img: "about-item-9",
          icon: "about-item-9-mob",
        },

        {
          img: "about-item-11",
          icon: "about-item-11-mob",
        },

        {
          img: "about-item-12",
          icon: "about-item-12-mob",
        },
      ],
    };
  },

  mounted() {
    const aboutThumbsSwiper = new Swiper(".about__thumbs", {
      direction: "vertical",
      slidesPerView: 4,
    });

    const AboutSwiper = new Swiper(".about__swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      grabCursor: true,
      autoHeight: true,
      navigation: {
        nextEl: ".about-next",
        prevEl: ".about-prev",
      },
      pagination: {
        clickable: true,
        el: ".about-pagination",
      },
      thumbs: {
        swiper: aboutThumbsSwiper,
      },

      loop: true,
      modules: [Navigation, Thumbs, Pagination],
    });

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
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#opt-made {
  overflow: hidden;
  @extend %padd;

  .opt-made__wrapper {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;

    @media (max-width: 992px) {
      flex-direction: column-reverse;
      gap: 30px;
      max-width: 620px;
      width: 100%;
      margin: 0 auto;
    }

    &-swipers {
      flex-shrink: 1;
      min-width: 50%;
      align-items: center;
      display: flex;
      gap: 25px;
      position: relative;

      @media (max-width: 1400px) {
        gap: 20px;
      }

      @media (max-width: 1280px) {
        gap: 15px;
      }

      @media (max-width: 992px) {
        max-width: 420px;
        width: 100%;
      }

      img {
        max-width: 100%;
        border-radius: 10px;
      }

      @media (min-width: 993px) {
        align-self: center;
      }

      .about__swiper {
        max-width: calc(574px + 56px);
        padding: 0 calc(56px / 2);
        overflow: hidden;
        border-radius: 10px;
        flex-shrink: 1;
        position: relative;

        @media (max-width: 1280px) {
          padding: 0 20px;
        }

        @media (max-width: 1024px) {
          padding: 0;
        }
      }

      .about__thumbs {
        max-height: 574px;
        flex-shrink: 0;
        overflow: hidden;

        @media (max-width: 1400px) {
          max-height: 400px;
          max-width: 80px;
        }

        @media (max-width: 1180px) {
          max-height: 355px;
          max-width: 70px;
        }

        @media (max-width: 1024px) {
          display: none;
        }

        .swiper-slide {
          display: flex;
          align-items: center;

          img {
            cursor: pointer;
          }
        }
      }
    }

    &-content {
      max-width: 604px;
      @media (min-width: 993px) {
        padding-right: 30px;
      }

      p.text {
        color: #323232;
        font-family: "Roboto";
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 131.818%;

        @include fluidFontSize(18, 22, 992, 1920);
        margin-bottom: 20px;

        @media (max-width: 992px) {
          text-align: center;
          margin-bottom: 15px;
        }

        @media (max-width: 768px) {
          font-size: 15px;
          line-height: 22px;
        }
      }

      h2 {
        color: #323232;
        font-family: "Roboto";
        font-size: 52px;
        font-style: normal;
        font-weight: 700;
        line-height: 113.462%;
        margin-bottom: 50px;

        @media (min-width: 1280px) {
          margin-bottom: 25px;
        }

        @media (max-width: 992px) {
          text-align: center;
          margin-bottom: 30px;
        }

        @include fluidFontSize(38, 52, 992, 1920);

        @media (max-width: 768px) {
          font-size: 22px;
          line-height: 29px;
        }
      }

      .info-block {
        align-items: center;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: space-evenly;
        font-family: "Roboto";
        padding: 30px 15px;

        @media (max-width: 1280px) {
          padding: 20px 10px;
        }

        @media (max-width: 1100px) {
          justify-content: space-between;
        }

        @media (max-width: 992px) {
          flex-direction: column;
          gap: 20px;
          margin: 0 auto;
          max-width: 300px;
          padding: 20px;
          text-align: center;
          margin-top: 20px;
        }

        &__logo {
          flex-shrink: 1;
          img {
            max-width: 100%;

            @media (max-width: 1280px) {
              max-width: 120px;
            }
          }
        }

        &__head {
          font-size: 22px;
          font-weight: 500;
          line-height: 130%;
          margin-bottom: 10px;

          @include fluidFontSize(18, 22, 992, 1920);

          @media (max-width: 576px) {
            font-size: 18px;
            font-weight: 400;
            line-height: 25px;
          }
        }

        &__link {
          font-size: 18px;
          line-height: normal;

          @include fluidFontSize(16, 18, 992, 1920);

          @media (max-width: 576px) {
            font-size: 15px;
          }

          a {
            color: #1e87c8;
            text-decoration: underline;
          }
        }
      }
    }
  }

  //pagination-navigation

  .about-next,
  .about-prev {
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

    position: absolute;
    z-index: 2;

    @media (max-width: 1280px) {
      transform: scale(0.7) translateY(calc(-50%));
    }

    @media (max-width: 1024px) {
      position: static;
      transform: scale(0.7);
    }
  }
  .about-next {
    right: 0;

    @media (max-width: 1280px) {
      right: -7px;
    }
  }
  .about-prev {
    left: 0;
    @media (max-width: 1280px) {
      left: -7px;
    }
  }
  @media (max-width: 1024px) {
    .about__controls {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin-top: 20px;
    }

    .about-pagination {
      display: flex !important;
      width: auto !important;

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
}
</style>