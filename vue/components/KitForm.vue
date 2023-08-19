<template>
  <form action="" method="post" class="spnForm kit-form">
    <p class="kit-form__title">Заказ</p>

    <droplist
      class="kit-form__droplist"
      @action-droplist="actionDroplist"
      :array="getMain"
    />

    <ul v-if="myDops.length && mobileProp" class="kit-form__mobile-list">
      <li v-for="(item, index) in myDops" :key="index">
        <span class="name" v-html="item.name"></span
        ><span class="price" v-html="item.price + ' руб.'"></span>
      </li>
    </ul>

    <div class="kit-form__lastprice">
      <span>Итого:</span>
      <p>{{ getLastPrice.toLocaleString() }} ₽</p>
    </div>

    <div class="kit-form__inputs">
      <input
        class="input kit-form__name"
        type="text"
        name="name"
        placeholder="Имя"
      />

      <input
        class="input"
        type="text"
        name="phone"
        placeholder="+7 (___)-___-__-__"
      />
    </div>

    <div class="kit-form__decr">
      Менеджеры свяжутся с вами в ближайшее время для уточнения деталей заказа
    </div>

    <form-helicon :main="true" />

    <button @click="openModalSuccessOrder" class="button">Заказать</button>
  </form>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import FormHelicon from "./FormHelicon.vue";
import Droplist from "../UI/Droplist.vue";

export default {
  components: { Droplist, FormHelicon },
  props: {
    mobileProp: Boolean,
  },
  computed: {
    ...mapGetters(["getMain", "getLastPrice", "getDops"]),
    myDops() {
      return this.getDops.filter((el) => el.selected);
    },
  },
  methods: {
    actionDroplist(id) {
      this.selectMain(id);
    },
    ...mapMutations(["selectMain", "openModalSuccessOrder"]),
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

@mixin gap-margin() {
  margin-bottom: 30px;

  @media (max-width: 1280px) {
    margin-bottom: 20px;
  }
}

.kit-form {
  padding: 50px 30px;

  @media (max-width: 1400px) {
    padding: 30px 20px;
  }

  &__inputs {
    margin-bottom: 20px;
  }
  &__name {
    margin-bottom: 15px;
  }

  &__decr {
    color: #a3a3a3;
    text-align: center;
    font-family: "Roboto";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    @include gap-margin();

    @include fluidFontSize(14, 18, 992, 1920);
  }

  &__title {
    color: #323232;
    text-align: center;
    font-family: "Roboto";
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @include gap-margin();

    @include fluidFontSize(24, 35, 992, 1920);
  }

  &__lastprice {
    padding: 20px 0;
    position: relative;

    @include gap-margin();

    &:before,
    &:after {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      content: "";
      width: 90%;
      height: 1px;
      background: #e0e0e0;
    }

    &:before {
      top: 0px;
    }
    &:after {
      bottom: 0px;
    }

    text-align: center;
    font-family: "Roboto";
    font-style: normal;

    span {
      display: block;
      color: #323232;
      font-size: 35px;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 17px;

      @media (max-width: 768px) {
        margin-bottom: 10px;
      }

      @include fluidFontSize(22, 35, 992, 1920);
    }

    p {
      color: #323232;
      font-size: 50px;
      font-weight: 900;
      line-height: 100%;

      @include fluidFontSize(36, 50, 992, 1920);
    }
  }

  .button {
    margin: 0 auto;
  }

  &__droplist {
    @include gap-margin();

    .dropdown-hero,
    .dropdown-list {
      border: 2px solid #00ac07;
      p,
      li.dropdown-item--active {
        color: #00ac07;
      }

      .dropdown-item,
      p {
        @include fluidFontSize(16, 20, 992, 1920);
      }
      li {
        &:before {
          background: #00ac07;
        }
      }
      svg path {
        fill: #00ac07;
      }
    }
  }

  &__mobile-list {
    display: none;
    @media (max-width: 992px) {
      display: block;
      margin-bottom: 20px;

      li {
        align-items: flex-end;
        display: flex;
        justify-content: space-between;
        position: relative;

        &:before {
          border-bottom: 2px dotted #707070;
          bottom: 5px;
          content: "";
          position: absolute;
          right: 0;
          width: 99%;
          z-index: 0;
        }

        span {
          display: block;
          background: #fff;
          position: relative;
          z-index: 1;
          font-family: "Roboto";

          &.name {
            font-size: 16px;
            line-height: 21px;
            padding-right: 4px;

            @media (max-width: 425px) {
              width: min-content;
            }
          }

          &.price {
            color: #707070;
            flex-shrink: 0;
            font-size: 16px;
            font-weight: 300;
            margin-bottom: 2px;
            padding-left: 2px;
          }
        }
      }
    }
  }
}
</style>