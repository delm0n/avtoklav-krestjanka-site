<template>
  <section id="faq">
    <div class="container">
      <div class="title-box">
        <h2><span> FAQ — ответы </span> на самые популярные вопросы</h2>
      </div>
      <div class="faq-wrapper">
        <div v-for="(item, index) in questions" :key="index" class="faq-item">
          <div @click="showHide(index)" class="faq-item__title">
            <p v-html="item.title"></p>
            <button :class="item.open ? 'button-opacity' : ''">
              <span> {{ item.open ? "Свернуть" : "Раскрыть" }} </span>

              <svg
                :style="
                  item.open
                    ? 'transform: rotate(180deg)'
                    : 'transform: rotate(0deg)'
                "
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
              >
                <path
                  d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7L7 8L9 8L9 7L7 7Z"
                  fill="#047DD9"
                />
              </svg>
            </button>
          </div>
          <transition
            name="collapse"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:before-leave="beforeLeave"
            v-on:leave="leave"
          >
            <div v-show="item.open" class="faq-item__content">
              <div class="text-box">
                <p v-html="item.content"></p>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import transitionHeight from "../mixins/transitionHeight";

export default {
  mixins: [transitionHeight],
  data() {
    return {
      questions: [
        {
          title: "Какие банки можно использовать в автоклавах «Крестьянка»?",
          content: `Для автоклавов «Крестьянка» подойдут стеклянные и жестяные банки. Объём от 100 до 3000&nbsp;мл.`,
          open: false,
        },

        {
          title:
            "Можно ли использовать автоклавы «Крестьянка» на открытом огне?",
          content: `Автоклавы «Крестьянка» работают на всех видах плит: газовых, индукционных, электрических, керамических.
           При приготовлении консервов на портативных плитках нужно учитывать вес полного стерилизатора с банками.`,
          open: false,
        },

        {
          title: "Может ли деформироваться дно автоклава при работе на плите?",
          content: `Во всех моделях автоклава «Крестьянка» дно утолщённое, изготовлено из стали 2 мм и оснащено 
          специальными рёбрами жёсткости. Оно не может прогореть или деформироваться при работе на плите.`,
          open: false,
        },

        {
          title: "Какие крышки используются в автоклавах «Крестьянка»?",
          content: `Банки можно закрывать крышками СКО или твист-офф. Чтобы крышки СКО не сорвало, рекомендуем
           приобрести индивидуальные зажимы. Два зажима (нижний и верхний) удержат крышку в процессе 
           автоклавирования (для крышек твист-офф они не нужны).`,
          open: false,
        },
      ],
    };
  },

  methods: {
    showHide(i) {
      this.questions.forEach((element, index) => {
        index == i
          ? (element.open = element.open == true ? false : true)
          : (element.open = false);
      });
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#faq {
  @extend %padd;
  overflow: hidden;
  .faq-item {
    &:not(:last-child) {
      margin-bottom: 30px;

      @media (max-width: 768px) {
        margin-bottom: 20px;
      }
    }

    &__title {
      border-radius: 10px;
      background: #fff;
      box-shadow: 0px 4px 15px 0px rgba(170, 170, 170, 0.2);
      display: flex;
      justify-content: space-between;
      gap: 25px;
      align-items: center;
      padding: 20px 30px;
      position: relative;
      z-index: 2;

      @media (max-width: 768px) {
        padding: 10px 20px;
        gap: 10px;
      }

      @media (max-width: 576px) {
        padding: 15px;
      }

      p {
        color: #565656;
        font-family: "Roboto";
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;

        @include fluidFontSize(24, 32, 992, 1920);

        @media (max-width: 768px) {
          font-size: 16px;
          line-height: normal;
        }
      }

      button {
        padding: 10px;
        background: #fff;
        border: none;
        cursor: pointer;
        transition: all 0.4s;

        @media (min-width: 769px) {
          &.button-opacity {
            opacity: 0.5;
          }
          gap: 15px;
          border-radius: 10px;
          border: 1px solid $main;
          display: flex;
          padding: 10px 15px;
          align-items: center;
        }

        span {
          min-width: 86px;
          color: $main;
          font-family: "Inter";
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 25px;

          @media (max-width: 768px) {
            position: absolute;
            visibility: hidden;
          }
        }

        svg {
          transition: 0.4s all;
        }
      }
    }

    &__content {
      border-radius: 0px 0px 10px 10px;
      background: #f6f6f6;
      transition: all 0.4s ease;
      max-width: 80%;
      margin: 0 auto;

      @media (max-width: 992px) {
        max-width: 95%;
      }

      .text-box {
        border-radius: 0px 0px 10px 10px;
        background: var(
          --unnamed,
          linear-gradient(
            143deg,
            rgba(244, 244, 244, 0.78) 0%,
            rgba(238, 238, 238, 0.24) 100%
          )
        );
        padding: 50px;

        @media (max-width: 1280px) {
          padding: 40px;
        }

        @media (max-width: 992px) {
          padding: 30px;
        }

        @media (max-width: 768px) {
          padding: 20px;
        }

        @media (max-width: 576px) {
          padding: 15px 10px;
        }
      }

      p {
        color: #323232;
        font-family: "Roboto";
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px;

        @media (max-width: 768px) {
          font-size: 14px;
          line-height: 21px;
        }
      }
    }
  }
}
</style>
