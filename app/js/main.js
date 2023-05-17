$(function(){
    

    var tiker = $(".slider__item");
   tiker.css({"overflow": "hidden", "width": "100%"});

   tiker.wrapInner("<span>");
   tiker.find("span").css({ "width": "50%", "display": "inline-block", "text-align":"center" });
   tiker.append(tiker.find("span").clone()); 

   tiker.wrapInner("<div>");
   tiker.find("div").css("width", "360%");

   var reset = function() {
    $(this).css("margin-left", "0%");
    $(this).animate({ "margin-left": "-100%" }, 6000, 'linear', reset);
   };

   reset.call(tiker.find("div"));

})