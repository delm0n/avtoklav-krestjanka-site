import { createStore } from "vuex";
import { storePHP } from "./storePHP.js";

import { AVTOKLAVTYPES } from "../../js/type-avtoklav.js";

export default createStore({
  modules: {
    storePHP,
  },
  state() {
    return {
      user: {
        name: "",
        phone: "",
        rassrochka: false,
      },

      main: [
        {
          id: goods.avtoklav_l15,
          price: goodsJson[goods.avtoklav_l15].price,
          oldPrice: goodsJson[goods.avtoklav_l15].oldPrice,
          selected: false,
          type: AVTOKLAVTYPES.noten,
          name: "15 литров",
          kit: "avtoklav_l15",
          img: "m-15",
        },

        {
          id: goods.avtoklav_l20,
          price: goodsJson[goods.avtoklav_l20].price,
          oldPrice: goodsJson[goods.avtoklav_l20].oldPrice,
          selected: false,
          type: AVTOKLAVTYPES.noten,
          name: "20 литров",
          kit: "avtoklav_l20",
          img: "m-20",
        },

        {
          id: goods.avtoklav_l26,
          price: goodsJson[goods.avtoklav_l26].price,
          oldPrice: goodsJson[goods.avtoklav_l26].oldPrice,
          selected: false,
          type: AVTOKLAVTYPES.noten,
          name: "26 литров",
          kit: "avtoklav_l26",
          img: "m-26",
        },

        {
          id: goods.avtoklav_l34,
          price: goodsJson[goods.avtoklav_l34].price,
          oldPrice: goodsJson[goods.avtoklav_l34].oldPrice,
          selected: false,
          type: AVTOKLAVTYPES.noten,
          name: "34 литра",
          kit: "avtoklav_l34",
          img: "m-34",
        },

        {
          id: goods.avtoklav_l15_ten,
          price: goodsJson[goods.avtoklav_l15_ten].price,
          oldPrice: goodsJson[goods.avtoklav_l15_ten].oldPrice,
          selected: true,
          type: AVTOKLAVTYPES.ten,
          name: "15 литров с ТЭНом",
          kit: "avtoklav_l15_ten",
          img: "m-15-ten",
        },

        {
          id: goods.avtoklav_l20_ten,
          price: goodsJson[goods.avtoklav_l20_ten].price,
          oldPrice: goodsJson[goods.avtoklav_l20_ten].oldPrice,
          selected: false,
          type: AVTOKLAVTYPES.ten,
          name: "20 литров с ТЭНом",
          kit: "avtoklav_l20_ten",
          img: "m-20-ten",
        },

        {
          id: goods.avtoklav_l26_ten,
          price: goodsJson[goods.avtoklav_l26_ten].price,
          oldPrice: goodsJson[goods.avtoklav_l26_ten].oldPrice,
          selected: false,
          type: AVTOKLAVTYPES.ten,
          name: "26 литров с ТЭНом",
          kit: "avtoklav_l26_ten",
          img: "m-26-ten",
        },

        {
          id: goods.avtoklav_l34_ten,
          price: goodsJson[goods.avtoklav_l34_ten].price,
          oldPrice: goodsJson[goods.avtoklav_l34_ten].oldPrice,
          selected: false,
          type: AVTOKLAVTYPES.ten,
          name: "34 литра с ТЭНом",
          kit: "avtoklav_l34_ten",
          img: "m-34-ten",
        },
      ],

      dops: [
        {
          id: goods.grate_and_tray,
          price: goodsJson[goods.grate_and_tray].price,
          oldPrice: goodsJson[goods.grate_and_tray].oldPrice,
          name: "Набор&nbsp;для копчения",
          selected: false,
          icon: "grate_and_tray-icon",
          kit: "grate_and_tray-kit",

          kitModal: {
            img: "grate_and_tray-modal",
            text: [
              `
            С комплектом из подставки, шланга и древесной щепы автоклав без труда заменит домашнюю коптильню. <br>
            В такой вы сможете готовить домашние обеды и закуски, блюда на перекус и различные деликатесы:
            <ul>
            <li> Курицу, утку, индейку</li>
            <li> Сало</li>
            <li> Ветчину и колбасы</li>
            <li> Сыры твёрдых сортов</li>
            <li> Свиные рёбрышки и грудинку</li>
            <li> Рыбу, моллюсков, кальмаров</li>
            <li>Копчёные овощи и фрукты</li>
            </ul>`,
            ],
            list: ["<span>В комплекте</span>: 3 решётки и поддон для жира."],
          },
        },

        {
          id: goods.tins,
          price: goodsJson[goods.tins].price,
          oldPrice: goodsJson[goods.tins].oldPrice,
          name: "Жестяные&nbsp;банки (10&nbsp;шт.)",
          selected: false,
          icon: "tins-icon",
          kit: "tins-kit",

          kitModal: {
            img: "tins-modal",
            text: [
              "Консервная банка с крышкой, которая выполнена из прочного металла. Модель предназначена для бытового и производственного консервирования, отлично подходит для использования в автоклавах.",
            ],
            list: [],
          },
        },

        {
          id: goods.clips,
          price: goodsJson[goods.clips].price,
          oldPrice: goodsJson[goods.clips].oldPrice,
          name: "Защитные зажимы",
          selected: false,
          icon: "clips-icon",
          kit: "clips-kit",

          kitModal: {
            img: "clips-modal",
            text: [
              "С индивидуальными защитными зажимами преднакачка не нужна!",
              `Зажим плотно прижимает крышку к банке. Крышка не сорвётся под воздействием давления и перепадов температуры в автоклаве.
                Каждый зажим двойной и состоит из верхнего и нижнего кольца. На кольцах стоят буквы "Н" и "В", поэтому вы всегда правильно наденете зажимы.
                Для винтовых крышек твист-офф зажимы не нужны.`,
            ],
            list: [
              `<span> В комплекте</span>: 7 защитных зажимов из нержавеющей стали.`,
              `<span> Вес</span>: 400 гр.`,
            ],
          },
        },

        {
          id: goods.cap_vit,
          price: goodsJson[goods.cap_vit].price,
          oldPrice: goodsJson[goods.cap_vit].oldPrice,
          name: "Насадка&nbsp;для самогоноварения",
          selected: false,
          icon: "cap_vit-icon",
          kit: "cap_vit-kit",

          kitModal: {
            img: "cap_vit-modal",
            text: [
              `
            С насадкой-дистиллятором колонного типа автоклав любого объёма можно превратить в самогонный аппарат.
            В получившейся установке вы сможете готовить домашние напитки нужной крепости:
            <ul>
              <li>Чачу;</li>
              <li>Граппу;</li>
              <li>Водку;</li>
              <li>Виски;</li>
              <li>Ром;</li>
              <li>Коньяк;</li>
              <li>Кальвадос.</li>
            </ul>
            `,
            ],
            list: [],
          },
        },
      ],
    };
  },
  mutations: {
    selectMain(state, id) {
      state.main.forEach((element) => {
        element.id == id
          ? (element.selected = true)
          : (element.selected = false);
      });
    },

    setUserRassrochka(state, bool) {
      state.user.rassrochka = bool;
    },
  },
  getters: {
    getUserRassrochka(state) {
      return state.user.rassrochka;
    },

    getUser(state) {
      return state.user;
    },

    getMainId(state) {
      return state.main.find((el) => el.selected).id;
    },

    getMainItem(state) {
      return state.main.find((el) => el.selected);
    },

    getDops(state) {
      return state.dops;
    },

    getMain(state) {
      return state.main;
    },

    getLastPrice(state) {
      return state.dops.reduce(function (sum, dop) {
        return dop.selected ? sum + dop.price : sum;
      }, state.main.find((el) => el.selected).price);
    },
  },
});
