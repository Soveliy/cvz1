
window.addEventListener('load', function() {
  

// $('.main-slider .swiper-container').each(function(){
//     var main_slider = new Swiper(this, {

// const { default: Swiper } = require("swiper");

// const { default: Swiper } = require("swiper");

//         navigation: {
//             nextEl: $(this).parent().find('.swiper-button-next'),
//             prevEl: $(this).parent().find('.swiper-button-prev'),
//         }
//     pagination: {
//         el:  $(this).parent().find('.swiper-pagination'),
//         type: 'fraction',
//       },

// });
// });

var aboutSlider = new Swiper('.main-slider .swiper-container', {
  pagination: {
    el: '.main-slider .swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.main-slider .swiper-button-next',
    prevEl: '.main-slider .swiper-button-prev',
  },
});

// Slider

// $('.content-slider').each(function () {
//   var contentSlider = new Swiper(this, {
//     spaceBetween: 60,
//     slidesPerView: 2,
//     navigation: {
//       nextEl: $(this).prev().find('.content-slider__arrow-right')[0],
//       prevEl: $(this).prev().find('.content-slider__arrow-left')[0],
//     },
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 20
//       },
//       1024: {
//         slidesPerView: 2,
//         spaceBetween: 40
//       }
//     }
//   });

// });

// Price slider

$('.content-slider.price__slider').each(function(){
  var contentSlider = new Swiper(this, {
    spaceBetween: 60,
    slidesPerView: 1,
    navigation: {
      nextEl: $(this).prev().find('.content-slider__arrow-right')[0],
      prevEl: $(this).prev().find('.content-slider__arrow-left')[0],
    },
  });
});

// Question slider

$('.content-slider.questions__slider').each(function(){
  var contentSlider = new Swiper(this, {
    spaceBetween: 60,
    slidesPerView: 1,
    navigation: {
      nextEl: $(this).prev().find('.content-slider__arrow-right')[0],
      prevEl: $(this).prev().find('.content-slider__arrow-left')[0],
    },
  });
});

// about slider

$('.about-slider .swiper-container').each(function(){
  var contentSlider = new Swiper(this, {
    spaceBetween: 60,
    slidesPerView: 1,
    navigation: {
      nextEl: $(this).prev().find('.content-slider__arrow-right')[0],
      prevEl: $(this).prev().find('.content-slider__arrow-left')[0],
    },
  });
});

// stars__slider

$('.stars__slider').each(function(){
  var contentSlider = new Swiper(this, {
    spaceBetween: 60,
    slidesPerView: 1,
    navigation: {
      nextEl: $(this).prev().find('.content-slider__arrow-right')[0],
      prevEl: $(this).prev().find('.content-slider__arrow-left')[0],
    },
  });
});

// Reviews slider

$('.content-slider.reviews__slider').each(function(){
  var contentSlider = new Swiper(this, {
    spaceBetween: 30,
    slidesPerView: 3,
    navigation: {
      nextEl: $(this).prev().find('.content-slider__arrow-right')[0],
      prevEl: $(this).prev().find('.content-slider__arrow-left')[0],
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
});

// Gallery slider

$('.content-slider.gallery__slider').each(function(){
  var contentSlider = new Swiper(this, {
    spaceBetween: 30,
    slidesPerView: 3,
    navigation: {
      nextEl: $(this).prev().find('.content-slider__arrow-right')[0],
      prevEl: $(this).prev().find('.content-slider__arrow-left')[0],
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
});

// Articles slider

$('.content-slider.articles__slider').each(function(){
  var contentSlider = new Swiper(this, {
    spaceBetween: 10,
    slidesPerView: 4,
    navigation: {
      nextEl: $(this).prev().find('.content-slider__arrow-right')[0],
      prevEl: $(this).prev().find('.content-slider__arrow-left')[0],
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }

  });
});

// Articles slider

$('.content-slider.methodology-slider__slider').each(function(){
  var contentSlider = new Swiper(this, {
    spaceBetween: 10,
    slidesPerView: 4,
    navigation: {
      nextEl: $(this).prev().find('.content-slider__arrow-right')[0],
      prevEl: $(this).prev().find('.content-slider__arrow-left')[0],
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 40
      }
    }

  });
});

// Specialists slider

$('.content-slider.specialists__slider').each(function(){
  var contentSlider = new Swiper(this, {
    spaceBetween: 30,
    slidesPerView: 3,
    navigation: {
      nextEl: $(this).prev().find('.content-slider__arrow-right')[0],
      prevEl: $(this).prev().find('.content-slider__arrow-left')[0],
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1025: {
        slidesPerView: 3,
      }
    }
  });
});

// Video slider

$('.content-slider.video-slider__slider').each(function(){
  var contentSlider = new Swiper(this, {
    spaceBetween: 30,
    slidesPerView: 3,
    navigation: {
      nextEl: $(this).prev().find('.content-slider__arrow-right')[0],
      prevEl: $(this).prev().find('.content-slider__arrow-left')[0],
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1025: {
        slidesPerView: 3,
      }
    }
  });
});

// News main

$('.content-slider.news-main__slider').each(function(){
  var contentSlider = new Swiper(this, {
    spaceBetween: 30,
    // slidesPerView: 3,
    navigation: {
      nextEl: $(this).prev().find('.content-slider__arrow-right')[0],
      prevEl: $(this).prev().find('.content-slider__arrow-left')[0],
    },
    breakpoints: {
      310: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 4,
      }
    }
  });
});




//Table tips

$('.price__icon-container').mouseover(function () {
  $(this).find('.price__tip').addClass('active');
});
$('.price__icon-container').mouseleave(function () {
  $(this).find('.price__tip').removeClass('active');
});


//FAQ dropdown

function dropdown(selectorTile, activeClass){
  $(selectorTile).click(function () {
    $(this).toggleClass(activeClass);
    $(this).next().toggleClass(activeClass).slideToggle();
  });
}

dropdown('.questions-dropdown__title-block', 'active');
dropdown('.price-page__item-title', 'active');
dropdown('.glossary-item__title', 'active');



// rate
$('.rate').each(function () {
  $(this).rateYo({
    ratedFill: "#DF7EB1",
    ratedStroke: "#DF7EB1",
    fullStar: true,
    starWidth: "22px",
  });
});

$('.reitings-rate').each(function () {
  $(this).rateYo({
    ratedFill: "#AE44B9",
    fullStar: true,
    starWidth: "31px",
    spacing: "9.6px"
  });
});


//Timer

  function timer(selector, deadline) {
    function getTimeRemaining(endtime) {
      const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor((t / (1000 * 60 * 60 * 24))),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t / (1000 * 60 * 60) % 24));
  
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
  
    function getZero(num) {
      if (num >= 0 && num < 10) {
        return '0' + num;
      } else {
        return num;
      }
    }
  
    function setClock(selector, endtime) {
  
      const timer = document.querySelector(selector),
        days = timer.querySelector(".timer__item--days"),
        hours = timer.querySelector('.timer__item--hours'),
        minutes = timer.querySelector('.timer__item--minutes'),
        seconds = timer.querySelector('.timer__item--seconds'),
        timeInterval = setInterval(updateClock, 1000);
  
      updateClock(deadline);
  
      function updateClock() {
        const t = getTimeRemaining(endtime);
        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);
  
        if (t.total <= 0) {
          clearInterval(timeInterval);
        }
      }
    }
  
    try{
      setClock(selector, deadline);
    } catch{}
  
  }

  
baguetteBox.run('.gallery__slider .swiper-wrapper');


timer('.action--1 .timer', '2020-10-15');
timer('.action--2 .timer', '2020-11-15');
timer('.action--3 .timer', '2020-12-15');

$('.review-post__select').niceSelect();

$('.review-post__form,.form').validate({

  messages:{
    login:{
      required: "",
   }    
  }

});


});


// upload width Browser
windowSize = $(window).width(); 
$(window).on('resize', function(event){
windowSize = $(window).width(); 
});


$(".header__buttons-item-icon--edit").on('click', function(){
    $(".mobile-buttons").slideToggle();
    $(".mobile-menu").hide();
    $(".burger").removeClass("js-active")
})
$(".burger").on('click', function(){
    $(this).toggleClass("js-active")
    $(".mobile-menu").slideToggle();
    $(".mobile-buttons").hide();
})
$(".mobile-menu__nav > ul > li > span").on('click', function(){

  
    if(windowSize < 1025){
    if ($(this).hasClass("js-active")) {
        $(this).removeClass("js-active");
        $(this).next().removeClass("js-active");
        $(this).next().slideToggle();
        
    } else {
      
      $(this).closest(".mobile-menu__nav").find("ul.js-active").slideToggle();
      $(this).closest(".mobile-menu__nav").find("ul.js-active").removeClass("js-active");
      $(".mobile-menu__nav > ul > li > span").removeClass("js-active");
      $(this).addClass("js-active");
      $(this).next().addClass("js-active");
      $(this).next().slideToggle();
    }
    }  
  });


  $(".callback-js").click(function(){
    $("#callback-modal").arcticmodal();
  });
  $(".reception-js").click(function(){
    $("#reception-modal").arcticmodal();
  });
  $('.options-buttons__search-btn').click(function(){
    $(this).next().toggleClass('js-active');
  });


//   // When the user scrolls the page, execute myFunction
// window.onscroll = function() {stickyHeader()};

// // Get the header
// var header = document.querySelector("header");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function stickyHeader() {
//   if (window.pageYOffset >= sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // код для прокрутки вниз
       $('header').addClass('sticky');
   } else {
      // код для прокрутки вверх
      $('header').removeClass('sticky');
   }
   lastScrollTop = st;
});
  