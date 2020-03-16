/*scroll effect navbar function----------------------------------------*/
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
	if(document.body.scrollTop > 765 || document.documentElement.scrollTop > 765){
		document.querySelector(".mainMenu").setAttribute("style","transform: scaleY(0.9);transform-origin: top; top: -34px; background: #161616; box-shadow: 0px 0px 5px 2px #000;opacity:1 !important");
		document.querySelector(".myLogo").setAttribute("style","opacity:1 !important");
		document.querySelector(".sectionThreeTitle h1").classList.add("home-title");
	}else if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
		document.querySelector(".myLogo").setAttribute("style","opacity:0");
		document.querySelector(".mainMenu").setAttribute("style","opacity:0");
	}else{
		document.querySelector(".mainMenu").setAttribute("style","top: 0px");
		document.querySelector(".myLogo").setAttribute("style","opacity:1");
		document.querySelector(".sectionThreeTitle h1").classList.remove("home-title");
}};

/*scroll function----------------------------------------*/

$(document).ready(function() {
$('.sectionOne').parallax({
	  imageSrc: "images/cantact.jpg"
  });
$('.contactBackground').parallax({
    imageSrc: "images/signup-bg.jpg"
  });
 $("#homeContent").click(function () {
   $("html, body").animate({scrollTop: 0}, 500);
});
$("#aboutContent").click(function () {
   $("html, body").animate({scrollTop: 770}, 1000);
});
$("#serviceContent").click(function () {
   $("html, body").animate({scrollTop: 1370}, 1000);
});
$("#portfolioContent").click(function () {
   $("html, body").animate({scrollTop: 2055}, 1000);
});
$("#contactContent, .myButton").click(function () {
   $("html, body").animate({scrollTop: 3140}, 1000);
   });
});

(function($) {
    $(".toggle-password").click(function() {
        $(this).toggleClass("zmdi-eye zmdi-eye-off");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });
});

















