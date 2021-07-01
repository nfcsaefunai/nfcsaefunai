(() => {
  const mobileMenuOutsideClick = () => {
    $(document).click(function (e) {
      const container = $('#fh5co-offcanvas, .js-fh5co-nav-toggle');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('offcanvas')) {
          $('body').removeClass('offcanvas');
          $('.js-fh5co-nav-toggle').removeClass('active');
        }
      }
    });
  };

  const offcanvasMenu = () => {
    $('#page').prepend('<div id="fh5co-offcanvas" />');
    $('#page').prepend(
      '<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>'
    );
    const clone1 = $('.menu-1 > ul').clone();
    $('#fh5co-offcanvas').append(clone1);
    const clone2 = $('.menu-2 > ul').clone();
    $('#fh5co-offcanvas').append(clone2);

    $('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
    $('#fh5co-offcanvas').find('li').removeClass('has-dropdown');

    // Hover dropdown menu on mobile
    $('.offcanvas-has-dropdown')
      .mouseenter(() => {
        const $this = $(this);

        $this.addClass('active').find('ul').slideDown(500, 'easeOutExpo');
      })
      .mouseleave(() => {
        const $this = $(this);
        $this.removeClass('active').find('ul').slideUp(500, 'easeOutExpo');
      });

    $(window).resize(() => {
      if ($('body').hasClass('offcanvas')) {
        $('body').removeClass('offcanvas');
        $('.js-fh5co-nav-toggle').removeClass('active');
      }
    });
  };

  const burgerMenu = () => {
    $('body').on('click', '.js-fh5co-nav-toggle', function (event) {
      const $this = $(this);

      if ($('body').hasClass('overflow offcanvas')) {
        $('body').removeClass('overflow offcanvas');
      } else {
        $('body').addClass('overflow offcanvas');
      }
      $this.toggleClass('active');
      event.preventDefault();
    });
  };

  $(() => {
    mobileMenuOutsideClick();
    offcanvasMenu();
    burgerMenu();
  });
})();
