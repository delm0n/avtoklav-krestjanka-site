<template>
  <section id="opt-hero">
    <div class="container">
      <div class="opt-hero__wrapper">
        <div class="opt-hero__img">
          <my-image
            :alt="'автоклав от helicon'"
            :floder="'opt'"
            :imgName="'opt-hero'"
            :lazyLoad="false"
            :media="993"
          />
        </div>
        <div class="opt-hero__title">
          <h1>Аппарат для домашнего консервирования «Крестьянка»</h1>
          <h2>
            Автоклавы популярны в розничных точках продаж и интернет-магазинах
          </h2>
        </div>
        <div class="opt-hero__features">
          <ul>
            <li v-for="(item, index) in list" :key="index" v-html="item"></li>
          </ul>

          <button @click="openModal()" class="button">Узнать стоимость</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
export default {
  components: { MyImage },
  data() {
    return {
      list: [
        `Стоимость привлекательна для конечного покупателя`,
        `Бренд известен целевой аудитории по рекламе`,
        `Качество документально подтверждается гарантией производителя`,
      ],
    };
  },

  methods: {
    openModal() {
      setTimeout(() => {
        Fancybox.show([
          {
            src: "#opt-modal",
          },
        ]);
      }, 10);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

@mixin marbo() {
  margin-bottom: 50px;

  @media (max-width: 1366px) {
    margin-bottom: 35px;
  }
}

#opt-hero {
  overflow: hidden;
  padding: 120px 0 100px;

  @media (max-width: 768px) {
    padding: 90px 0 60px;
  }

  .opt-hero {
    &__wrapper {
      display: grid;
      grid-template-columns: 1fr 52.5%;
      grid-template-rows: auto 1fr;
      width: 100%;
    }

    &__img {
      grid-column: 2/3;
      grid-row: 1/3;
      align-self: center;

      @media (max-width: 992px) {
        grid-column: 1/3;
        grid-row: 2/3;
        margin: 0 auto;
        max-width: 500px;
        width: 100%;
        @include marbo();
      }

      img {
        max-width: 100%;
      }
    }

    &__title {
      grid-column: 1/2;
      grid-row: 1/2;

      color: #323232;
      font-family: "Roboto";
      font-style: normal;

      @include marbo();

      @media (min-width: 1146px) {
        margin-top: 50px;
      }

      @media (max-width: 992px) {
        grid-column: 1/3;
        grid-row: 1/2;
        text-align: center;
      }

      h1 {
        font-size: 43px;
        font-weight: 600;
        line-height: 116.279%;
        margin-bottom: 30px;

        @include fluidFontSize(32, 43, 992, 1440);

        @media (max-width: 575px) {
          font-size: 27px;
          line-height: 34px;
          margin-bottom: 10px;
        }
      }

      h2 {
        font-size: 32px;
        font-weight: 400;
        line-height: 121.875%;

        @include fluidFontSize(24, 32, 992, 1440);

        @media (max-width: 575px) {
          font-size: 22px;
          line-height: 29px;
        }
      }
    }

    &__features {
      grid-column: 1/2;
      grid-row: 2/3;

      @media (max-width: 992px) {
        grid-column: 1/3;
        grid-row: 3/4;

        button {
          margin: 0 auto;
        }
      }

      ul {
        @include marbo();

        @media (max-width: 992px) {
          margin: 0 auto 40px;
          max-width: 465px;
          width: 100%;
        }

        li {
          color: #323232;
          font-family: "Roboto";
          font-size: 22px;
          font-style: normal;
          font-weight: 300;
          line-height: 131.818%;
          position: relative;
          padding-left: 44px;

          &:not(:last-child) {
            margin-bottom: 30px;

            @media (max-width: 992px) {
              margin-bottom: 20px;
            }
          }

          @include fluidFontSize(18, 22, 992, 1440);

          @media (max-width: 1280px) {
            padding-left: 30px;
          }

          @media (max-width: 768px) {
            font-size: 16px;
            line-height: 22px;
            padding-left: 30px;
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
}
</style>