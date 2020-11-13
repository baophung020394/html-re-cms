App = {};
(function ($) {
    App.myFunction = () => {
        console.log('a')
    }

    // The functions App
    // Resize screen and addClass/removeClass of menu
    App.checkWindowSize = () => {
        var width = $(window).width(),
            new_class = width > 1200 ? 'menu-desk' : 'menu-mobile';

        $('header').removeClass('menu-desk menu-mobile').addClass(new_class);
    }


    $('.button-bar').on('click', function () {
        $('body .main-nav').toggleClass('active');
        $('.bg-pushmenu').addClass('in')
    });

    $('.bg-pushmenu').on('click', function() {
        $(this).removeClass('in');
        $('body .main-nav').removeClass('active');
    })

    // App.closeMenu = () => {
    //     $('.bg-menu').on('click', function() {
    //         $('body .main-nav').removeClass('active');
    //         $(this).remove();
    //     })
    // }
    // When resize screen
    $(window).resize(function () {
        App.checkWindowSize();
    });

    // Run first
    $(document).ready(function () {
        App.checkWindowSize();
    })

})(jQuery);
// menu sticky
// https://codepen.io/prvnbist/pen/GQMPZq