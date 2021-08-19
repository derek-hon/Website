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
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
   });

   $("window").scrollY(function() {
       myFunction;
   });

   var sticky = $("#sidebar").offset.top;

   function myFunction() {
    if (window.pageYOffset >= sticky) {
      $("#sidebar").addClass("sticky")
    } else {
      $("#sidebar").removeClass("sticky");
    }
  } 
});