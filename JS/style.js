var lastScrollTop = 0; // Keeps track of last scroll position
$(window).scroll(function() {
  var currentScroll = $(this).scrollTop();
  if (currentScroll > lastScrollTop){
    // Scroll Down
    $('.navbar').fadeOut();
  } else {
    // Scroll Up
    if(currentScroll + $(window).height() < $(document).height()) {
      $('.navbar').fadeIn();
    }
  }
  lastScrollTop = currentScroll;
});

