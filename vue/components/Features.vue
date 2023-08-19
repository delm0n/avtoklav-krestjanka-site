<template>
  <section id="features">
    <div class="container">
      <div class="features-wrapper">
        <div
          v-for="(feat, index) in features"
          :key="index"
          class="features-item"
        >
          <my-image
            :floder="'features'"
            :imgName="feat.img"
            :alt="feat.title"
            :mobile="false"
            :lazyLoad="false"
          />
          <p v-html="feat.title"></p>
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
      features: [
        {
          title: "Работает на воде и на пару",
          img: "features-1",
        },

        {
          title: "Укреплённое дно",
          img: "features-2",
        },

        {
          title: "Термостойкие ручки",
          img: "features-3",
        },

        {
          title: "Медицинская сталь AISI 304",
          img: "features-4",
        },

        {
          title: "Доставка от 2 дней",
          img: "features-5",
        },

        {
          title: "Дешевле аналогов",
          img: "features-6",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#features {
  overflow: hidden;
  @extend %padd;

  .features-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;

    @media (max-width: 1440px) {
      gap: 20px;
    }

    @media (max-width: 1280px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      max-width: 820px;
      margin: 0 auto;
    }

    @media (max-width: 576px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }
  }

  .features-item {
    border-radius: 10px;
    border: 2px solid #e8e8e8;
    padding: 20px;

    .img-wrap {
      margin: 0 auto 15px;
      picture {
        justify-content: center;
      }
    }

    p {
      color: #565656;
      text-align: center;
      font-family: "Roboto";
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 29px;

      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 25px;
        letter-spacing: 0.16px;
      }
    }

    &__text {
      color: #323232;
      text-align: center;
      font-family: "Rubik";
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      line-height: 25px;
      letter-spacing: 0.18px;

      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.14px;
      }
    }
  }
}
</style>
