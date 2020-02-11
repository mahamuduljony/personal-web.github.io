(function ($) {
$(document).ready(function(){
	//menu-bg
	$(window).on('scroll',function(){
		if ($(window).scrollTop() > 0 ){
			$('#menu').addClass('menu-bg');
		} else {
			$('#menu').removeClass('menu-bg');
		}
	});




	///scrolltop
	jQuery(".top").click(function(){
		jQuery("html").animate({'scrollTop' : 0 }, 1000);
			return false;
		});
	jQuery(window).scroll(function(){
		var durotto = jQuery(window).scrollTop();
			if(durotto > 200){
				jQuery(".top").slideDown();
			}
			else {
				jQuery(".top").slideUp();		
			}
	});




	 $(".navbar ul li a[href^='#']").on('click', function(e) {

	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(hash).offset( ) .top
	     }, 1000, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;
	     });

	});
	 $(".navbar ul  a[href^='#']").on('click', function(e) {

	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(hash).offset().top
	     }, 1000, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;
	     });

	});

	 $("#header  a[href^='#']").on('click', function(e) {

	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(hash).offset().top
	     }, 1000, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;
	     });

	});

	 
	// Animation in animate.css
		new WOW().init();
	  
		$('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(350).css({
            'overflow': 'visible'
        });


        //$(document).ready(function(){
		   // $('#bar1').barfiller({
		    	//barColor: "#825339",
		    	//duration: 1000
		   // });
		     //$('#bar2').barfiller({
		    	//barColor: "#825339",
		    	//duration: 1000
		    //});
		      //$('#bar3').barfiller({
		    	//barColor: "#825339",
		    	//duration: 1000
		    //});
		      //$('#bar4').barfiller({
		    	//barColor: "#825339",
		    	//duration: 1000
		    //});
		     //$('#bar5').barfiller({
		    	//barColor: "#825339",
		    	//duration: 1000
		  //});
		    //$('#bar6').barfiller({
		    	//barColor: "#825339",
		    	//duration: 1000
		   // });  

		//});    
            
            
	});
})(jQuery);