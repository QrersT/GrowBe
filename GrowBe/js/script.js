function dropDown() {
  const menuItem = document.querySelector(".menu__list-item_js");
  const dropDownMenu = document.querySelector(".menu__dropdown");

  menuItem.addEventListener("click", function (e) {
    e.preventDefault();
    dropDownMenu.classList.toggle("active");
  });
}

dropDown();

$(document).click(function (e) {
  if ($(e.target).is(".menu__dropdown")) {
    $(".menu__dropdown").addClass("hide");
  }
});

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
          centerPadding: "340px",
        },
      },
      {
        breakpoint: 1600,
        settings: {
          centerPadding: "300px",
        },
      },
      {
        breakpoint: 1486,
        settings: {
          centerPadding: "270px",
        },
      },
      {
        breakpoint: 1250,
        settings: {
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 1100,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 900,
        settings: {
          centerPadding: "180px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          centerPadding: "130px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "10px",
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".news__slider").slick({
    centerMode: true,
    centerPadding: "530px",
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 2,
    // autoplay: true,
    // autoplaySpeed: 3000,
    dots: true,
    responsive: [
      {
        breakpoint: 1750,
        settings: {
          centerPadding: "490px",
        },
      },
      {
        breakpoint: 1610,
        settings: {
          centerPadding: "430px",
        },
      },
      {
        breakpoint: 1500,
        settings: {
          centerPadding: "370px",
        },
      },
      {
        breakpoint: 1390,
        settings: {
          centerPadding: "320px",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          centerPadding: "270px",
        },
      },
      {
        breakpoint: 1180,
        settings: {
          centerPadding: "240px",
        },
      },
      {
        breakpoint: 1095,
        settings: {
          centerPadding: "160px",
        },
      },
      {
        breakpoint: 950,
        settings: {
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 770,
        settings: {
          centerPadding: "0px",
        },
      },
    ],
  });
});

function hamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".header__right");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("header__right_active");
  });
}

hamburgerMenu();

$(document).mouseup(function (e) {
  var div = $(".header__right, .hamburger");
  if (!div.is(e.target) && div.has(e.target).length === 0) {
    div.removeClass("header__right_active");
    $(".hamburger").removeClass("hamburger_active");
  }
});

// Accordion
var acc = document.getElementsByClassName("features__link");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
