$(function(){
	'use strict';
	// clac the height of navbar
	var wind =$(window).height(),
	upperH =$('.upper-bar').innerHeight(),
	navH = $('.navbar').innerHeight(); 
	$('.slider, .carousel-item').height(wind - ( upperH + navH));
	// creat a same height on services info
	var theMaxHeight = 0;
	$('.services-offer .services-info').each(function(){
		if($(this).height() > theMaxHeight){
			theMaxHeight = $(this).height();
		}
	});
	// Start scroll top
	 var scrollButton = $("#scroll-top");
  $(window).scroll(function(){
  	if ($(this).scrollTop() >= 700){
  		scrollButton.show();
  	}else{
  		scrollButton.hide();
  	}
  });
  scrollButton.click(function(){
  		$("html,body").animate({scrollTop : 0},600);
  	});
});