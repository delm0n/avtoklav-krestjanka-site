export const storePHP = {
  state: () => ({
    webpSupport: webp,

    year: year,
    formHelicon: "",
    phone: phone,
    monthForHeader: monthForHeader,
    today: todayWithoutZero,
    tomorrow: tomorrowWithoutZero,
    modalSuccess: ["", ""],
  }),
  mutations: {
    openModalSuccessManager(state) {
      state.modalSuccess = [
        "Благодарим за обращение!!",
        "Менеджер уже получил Вашу контактную информацию, он свяжется с Вами в течение 10 минут <br> Проверьте свой номер - вдруг Вы ошиблись?",
      ];
    },

    openModalSuccessOrder(state) {
      state.modalSuccess = [
        "Благодарим за заказ!",
        "Менеджер уже получил Ваше обращение, он свяжется с Вами в течение 10 минут <br> Проверьте свой номер - вдруг Вы ошиблись?",
      ];
    },
  },
  getters: {
    // getSuccessOrderMetrik(state) {

    // },
    getYear(state) {
      return state.year;
    },
    getWebp(state) {
      return state.webpSupport;
    },
    getMetric(state) {
      return state.formHelicon;
    },
    getPhone(state) {
      return state.phone;
    },
    isTest(state) {
      return state.test;
    },
    getMonthForHeader(state) {
      return state.monthForHeader;
    },
    getToday(state) {
      return state.today;
    },
    getTomorrow(state) {
      return state.tomorrow;
    },
    getModalSuccess(state) {
      return state.modalSuccess;
    },
  },
};
