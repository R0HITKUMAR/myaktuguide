$(function () {

  "use strict";

  //===== Prealoder

  $(window).on('load', function (event) {
    $('.preloader').delay(300).fadeOut(300);
  });

  //==== Popup

  $(document).ready(function () {
    setTimeout(function () { $('#popUpModel').modal('show'); }, 1000);

    // setTimeout(function () { $('#popUpModel').modal('hide'); }, 10000);
  });

  //===== Sticky

  $(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".navigation").removeClass("sticky");
      $(".navigation-3 img").attr("src", "images/logo-2.png");
    } else {
      $(".navigation").addClass("sticky");
      $(".navigation-3 img").attr("src", "images/logo.png");
    }
  });


  //===== Mobile Menu

  $(".navbar-toggler").on('click', function () {
    $(this).toggleClass("active");
  });

  var subMenu = $('.sub-menu-bar .navbar-nav .sub-menu');

  if (subMenu.length) {
    subMenu.parent('li').children('a').append(function () {
      return '<button class="sub-nav-toggler"> <i class="fa fa-chevron-down"></i> </button>';
    });

    var subMenuToggler = $('.sub-menu-bar .navbar-nav .sub-nav-toggler');

    subMenuToggler.on('click', function () {
      $(this).parent().parent().children('.sub-menu').slideToggle();
      return false
    });

  }



  //===== Slick Slider

  function mainSlider() {

    var BasicSlider = $('.slider-active');

    BasicSlider.on('init', function (e, slick) {
      var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);
    });

    BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
    });

    BasicSlider.slick({
      autoplay: true,
      autoplaySpeed: 10000,
      pauseOnHover: false,
      dots: false,
      fade: true,
      arrows: true,
      prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
      nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
      responsive: [
        { breakpoint: 767, settings: { dots: false, arrows: false } }
      ]
    });

    function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();


  //===== Slick Category Slied

  $('.category-slied').slick({
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
    nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
    responsive: [
      {
        breakpoint: 922,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });


  //===== Slick Course Slied

  $('.course-slied').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
    nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Show or hide the sticky footer button
  $(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
      $('.back-to-top').fadeIn(200)
    } else {
      $('.back-to-top').fadeOut(200)
    }
  });

  //Animate the scroll to yop
  $('.back-to-top').on('click', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: 0,
    }, 1500);
  });

  // Show or hide the sticky footer button
  $(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
      $('.telegram-bot').fadeIn(200)
    } else {
      $('.telegram-bot').fadeOut(200)
    }
  });


});