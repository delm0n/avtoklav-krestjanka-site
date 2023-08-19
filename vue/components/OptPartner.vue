<template>
  <section id="opt-partner">
    <div class="container">
      <div class="opt-partner__wrapper">
        <div class="opt-partner__wrapper-img">
          <my-image
            :alt="'преимущества helicon при заказе автоклава '"
            :floder="'opt'"
            :imgName="'partner'"
            :media="993"
          />
        </div>
        <div class="opt-partner__wrapper-content">
          <h2>
            Для партнёров HELICON — только
            <span> лучшие условия</span>
          </h2>

          <ul>
            <li v-for="(item, index) in list" :key="index" v-html="item"></li>
          </ul>
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
        "Оперативная доставка по всей России",
        "Ежемесячные акции",
        "Прогрессивная система скидок",
        "Гарантия от производителя",
        "Информирование и консультация ваших клиентов",
        "Свой сервисный центр",
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

@mixin box() {
  max-width: 604px;
  width: 100%;
  padding-left: 30px;
}

#opt-partner {
  overflow: hidden;
  @extend %padd;

  .opt-partner__wrapper {
    display: flex;
    align-items: stretch;

    @media (max-width: 992px) {
      flex-direction: column-reverse;
      gap: 30px;
      max-width: 620px;
      margin: 0 auto;
      width: 100%;
    }

    &-img {
      position: relative;
      border-radius: 10px;
      background: #fff;
      flex-shrink: 1;
      min-width: 50%;

      @media (min-width: 993px) {
        align-self: center;
      }

      img {
        max-width: 100%;
        border-radius: 10px;
      }
    }

    &-content {
      display: flex;
      max-width: 604px;
      flex-direction: column;
      justify-content: center;
      gap: 50px;

      @media (min-width: 993px) {
        padding-left: 30px;
      }

      @media (max-width: 1280px) {
        gap: 25px;
      }

      ul {
        @media (max-width: 992px) {
          max-width: 480px;
          margin: 0 auto;
        }
        li {
          padding-left: calc(29px + 15px);
          position: relative;
          color: #323232;
          font-family: "Roboto";
          font-size: 22px;
          font-style: normal;
          font-weight: 300;
          line-height: 131%;
          @media (min-width: 993px) {
            max-width: 415px;
          }
          width: 100%;

          @include fluidFontSize(18, 22, 992, 1920);

          @media (max-width: 1280px) {
            padding-left: 35px;
          }

          @media (max-width: 768px) {
            padding-left: 18px;
            font-size: 15px;
          }

          &:not(:last-child) {
            margin-bottom: 20px;

            @media (max-width: 1280px) {
              margin-bottom: 15px;
            }

            @media (max-width: 768px) {
              margin-bottom: 10px;
            }
          }

          &::before {
            content: "";
            position: absolute;
            top: 0;
            width: 29px;
            height: 29px;
            left: 0;

            @media (max-width: 1280px) {
              width: 22px;
              height: 22px;
            }

            background-size: contain;
            background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAyOSAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI5IiBoZWlnaHQ9IjI5IiByeD0iMTQuNSIgZmlsbD0iIzAwREIyOSIvPgo8cGF0aCBkPSJNNi42NDQ1MyAxMy44OTU1TDEyLjA4MiAxOS4zMzNMMjEuMTQ0NSAxMC4yNzA1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K);

            @media (max-width: 768px) {
              width: 8px;
              height: 8px;
              background: #00ac07;
              border-radius: 100%;
              top: 4px;
            }
          }
        }
      }

      h2 {
        color: #323232;

        font-family: "Roboto";
        font-size: 52px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;

        @include fluidFontSize(38, 52, 992, 1920);

        @media (max-width: 992px) {
          text-align: center;
        }

        @media (max-width: 768px) {
          font-size: 27px;
          line-height: 34px;
          max-width: 465px;
          width: 100%;
        }

        span {
          color: $main;
        }
      }
    }
  }
}
</style>