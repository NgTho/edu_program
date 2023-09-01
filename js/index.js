/////////////////////////////// carousel //////////////////////////

$(document).ready(function () {
  let owlCarouselFunction = (element, numDesk = 1, numMobile = 1, loop = false, autoplay = false, nav = true, dots = false, margin = 0, stagePadding = 0, lazyLoad = true) => {
    var carousel = $(`.${element} .owl-carousel`);
    carousel.owlCarousel({
      center: false,
      loop: loop,
      margin: margin, stagePadding: stagePadding,
      autoplay: autoplay,
      navSpeed: 800,
      autoplaySpeed: 800,
      nav: nav,
      dots: dots,
      autoplayTimeout: 5000,
      lazyLoad: lazyLoad,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
      ],
      navContainer: `.${element} .custom-nav`,
      responsive: {
        0: {
          items: numDesk,
        },
        767: {
          items: numMobile,

        }
      }
    });
  }
  owlCarouselFunction('slider_desktop', 1, 1, true);
  owlCarouselFunction('slider_about', 3, 3, true, false, true, true, 15);
  /*$('.carousel_3 .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: false,
    autoplayHoverPause: true,
    nav:false,
    dots: false,
    stagePadding: 39,
    margin : 40,
    responsive:{
        0:{
            items:1,
            stagePadding: 19,
            margin : 20,
        },
        767:{
            items:1
        }
    }
  });
  $('.carousel_4 .owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    autoplay: false,
    autoplayHoverPause: true,
    nav:false,
    dots: false,
    stagePadding: 39,
    margin : 40,
    responsive:{
        0:{
            items:1,
            stagePadding: 19,
            margin : 20,
        },
        767:{
            items:5
        }
    }
  });*/
  ////////// owl carousel thumbnail //////////////
  var bigimage = $('.carousel_3 .owl-carousel');
  var thumbs = $('.carousel_4 .owl-carousel');
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
      items: 1,
      slideSpeed: 3000,
      nav: false,
      autoplay: false,
      dots: false,
      loop: true,


    })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function () {
      thumbs
        .find(".owl-item")
        .eq(0)
        .addClass("current");
    })
    .owlCarousel({
      items: 6,
      dots: false,
      nav: false,
      loop: false,
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: 4,
      touchDrag: false,
      mouseDrag: false,
    })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
      .find(".owl-item.active")
      .first()
      .index();
    var end = thumbs
      .find(".owl-item.active")
      .last()
      .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
  ////////// end owl carousel thumbnail //////////////

  /////////////////////////////// TAB //////////////////////////
  (function ($) {
    $('.tabs').addClass('active').find('> li:eq(0)').addClass('active');

    $('.tab ul.tabs li a').click(function (g) {
      var tab = $(this).closest('.tab'),
        index = $(this).closest('li').index();

      tab.find('ul.tabs > li').removeClass('active');
      $(this).closest('li').addClass('active');

      tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
      tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

      g.preventDefault();
    });
  })(jQuery);

  $(window).scroll(function () {
    $('.product-description ul.nav-tabs li').each(function () {
      var x = $($(this).find('a[data-spy=scroll]').attr('href'));
      if ($(window).scrollTop() > (x.offset().top - 150) && $(window).scrollTop() < (x.offset().top + x.height() - 125)) {
        $('.product-description ul.nav-tabs li').removeClass('active');
        $(this).addClass('active');
      }
      else {
        //$(this).removeClass('active');
      }
    })
  });

  /*$(document).ready(function() {
      $(".responsive-accordion").each(function() {
          $(".responsive-accordion-minus", this).hide(), 
          $(".responsive-accordion-panel", this).hide(), 
          $(".responsive-accordion-head", this).click(function() {
              var i = $(this).parent().parent(),
                  s = $(this),
                  e = s.find(".responsive-accordion-plus"),
                  n = s.find(".responsive-accordion-minus"),
                  o = s.siblings(".responsive-accordion-panel");
              i.find(".responsive-accordion-head").not(this).removeClass("active"), 
              i.find(".responsive-accordion-panel").not(this).removeClass("active").slideUp(), 
              s.hasClass("active") ? 
              (
                  s.removeClass("active"), 
                  e.show(), 
                  n.hide(), 
                  o.removeClass("active").slideUp()
              ) 
              : 
              (
                  s.addClass("active"), 
                  e.hide(), 
                  n.show(), 
                  o.addClass("active").slideDown()
              )
          })
      });
          $(".sp_chitiet_head").addClass('active');
          $(".sp_chitiet_panel").show();
  });*/

  $(document).ready(function () {

    $('ul.tabs li').click(function () {
      var tab_id = $(this).attr('data-tab');

      $('ul.tabs li').removeClass('current');
      if (document.documentElement.clientWidth > 797) {
        $('.tab-content').removeClass('current');
      }
      else {
        $('.tab-content').removeClass('currentm');
      }

      $(this).addClass('current');
      if (document.documentElement.clientWidth > 797) {
        $("#" + tab_id + "d").addClass('current');
      }
      else {
        $("#" + tab_id).addClass('currentm');
      }
    });
  });


  $(document).ready(function () {

    $('ul.tabs_faqs li').click(function () {
      var tab_id = $(this).attr('data-tab');

      $('ul.tabs_faqs li').removeClass('current');

      $('.tab-content').removeClass('current');

      $(this).addClass('current');

      $("#" + tab_id).addClass('current');
    });
  });


  $(document).ready(function () {

    $('ul.tabs_pro_detail li').click(function () {
      var tab_id = $(this).attr('data-tab');
      $('ul.tabs_pro_detail li').removeClass('current');
      $('.tab-content').removeClass('current');
      $(this).addClass('current');
      $("#" + tab_id).addClass('current');
    });
  });



  ////////////////////////////////////SCROLL//////////////////////////
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 900) {
      $('.tab_scroll').addClass('fixed');
      $('.pr_scroll').addClass('fixed2');
      $('.pr_scroll').show();

    } else {
      $('.tab_scroll').removeClass('fixed');
      $('.pr_scroll').removeClass('fixed2');
      $('.pr_scroll').hide();
    }
  });

  $(".tab_con").click(function () {
    $('html, body').animate({
      scrollTop: $(".top_3").offset().top
    }, 500);
  });
  ////////////////////////////////////    Make head of dropdown link clickable in navbar    //////////////////////////
  $('.navbar-collapse .dropdown-toggle').hover(function () {
    if (document.documentElement.clientWidth > 797) {
      $(this).addClass('disabled');
    }
    else {
      $(this).removeClass('disabled');
    }
  });

  $(window).on("orientationchange", function (event) {
    $('.navbar-collapse .dropdown-toggle').click(function () {
      $(this).removeClass('disabled');
    });
  });


  ////////////////////////////////////    amination dropdown menu    //////////////////////////

  if (document.documentElement.clientWidth > 767) {
    $(".dropdown").hover(
      function () {
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).fadeIn(500);
        $(this).toggleClass('open');
      },
      function () {
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).fadeOut(100);
        $(this).toggleClass('open');
      }
    );
  }
  ////////////////  animate dropdown menu mobile ////////////
  $(document).ready(function () {
    $('.dropdown')
      .on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
      })
      .on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, false).slideUp(300, function () {
          $(this).parent().removeClass('open');
        });
      })
      .on('hidden.bs.dropdown', function () {
        $(this).addClass('open');
      });
  });

});
////////////////    Mobile Dropdown Menu Snippet    //////////////////////
function toggle_menu(x) {
  x.classList.toggle("change");
  //$(".navbar-toggle").toggleClass("menu-hidden", 1800, "easeOutQuint");
};


