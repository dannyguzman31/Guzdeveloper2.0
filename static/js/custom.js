(function ($) {
  'use strict';
  var DAN = {};

  /*--------------------
 * Pre Load
----------------------*/
  DAN.WebLoad = function () {
    setTimeout(function () {
      // Array of image filenames
      const images = [
        'main1.jpg',
        'main2.jpg',
        'main3.jpg',
        'main4.jpg',
        'main5.jpg',
        'main6.jpg',
      ];

      // Randomly select an image from the array
      const randomImage = images[Math.floor(Math.random() * images.length)];

      // Set the selected image as the background of the home-banner section
      const bannerSection = document.querySelector('.home-banner');
      bannerSection.style.backgroundImage =
        'url(static/img/img/' + randomImage + ')';

      // Fade out the loader
      let loader = document.getElementById('loading');
      loader.style.transition = 'opacity 1s';
      loader.style.opacity = '0';
      setTimeout(function () {
        loader.style.display = 'none';
      }, 1000); // Wait for the fade-out to complete before hiding
    }, 1000);
  };
  
  /*--------------------
        * Menu Close
    ----------------------*/
  DAN.MenuClose = function () {
    $('.navbar-nav .nav-link').on('click', function () {
      var toggle = $('.navbar-toggler').is(':visible');
      if (toggle) {
        $('.navbar-collapse').collapse('hide');
      }
    });
  };

  /*--------------------
        * Smooth Scroll
    ----------------------*/
  DAN.HeaderScroll = function () {
    $('a[href*="#"]:not([href="#"])').on('click', function () {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') ||
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate(
            {
              scrollTop: target.offset().top - 65,
            },
            1000
          );
          return false;
        }
      }
    });
  };

  /*--------------------
        * Header Fixed
    ----------------------*/
  DAN.HeaderFixed = function () {
    if ($(window).scrollTop() >= 60) {
      $('.navbar').addClass('fixed-header');
    } else {
      $('.navbar').removeClass('fixed-header');
    }
  };

  /*--------------------
        * Progress Bar 
    ----------------------*/
  DAN.ProgressBar = function () {
    $('.progress .progress-bar').each(function () {
      var bottom_object = $(this).offset().top + $(this).outerHeight();
      var bottom_window = $(window).scrollTop() + $(window).height();
      var progressWidth = $(this).attr('aria-valuenow') + '%';
      if (bottom_window > bottom_object) {
        $(this).css({
          width: progressWidth,
        });
      }
    });
  };

  /*--------------------
    * Counter JS
    ----------------------*/
  var a = 0;
  DAN.Counter = function () {
    var oTop = $('.counter-box').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.count').each(function () {
        $(this)
          .prop('Counter', 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 4000,
              easing: 'swing',
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
      a = 1;
    }
  };

  /*--------------------
    * Isotope
    ----------------------*/
  DAN.MasoNry = function () {
    var portfolioWork = $('.portfolio-content');
    $(portfolioWork).isotope({
      resizable: false,
      itemSelector: '.portfolio-item',
      layoutMode: 'masonry',
      filter: '*',
    });
    //Filtering items on portfolio.html
    var portfolioFilter = $('.filter li');
    // filter items on button click
    $(portfolioFilter).on('click', function () {
      var filterValue = $(this).attr('data-filter');
      portfolioWork.isotope({ filter: filterValue });
    });
    //Add/remove class on filter list
    $(portfolioFilter).on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');
    });
  };

  /*--------------------
    * owl Slider
    ----------------------*/
  DAN.BlogSlider = function () {
    var testimonials_slider = $('#blog-slider-single');
    testimonials_slider.owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        991: {
          items: 3,
        },
        1140: {
          items: 3,
        },
      },
    });
  };

  DAN.ClientSlider = function () {
    var testimonials_slider = $('#client-slider-single');
    testimonials_slider.owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        768: {
          items: 2,
        },
        991: {
          items: 3,
        },
        1140: {
          items: 3,
        },
      },
    });
  };

  DAN.PopupVideo = function () {
    $('.popup-video').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  };

  DAN.LightboxGallery = function () {
    $('.portfolio-content').magnificPopup({
      delegate: '.lightbox-gallery',
      type: 'image',
      tLoading: '#%curr%',
      mainClass: 'mfp-fade',
      fixedContentPos: true,
      closeBtnInside: true,
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
      },
    });
  };

  // Window on Load
  $(window).on('load', function () {
    DAN.WebLoad();
  });

  $(document).on('ready', function () {
    DAN.MasoNry(),
      DAN.ClientSlider(),
      DAN.MenuClose(),
      DAN.BlogSlider(),
      DAN.Counter(),
      DAN.ProgressBar(),
      DAN.HeaderScroll(),
      DAN.PopupVideo(),
      DAN.LightboxGallery(),
      DAN.HeaderSticky();
  });

  $(window).on('scroll', function () {
    DAN.Counter(), DAN.ProgressBar(), DAN.HeaderFixed();
  });
})(jQuery);
