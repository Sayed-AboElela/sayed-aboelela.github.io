$("li.drop-down").click(function () {

    $(this).next('.dropcontainer1').slideToggle();

});
$(".categories").click(function () {

    $(this).next('.catgory-menu').slideToggle();

});

$(document).ready(function () {
    var carousel = $("#carousel").waterwheelCarousel({
      flankingItems: 3
     
    });

    $('#prev').bind('click', function () {
      carousel.prev();
      return false
    });

    $('#next').bind('click', function () {
      carousel.next();
      return false;
    });

    $('#reload').bind('click', function () {
      newOptions = eval("(" + $('#newoptions').val() + ")");
      carousel.reload(newOptions);
      return false;
    });

  });