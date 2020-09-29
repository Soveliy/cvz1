
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
    fullStar: true,
    starWidth: "22px",
    starSvg: `
    
    <svg xmlns="http://www.w3.org/2000/svg" width="24.795" height="23.582" viewBox="0 0 24.795 23.582">
      <path id="Path_460" data-name="Path 460" d="M1190.379,937.887l-2.678,7.808-8.254.135,6.6,4.96-2.422,7.891,6.756-4.743,6.756,4.743-2.422-7.891,6.6-4.96-8.254-.135Z" transform="translate(-1177.981 -936.346)" fill="" stroke="#df7eb1" stroke-width="1"/>
    </svg>

    `
  });
});

$('.reitings-rate').each(function () {
  $(this).rateYo({
    ratedFill: "#AE44B9",
    fullStar: true,
    starWidth: "31px",
    spacing: "9.6px",
    starSvg: `
    
    <svg xmlns="http://www.w3.org/2000/svg" width="24.795" height="23.582" viewBox="0 0 24.795 23.582">
      <path id="Path_460" data-name="Path 460" d="M1190.379,937.887l-2.678,7.808-8.254.135,6.6,4.96-2.422,7.891,6.756-4.743,6.756,4.743-2.422-7.891,6.6-4.96-8.254-.135Z" transform="translate(-1177.981 -936.346)" fill="" stroke="#AE44B9" stroke-width="1"/>
    </svg>

    `
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



$('.gallery-item__info-link').magnificPopup({
  type: 'image',
  
  gallery:{
    enabled:true,
  }
});

$('.about-center__image-block .video').magnificPopup({
  type: 'image',  
});



// baguetteBox.run('.about-center__row');


// timer('.action--1 .timer', '2020-10-15');
// timer('.action--2 .timer', '2020-11-15');
// timer('.action--3 .timer', '2020-12-15');

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
    $(".burger").removeClass("js-active");
    $("body").removeClass("js-hidden");
})
$(".burger").on('click', function(){
    $(this).toggleClass("js-active")
    $(".mobile-menu").slideToggle();
    $(".mobile-buttons").hide();
    $("body").toggleClass("js-hidden");

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
  $(".reception-js,.doc-page__callback-item--appointment").click(function(){
    $("#reception-modal").arcticmodal();
  });
  $(".free-conslut .btn").click(function(){
    $("#consult-modal").arcticmodal();
  });
  $(".doc-page__callback-item--review").click(function(){
    $("#review-modal").arcticmodal();
  });
  $(".doc-page__callback-item--question").click(function(){
    $("#question-modal").arcticmodal();
  });
  $('.options-buttons__search-btn').click(function(){
    $(this).next().toggleClass('js-active');
  });

  $(document).click( function(e){
    if ( $(e.target).closest('.options-buttons__search-btn').length || $(e.target).closest('.search__input-container').length) {
        // клик внутри элемента 
        return;
    }
    // клик снаружи элемента 
    $('.search__input-container').removeClass('js-active');
  });
    

var lastScrollTop = 62;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // код для прокрутки вниз
       $('header').addClass('sticky');
   } else {
      // код для прокрутки вверх
      if(window.innerWidth > 1024) {
        $('header').removeClass('sticky');
      }
   }
   if(window.innerWidth < 1024) {
    lastScrollTop = st;
  } else{
    if(st>62){
      lastScrollTop = st;
    }
  }
   
});


var $page = $('html, body');
$('.service-menu__item').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

