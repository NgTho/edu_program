/*$(document).ready(function () {
    size_top3 = $("#top3 .block").size();
    x=1;
    $('#top3 .block:lt('+x+')').show();
    $('#xemthem').click(function () {
        x= (x+1 <= size_top3) ? x+1 : size_top3;
        $('#top3 .block:lt('+x+')').show();
    });
    $('#showLess').click(function () {
        x=(x-5<0) ? 3 : x-5;
        $('#myList li').not(':lt('+x+')').hide();
    });
});*/
$(function () {
    $(".khoi").slice(0,4).show();
    $("#xemthem").on('click', function (e) {
        e.preventDefault();
        $(".khoi:hidden").slice(0, 4).slideDown();
        if ($(".khoi:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

/*$('a[href=#top]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});*/

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});