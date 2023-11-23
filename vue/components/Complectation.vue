<template>
  <section id="complectation">
    <div class="container">
      <div class="complectation-container">
        <div class="complectation-title">
          <h2>
            Полная <br />
            комплектация
          </h2>
        </div>

        <div class="complectation-wrapper">
          <div class="complectation-wrapper__items">
            <div
              v-for="(item, index) in complect"
              :key="index"
              @click="openModal(item.imgModal, item.name, item.text)"
              @mouseenter="hoverEnter(index)"
              @mouseleave="hoverLeave(index)"
              :class="[
                'complectation-item',
                'complectation-item-' + (index + 1),
                item.hover ? 'complectation-item--active' : '',
              ]"
            >
              <p v-html="index + 1 + '. ' + item.name"></p>
            </div>
          </div>
          <div class="complectation-wrapper__imgs">
            <div v-for="(item, index) in complect" :key="index">
              <div
                v-if="!break1136"
                :class="['arrow', 'arrow-' + (index + 1)]"
              ></div>
              <my-image
                v-if="item.img"
                :class="['complectation-img', item.img]"
                :alt="'#'"
                :floder="'complectation'"
                :mobile="false"
                :imgName="item.img"
              />
              <div
                v-if="break1136"
                @click="openModal(item.imgModal, item.name, item.text)"
                :class="[
                  'plus',
                  'plus-' + (index + 1),
                  item.hover ? 'plus--active' : '',
                ]"
              >
                <svg
                  @mouseenter="hoverEnter(index)"
                  @mouseleave="hoverLeave(index)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="24"
                    fill="#047DD9"
                    fill-opacity="0.4"
                  />
                  <circle cx="24" cy="24" r="17" fill="#047DD9" />
                  <path
                    d="M22.672 32.944C22.4373 32.944 22.2453 32.8693 22.096 32.72C21.9467 32.5707 21.872 32.3787 21.872 32.144V26.096H15.952C15.7173 26.096 15.5253 26.0213 15.376 25.872C15.2267 25.7227 15.152 25.5413 15.152 25.328V23.312C15.152 23.0773 15.2267 22.8853 15.376 22.736C15.5253 22.5867 15.7173 22.512 15.952 22.512H21.872V16.656C21.872 16.4213 21.9467 16.2293 22.096 16.08C22.2453 15.9307 22.4373 15.856 22.672 15.856H24.88C25.1147 15.856 25.3067 15.9307 25.456 16.08C25.6053 16.2293 25.68 16.4213 25.68 16.656V22.512H31.6C31.8133 22.512 31.9947 22.5867 32.144 22.736C32.2933 22.8853 32.368 23.0773 32.368 23.312V25.328C32.368 25.5413 32.2933 25.7227 32.144 25.872C31.9947 26.0213 31.8133 26.096 31.6 26.096H25.68V32.144C25.68 32.3787 25.6053 32.5707 25.456 32.72C25.3067 32.8693 25.1147 32.944 24.88 32.944H22.672Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <complectation-presents />
    </div>

    <div id="complectation-modal" style="display: none">
      <div class="complectation-modal__wrap">
        <my-image
          :alt="'автоклав крестьянка с тен'"
          :floder="'complectation'"
          :mobile="false"
          :imgName="modal.img"
        />
        <div>
          <p class="modal-title" v-html="modal.title"></p>
          <p class="modal-text" v-html="modal.text"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ComplectationPresents from "../components/ComplectationPresents.vue";
import MyImage from "../UI/MyImage.vue";

