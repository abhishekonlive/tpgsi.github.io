var App = function () {

    function handleBootstrap() {
        /*Bootstrap Carousel*/
        $('.carousel').carousel({
            interval: 15000,
            pause: 'hover'
        });
    }

    function handleSearchV1() {
        $('.search-button').click(function () {
            $('.search-open').slideDown();
        });

        $('.search-close').click(function () {
            $('.search-open').slideUp();
        });

        $(window).scroll(function(){
          if($(this).scrollTop() > 1) $('.search-open').fadeOut('fast');
        });

    }

    function handleHeader() {
         $(window).scroll(function() {
            if ($(window).scrollTop()>100){
                $(".header-fixed .header-static").addClass("header-fixed-shrink");
            }
            else {
                $(".header-fixed .header-static").removeClass("header-fixed-shrink");
            }
        });
    }

    return {
        init: function () {
            handleBootstrap();
            handleSearchV1();
            handleHeader();
        },

        initScrollBar: function () {
            $('.mCustomScrollbar').mCustomScrollbar({
                theme:"minimal",
                scrollInertia: 300,
                scrollEasing: "linear"
            });
        },

        initCounter: function () {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        },

        initParallaxBg: function () {
            $('.parallaxBg').parallax("100%", 0.29);
            $('.parallaxBg1').parallax("50%", 0.4);
        }
    };

}();