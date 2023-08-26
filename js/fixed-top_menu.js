$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('#header_fixed').addClass('fixed');
        $('#header_fixed').removeClass('fade');
        $('#header_fixed_2').addClass('fixed_2');
        $('#trang_chu').addClass('trang_chu');
        $('.tieude').addClass('tieude_22');
        $('.icon').addClass('icon_22');
    } else {
        $('#header_fixed').removeClass('fixed');
        $('#header_fixed').addClass('fade');
        $('#header_fixed_2').removeClass('fixed_2');
        $('#trang_chu').removeClass('trang_chu');
        $('.tieude').removeClass('tieude_22');
        $('.icon').removeClass('icon_22');
    }
});