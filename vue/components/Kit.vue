<template>
  <section id="kit">
    <div class="container">
      <div class="title-box">
        <h2>Откройте <span> больше возможностей </span> «Крестьянки»</h2>
        <p class="subtitle">Вместе с полезными дополнениями</p>
      </div>

      <div class="kit-wrapper">
        <div v-if="!mobile" class="kit-wrapper__dops">
          <ul class="kit__list">
            <li v-for="(item, index) in getDops" :key="index" class="kit__item">
              <div class="kit__item-content">
                <label class="kit__item-checkbox checkbox">
                  <input
                    v-model="item.selected"
                    class="checkbox__disabled"
                    type="checkbox"
                  />
                  <span class="checkbox__active"> </span>
                </label>
                <div class="kit__item-img">
                  <my-image
                    class="kit-icon"
                    :alt="'#'"
                    :floder="'kit'"
                    :imgName="item.icon"
                    :mobile="false"
                  />
                </div>
                <p
                  class="kit__item-name"
                  @click="openModal(index)"
                  v-html="item.name"
                ></p>
              </div>
              <div class="kit__item-price">
                <span class="old" v-html="item.oldPrice + ' руб.'"></span>
                <span class="new" v-html="item.price + ' руб.'"></span>
              </div>
            </li>
          </ul>
        </div>
        <div class="kit-wrapper__img">
          <div class="kit-images">
            <div v-for="(item, index) in getDops" :key="index">
              <my-image
                :class="
                  'dops-img ' +
                  item.kit +
                  (item.selected ? ' dops-img--active ' : '')
                "
                :alt="'#'"
                :floder="'kit'"
                :imgName="item.kit"
                :mobile="false"
              />
              <label
                v-if="mobile"
                :class="'kit__item-checkbox checkbox ' + item.kit + '-checkbox'"
              >
                <input
                  v-model="item.selected"
                  class="checkbox__disabled"
                  type="checkbox"
                />
                <span class="checkbox__active"> </span>
              </label>
            </div>

            <my-image
              class="kit-main"
              :alt="'#'"
              :floder="'kit'"
              :imgName="getMainItem.kit"
              :mobile="false"
              :lazyLoad="false"
            />
          </div>
        </div>
        <div class="kit-wrapper__form">
          <kit-form :mobileProp="mobile" />
        </div>
      </div>
    </div>

    <div id="kit-modal" style="display: none">
      <div class="kit-modal__wrapper">
        <my-image
          class="kit-modal__img"
          :alt="'#'"
          :floder="'kit'"
          :imgName="modalContent.img"
          :lazyLoad="false"
          :mobile="false"
        />
        <div class="kit-modal__content">
          <p class="title" v-html="modalContent.title"></p>
          <p
            v-for="(par, index) in modalContent.text"
            :key="index"
            class="text"
            v-html="par"
          ></p>
          <ul>
            <li
              v-for="(li, index) in modalContent.list"
              :key="index"
              class="list-item"
              v-html="li"
            ></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import MyImage from "../UI/MyImage.vue";
import KitForm from "./KitForm.vue";

