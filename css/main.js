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

  