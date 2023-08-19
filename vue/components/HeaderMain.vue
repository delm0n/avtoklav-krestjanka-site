<template>
  <div class="header-main">
    <div
      :class="'header-main__img ' + (getWebp == 'webp' ? 'webp-bg' : 'png-bg')"
    >
      <picture v-if="mobile"
        ><source
          srcset="uploadupdate/header/main-tablet.webp"
          type="image/webp"
        />
        <img
          src="uploadupdate/header/main-tablet.png"
          alt="автоклав купить онлайн"
        />
      </picture>
    </div>
    <div class="header-main__form">
      <div class="form-box">
        <div class="header-main__form-video">
          <video width="0" muted autoplay controls loop style="width: 100%">
            <source
              src="uploadupdate/video.mp4"
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            />
          </video>

          <header-form :mobile="mobile" />
        </div>
      </div>
    </div>

    <div class="header-main__title">
      <h1>Автоклав «Крестьянка»</h1>
      <h2>Вкусно для любимых. Конструкция, одобренная тысячами покупателей</h2>
    </div>
  </div>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import HeaderForm from "./HeaderForm.vue";
import { mapGetters } from "vuex";

export default {
  components: { MyImage, HeaderForm },
  computed: mapGetters(["getWebp"]),
  data() {
    return {
      mobile: window.innerWidth < 993,
    };
  },

  mounted() {
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
.header-main {
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;
  padding: 100px 20px 0 0;
  display: grid;
  grid-template-columns: 49% 5% auto;
  grid-template-rows: auto 1fr;

  @media (max-width: 1280px) {
    padding: 120px 20px 90px 0;
    grid-template-rows: auto 1fr;
    grid-template-columns: minmax(510px, 1fr) 0 minmax(370px, 580px);
  }

  @media (max-width: 992px) {
    padding: 110px 20px 60px;
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    padding: 80px 20px 50px;
    grid-template-columns: 1fr;
  }

  &__img {
    grid-column: 1/2;
    grid-row: 1/3;

    @media (max-width: 1280px) {
      grid-column: 1/4;
      grid-row: 1/4;
    }

    @media (max-width: 992px) {
      grid-column: 1/2;
      grid-row: 2/3;

      img {
        margin: 0 auto;
        max-width: calc(100% + 40px);
        transform: translateX(-20px);
      }
    }

    @mixin type-bg($type) {
      background: url("../../uploadupdate/header/main." + $type) no-repeat;

      @media (max-width: 1700px) {
        background-position: -100px 0;
      }

      @media (max-width: 1500px) {
        background-position: -200px 0;
      }

      @media (max-width: 1280px) {
        background-size: 70%;
        background-position: left -35% bottom 20px;
      }
    }

    @media (min-width: 993px) {
      &.webp-bg {
        @include type-bg("webp");
      }

      &.png-bg {
        @include type-bg("png");
      }
    }
  }

  &__form {
    grid-column: 2/4;
    grid-row: 2/3;

    @media (max-width: 1280px) {
      grid-row: 1/3;
    }

    @media (max-width: 992px) {
      grid-column: 1/2;
      grid-row: 3/4;
      margin: 30px auto 0;
      max-width: 650px;
      width: 100%;
    }

    @media (max-width: 768px) {
      max-width: 490px;
    }

    .form-box {
      max-width: 692px;
      padding: 30px;
      border-radius: 10px;
      background: #fff;
      box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);

      @media (max-width: 1300px) {
        padding: 25px;
      }

      @media (max-width: 768px) {
        padding: 20px;
      }

      @media (max-width: 576px) {
        padding: 15px 10px 20px;
      }
    }
  }

  &__title {
    grid-column: 2/4;
    grid-row: 1/2;
    margin-bottom: 30px;
    padding: 0 20px;

    @media (max-width: 1280px) {
      grid-row: 1/2;
      grid-column: 1/2;
    }

    @media (max-width: 992px) {
      grid-column: 1/2;
      grid-row: 1/2;
      margin-bottom: 0px;
    }

    @media (max-width: 475px) {
      padding: 0;
    }

    h1 {
      color: #047dd9;
      font-family: "Roboto";
      font-size: 52px;
      font-style: normal;
      font-weight: 900;
      line-height: 59px; /* 113.462% */
      text-transform: uppercase;
      margin-bottom: 15px;

      @media (max-width: 1280px) {
        font-size: 46px;
        line-height: 113%;
      }

      @media (max-width: 992px) {
        text-align: center;
      }

      @media (max-width: 576px) {
        font-size: 32px;
        line-height: 39px;
        margin-bottom: 10px;
      }
    }

    h2 {
      color: #323232;
      font-family: "Roboto";
      font-size: 27px;
      font-style: normal;
      font-weight: 400;
      line-height: 34px; /* 125.926% */
      max-width: 515px;

      @media (max-width: 1280px) {
        font-size: 24px;
        line-height: 130%;
      }
      @media (max-width: 992px) {
        text-align: center;
        margin: 0 auto;
      }

      @media (max-width: 576px) {
        font-size: 18px;
        line-height: 25px;
      }
    }
  }
}
</style>