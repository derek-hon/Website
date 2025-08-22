$(document).ready(function() {

    // Helper function to switch content views smoothly
    function switchContent(targetId, menuLink) {
        if (!menuLink.hasClass("active")) {
            // Find the currently active content and fade it out
            $("#content").find(".live").fadeOut("fast", function() {
                $(this).removeClass("live");

                // Fade in the new content
                $("#" + targetId).fadeIn("fast");
                $("#" + targetId).addClass("live");
            });

            // Update the active menu item
            menuLink.parent().find(".active").removeClass("active");
            menuLink.addClass("active");
        }
    }

    // Main menu navigation links
    $("#menuAbout").click(function(e) { e.preventDefault(); switchContent("about", $(this)); });
    $("#menuCode").click(function(e) { e.preventDefault(); switchContent("cs", $(this)); });
    $("#menuPhoto").click(function(e) { e.preventDefault(); switchContent("photo", $(this)); });
    $("#menuArt").click(function(e) { e.preventDefault(); switchContent("art", $(this)); });
    $("#menuCV").click(function(e) { e.preventDefault(); switchContent("cv", $(this)); });

    // Photo Gallery navigation links
    // This logic is now purely for showing/hiding pre-existing HTML sections
    $("#waterfallPhotos").click(function(e) {
        e.preventDefault();
        $(".photo-grid").hide();
        $("#waterfallGrid").show();
        $("#photo .nav-item").removeClass("active");
        $(this).parent().addClass("active");
    });
    $("#cafePhotos").click(function(e) {
        e.preventDefault();
        $(".photo-grid").hide();
        $("#cafeGrid").show();
        $("#photo .nav-item").removeClass("active");
        $(this).parent().addClass("active");
    });
    $("#concertPhotos").click(function(e) {
        e.preventDefault();
        $(".photo-grid").hide();
        $("#concertGrid").show();
        $("#photo .nav-item").removeClass("active");
        $(this).parent().addClass("active");
    });
    $("#japan2024Photos").click(function(e) {
        e.preventDefault();
        $(".photo-grid").hide();
        $("#japan2024Grid").show();
        $("#photo .nav-item").removeClass("active");
        $(this).parent().addClass("active");
    });

    // Sticky Sidebar Functionality
    var sidebar = $("#sidebar");
    if (sidebar.length) {
        var stickyTop = sidebar.offset().top;
        $(window).scroll(function() {
            if ($(window).scrollTop() >= stickyTop) {
                sidebar.addClass("sticky");
            } else {
                sidebar.removeClass("sticky");
            }
        });
    }

    // PDF viewer toolbar hiding
    $('#cv-iframe').on('load', function() {
        var iframeContents = $(this).contents();
        var iframeHead = iframeContents.find('head');

        if (iframeHead.find('#no-toolbar-style').length === 0) {
            var style = $('<style id="no-toolbar-style">');
            style.html(`
                #toolbarContainer, #secondaryToolbar {
                    display: none !important;
                }
                #viewerContainer {
                    top: 0 !important;
                }
            `);
            iframeHead.append(style);
        }
    });
});