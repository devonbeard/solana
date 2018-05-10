// Accordions
(function($) {

  var allPanels = $('.js-badger-accordion > dd').hide();

  $('.js-badger-accordion-header').click(function() {
    allPanels.slideUp();
    $(this).parent().next().slideDown();
    return false;
  });

})(jQuery);


$('.panel-control').on('click', function(e) {
  var panelID = $(this).attr("id");
  $(this).addClass('is-active').siblings('.is-active').toggleClass('is-active');
  if ($(`#${panelID}-display`).hasClass('is-active')) {
    // do nothing
  } else {
    $(`#${panelID}-display`).toggleClass('is-active').siblings('.is-active').removeClass('is-active');
  }
});



// Header BG
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 100);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if(Math.abs(lastScrollTop - st) <= delta)
      return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if ( st < 200) {
    // Scroll Down
    $('.site-header').removeClass('nav-down').addClass('nav-up');
  } else {
    // Scroll Up
    if(st + $(window).height() < $(document).height()) {
      $('.site-header').removeClass('nav-up').addClass('nav-down');
    }
  }

  lastScrollTop = st;
}





// Form Input Functionality
var validInputs = $('.input');
validInputs.map(function(inputEl) {
  if (inputEl.value !== "") {
    $(inputEl).parent().addClass("input--filled");
  }

  $(this).on("focus", onInputFocus);
  $(this).on("blur", onInputBlur);
});

function onInputFocus(ev) {
  $(this).parent().addClass("input--filled");
}

function onInputBlur(ev) {
  if (ev.target.value.trim() === "") {
    $(this).parent().removeClass("input--filled");
  }
}


// Smooth scrolling
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 750, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});



// Number formatting
function formatNumber (num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

$('.js-number').on('blur', function() {
  var formattedNum = formatNumber(this.value);
  this.value = formattedNum;
});


// Carousel 
$(document).ready(function(){
  $('.slick-carousel').slick({});
});
