function dropDown() {
  const menuItem = document.querySelector(".menu__list-item_js");
  const dropDownMenu = document.querySelector(".menu__dropdown");

  menuItem.addEventListener("click", function (e) {
    e.preventDefault();
    dropDownMenu.classList.toggle("active");
  });
}

dropDown();

/* const clientsSlider = new Swiper(".clients__slider", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
}); */

$(document).ready(function () {
  $(".clients__slider").slick({
    centerMode: true,
    centerPadding: "360px",
    slidesToShow: 2,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 3000,
    dots: true,
    responsive: [
      {
        breakpoint: 1750,
        settings: {
          centerPadding: "100px",
        },
        breakpoint: 1600,
        settings: {
          centerPadding: "500px",
          slidesToShow: 1,
        },
        breakpoint: 1486,
        settings: {
          centerPadding: "100px",
          slidesToShow: 1,
        },
        breakpoint: 1200,
        settings: {
          centerPadding: "100px",
        },
        breakpoint: 1200,
        settings: {},
      },
    ],
  });

  $(".news__slider").slick({
    centerMode: true,
    centerPadding: "550px",
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 6,
    // autoplay: true,
    // autoplaySpeed: 3000,
    dots: true,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          centerPadding: "200px",
        },
        breakpoint: 1600,
        settings: {
          centerPadding: "350px",
          centerMode: false,
          slidesToShow: 2,
        },
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