/////////////   Lazy load   /////////////////
$(function () {
  $('.lazy').lazy({
    effect: "fadeIn",
    effectTime: 500,
    threshold: 0
  });
});
//////////   menu mobile /////////
function open_search_mobile() {
  close_click_buy();
  $(".search_mobile").slideToggle();
  if ($('#close_search_mobile_body').length) {
    $("#close_search_mobile_body").remove();
  } else {
    $("body").append('<div id="close_search_mobile_body" onclick="close_search_mobile()"></div>');
    $('.search_mobile .input_text_search').focus();
  }
}

function close_search_mobile() {
  $(".search_mobile").slideUp();
  $("#close_search_mobile_body").remove();
  close_click_buy();
}

function open_menu() {
  close_search_mobile()
  $(".navbar-ex1-collapse").css({ "left": "0px", "transition": "0.5s" });
  $(".navbar-ex1-collapse").after('<div class="close_menu_body" onclick="close_menu()"></div>');
  $(".navbar-ex1-collapse").addClass('active');
}

function close_menu() {
  $(".navbar-ex1-collapse").css({ "left": "-330px" });
  $(".close_menu_body").remove();
  $(".navbar-ex1-collapse").removeClass('active');
  $(".sidebar_left").css({
    "right": "-300px"
  });
  $(".sidebar_left").removeClass('active');
}
function close_click_buy() {
  $('.bl_click_buy').css({ 'bottom': '-500px', "transition": "all ease 0.5s" });
  $(".bg_close_click_buy").remove();
  $(".popup_add_to_cart").hide();
  $('#btn_contact #menu-open').prop('checked', false);
  $("#btn_contact .owl-carousel").trigger('play.owl.autoplay', [1000]);
}

$(".btn_buy_popup").click(function (e) {
  e.preventDefault();
  close_click_buy();
  $('.bl_click_buy').css({ 'bottom': '0px', "transition": "all ease 0.5s" });
  $("body").append('<div class="bg_close_click_buy" onclick="close_click_buy()"></div>');
});
$(".btn_close_click_buy").click(function (e) {
  close_click_buy();
});
function open_filter() {
  $(".sidebar_left").css({
    "right": "0px"
  });
  $("body").append('<div class="close_menu_body" onclick="close_menu()"></div>');
  $(".sidebar_left").addClass('active');
}


