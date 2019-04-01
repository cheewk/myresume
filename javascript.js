/* 
    IBM In-house {Web Coder} course Assignment Snippet.
    Javascript interactive slave file.
    For internal IBM learning usage.
*/

/*  ----- Javascript function() -----  */

/*Scroll to top when arrow up clicked BEGIN*/

if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

 /*Scroll to top when arrow up clicked END*/

// end of script!
