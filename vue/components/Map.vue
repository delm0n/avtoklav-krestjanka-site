<template>
  <section id="map">
    <div class="container">
      <div class="title-map">
        <h2>
          Наши магазины <br />
          — теперь и сервисные центры
        </h2>
        <p class="subtitle">В них вы сможете:</p>
      </div>
      <div class="list-box">
        <ul class="list-box__list list-box__list_1">
          <li>
            Приобрести коптильни, автоклавы, мангалы и множество других товаров
            для хобби.
          </li>
          <li>
            Оформить заявку на самовывоз и забрать товар, купленный в
            интернет-магазине.
          </li>
        </ul>
        <ul class="list-box__list list-box__list_2">
          <li>Оформить скидочную карту.</li>
          <li>
            Сдать товар по гарантии, оформить возврат или обмен
            без&nbsp;лишней&nbsp;бюрократии.
          </li>
          <li>Получить консультацию специалистов.</li>
        </ul>
      </div>
    </div>
    <div class="content-container_map">
      <div id="shop-map" class="map-item"></div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Map",

  mounted() {
    this.gsap.timeline({
      delay: 4,
      scrollTrigger: {
        once: true,
        trigger: "#map",
        start: "-60% bottom",
        onEnter: this.getShops,
        onEnterBack: this.getShops,
      },
    });
  },

  methods: {
    async getShops() {
      let citiesJSON = JSON.parse(
        '[\n    {\n        "city": "\u041c\u043e\u0441\u043a\u0432\u0430",\n        "shops": [\n            {\n                "name": "\u0422\u0426 \u00ab\u042d\u043a\u0441\u0442\u0440\u0438\u043c\u00bb",\n                "address": "\u0433. \u041c\u043e\u0441\u043a\u0432\u0430, \u0443\u043b. \u0421\u043c\u043e\u043b\u044c\u043d\u0430\u044f 63\u0411, 2 \u044d\u0442\u0430\u0436 (\u0443 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430 \u00ab\u042d\u043a\u0441\u0442\u0440\u0438\u043c\u00bb-\u00ab\u0412\u043e\u0434\u043d\u044b\u0439 \u041c\u0438\u0440\u00bb)",\n                "hours": ["\u043f\u043d-\u0432\u0441: 10:00-20:00"],\n                "phones": ["8 (499) 390-43-45", "8 (929) 517-10-77"],\n                "coords": [55.870112, 37.469808],\n                "zoom": 16\n            },\n            {\n                "name": "\u0422\u0426 \u00ab\u041c\u043e\u0441\u0442\u00bb",\n                "address": "\u0433. \u041c\u043e\u0441\u043a\u0432\u0430, \u0443\u043b. \u041b\u044e\u0431\u043b\u0438\u043d\u0441\u043a\u0430\u044f 4\u043a1\u0410",\n                "hours": ["\u043f\u043d-\u0432\u0441: 09:00-20:00"],\n                "phones": ["8 (926) 372-19-90"],\n                "coords": [55.708242, 37.730670],\n                "zoom": 16\n            },\n            {\n                "name": "\u0422\u0426 \u00ab\u041c\u0430\u043a\u0441\u0421\u0438\u0442\u0438\u00bb",\n                "address": "\u0433. \u0411\u0430\u043b\u0430\u0448\u0438\u0445\u0430, \u0448. \u042d\u043d\u0442\u0443\u0437\u0438\u0430\u0441\u0442\u043e\u0432 80, \u043f\u043e\u043c. 1",\n                "hours": ["\u043f\u043d-\u0432\u0441: 10:00-21:00"],\n                "phones": ["8 (926) 375-48-55"],\n                "coords": [55.798100, 37.986474],\n                "zoom": 16\n            }\n        ],\n        "coords": [55.791537, 37.613853],\n        "zoom": 10\n    },\n    {\n        "city": "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a",\n        "shops": [\n            {\n                "name": "\u0422\u0426 \u00ab\u0421\u0442\u0440\u043e\u0439\u0433\u0440\u0430\u0434\u00bb",\n                "address": "\u0433. \u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a, \u0443\u043b. \u041c\u0430\u0440\u0430\u0442\u0430, \u0434. 8, \u043a\u043e\u0440\u043f\u0443\u0441 2, \u0446\u043e\u043a\u043e\u043b\u044c (\u043d\u0430\u043f\u0440\u043e\u0442\u0438\u0432 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430 \u043a\u0440\u0435\u043f\u0435\u0436\u0435\u0439 \u00ab\u0410\u0412\u0412\u0410\u00bb)",\n                "hours": ["\u043f\u043d-\u043f\u0442: 8:30-19:00", "\u0441\u0431: 8:30-18:00", "\u0432\u0441: 8:30-17:00"],\n                "phones": ["8 (8422) 70-11-35", "8 (927) 270-11-35"],\n                "coords": [54.322841, 48.391513],\n                "zoom": 16\n            }\n        ],\n        "coords": [54.322841, 48.391513],\n        "zoom": 17\n    },\n    {\n        "city": "\u041a\u0438\u0440\u043e\u0432",\n        "shops": [\n            {\n                "name": "\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u00abGradusHaus\u00bb",\n                "address": "\u0433. \u041a\u0438\u0440\u043e\u0432, \u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u0438\u0439 \u043f\u0440\u043e\u0441\u043f\u0435\u043a\u0442 90 (\u0443\u0433\u043e\u043b \u0443\u043b\u0438\u0446\u044b \u0412\u043e\u0440\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u0438 \u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u043f\u0435\u043a\u0442\u0430)",\n                "hours": ["\u043f\u043d-\u0432\u0441: 09:00-20:00"],\n                "phones": ["8 (922) 914-54-34"],\n                "coords": [58.593105, 49.658626],\n                "zoom": 16\n            }\n        ],\n        "coords": [58.584786,49.677777],\n        "zoom": 13\n    },\n    {\n        "city": "\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",\n        "shops": [\n            {\n                "name": "\u0422\u0426 \u00ab\u041f\u0438\u0442\u0435\u0440\u00bb",\n                "address": "\u0433. \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0443\u043b. \u0422\u0438\u043f\u0430\u043d\u043e\u0432\u0430, \u0434. 21, \u043b\u0438\u0442\u0435\u0440 \u0410, 1 \u044d\u0442\u0430\u0436, \u043f\u0430\u0432. 228 (\u043f\u0430\u0432\u0438\u043b\u044c\u043e\u043d \u0440\u044f\u0434\u043e\u043c \u0441 \u00ab\u041f\u0435\u0440\u0435\u043a\u0440\u0451\u0441\u0442\u043a\u043e\u043c\u00bb \u0438 \u00ab\u0412\u0441\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b\u00bb)",\n                "hours": ["\u043f\u043d-\u0432\u0441: 10:00-21:00"],\n                "phones": ["8 (921) 807-95-93"],\n                "coords": [59.853288, 30.340707],\n                "zoom": 16\n            }\n        ],\n        "coords": [59.853288, 30.340707],\n        "zoom": 10\n    },\n    {\n        "city": "\u0412\u043e\u0440\u043e\u043d\u0435\u0436",\n        "shops": [\n            {\n                "name": "\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u00abGradusHaus\u00bb",\n                "address": "\u0433. \u0412\u043e\u0440\u043e\u043d\u0435\u0436, \u0443\u043b. \u0413\u0435\u0440\u043e\u0435\u0432 \u0421\u0438\u0431\u0438\u0440\u044f\u043a\u043e\u0432, \u0434. 65/\u0437",\n                "hours": ["\u043f\u043d-\u0432\u0441: 09:00-19:30"],\n                "phones": ["8 (920) 434-61-99"],\n                "coords": [51.645157, 39.140810],\n                "zoom": 16\n            }\n        ],\n        "coords": [51.645157, 39.140810],\n        "zoom": 16\n    },\n    {\n        "city": "\u0421\u0430\u0440\u0430\u0442\u043e\u0432",\n        "shops": [\n            {\n                "name": "\u0422\u0426 \u00ab\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u044b\u0439 \u0411\u0430\u0437\u0430\u0440\u00bb",\n                "address": "\u0433. \u0421\u0430\u0440\u0430\u0442\u043e\u0432, \u043f\u043b\u043e\u0449\u0430\u0434\u044c \u041e\u0440\u0434\u0436\u043e\u043d\u0438\u043a\u0438\u0434\u0437\u0435, \u0434. 1 (\u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0433\u0430\u043b\u0435\u0440\u0435\u044f, 1 \u044d\u0442\u0430\u0436)",\n                "hours": ["\u043f\u043d-\u0432\u0441: 10:00-21:00"],\n                "phones": ["8 (927) 059-53-03"],\n                "coords": [51.501339, 45.944207],\n                "zoom": 16\n            }\n        ],\n        "coords": [51.501339, 45.944207],\n        "zoom": 16\n    },\n    {\n        "city": "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434",\n        "shops": [\n            {\n                "name": "\u0422\u0426 \u00ab\u0421\u0442\u043e\u043b\u043f\u043b\u0438\u0442 \u0425\u043e\u0443\u043c\u00bb",\n                "address": "\u0433. \u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434, \u0443\u043b. \u0418\u0441\u0442\u043e\u0440\u0438\u0447\u0435\u0441\u043a\u0430\u044f, \u0434. 154, 1 \u044d\u0442\u0430\u0436",\n                "hours": ["\u043f\u043d-\u0432\u0441: 09:00-20:00"],\n                "phones": ["8 (927) 534-70-72"],\n                "coords": [48.768618, 44.474547],\n                "zoom": 16\n            },\n            {\n                "name": "\u0422\u0426 \u00ab\u041b\u0435\u043d\u0442\u0430\u00bb",\n                "address": "\u0433. \u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434, \u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0441\u043a\u0438\u0439 \u043f\u0440-\u0442, \u0434. 2",\n                "hours": ["\u043f\u043d-\u0432\u0441: 09:00-20:00"],\n                "phones": ["8 (927) 542-10-42"],\n                "coords": [48.685575, 44.449744],\n                "zoom": 16\n            }\n        ],\n        "coords": [48.713457, 44.508581],\n        "zoom": 11\n    },\n    {\n        "city": "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a",\n        "shops": [\n            {\n                "name": "\u0422\u041a \u00ab\u041a\u043e\u043b\u044c\u0446\u043e\u00bb",\n                "address": "\u0433. \u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a, \u0443\u043b. \u0414\u0430\u0440\u0432\u0438\u043d\u0430, \u0434. 18",\n                "hours": ["\u043f\u043d-\u0432\u0441: 10:00-21:00"],\n                "phones": ["8 (922) 631-75-00"],\n                "coords": [55.126843, 61.370124],\n                "zoom": 16\n            }\n        ],\n        "coords": [55.126843, 61.370124],\n        "zoom": 16\n    },\n    {\n        "city": "\u0411\u0430\u043b\u0430\u0448\u0438\u0445\u0430",\n        "shops": [\n            {\n                "name": "\u0422\u0426 \u00ab\u041c\u0430\u043a\u0441\u0421\u0438\u0442\u0438\u00bb",\n                "address": "\u0433. \u0411\u0430\u043b\u0430\u0448\u0438\u0445\u0430, \u0448. \u042d\u043d\u0442\u0443\u0437\u0438\u0430\u0441\u0442\u043e\u0432 80, \u043f\u043e\u043c. 1",\n                "hours": ["\u043f\u043d-\u0432\u0441: 10:00-21:00"],\n                "phones": ["8 (926) 375-48-55"],\n                "coords": [55.798100, 37.986474],\n                "zoom": 16\n            }\n        ],\n        "coords": [55.798100, 37.986474],\n        "zoom": 16\n    }\n]\n\n'
      );
      // создание карты с метками
      let script = document.createElement("script");
      script.setAttribute("async", "");
      script.type = "text/javascript";
      script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
      document.querySelector("body").appendChild(script);

      script.onload = function () {
        ymaps.ready(function () {
          let myMap = new ymaps.Map("shop-map", {
            center: [55.75222, 37.61556],
            zoom: 11,
            controls: ["zoomControl"],
          });

          myMap.behaviors.disable("scrollZoom");

          citiesJSON.forEach(function (inx) {
            let city = inx.city;
            inx.shops.forEach(function (shop) {
              let mark = new ymaps.Placemark(
                shop.coords,
                {
                  hasHint: true,
                  hintContent: "Градус Хаус в г. " + city + ", " + shop.name,
                },
                {
                  iconLayout: "default#image",
                  iconImageHref:
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzkiIGhlaWdodD0iOTUiIHZpZXdCb3g9IjAgMCA3OSA5NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikdyb3VwIDQzOTIiPgo8ZyBpZD0iR3JvdXAgNDM4OCI+CjxnIGlkPSJHcm91cCA0MzQ1Ij4KPGcgaWQ9IlZlY3RvciIgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF8xMDFfNzI1NikiPgo8cGF0aCBkPSJNNjMuMzMyIDI0LjM2OTJDNjMuMzMyIDM1LjQ2MjMgNDguNzA3IDU1LjIxMTUgNDIuMjk0NSA2My4zNkM0MC43NTcgNjUuMzAxOSAzNy45MDcgNjUuMzAxOSAzNi4zNjk1IDYzLjM2QzI5Ljg0NDUgNTUuMjExNSAxNS4zMzIgMzUuNDYyMyAxNS4zMzIgMjQuMzY5MkMxNS4zMzIgMTAuOTEwMyAyNi4wNzcgMCAzOS4zMzIgMEM1Mi41ODIgMCA2My4zMzIgMTAuOTEwMyA2My4zMzIgMjQuMzY5MloiIGZpbGw9IiM0RUEzRTMiLz4KPC9nPgo8L2c+CjwvZz4KPGNpcmNsZSBpZD0iRWxsaXBzZSAxODUiIGN4PSIzOS4zMzMzIiBjeT0iMjMuNzMxOCIgcj0iOS4zMzMzMyIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kXzEwMV83MjU2IiB4PSIwLjMzMjAzMSIgeT0iMCIgd2lkdGg9Ijc4IiBoZWlnaHQ9Ijk0LjgxNjQiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeT0iMTUiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNy41Ii8+CjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9Im91dCIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwLjMwNTg4MiAwIDAgMCAwIDAuNjM5MjE2IDAgMCAwIDAgMC44OTAxOTYgMCAwIDAgMC4xOSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzEwMV83MjU2Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93XzEwMV83MjU2IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo=",
                  iconImageSize: [74, 58],
                  iconImageOffset: [-33, -38],
                }
              );

              mark.events.add("click", function (e) {
                myMap.hint.open(
                  shop.coords,
                  " Градус Хаус в г. " + city + ", " + shop.name
                );
              });

              myMap.geoObjects.add(mark);
            });
          });
        });
      };
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#map {
  overflow: hidden;
  padding-top: 100px;
  @media (max-width: 992px) {
    padding-top: 60px;
  }
  @media (max-width: 768px) {
    padding-top: 30px;
  }

  .title-map {
    margin-bottom: 20px;
    h2 {
      color: #000;
      font-family: "Roboto";
      font-size: 44px;
      font-style: normal;
      font-weight: 400;
      margin-bottom: 20px;
      line-height: 140%;

      @media (max-width: 768px) {
        font-size: 27px;
        line-height: 140%;
      }
    }

    .subtitle {
      color: #323232;
      font-family: "Roboto";
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;

      @media (max-width: 768px) {
        font-size: 18px;
        line-height: 25px;
      }
    }
  }

  .list-box {
    display: flex;
    justify-content: space-between;
    column-gap: 16px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 992px) {
      flex-direction: column;
      row-gap: 20px;
    }

    &__list {
      display: flex;
      flex-direction: column;
      row-gap: 9px;
      width: 100%;

      @media (max-width: 992px) {
        row-gap: 20px;
      }

      li {
        position: relative;
        padding-left: 20px;

        color: rgb(50, 50, 50, 0.75);
        font-family: "Roboto";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;

        @media (max-width: 768px) {
          font-size: 15px;
          line-height: 22px;
        }

        &:before {
          position: absolute;
          left: 0;
          top: 9px;
          background: $main;
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;

          @media (max-width: 768px) {
            top: 7.5px;
          }
        }
      }
    }
  }

  .content-container_map {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0;
    margin-top: 77px;
    height: 745px;
    max-height: 66vh;
    overflow: hidden;
    margin-top: 50px;

    .map-item {
      height: 745px;
      max-height: 67vh;
    }

    .ymaps-2-1-79-ground-pane {
      filter: grayscale(100%);
    }
  }

  .page-loader-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $gray;
    transform: scale(1.5);
    opacity: 0.8;
    z-index: 10000;
  }
}
</style>
