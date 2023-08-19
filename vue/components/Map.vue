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
      await axios
        .get("https://apispn.ru/json/shops/")
        .then(function (response) {
          // handle success
          let citiesJSON = JSON.parse(response.data);

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
                      hintContent:
                        "Градус Хаус в г. " + city + ", " + shop.name,
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
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
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
