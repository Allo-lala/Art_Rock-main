(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    //////////////////////// read readMoreButton
        document.addEventListener('DOMContentLoaded', function () {
            const readMoreButton = document.querySelector('.read-more');
            const bio = document.querySelector('.artist-bio');
            let expanded = false;

            readMoreButton.addEventListener('click', function() {
                if (expanded) {
                    bio.classList.remove('expanded');
                    readMoreButton.textContent = 'Read more...';
                } else {
                    bio.classList.add('expanded');
                    readMoreButton.textContent = 'Read less...';
                }
                expanded = !expanded;
            });
        });

    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
  
    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    const trendingSwiper = new Swiper(".trending__swiper", {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 50,
      });
      
      const testimonialSwiper = new Swiper(".testimonial__swiper", {
        loop: true,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

})(jQuery);


