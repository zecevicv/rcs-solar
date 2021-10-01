/* #Banner Slider
================================================== */
if (document.querySelector('.banner.banner-slider')) {
  new Swiper(".banner.banner-slider .swiper", {
    pagination: {
      el: ".banner.banner-slider .swiper-pagination",
    },
  });
}

/* #Home Benefits Slider
================================================== */
if (document.querySelector('.home-benefits')) {
  new Swiper(".home-benefits .swiper", {
    pagination: {
      el: ".home-benefits .swiper-pagination",
    },
  });
}

/* #Home Features Slider
================================================== */
if (document.querySelector('.home-features')) {
  new Swiper(".home-features .swiper", {
    pagination: {
      el: ".home-features .swiper-pagination",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.25,
        allowTouchMove: true
      },
      1024: {
        slidesPerView: 4,
        allowTouchMove: false
      }
    }
  });
}

/* #Products Slider
================================================== */
if (document.querySelector('.products-slider')) {
  new Swiper(".products-slider .swiper", {
    pagination: {
      el: ".products-slider .swiper-pagination",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1,
        allowTouchMove: true
      },
      1024: {
        slidesPerView: 3,
        allowTouchMove: false
      }
    }
  });
}

/* #Projects Slider
================================================== */
if (document.querySelector('.projects-slider')) {
  new Swiper(".projects-slider .swiper", {
    loop: true,
    navigation: {
      nextEl: ".projects-slider .left",
      prevEl: ".projects-slider .right",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.1
      },
      1024: {
        slidesPerView: 3.57
      }
    }
  });
}

/* #Home Clients Slider
================================================== */
if (document.querySelector('.home-clients')) {
  new Swiper(".home-clients .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 2.5,
        allowTouchMove: true,
        loop: true,
        centeredSlides: true
      },
      1024: {
        slidesPerView: 1,
        allowTouchMove: false,
        loop: false,
        centeredSlides: false
      }
    }
  });
}

/* #Posts Slider
================================================== */
if (document.querySelector('.posts-slider')) {
  new Swiper(".posts-slider .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 1.25,
        allowTouchMove: true
      },
      1024: {
        slidesPerView: 4,
        allowTouchMove: false
      }
    }
  });
}