/*
 *-----------------------------------------------------------------------------------------------------------*
	* Greetings in the console
 *-----------------------------------------------------------------------------------------------------------*
 */

if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
	var e = ["\n %c Gemacht mit ♥ von Innovationsraum %c %c %c https://www.innovationsraum.de/ %c %c☕️ \n\n", "color: #fff; background: #008dd1; padding:5px 0;", "background: #1ab2c3; padding:5px 0;", "background: #1ab2c3; padding:5px 0;", "color: #fff; background: #34d6b6; padding:5px 0;", "background: #fff; padding:5px 0;", "color: #b0976d; background: #fff; padding:5px 0;"];
	window.console.log.apply(console, e)
} else {
	window.console && window.console.log("Gemacht mit ♥ von Innovationsraum - https://www.innovationsraum.de/ ☕️");
}

/*
*-----------------------------------------------------------------------------------------------------------*
* Lazyload
*-----------------------------------------------------------------------------------------------------------*
*/

var lazyLoadInstance = new LazyLoad({
	elements_selector: ".lazy"
});


jQuery(function($) {

/*
*-----------------------------------------------------------------------------------------------------------*
* Mobile menu
*-----------------------------------------------------------------------------------------------------------*
*/

$('.js--trigger-mobile-nav').click(function(){
	$('.header-hamburger').toggleClass('is-active');
	$('.header-nav__level-1').toggleClass('is-open');
});

if(Modernizr.touchevents) {
	$('.has-dropdown a').on('click', function(e){
		e.preventDefault();
		$(this).parent().children('ul').toggleClass('is-open');
	});
}

/*
*-----------------------------------------------------------------------------------------------------------*
* Search input expander
*-----------------------------------------------------------------------------------------------------------*
*/

$('#search-trigger').on("click",function(){
	$('#search').toggleClass('is-open');
});



/*
*-----------------------------------------------------------------------------------------------------------*
* Empty Links
*-----------------------------------------------------------------------------------------------------------*
*/

$('a[href="#"]').click(function(e){e.preventDefault();});



/*-----------------------------------------------------------------------------------------------------------*
* scroll-down
*----------------------------------------------------------------------------------------------------------*
*/

// if menu item is clicked animate the scroll
var marginOffset = 0;

$('.scroll').click(function(e) {
	e.preventDefault();

	var href = $(this).attr('href');

	var offsetTop = href === '#' ? 0 : $(href).offset().top;
	offsetTop = offsetTop - marginOffset;

	$('html, body').stop().animate({
		scrollTop: offsetTop
	}, 500);
});


/*
*-----------------------------------------------------------------------------------------------------------*
* Fancybox Lightbox
* http://fancyapps.com/fancybox/3/docs/#usage
*-----------------------------------------------------------------------------------------------------------*
*/
$(".cls-24 , .legend-moss").click(function(){
	
	$.fancybox.open({
		src  : '#lightbox-moss',
		type : 'inline',
		opts : {
			animationEffect : 'fade',
			idleTime: false,
		}
	});
  });

$(".cls-23 , .legend-river").click(function(){
	
	$.fancybox.open({
		src  : '#lightbox-river',
		type : 'inline',
		opts : {
			animationEffect : 'fade',
			idleTime: false,
		}
	});
  });
  
$(".cls-22 , .legend-strawberry").click(function(){
	
	$.fancybox.open({
		src  : '#lightbox-strawberry',
		type : 'inline',
		opts : {
			animationEffect : 'fade',
			idleTime: false,
		}
	});
  });

$(".cls-21 , .legend-sun").click(function(){
	
	$.fancybox.open({
		src  : '#lightbox-sun',
		type : 'inline',
		opts : {
			animationEffect : 'fade',
			idleTime: false,
		}
	});
  });
  
$(".cls-19 , .legend-bees").click(function(){
	
	$.fancybox.open({
		src  : '#lightbox-bees',
		type : 'inline',
		opts : {
			animationEffect : 'fade',
			idleTime: false,
		}
	});
  });





/*
*-----------------------------------------------------------------------------------------------------------*
* jQuery end
*-----------------------------------------------------------------------------------------------------------*
*/

});
