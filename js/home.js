// $(function () {
//     jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 2000  // 2 seconds

//     $("#aPhoto").click(function () {
//         $('html, body').animate({
//             scrollTop: $("#photo").offset().top
//         }, 1000);
//     });

//     $("#aArt").click(function () {
//         $('html, body').animate({
//             scrollTop: $("#art").offset().top
//         }, 1000);
//     });

//     $("#aCS").click(function () {
//         $('html, body').animate({
//             scrollTop: $("#cs").offset().top
//         }, 1000);
//     });
//     $("#aAbout").click(function () {
//         console.log("here");
//         $('html, body').animate({
//             scrollTop: $("#about").offset().top
//         }, 1000);
//     });
// });

$(document).ready(function() {
//     $("#sidebar").mCustomScrollbar({
//         theme: "minimal"
//    });

   $("#menuAbout").click(function() {
       $("#content").find(".live").fadeOut("fast");
       $("#content").find(".live").removeClass("live");
       $("#about").fadeIn("fast");
       $("#about").addClass("live");
   })

   $("#menuCode").click(function() {
      $("#content").find(".live").fadeOut("fast");
      $("#content").find(".live").removeClass("live");
      $("#cs").fadeIn("fast");
      $("#cs").addClass("live");
  })

  $("#menuPhoto").click(function() {
      $("#content").find(".live").fadeOut("fast");
      $("#content").find(".live").removeClass("live");
      $("#photo").fadeIn("fast");
      $("#photo").addClass("live");
  })

  $("#menuArt").click(function() {
      $("#content").find(".live").fadeOut("fast");
      $("#content").find(".live").removeClass("live");
      $("#art").fadeIn("fast");
      $("#art").addClass("live");
  })

   var sticky = $("#sidebar").offset.top;

   $("window").scroll(function() {
    myFunction;
   });

   function myFunction() {
    if (window.pageYOffset >= sticky) {
      $("#sidebar").addClass("sticky")
    } else {
      $("#sidebar").removeClass("sticky");
    }
  } 
});