////////////////    Fade in Caption Carousel    //////////////////////
$(document).ready(function () {
  var $carousel = $('#myCarousel');
  var $carouselCaptions = $carousel.find('.item .carousel-caption');
  var $carouselImages = $carousel.find('.item img');
  var carouselTimeout;

  $carousel.on('slid.bs.carousel', function () {
    var $item = $carousel.find('.item.active');
    carouselTimeout = setTimeout(function () { // start the delay
      carouselTimeout = false;
      $('.carousel-caption', $item).animate({ 'opacity': 1 }, 1000);
      //$('img', $item).animate({'opacity': 1}, 500);
    }, 100);
  }).on('slide.bs.carousel', function () {
    if (carouselTimeout) { // Carousel is sliding, stop pending animation if any
      clearTimeout(carouselTimeout);
      carouselTimeout = false;
    }
    // Reset styles
    $carouselCaptions.animate({ 'opacity': 0 }, 500);
    $carouselImages.animate({ 'opacity': 1 }, 500);
  });;

  $('#myCarousel').carousel({
    interval: 5000,
    cycle: true,
    pause: "false",
  }).trigger('slid.bs.carousel');





  /////////   Parallax Background image     ///////////////////
  var background_image_parallax = function ($object, multiplier) {
    multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
    multiplier = 1 - multiplier;
    var $doc = $(document);
    $object.css({ "background-attatchment": "fixed" });
    $(window).scroll(function () {
      var from_top = $doc.scrollTop() - 1400,
        bg_css = '0px ' + (multiplier * from_top) + 'px';
      $object.css({ "background-position": bg_css });
    });
  };
  var background_image_parallax2 = function ($object, multiplier) {
    multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
    multiplier = 1 - multiplier;
    var $doc = $(document);
    $object.css({ "background-attatchment": "fixed" });
    $(window).scroll(function () {
      var from_top = $doc.scrollTop() - 1700,
        bg_css = '0px ' + (multiplier * from_top) + 'px';
      $object.css({ "background-position": bg_css });
    });
  };
  var background_image_parallax3 = function ($object, multiplier) {
    multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
    multiplier = 1 - multiplier;
    var $doc = $(document);
    $object.css({ "background-attatchment": "fixed" });
    $(window).scroll(function () {
      var from_top = $doc.scrollTop() - 950,
        bg_css = '0px ' + (multiplier * from_top) + 'px';
      $object.css({ "background-position": bg_css });
    });
  };
  var background_image_parallax4 = function ($object, multiplier) {
    multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
    multiplier = 1 - multiplier;
    var $doc = $(document);
    $object.css({ "background-attatchment": "fixed" });
    $(window).scroll(function () {
      var from_top = $doc.scrollTop() - 3200,
        bg_css = '0px ' + (multiplier * from_top) + 'px';
      $object.css({ "background-position": bg_css });
    });
  };
  background_image_parallax($(".parallax_index"), 0.7);
  background_image_parallax2($(".parallax_anti_pollution"), 0.7);
  background_image_parallax($(".parallax_scarheal_product"), 0.7);
  background_image_parallax3($(".parallax_stretch_mark_cream"), 0.8);
  background_image_parallax4($(".parallax_physician_support"), 0.7);


  /////////   Click to top     ///////////////////
  var btn = $('#button');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
})


///////////////////  Accordion Dropdown menu   //////////////////
$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    //links.parent().addClass('open');
    // Evento
    links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
  }

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    $this = $(this),
      $next = $this.next();


    if (document.documentElement.clientWidth > 767) {
      if ($this.parent().hasClass('open') == false) {
        $next.slideToggle();
        $this.parent().toggleClass('open');
      }
      if (!e.data.multiple) {
        $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
      };
    }
  }

  var accordion = new Accordion($('#accordion'), false);
  var accordion = new Accordion($('#accordion2'), false);
  $(".show_accordion").show();
  $(".show_accordion").parent().addClass('open');
  if (document.documentElement.clientWidth < 767) {
    $(".submenu").parent().addClass('open');
  }
});


$(function () {
  var Accordion_faqs = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    //links.parent().addClass('open');
    // Evento
    links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
  }

  Accordion_faqs.prototype.dropdown = function (e) {
    var $el = e.data.el;
    $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');
  }
  var accordion = new Accordion_faqs($('.accordion_faqs'), false);




});
/* ///////  rating  ////////// */
$('.rating').rating();
$('.rating_detail').rating({
  extendSymbol: function (rate) {
    $(this).tooltip({
      container: 'body',
      placement: 'top',
      title: rate + ' Sao'
    });
  }
});
/* $(document).ready(function () {
  $(".rating-symbol").click(function () {
    var point = $('.rating_detail').val();
    var alias = $('#alias').val();
    var rating = point;
    var link = "/rating.ajax/" + alias + "/" + rating;
    console.log(link);
    $.get(link).done(function (data) {
      $("#view-rating").html(data);
    });
  });

  function setCookie(name, value, days) {
    var expires;
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toGMTString();
    } else {
      expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
  }

  function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return false;
  }

  if (!readCookie("rating")) {
    //code init rating
  }
  setCookie("rating", 6, 6);

}); */