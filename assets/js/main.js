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

	// Activate owlCarousel
	$('.pricing-carousel').owlCarousel({
	    loop:false,
	    margin:0,
	    smartSpeed: 800,
	    nav: true,
	    dots: true,
	    margin: 30,
	    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	    //autoplay: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items: 1,
	            margin: 0,
	        },
	        768:{
	            items:2
	        },
	        1200:{
	            items:4
	        }
	    }
	});



})(jQuery);