export default {
  components: {
    MyImage,
    ComplectationPresents,
  },
  data() {
    return {
      break1136: window.innerWidth < 1137,

      modal: {
        img: "modal-1",
        text: "",
        title: "",
      },
      complect: [
        {
          name: "Бак с ручками и ферромагнитным дном",
          img: "bak",
          hover: false,
          imgModal: "modal-1",
          text: `
            Уникальный бак гарантирует надёжность и эффективность работы, позволяет за 1 раз заготовить до 28 банок по 0,5 литра.
            <br><br>
            Укреплённое ферромагнитное дно (сталь AISI 430) даёт возможность использовать плиты любого типа. ТЭН мощностью 1,5 либо 2 кВт — это нагрев системы от электросети. Высокая прочность и толщина (дно с кольцевыми рёбрами жёсткости — не менее 2 мм) помогают выдерживать давление минимум 3 атм (при рабочем давлении в 1,5 атм). 
            <br><br>
            Бак оборудован изогнутым краном. С ним остывшую воду можно слить прямо в ёмкость, либо закрепить шланг на носике. С помощью ручек автоклав удобно переносить, ставить и снимать с плиты. Уплотнённая эргономичная форма легко ложится в ладонь и не впивается в неё — аппарат не выскользнет и не упадёт на пол.
            `,
        },

        {
          name: "Электронный термометр",
          img: "term",
          hover: false,
          imgModal: "modal-2",
          text: `
          Ещё один элемент контроля — электронный термометр. Именно комплексный учёт показаний термометра и манометра позволит точно определить режим, оптимальный для конкретной заготовки. Мы используем надёжный термометр Termo (работает на батарейках). Температура замеров: -40 – +150०С.`,
        },

        {
          name: "Манометр",
          hover: false,
          imgModal: "modal-3",
          text: `Самое важное в процессе автоклавирования —  контроль показателей. Мы используем 
          качественный радиальный манометр со шкалой до 6 атм (0,6 мПа). Размещение — на крышке бака.`,
        },

        {
          name: "Кламповое соединение",
          img: "cap",
          hover: false,
          imgModal: "modal-4",
          text: `Хотите сэкономить за счёт многофункциональности оборудования? Автоклав «Крестьянка» легко модифицировать, превратив его в дистиллятор. Для максимальной надёжности крепления мы разместили на крышке бака кламповое соединение (в основном режиме работы автоклава оно закрыто заглушкой).`,
        },

        {
          name: "Крышка с резиновой прокладкой",
          hover: false,
          imgModal: "modal-5",
          text: `Автоклав «Крестьянка» оборудован современной купольной крышкой. Она полностью снимается, что обеспечивает удобное размещение банок любого размера. Крепление производится на рым-болты (6 шт.). Они, а также прокладка из пищевого силикона (толщина 10 мм), надёжно удерживают крышку, обеспечивая полную герметичность.
            <br><br>
            Выделенное заменить на “Она полностью снимается, что позволяет удобно разместить банки любого размера”`,
        },

        {
          name: "Инструкция и гарантия",
          img: "book",
          hover: false,
          imgModal: "modal-6",
          text: `Чтобы ваша работа с автоклавом «Крестьянка» была максимально эффективной и безопасной, мы предоставляем инструкцию по эксплуатации. Она содержит подробное описание всех комплектующих, основные характеристики, специфику работы в разных режимах, ухода, меры предосторожности.
            <br><br>
            Мы — производитель, уверенный в качестве собственного оборудования, потому предлагаем на свои изделия гарантию. Для автоклава «Крестьянка» это 1 год. Гарантийный талон — документ, на основании которого может быть осуществлён ремонт, замена оборудования либо возврат финансовых средств в течение срока гарантии (1 год).`,
        },

        {
          name: "Фальш-дно",
          img: "dno",
          hover: false,
          imgModal: "modal-7",
          text: `Данная комплектующая выступает в качестве подставки под банки с продуктами, устанавливается на зиговке бака автоклава (полоса вдоль корпуса бака). С ним ёмкости размещаются ровно и при этом не касаются элементов питания — это позволяет обеспечить равномерный нагрев. Диаметр — 268 мм (единый для всех моделей). 
          <br><br>
          В моделях без ТЭНа фальш-дно в комплекте отсутствует.`,
        },
        {
          name: "Рым-болты (6 шт.)",
          img: "bolt",
          hover: false,
          imgModal: "modal-8",
          text: `Крепление крышки производится на рым-болты (6 шт.). Нержавеющая сталь в их составе защищает от коррозии, а толщина с карандаш делает стойкими к механическим повреждениям.
          <br>
          <br>
          Болты не требуют много сил — закручивать их легко и удобно.`,
        },
      ],
    };
  },
  methods: {
    hoverEnter(index) {
      this.complect[index].hover = true;
    },
    hoverLeave(index) {
      this.complect[index].hover = false;
    },

    openModal(img, title, text) {
      this.modal.img = img;
      this.modal.title = title;
      this.modal.text = text;

      setTimeout(() => {
        Fancybox.show([
          {
            src: "#complectation-modal",
          },
        ]);
      }, 100);
    },
  },

  mounted() {
    const windowbreakpoint = window.matchMedia("(max-width: 1136px)");
    const breakpointChecker = () => {
      if (!windowbreakpoint.matches) {
        this.break1136 = false;
      } else {
        this.break1136 = true;
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

$middle-line: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjc1IiBoZWlnaHQ9IjEyIiB2aWV3Qm94PSIwIDAgNjc1IDEyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMSA1QzAuNDQ3NzE1IDUgLTQuODI4MjNlLTA4IDUuNDQ3NzIgMCA2QzQuODI4MjNlLTA4IDYuNTUyMjggMC40NDc3MTUgNyAxIDdMMSA1Wk02NzUgNS45OTk5NEw2NjUgMC4yMjY0MzlMNjY1IDExLjc3MzRMNjc1IDUuOTk5OTRaTTEgN0w2NjYgNi45OTk5NEw2NjYgNC45OTk5NEwxIDVMMSA3WiIgZmlsbD0iIzMyMzIzMiIgZmlsbC1vcGFjaXR5PSIwLjM3Ii8+Cjwvc3ZnPgo=);

#complectation {
  overflow: hidden;
  @extend %padd;
  padding-top: 50px;

  img:not(.loaded) {
    opacity: 0;
  }

  .complectation-container {
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
    padding: 0 20px 50px;
  }

  .complectation-title {
    h2 {
      color: #fff;
      text-align: center;
      font-family: "Roboto";
      font-size: 52px;
      font-style: normal;
      font-weight: 600;
      line-height: 113.462%;
      text-transform: uppercase;

      @include fluidFontSize(22, 44, 320, 992);
      @media (min-width: 769px) {
        br {
          display: none;
        }
      }
    }

    padding: 10px 20px;
    border-radius: 0px 0px 10px 10px;
    background: #047dd9;
    max-width: max-content;
    margin: 0 auto 50px;

    @media (max-width: 768px) {
      margin: 0 auto;
    }
  }

  .complectation-wrapper {
    display: grid;
    grid-template-columns: calc(342px + 20px) 1fr;
    max-width: 1178px;
    margin: 0 auto;

    @media (max-width: 1136px) {
      grid-template-columns: minmax(0, 362px) minmax(335px, 1fr);
      gap: 20px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    &__items {
      grid-column: 1/2;
      grid-row: 1/2;
      z-index: 5;
      background: #fff;

      @media (min-width: 1137px) {
        padding: 10px 20px 80px 0;
      }

      @media (max-width: 768px) {
        display: none;
      }

      .complectation-item {
        border-radius: 10px;
        background-color: #f9f9f9;
        padding: 10px 20px;
        transition: background-color 0.4s;
        cursor: pointer;

        &:not(:last-child) {
          margin-bottom: 10px;
        }

        p {
          color: #323232;
          font-family: "Roboto";
          font-size: 22px;
          font-style: normal;
          font-weight: 500;
          line-height: 131.818%;

          @media (max-width: 1136px) {
            @include fluidFontSize(16, 22, 768, 1136);
          }
        }

        &--active {
          background-color: rgba(4, 125, 217, 0.7);

          p {
            color: #fff;
          }
        }
      }
    }

    &__imgs {
      grid-column: 1/-1;
      grid-row: 1/2;
      overflow: hidden;
      z-index: 4;
      position: relative;

      @media (min-width: 1137px) {
        .arrow {
          &::before {
            content: $middle-line;
            position: absolute;
          }

          &-1 {
            &::before {
              top: 42px;
              right: 42.5%;
            }
          }

          &-2 {
            &::before {
              top: 112px;
              right: 50.5%;
            }
          }

          &-3 {
            &::before {
              top: 173px;
              right: 15%;
              z-index: 6;
            }
          }

          &-4 {
            &::before {
              z-index: 6;
              top: 229px;
              right: 12.5%;
            }
          }

          &-5 {
            &::before {
              top: 307px;
              right: 16.5%;
            }
          }

          &-6 {
            &::before {
              top: 380px;
              right: 53.5%;
            }
          }

          &-7 {
            &::before {
              top: 440px;
              right: 25.5%;
            }
          }

          &-8 {
            &::before {
              top: 500px;
              right: 41.5%;
            }
          }
        }
      }

      @media (max-width: 1136px) {
        grid-column: 2/3;

        .plus {
          position: absolute;
          cursor: pointer;
          z-index: 10;
          animation: pulse 2s linear infinite;

          &:hover {
            animation: none;
          }

          svg {
            * {
              transition: all 0.4s;
            }

            @media (max-width: 576px) {
              transform: scale(0.5);
            }
          }

          &--active {
            svg {
              circle {
                fill: #f9f9f9;

                &:last-child {
                  fill: #f9f9f9;
                  opacity: 0.7;
                }
              }

              path {
                fill: #323232;
                opacity: 0.7;
              }
            }
          }

          &-1 {
            top: 47%;
            right: 55%;

            @media (max-width: 576px) {
              top: 42%;
              right: 51%;
            }
          }

          &-2 {
            top: 159px;
            left: 5%;

            @media (max-width: 576px) {
              top: 140px;
              left: 3%;
            }
          }

          &-3 {
            top: 31%;
            right: 23%;

            @media (max-width: 576px) {
              top: 30%;
              right: 19%;
            }
          }

          &-4 {
            top: 44%;
            right: 2%;

            @media (max-width: 576px) {
              top: 37%;
              right: 1%;
            }
          }

          &-5 {
            top: 48%;
            right: 18%;

            @media (max-width: 576px) {
              top: 42%;
              right: 15%;
            }
          }

          &-6 {
            bottom: 17%;
            left: 9%;
          }

          &-7 {
            bottom: 20px;
            right: 2%;

            @media (max-width: 576px) {
              bottom: 76px;
              right: 0;
            }
          }

          &-8 {
            bottom: 27px;
            left: 29%;
          }
        }
      }

      @media (max-width: 992px) {
        align-self: center;
        height: 95%;
      }

      @media (max-width: 768px) {
        grid-column: 1/-1;
        min-height: 460px;
        width: 100%;
        margin: 0 auto;
        max-width: 420px;
      }

      @media (max-width: 576px) {
        min-height: 350px;
        max-width: 240px;
        margin: -40px auto;
      }

      .complectation-img {
        position: absolute;

        img {
          max-width: 100%;
        }

        &.bak {
          right: 32px;
          top: 0;
          z-index: 7;
          width: 42%;

          @media (max-width: 1136px) {
            top: 80px;
            width: 66%;
            right: auto;
            left: 16%;
          }
        }

        &.term {
          top: 80px;
          right: 45%;

          @media (max-width: 1136px) {
            top: 110px;
            left: 0;
            width: 40px;
            right: auto;
          }
          @media (max-width: 576px) {
            width: 31px;
          }
        }

        &.cap {
          right: 0;
          top: 143px;
          z-index: 5;
          width: 19%;

          @media (max-width: 1240px) {
            top: 151px;
          }

          @media (max-width: 1136px) {
            width: 32%;
            top: 31%;
            right: 2%;
          }
        }

        &.book {
          top: 340px;
          right: 43.5%;

          @media (max-width: 1136px) {
            width: 70px;
            left: 4%;
            right: auto;
            top: auto;
            bottom: 26%;
          }

          @media (max-width: 576px) {
            left: 0;
            bottom: 26%;
            width: 55px;
          }
        }

        &.dno {
          right: 8%;
          bottom: 46px;
          width: 16%;

          @media (max-width: 1136px) {
            width: 27%;
            right: 6%;
          }

          @media (max-width: 576px) {
            width: 30%;
            right: 16%;
            bottom: 68px;
          }
        }

        &.bolt {
          right: 24%;
          bottom: 0;
          width: 15%;

          @media (max-width: 1136px) {
            width: 28%;
            left: 32%;
            bottom: 35px;
          }

          @media (max-width: 576px) {
            bottom: 21px;
            left: 22%;
          }
        }
      }
    }
  }
}

#complectation-modal {
  border-radius: 10px;
  background: #fff;
  max-width: 836px;
  width: 100%;

  @media (max-width: 576px) {
    padding: 40px 20px 20px !important;
    max-width: 300px;
    width: 100%;
  }

  .is-close {
    top: 5px;
    right: 5px;
    color: #323232;
    svg {
      filter: none;
    }
  }

  .complectation-modal__wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 30px;

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }

    img {
      max-width: 100%;
    }

    p {
      color: #323232;
      font-family: "Roboto";
      font-style: normal;
      line-height: normal;
    }

    .modal-title {
      font-size: 30px;
      font-weight: 700;
      margin-bottom: 30px;

      @media (max-width: 768px) {
        font-size: 24px;
        margin-bottom: 20px;
      }
    }

    .modal-text {
      font-size: 20px;
      font-weight: 300;
      line-height: 27px; /* 135% */

      @media (max-width: 768px) {
        font-size: 18px;
      }
    }
  }
}
</style>
