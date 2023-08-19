<template>
  <div id="opt-modal" style="display: none">
    <form method="post" class="section-send__form">
      <h3>Обращениие в оптовый отдел</h3>
      <div class="user-info">
        <input
          autocomplete="off"
          class="input"
          name="name"
          placeholder="Ваше имя"
          type="text"
          required
        />
        <input
          autocomplete="off"
          class="input"
          name="phone"
          placeholder="Ваш номер телефона"
          type="text"
          required
        />
        <input
          autocomplete="off"
          class="input"
          name="email"
          placeholder="Ваш e-mail"
          type="email"
          required
        />
        <input
          autocomplete="off"
          class="input"
          name="city"
          placeholder="Ваш город"
          type="text"
        />
        <textarea
          class="input"
          placeholder="Комментарий (необязательно)"
          rows="6"
        ></textarea>
      </div>

      <button class="button">Отправить</button>

      <form-helicon />
    </form>
  </div>
</template>

<script>
import FormHelicon from "./FormHelicon.vue";
export default {
  components: {
    FormHelicon,
  },
};
</script>

<style lang="scss">
#opt-modal {
  border-radius: 10px;
  background: #fff;
  max-width: 745px;
  width: 100%;

  @media (max-width: 576px) {
    padding: 30px 20px 20px !important;
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

  h3 {
    color: #323232;
    text-align: center;
    font-family: "Roboto";
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: 49px; /* 116.667% */
    margin-bottom: 30px;

    @media (max-width: 576px) {
      font-size: 22px;
      line-height: 29px;
    }
  }

  .button {
    margin: 30px auto 0;
  }

  .user-info {
    max-width: 360px;
    margin: 0 auto;
    input {
      margin-bottom: 20px;
    }

    textarea {
      height: auto;
      padding-top: 20px;
    }
  }
}
</style>