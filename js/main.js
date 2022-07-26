$('.carousel').carousel({
    interval: 2000
});
$(function () {
   let windH = $(window).height(),
       uppH  = $(".upper").innerHeight(),
       navH  = $('.navbar').innerHeight();
   $('.slider, .carousel-item').height(windH - (uppH + navH));

   // shuffle-img
    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).data('value') === 'all') {
            $('.shuffle-img .col-md-3').css("opacity", 1);
        }
        else {
            $('.shuffle-img .col-md-3').css("opacity", "0.2");
            $($(this).data('value')).parent().css("opacity", 1);
        }
    })
});