export default {
  components: { MyImage, KitForm },
  data() {
    return {
      mobile: window.innerWidth < 993,
      modalContent: {
        title: "",
        img: "grate_and_tray-modal",
        text: [],
        list: [],
      },
    };
  },

  methods: {
    setModalContent(i) {
      this.modalContent = {
        title: this.getDops[i].name,
        img: this.getDops[i].kitModal.img,
        text: this.getDops[i].kitModal.text,
        list: this.getDops[i].kitModal.list,
      };
    },

    openModal(index) {
      this.setModalContent(index);

      setTimeout(() => {
        Fancybox.show([
          {
            src: "#kit-modal",
          },
        ]);
      }, 10);
    },
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
  computed: { ...mapGetters(["getDops", "getMainItem"]) },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#kit {
  @extend %padd;

  .kit-wrapper {
    display: grid;
    gap: 20px;
    grid-template-columns: minmax(390px, 30%) auto minmax(270px, 342px);
    grid-template-rows: auto;
    width: 100%;

    @media (max-width: 1280px) {
      grid-template-columns: 1fr 370px;
      gap: 30px;
    }

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      max-width: 520px;
      margin: 0 auto;
      gap: 50px;
    }

    &__dops {
      align-self: stretch;
      display: flex;
      align-items: center;
      padding: 30px 15px;

      border-radius: 10px;
      background: #f5f5f5;

      @media (max-width: 1280px) {
        grid-column: 1/2;
        grid-row: 2/3;
      }
    }

    &__form {
      border-radius: 10px;
      background: #fff;
      box-shadow: 0px 4px 15px 0px rgba(170, 170, 170, 0.2);

      @media (max-width: 1280px) {
        grid-column: 2/3;
        grid-row: 2/3;
      }

      @media (max-width: 992px) {
        grid-row: 2/3;
        grid-column: 1/2;
      }
    }

    &__img {
      align-self: center;
      max-width: 490px;
      height: 69%;
      width: 100%;
      margin: 0 auto;
      min-width: 400px;

      @media (max-width: 1440px) {
        height: 64%;
      }

      @media (max-width: 1280px) {
        grid-column: 1/3;
        grid-row: 1/2;
        height: 521px;
      }

      @media (max-width: 992px) {
        grid-row: 1/2;
        grid-column: 1/2;
        height: 400px;
        min-width: auto;
      }

      @media (max-width: 576px) {
        height: 340px;
      }
      @media (max-width: 425px) {
        height: 290px;
      }
      @media (max-width: 375px) {
        height: 255px;
      }

      .kit-images {
        height: 100%;
        position: relative;
        img {
          max-width: 100%;
        }

        .kit-main {
          position: absolute;
          top: 0;
          left: 18%;
          width: 60%;

          @media (max-width: 992px) {
            left: 50%;
            transform: translateX(-50%);
            width: 50%;
            top: auto;
            bottom: 60px;
          }
        }

        .dops-img {
          position: absolute;
          transition: all 0.2s;
          opacity: 0.3;

          &--active {
            opacity: 1;
          }
        }

        .grate_and_tray-kit {
          right: 7.4%;
          width: 17.2%;
          top: 183px;

          @media (max-width: 992px) {
            top: 44%;

            &-checkbox {
              position: absolute;
              right: 2%;
              top: 38%;
            }
          }
        }

        .tins-kit {
          left: 2%;
          width: 18.7%;
          top: 246px;

          @media (max-width: 992px) {
            top: 50%;

            &-checkbox {
              position: absolute;
              left: 0;
              top: 44%;
            }
          }
        }

        .clips-kit {
          width: 16%;
          left: 12%;
          top: 390px;
          @media (max-width: 992px) {
            bottom: -2%;
            top: auto;

            &-checkbox {
              position: absolute;
              left: 0;
              bottom: 0;
            }
          }
        }

        .cap_vit-kit {
          right: 2%;
          width: 60%;
          bottom: 0;

          @media (max-width: 992px) {
            right: 2%;
            width: 45%;
            bottom: -20px;

            &-checkbox {
              position: absolute;
              right: 2%;
              bottom: -15px;
            }
          }
        }
      }
    }
  }

  .kit__list {
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: space-between;
    width: 100%;

    .kit__item {
      align-items: center;
      display: flex;
      justify-content: space-between;
      gap: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #c8c8c8;

      &-content {
        display: flex;
        gap: 19px;
        align-items: center;
      }

      &-img {
        .kit-icon {
          @include aspect {
            aspect-ratio: 1/1;
            width: 50px;
          }
        }
      }

      &-price {
        span {
          display: block;
          font-family: "Roboto";
          font-style: normal;
          white-space: nowrap;

          &.old {
            color: #c8c8c8;
            font-size: 14px;
            font-weight: 700;
            line-height: 14px; /* 100% */
            text-decoration: line-through;
          }

          &.new {
            color: #323232;
            font-size: 16px;
            font-weight: 900;
            line-height: 22px; /* 137.5% */
          }
        }
      }

      &-name {
        cursor: pointer;
        color: #565656;
        font-family: "Roboto";
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-decoration-line: underline;
        max-width: 168px;

        @include fluidFontSize(16, 20, 992, 1920);
      }
    }
  }
}

#kit-modal {
  border-radius: 10px;
  background: #fff;
  max-width: 936px;
  width: 100%;
  padding: 30px 20px 20px !important;

  @media (max-width: 768px) {
    max-width: 386px;
  }

  .is-close {
    top: 5px;
    right: 5px;
    color: #323232;
    svg {
      filter: none;
    }
  }

  .kit-modal {
    &__wrapper {
      align-items: center;
      display: flex;
      gap: 55px;

      @media (max-width: 768px) {
        flex-direction: column-reverse;
        gap: 20px;
      }
    }

    &__img {
      display: flex;
      justify-content: center;

      @media (min-width: 769px) {
        width: calc(45% - 27.5px);
      }

      img {
        max-width: 100%;
      }
    }

    &__content {
      @media (min-width: 769px) {
        width: calc(55% - 27.5px);
      }
      .title {
        color: #323232;
        font-family: "Roboto";
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 30px;

        @include fluidFontSize(26, 30, 992, 1920);

        @media (max-width: 768px) {
          font-size: 20px;
          line-height: 24px;
          margin-bottom: 15px;
        }
      }

      ul {
        padding-left: 20px;
      }

      li {
        font-weight: 300;
        list-style-type: disc;

        &.list-item {
          color: #323232;
          font-family: "Roboto";
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 135%;

          @include fluidFontSize(16, 20, 992, 1920);
        }

        span {
          font-weight: 500;
        }
      }

      p.text {
        color: #323232;
        font-family: "Roboto";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 135%;
        margin-bottom: 20px;
        @include fluidFontSize(16, 20, 992, 1920);
      }
    }
  }
}
</style>
