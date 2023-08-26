$(function () {
    $(".khoi").slice(0,2).show();
    $("#xemthem").on('click', function (e) {
        e.preventDefault();
        $(".khoi:hidden").slice(0, 2).slideDown();
        if ($(".khoi:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    }),
    $(".khoi_2").slice(0,4).show();
    $("#xemthem_2").on('click', function (e) {
        e.preventDefault();
        $(".khoi_2:hidden").slice(0, 4).slideDown();
        if ($(".khoi:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});
