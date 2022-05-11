(function ($) {
    "use strict";

    /*--------------------- Site Loader   --------------------*/
    // $(window).on("load", function () {
        
    // });

    window.onload= function (){
        $("#ir-overlay").fadeOut("slow");
    }

    /*--------------------- Aos animation on scroll   --------------------*/
    // AOS.init({
    //     once: true
    // });

    /*--------------------- Mobile menu sidebar   --------------------*/
        $(".ir-side-toggle").on("click", function(e) {
            $(".ir-mobile-menu").addClass("ir-open");
            $(".ir-side-cart-overlay").fadeIn();
        });
        
        $(".ir-side-cart-overlay").on("click", function(e) {
            $(".ir-side-cart-overlay").fadeOut();
            $(".ir-mobile-menu").removeClass("ir-open");
        });

        $(".ir-close").on("click", function(e) {
            e.preventDefault();
            $(".ir-side-cart-overlay").fadeOut();
            $(".ir-mobile-menu").removeClass("ir-open");
        });

        function ResponsiveMobileekkaMenu() {
            var $irNav = $(".ir-menu-content"),
            $irNavSubMenu = $irNav.find(".sub-menu");
            $irNavSubMenu.parent().prepend('<span class="menu-toggle"><i class="fa fa-chevron-down" aria-hidden="true"></i></span>');
    
            $irNav.on("click", "li a, .menu-toggle", function(e) {
                var $this = $(this);
                if ($this.attr("href") === "#" || $this.hasClass("menu-toggle")) {
                    e.preventDefault();
                    if ($this.siblings("ul:visible").length) {
                        $this.parent("li").removeClass("active");
                        $this.siblings("ul").slideUp();
                        $this.parent("li").find("li").removeClass("active");
                        $this.parent("li").find("ul:visible").slideUp();
                    } else {
                        $this.parent("li").addClass("active");
                        $this.closest("li").siblings("li").removeClass("active").find("li").removeClass("active");
                        $this.closest("li").siblings("li").find("ul:visible").slideUp();
                        $this.siblings("ul").slideDown();
                    }
                }
            });
        }
    
        ResponsiveMobileekkaMenu();
    /*--------------------- Replace all SVG images with inline SVG -------------------------------- */
    // $(document).ready(function () {
    //     $('img.svg-img[src$=".svg"]').each(function () {
    //         var $img = $(this);
    //         var imgURL = $img.attr('src');
    //         var attributes = $img.prop("attributes");

    //         $.get(imgURL, function (data) {
    //             var $svg = $(data).find('svg');

                
    //             $svg = $svg.removeAttr('xmlns:a');

                
    //             $.each(attributes, function () {
    //                 $svg.attr(this.name, this.value);
    //             });

                
    //             $img.replaceWith($svg);
    //         }, 'xml');
    //     });
    // });

    /*--------------------- on click to scroll next section -------------------------------- */
    $(document).ready(function () {
        $('.scroll-next').on("click", function (e) {

            var targetHref = $(this).attr('data-scroll');

            $('html, body').animate({
                scrollTop: $('#' + targetHref).offset().top
            }, 100);

            e.preventDefault();
        });
    });

    /*--------------------- Scroll icon on hover mouse animation  -------------------------------- */
    $('.menu').mousemove(function (e) {

        var i = $(".circle"),
            s = e.pageX - i.offset().left,
            o = e.pageY - i.offset().top;

        TweenMax.to($('.circle'), .3, {
            x: (s - i.width() / 2) / i.width() * 50,
            y: (o - i.height() / 2) / i.height() * 50,
            scale: 1.2,
            ease: Power2.easeOut
        })

        TweenMax.to($('.text'), .3, {
            x: (s - i.width() / 2) / i.width() * 80,
            y: (o - i.height() / 2) / i.height() * 80,
            ease: Power2.easeOut
        })

    });

    $('.menu').mouseleave(function (e) {

        var i = $(".circle"),
            s = e.pageX - i.offset().left,
            o = e.pageY - i.offset().top;
        TweenMax.to($('.circle'), .3, {
            x: 0,
            y: 0,
            scale: 1,
            ease: Power2.easeOut
        })

        TweenMax.to($('.text'), .3, {
            x: 0,
            y: 0,
            ease: Power2.easeOut
        })

    });

    /*--------------------- Hero Slider -------------------------------- */
    // $('.ir-owl').owlCarousel({
    //     margin: 0,
    //     loop: true,
    //     dots: true,
    //     nav: false,
    //     animateOut: 'fadeOut',
    //     animateIn: 'fadeIn',
    //     mouseDrag: false,
    //     touchDrag: false,
    //     smartSpeed: 1000,
    //     autoplay: true,
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         576: {
    //             items: 1,
    //         },
    //         768: {
    //             items: 1,
    //         },
    //         992: {
    //             items: 1,
    //         },
    //         1200: {
    //             items: 1,
    //         },
    //         1367: {
    //             items: 1,
    //         }
    //     }
    // });

    /*--------------------- Certification Slider -------------------------------- */
    // $('.ir-certi-slider').owlCarousel({
    //     margin: 24,
    //     loop: false,
    //     dots: false,
    //     nav: true,
    //     navText: ["<img class='svg-img' src='assets/img/icons/prev.svg'>","<img class='svg-img' src='assets/img/icons/next.svg'>"],
    //     smartSpeed: 1000,
    //     autoplay: false,
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         576: {
    //             items: 1,
    //         },
    //         768: {
    //             items: 2,
    //         },
    //         992: {
    //             items: 3,
    //         },
    //         1200: {
    //             items: 3,
    //         },
    //         1367: {
    //             items: 4,
    //         }
    //     }
    // });

     /*--------------------- Blog Slider -------------------------------- */
     
    /*--------------------- Association Slider -------------------------------- */
    // $('.lx-association-slider').owlCarousel({
    //     margin: 30,
    //     loop: true,
    //     dots: false,
    //     nav: false,
    //     smartSpeed: 1000,
    //     autoplay: true,
    //     items: 3,
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 2,
    //             nav: false
    //         },
    //         576: {
    //             items: 3,
    //             nav: false
    //         },
    //         768: {
    //             items: 3,
    //             nav: false
    //         },
    //         992: {
    //             items: 4,
    //             nav: false
    //         },
    //         1200: {
    //             items: 5,
    //             nav: false
    //         },
    //         1367: {
    //             items: 5,
    //             nav: false
    //         }
    //     }
    // });

    /*--------------------- Responsibility page Slider (Education section) -------------------------------- */
    // $('.edu-slider').owlCarousel({
    //     loop: false,
    //     margin: 30,
    //     nav: true,
    //     navText: ["<img src='assets/img/designs/prev-res.png'>", "<img src='assets/img/designs/next-res.png'>"],
    //     dots: false,
    //     responsive: {
    //         0: {
    //             items: 2
    //         },
    //         576: {
    //             items: 3
    //         },
    //         1000: {
    //             items: 4
    //         }
    //     }
    // });

/*--------------------- Blog Insight Posts Slider (Insight Post section) -------------------------------- */
// $('.insight-slider').owlCarousel({
//     loop: false,
//     margin: 30,
//     nav: true,
//     navText: ["<img src='assets/img/designs/prev-blog.png'>", "<img src='assets/img/designs/next-blog.png'>"],
//     dots: false,
//     responsive: {
//         0: {
//             items: 1
//         },
//         576: {
//             items: 2
//         },
//         992: {
//             items: 3
//         }
//     }
// });

/*--------------------- Blog Old Posts Slider (Old Post section) -------------------------------- */
// $('.old-post-slider').owlCarousel({
//     loop: false,
//     margin: 30,
//     nav: true,
//     navText: ["<img src='assets/img/designs/prev-blog.png'>", "<img src='assets/img/designs/next-blog.png'>"],
//     dots: false,
//     responsive: {
//         0: {
//             items: 1
//         },
//         576: {
//             items: 2
//         },
//         992: {
//             items: 3
//         }
//     }
// });

/*--------------------- Resources Multiple Tage (News Event Page section) -------------------------------- */
$( ".lx-ne-current" ).trigger( "click" );

$(function() {
    
    var $filter = $('.lx-ne-filter');
    var $tab = $('.lx-ne-filter a');
    var $offers = $('.lx-ne-boxgroup .lx-ne-box')

    $filter.on('click touch', '.lx-ne-dm',  function(e) {
        e.preventDefault();
        $tab.removeClass('lx-ne-current');
        $(this).addClass('lx-ne-current');

        $offers.show();
        $offers.fadeOut( 200 );
        $offers.filter('.lx-ne-dm').fadeIn( 400 );
    });
    
    $filter.on('click touch', '.lx-ne-in',  function(e) {
        e.preventDefault();
        $tab.removeClass('lx-ne-current');
        $(this).addClass('lx-ne-current');

        $offers.show();
        $offers.fadeOut( 200 );
        $offers.filter('.lx-ne-in').fadeIn( 400 );
    });
    
    $filter.on('click touch', '.lx-ne-pr',  function(e) {
        e.preventDefault();
        $tab.removeClass('lx-ne-current');
        $(this).addClass('lx-ne-current');
    
        $offers.show();
        $offers.fadeOut( 200 );
        $offers.filter('.lx-ne-pr').fadeIn( 400 );     
    });
});

/*--------------------- Event Posts Slider (Event Post section) -------------------------------- */
// $('.events-slider').owlCarousel({
//     loop: true,
//     margin: 30,
//     nav: true,
//     navText: ["<img src='assets/img/designs/ne-prev.png'>", "<img src='assets/img/designs/ne-next.png'>"],
//     dots: false,
//     responsive: {
//         0: {
//             items: 1
//         },
//         576: {
//             items: 2
//         },
//         992: {
//             items: 3
//         }
//     }
// })

    /*--------------------- Drag & Drop File Picker  -------------------------------- */  
    var $fileInput = $(".file-input");
    var $droparea = $(".file-drop-area");

    // highlight drag area
    $fileInput.on("dragenter focus click", function () {
        // alert();
        $droparea.addClass("is-active");
        $fileInput.trigger( "click" );
    });

    // back to normal state
    $fileInput.on("dragleave blur drop", function () {
        $droparea.removeClass("is-active");
    });

    // change inner text
    $fileInput.on("change", function () {
        var filesCount = $(this)[0].files.length;
        var $textContainer = $(this).prev();

        if (filesCount === 1) {
            // if single file is selected, show file name
            var fileName = $(this).val().split("\\").pop();
            $textContainer.text(fileName);
        } else {
            // otherwise show number of files
            $textContainer.text(filesCount + " files selected");
        }
    });

        /*----------------------------- Footer Toggle -------------------------------- */    
    $(document).ready(function(){
        $("footer .nav-link-list").addClass(" ir-hide");

        $('.f-nav-title').append( "<div class='ir-heading-res'><i class='fa fa-angle-down' aria-hidden='true'></i></div>" );

            $(".f-nav-title .ir-heading-res").click(function() {
            var $this = $(this).closest('.footer-nav .col-md-6').find('.nav-link-list');
            $this.slideToggle('slow');
            $('.nav-link-list').not($this).slideUp('slow');
        });
    });
})(jQuery);


        
