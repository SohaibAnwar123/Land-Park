$('.dropdown.hover_dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });


// slick slider js starts

$('.hero_carousel ul').slick({
    dots: true,
    infinite: true,
    arrows: false,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear',
    speed: 2500,
});

// slick slider hero section js ends

// gallery images js
// if (window.matchMedia('(max-width: 991.98px)').matches) {
$('.gallery_images ul').slick({
    dots: false,
    infinite: false,
    arrows: false,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    variableWidth: true,
    centerMode: false,
    fade: false,
    responsive: [

        {
            breakpoint: 1550,
            settings: {
                slidesToShow: 2,
                // infinite: true
                
            }
        },

        {
            breakpoint: 1360,
            settings: {
                slidesToShow: 2,
                // infinite: true
                
            }
        },

        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                centerMode: true,
                infinite: false
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
               infinite: false
            }
        }
    ]
});

// tab gallery images
$('.gallery_tab ul').slick({
    dots: false,
    infinite: false,
    arrows: false,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: false,
    autoplaySpeed: 1500,
    variableWidth: true,
    centerMode: false,
    fade: false,
    cssEase: 'linear',
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                infinite: false,
                centerMode: true
               
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: true
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                centerMode: true
            }
        }
    ]
});

// bottom gallery slick js
$('.bottom_gallery_images ul').slick({
    dots: false,
    infinite: true,
    arrows: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: false,
    autoplaySpeed: 1500,
    variableWidth: true,
    centerMode: true,
    fade: false,
    cssEase: 'linear',
    prevArrow: " <img class='slide-arrow slick-prev' src='assets/img/gallery_prev.jpg'>",
    nextArrow: " <img class='slide-arrow slick-next' src='assets/img/gallery_next.jpg'>",
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1.3,
                variableWidth:false,
                centerMode:false,
                arrows: false,
                infinite: false
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: true
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                centerMode: true
            }
        }
    ]
});

// gundrisse_images slick js
$('.Grundrisse_images ul').slick({
    dots: false,
    infinite: false,
    arrows: true,
    swipeToSlide: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    autoplay: false,
    autoplaySpeed: 1500,
    variableWidth: false,
    centerMode: false,
    fade: false,
    cssEase: 'linear',
    prevArrow: " <img class='slide-arrow slick-prev' src='assets/img/gallery_prev.jpg'>",
    nextArrow: " <img class='slide-arrow slick-next' src='assets/img/gallery_next.jpg'>",
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 2,
                variableWidth: false
            }
        },

        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                variableWidth: false
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
                
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
               
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
                
            }
        }
    ]
});



// slick js ends



// scroll top js
var btn = $('#topbutton');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});

// old js

// navbar collapse js
$('#navbar-hamburger').on('click', function() {
    $('#collapsibleNavbar').show();
    $('#navbar-close').show();
    $(this).hide();

    $('html, body').css({
overflow: 'hidden',
height: '100%',
});
});

$('#navbar-close').click(function() {

$('html, body').css({
overflow: 'auto',
height: 'auto'
});
$('#collapsibleNavbar').hide();
$(this).hide();
$('#navbar-hamburger').show();

});







