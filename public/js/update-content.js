const updateContent = () => {
  const contentWayPoint = () => {
    let i = 0;
    $('.animate-box').waypoint(
      function (direction) {
        if (
          direction === 'down' &&
          !$(this.element).hasClass('animated-fast')
        ) {
          i++;

          $(this.element).addClass('item-animate');
          setTimeout(() => {
            $('body .animate-box.item-animate').each(function (k) {
              const el = $(this);
              setTimeout(
                () => {
                  const effect = el.data('animate-effect');
                  if (effect === 'fadeIn') {
                    el.addClass('fadeIn animated-fast');
                  } else if (effect === 'fadeInLeft') {
                    el.addClass('fadeInLeft animated-fast');
                  } else if (effect === 'fadeInRight') {
                    el.addClass('fadeInRight animated-fast');
                  } else {
                    el.addClass('fadeInUp animated-fast');
                  }

                  el.removeClass('item-animate');
                },
                k * 200,
                'easeInOutExpo'
              );
            });
          }, 100);
        }
      },
      { offset: '85%' }
    );
  };

  const dropdown = () => {
    $('.has-dropdown')
      .mouseenter(() => {
        const $this = $(this);
        $this
          .find('.dropdown')
          .css('display', 'block')
          .addClass('animated-fast fadeInUpMenu');
      })
      .mouseleave(() => {
        const $this = $(this);

        $this
          .find('.dropdown')
          .css('display', 'none')
          .removeClass('animated-fast fadeInUpMenu');
      });
  };

  const goToTop = () => {
    $('.js-gotop').on('click', function (event) {
      event.preventDefault();

      $('html, body').animate(
        {
          scrollTop: $('html').offset().top
        },
        500,
        'easeInOutExpo'
      );

      return false;
    });

    $(window).scroll(() => {
      const $win = $(window);
      if ($win.scrollTop() > 200) {
        $('.js-top').addClass('active');
      } else {
        $('.js-top').removeClass('active');
      }
    });
  };

  // Loading page
  const loaderPage = () => {
    $('.fh5co-loader').fadeOut('slow');
  };

  const counter = () => {
    $('.js-counter').countTo({
      formatter: function (value, options) {
        return value.toFixed(options.decimals);
      }
    });
  };

  const counterWayPoint = () => {
    if ($('#fh5co-counter').length > 0) {
      $('#fh5co-counter').waypoint(
        function (direction) {
          if (direction === 'down' && !$(this.element).hasClass('animated')) {
            setTimeout(counter, 400);
            $(this.element).addClass('animated');
          }
        },
        { offset: '90%' }
      );
    }
  };

  const sliderMain = () => {
    $('#fh5co-hero .flexslider').flexslider({
      animation: 'fade',
      slideshowSpeed: 5000,
      directionNav: true,
      start: () => {
        setTimeout(() => {
          $('.slider-text').removeClass('animated fadeInUp');
          $('.flex-active-slide')
            .find('.slider-text')
            .addClass('animated fadeInUp');
        }, 500);
      },
      before: () => {
        setTimeout(() => {
          $('.slider-text').removeClass('animated fadeInUp');
          $('.flex-active-slide')
            .find('.slider-text')
            .addClass('animated fadeInUp');
        }, 500);
      }
    });
  };

  const bibleVerseCarousel = () => {
    const owl = $('.owl-carousel-fullwidth');
    owl.owlCarousel({
      animateOut: 'fadeOut',
      autoplay: true,
      items: 1,
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      smartSpeed: 800,
      autoHeight: true
    });
  };

  $(() => {
    contentWayPoint();
    sliderMain();
    dropdown();
    goToTop();
    loaderPage();
    counterWayPoint();
    bibleVerseCarousel();
  });
};

export default updateContent;
