

jQuery(".toggle-menu").click(function () {
    jQuery(".main-menu ul").slideToggle();
});

jQuery(".totop").click(function () {
    jQuery("html , body").animate({ "scrollTop": "0px" }, 3000);
});

console.log(window);

jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 0.5) {
        jQuery(".totop").fadeIn();
    } else {
        jQuery(".totop").fadeOut();
    }
});
