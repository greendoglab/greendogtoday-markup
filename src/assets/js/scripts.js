(function($) {

    function stateCheck(elem, clName) {
        if (!elem.hasClass(clName)) {
            elem.addClass(clName);
        } else {
            elem.removeClass(clName);
        }
    }

    function mobileMenu(){
        var mobileMenuTrigger = $('[data-role="mobile-header-trigger"]');
        var mobileHeader = $('[data-role="mobile-header"]');

        mobileMenuTrigger.click(function() {
            $(this).toggleClass('active');
            stateCheck(mobileHeader, 'active');
            console.log('f')
        });
    }

    // document ready
    $(window).on('load', function() {
        mobileMenu();
    });

    // all initial on window resize
    $(window).on('resize', function() {});


})(jQuery);
