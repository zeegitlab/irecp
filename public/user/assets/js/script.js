(function ($) {
    "use strict";

    /*--------------------- Site Loader   --------------------*/
    $(window).on("load", function () {
        setTimeout(function () {
            $("#irecp-overlay").fadeOut("slow");
        }, 1500);

    });

    /*--------------------- DatePicker --------------------*/

    if ($(".datepicker")[0]){
        $('.datepicker').datepicker({
            format: 'mm/dd/yyyy',
            startDate: '-3d'
        });
    }

    /*--------------------- SideBar --------------------*/

    let menuButton = document.querySelector(".button-menu");
    let container = document.querySelector(".site-container");
    let pageContent = document.querySelector(".page-content");
    let responsiveBreakpoint = 991;

    if (window.innerWidth <= responsiveBreakpoint) {
        container.classList.add("nav-closed");
    }

    menuButton.addEventListener("click", function () {
        container.classList.toggle("nav-closed");
    });

    pageContent.addEventListener("click", function () {
        if (window.innerWidth <= responsiveBreakpoint) {
            container.classList.add("nav-closed");
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > responsiveBreakpoint) {
            container.classList.remove("nav-closed");
        }
    });


    /*--------------------- Replace all SVG images with inline SVG -------------------------------- */
    $(document).ready(function () {
        $('img.svg-img[src$=".svg"]').each(function () {
            var $img = $(this);
            var imgURL = $img.attr('src');
            var attributes = $img.prop("attributes");

            $.get(imgURL, function (data) {
                // Get the SVG tag, ignore the rest
                var $svg = $(data).find('svg');

                // Remove any invalid XML tags
                $svg = $svg.removeAttr('xmlns:a');

                // Loop through IMG attributes and apply on SVG
                $.each(attributes, function () {
                    $svg.attr(this.name, this.value);
                });

                // Replace IMG with SVG
                $img.replaceWith($svg);
            }, 'xml');
        });
    });

})(jQuery);



/*--------------------- Certification Step By Step Form ( Index Page) -------------------------------- */

$(document).ready(function () {
    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);

    $(".next").click(function () {
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({
            opacity: 0
        }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    display: "none",
                    position: "relative"
                });
                next_fs.css({
                    opacity: opacity
                });
            },
            duration: 500
        });
        setProgressBar(++current);
    });

    $(".previous").click(function () {
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li")
            .eq($("fieldset").index(current_fs))
            .removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({
            opacity: 0
        }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    display: "none",
                    position: "relative"
                });
                previous_fs.css({
                    opacity: opacity
                });
            },
            duration: 500
        });
        setProgressBar(--current);
    });

    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar").css("width", percent + "%");
    }

    $(".submit").click(function () {
        return false;
    });
});

function DropDown(el) {
    this.dd = el;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            event.stopPropagation();
        }); 
    }
}

$(function() {

    var dd = new DropDown( $('#dd') );

    $(document).click(function() {
        // all dropdowns
        $('.wrapper-dropdown-5').removeClass('active');
    });

});

/*--------------------- Google Map's For (Contact Us Page) -------------------------------- */
var locations = [{
        'title': 'Laxmi Diamond Surat.<br>(Manufacturing Head Office)',
        'description': 'Bhagu Bhula Compound,<br />Nr. Gajera Circle,<br />Katargam Fulpada Road,<br />Katargam,Surat, <br />Gujarat - 395004<br /><a href="https://goo.gl/maps/JrNJ6FJg6hm" class="text-primary" target="blank">View on large map</a>',
        'lat': 21.226529,
        'lng': 72.839638
    },
    {
        'title': 'Laxmi Diamond Pvt. Ltd.<br>(Corporate Head Office)',
        'description': 'EW-2200, 2nd Floor,<br />Bharat Diamond Bourse(BDB),<br />Bandra Kurla Complex,<br />Bandra(East),<br />Mumbai – 400051, INDIA.<br /><a href="https://goo.gl/maps/fb3HSTGREa72" class="text-primary" target="blank">View on large map</a>',
        'lat': 19.065073,
        'lng': 72.864462
    }
];

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = {
        lat: 21.226529,
        lng: 72.839638
    };

    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: uluru,
        // styles: [
        // { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
        // { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
        // { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
        // {
        //     featureType: 'administrative.locality',
        //     elementType: 'labels.text.fill',
        //     stylers: [{ color: '#d59563' }]
        // },
        // {
        //     featureType: 'poi',
        //     elementType: 'labels.text.fill',
        //     stylers: [{ color: '#d59563' }]
        // },
        // {
        //     featureType: 'poi.park',
        //     elementType: 'geometry',
        //     stylers: [{ color: '#263c3f' }]
        // },
        // {
        //     featureType: 'poi.park',
        //     elementType: 'labels.text.fill',
        //     stylers: [{ color: '#6b9a76' }]
        // },
        // {
        //     featureType: 'road',
        //     elementType: 'geometry',
        //     stylers: [{ color: '#38414e' }]
        // },
        // {
        //     featureType: 'road',
        //     elementType: 'geometry.stroke',
        //     stylers: [{ color: '#212a37' }]
        // },
        // {
        //     featureType: 'road',
        //     elementType: 'labels.text.fill',
        //     stylers: [{ color: '#9ca5b3' }]
        // },
        // {
        //     featureType: 'road.highway',
        //     elementType: 'geometry',
        //     stylers: [{ color: '#746855' }]
        // },
        // {
        //     featureType: 'road.highway',
        //     elementType: 'geometry.stroke',
        //     stylers: [{ color: '#1f2835' }]
        // },
        // {
        //     featureType: 'road.highway',
        //     elementType: 'labels.text.fill',
        //     stylers: [{ color: '#f3d19c' }]
        // },
        // {
        //     featureType: 'transit',
        //     elementType: 'geometry',
        //     stylers: [{ color: '#2f3948' }]
        // },
        // {
        //     featureType: 'transit.station',
        //     elementType: 'labels.text.fill',
        //     stylers: [{ color: '#d59563' }]
        // },
        // {
        //     featureType: 'water',
        //     elementType: 'geometry',
        //     stylers: [{ color: '#17263c' }]
        // },
        // {
        //     featureType: 'water',
        //     elementType: 'labels.text.fill',
        //     stylers: [{ color: '#515c6d' }]
        // },
        // {
        //     featureType: 'water',
        //     elementType: 'labels.text.stroke',
        //     stylers: [{ color: '#17263c' }]
        // }
        // ]
    });

    // var marker, i;
    // for (i = 0; i < locations.length; i++) {

    //     var ld_title = locations[i]['title'];
    //     var ld_description = locations[i]['description'];
    //     var ld_lat = locations[i]['lat'];
    //     var ld_long = locations[i]['lng'];

    //     marker = new google.maps.Marker({
    //         position: { title: ld_title, lat: ld_lat, lng: ld_long, description: ld_description },
    //         map: map
    //     });                
    // }

    // The marker, positioned at Uluru
    // const marker = new google.maps.Marker({
    //     position: uluru,
    //     map: map,
    // });

    // jQuery(window).on('load', function() {

    //     $('.top-news-grid').masonry({
    //       columnWidth : '.grid-sizer',
    //       gutter : 15,
    //       itemSelector : '.top-news-grid-item',
    //       percentPosition : 'true',
    //       fitWidth: true,
    //     });

    //   });
}