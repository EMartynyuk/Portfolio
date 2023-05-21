$(function () {
   
  $('.header__btn').on('click', function(){
    $('.header__lists').toggleClass('header__lists--active')
});






  var tiker = $(".slider__item");
  tiker.css({ overflow: "hidden", width: "100%" });

  tiker.wrapInner("<span>");
  tiker
    .find("span")
    .css({ width: "50%", display: "inline-block", "text-align": "center" });
  tiker.append(tiker.find("span").clone());

  tiker.wrapInner("<div>");
  tiker.find("div").css("width", "650%");

  var reset = function () {
    $(this).css("margin-left", "0%");
    $(this).animate({ "margin-left": "-200%" }, 8000, "linear", reset);
  };

  reset.call(tiker.find("div"));
});
