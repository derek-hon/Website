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
       if ($(this) != $(this).parent().find(".active")) {
          $("#content").find(".live").fadeOut("fast");
          $("#content").find(".live").removeClass("live");
          $("#about").fadeIn("fast");
          $("#about").addClass("live");
          $(this).parent().find(".active").removeClass("active");
          $(this).addClass("active");
       }
   })

   $("#menuCode").click(function() {
      if ($(this) != $(this).parent().find(".active")) {
        $("#content").find(".live").fadeOut("fast");
        $("#content").find(".live").removeClass("live");
        $("#cs").fadeIn("fast");
        $("#cs").addClass("live");
        $(this).parent().find(".active").removeClass("active");
        $(this).addClass("active");
      }
  })

  $("#menuPhoto").click(function() {
    if ($(this) != $(this).parent().find(".active")) {
      $("#content").find(".live").fadeOut("fast");
      $("#content").find(".live").removeClass("live");
      $("#photo").fadeIn("fast");
      $("#photo").addClass("live");
      $(this).parent().find(".active").removeClass("active");
      $(this).addClass("active");
    }
  })

  $("#menuArt").click(function() {
    if ($(this) != $(this).parent().find(".active")) {
      $("#content").find(".live").fadeOut("fast");
      $("#content").find(".live").removeClass("live");
      $("#art").fadeIn("fast");
      $("#art").addClass("live");
      $(this).parent().find(".active").removeClass("active");
      $(this).addClass("active");
    }
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