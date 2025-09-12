

jQuery(".toggle-menu").click(function () {
    jQuery(".main-menu ul").slideToggle();
});

jQuery(".totop").click(function () {
    jQuery("html , body").animate({ "scrollTop": "0px" }, 1000);
});

console.log(jQuery(window).scrollTop());

jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 4000) {
        jQuery(".totop").fadeIn();
    } else {
        jQuery(".totop").fadeOut();
    }

});




