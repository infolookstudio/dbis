(function ($) {
    'use strict';

    $(window).on("load", function() {

	    background();
	    
	    //preloader
	    $("#preloader").delay(300).animate({
	      "opacity" : "0"
	      }, 500, function() {
	      $("#preloader").css("display","none");
	    });

	  });

    // background image
	function background() {
			var img=$('.bg_img');
			img.css('background-image', function () {
			var bg = ('url(' + $(this).data('background') + ')');
			return bg;
		});
	}

	$(".sideicon").on("click", function () {
		$(".overlay, .sidebarlists").addClass("active");
	});

	$(".overlay, .crossbars").on("click", function () {
		$(".sidebarlists, .overlay").removeClass("active");
	});

	// Activate lightcase
    // $('a[data-rel^=lightcase]').lightcase();



})(jQuery);