<template>
  <section id="photo">
    <div class="container">
      <div class="title-box">
        <h2><span> Реальные фото </span> автоклава «Крестьянка»</h2>
      </div>

      <div class="photo-wrapper">
        <div class="swiper-wrapper">
          <a
            v-for="(photo, index) in photoes"
            :key="index"
            data-fancybox="gallery"
            :href="
              'build/images/photo/' +
              (mobile ? photo.ref : photo.refMobile) +
              (getWebp == 'webp' ? '.webp' : '.png')
            "
            :class="
              'swiper-slide photo-item ' + (photo.class ? photo.class : '')
            "
          >
            <my-image
              :alt="'автоклав крестьянка фотографии'"
              :floder="'photo'"
              :lazyLoad="false"
              :media="769"
              :imgName="photo.img"
            />
          </a>
        </div>

        <div class="photo-pagination" style="display: none"></div>

        <div class="photo-next" style="display: none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="23"
            viewBox="0 0 14 23"
            fill="none"
          >
            <path
              d="M13.0933 12.027C13.6605 11.4232 13.6308 10.4739 13.027 9.90673L3.18756 0.663609C2.58377 0.096405 1.63448 0.12607 1.06728 0.729868C0.500075 1.33367 0.52974 2.28295 1.13354 2.85015L9.87971 11.0663L1.66361 19.8124C1.09641 20.4162 1.12607 21.3655 1.72987 21.9327C2.33367 22.4999 3.28295 22.4703 3.85015 21.8665L13.0933 12.027ZM11.0469 12.5305L12.0469 12.4993L11.9531 9.50073L10.9531 9.53198L11.0469 12.5305Z"
              fill="white"
            />
          </svg>
        </div>
        <div class="photo-prev" style="display: none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="23"
            viewBox="0 0 14 23"
            fill="none"
          >
            <path
              d="M0.719991 12.0282C0.153444 11.425 0.184207 10.4758 0.788702 9.90795L10.6395 0.654542C11.244 0.086707 12.1933 0.115314 12.7599 0.718437C13.3264 1.32156 13.2957 2.27081 12.6912 2.83864L3.93488 11.0639L12.1415 19.8003C12.708 20.4034 12.6773 21.3527 12.0728 21.9205C11.4683 22.4883 10.519 22.4597 9.9524 21.8566L0.719991 12.0282ZM2.80298 12.5305L1.76594 12.4992L1.86311 9.50079L2.90015 9.53204L2.80298 12.5305Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, Pagination, Navigation } from "swiper";
import MyImage from "../UI/MyImage.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      mobile: window.innerWidth < 769,

      //чё-то я тут с названиями картинок напутал. разбираться, конечно, в этом не буду. лучше напишу refMobile и ref
      photoes: [
        {
          img: "photo-1",
          refMobile: "photo-big-1",
          ref: "photo-big-8",
          class: "photo-item-big-1",
        },

        {
          img: "photo-4",
          refMobile: "photo-big-4",
          ref: "photo-big-2",
        },

        {
          img: "photo-5",
          refMobile: "photo-big-5",
          ref: "photo-big-1",
        },

        {
          img: "photo-2",
          refMobile: "photo-big-2",
          ref: "photo-big-9",
        },

        {
          img: "photo-3",
          refMobile: "photo-big-3",
          ref: "photo-big-3",
        },

        {
          img: "photo-6",
          refMobile: "photo-big-6",
          ref: "photo-big-5",
          class: "photo-item-big-2",
        },

        {
          img: "photo-7",
          refMobile: "photo-big-7",
          ref: "photo-big-6",
          class: "photo-item-big-3",
        },

        {
          img: "photo-8",
          refMobile: "photo-big-8",
          ref: "photo-big-4",
        },

        {
          img: "photo-9",
          refMobile: "photo-big-9",
          ref: "photo-big-7",
        },
      ],
    };
  },
  computed: mapGetters(["getWebp"]),
  mounted() {
    let myPhotoSwiper;
    const PhotoSwiper = () => {
      myPhotoSwiper = new Swiper(".photo-wrapper", {
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: true,
        pagination: {
          el: ".photo-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".photo-next",
          prevEl: ".photo-prev",
        },
        loop: true,
        modules: [Pagination, Navigation],
      });
    };

    const windowbreakpoint = window.matchMedia("(max-width: 768px)");
    const breakpointChecker = () => {
      if (!windowbreakpoint.matches) {
        this.mobile = true;
        if (myPhotoSwiper) {
          return myPhotoSwiper.destroy(true, true);
        }
      } else {
        this.mobile = false;
        return PhotoSwiper();
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },

  components: {
    MyImage,
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#photo {
  overflow: hidden;
  @extend %padd;

  .photo-wrapper {
    position: relative;
    @media (max-width: 768px) {
      max-width: 520px;
      width: 100%;
      overflow: hidden;
      margin: 0 auto;

      picture {
        justify-content: center;
      }
    }

    .swiper-wrapper {
      @media (min-width: 769px) {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 29px;

        @media (max-width: 1366px) {
          gap: 19px;
        }
      }

      .photo-item {
        display: block;
        overflow: hidden;
        cursor: zoom-in;

        &:hover {
          img {
            transform: scale(1.1);
          }
        }

        img {
          transition: all 0.4s;
          max-width: 100%;

          @media (max-width: 768px) {
            width: 86% !important;
          }
        }

        @include aspect {
          aspect-ratio: 1/1;
          width: 100%;

          @media (max-width: 768px) {
            max-width: 350px;
          }
        }
      }

      .photo-item-big-1 {
        grid-column: 1/3;
        grid-row: 1/3;
      }

      .photo-item-big-2 {
        grid-column: 3/5;
        grid-row: 2/4;
      }

      .photo-item-big-3 {
        grid-column: 5/7;
        grid-row: 1/3;
      }
    }
  }

  //pagination-navigation
  @media (max-width: 768px) {
    .photo-next,
    .photo-prev {
      display: flex !important;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #323232;
      cursor: pointer;
      user-select: none;
      opacity: 1;
      transition: 300ms opacity ease;
      top: 50%;
      transform: scale(0.7) translateY(calc(-50% - 21px));
      position: absolute;
      z-index: 2;
    }
    .photo-next {
      right: -7px;
    }
    .photo-prev {
      left: -7px;
    }

    .photo-pagination {
      display: flex !important;
      width: auto !important;
      margin-top: 30px;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;

      .swiper-pagination-bullet {
        width: 11px;
        height: 11px;
        margin: 0 !important;
        background: transparent;
        border-radius: 50%;
        border: 2px solid #323232;
        opacity: 1;
        transition: 0.3s all;

        &-active {
          background: #323232;
        }
      }
    }
  }
}
</style>
