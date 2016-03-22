/*   
Plugin :  HR Navigation Responsive Menu
Developer: MD Hidaytullah Rahmani
url: http://www.webtechpie.com

*/
var next_move = "open";
$.fn.hrNavMenu =  function(option){
	var custom = $.extend({
		openEvent 			: "click", //click, mouseover
		menuType			: "fromLeft", // fromLeft, fromTop
		speed 				: 500, // integer in milliseconds  1000,2000
		desktopListWidth 	: "fluid" ,// fluid, default
		multiple			: false // true, false

	},option)

	var parentDiv = $(".hr-navigation");
	var pdWidth = parentDiv.width()+10;


	//add Togg menu icon
	$(parentDiv).before("<div class='hr-toggMenu openIt'></div>");
	//added arrow for submenus
	$(".hr-navigation ul ul").before("<div class='hrArr'></div>");


	$(".hr-toggMenu").on(custom.openEvent, function(){

		$(this).toggleClass("hr-active");

		// Left to right
		if(custom.menuType=="fromLeft")
		{
			$(this).next().addClass("hr-fromLeft");
			var css = {}; // create objects for animate css
			if(next_move=="open")
			{
				css = {left: "0"}; //added css property for animate
				next_move = "shrink"; // change next_move value as shrink
			}

			else
			{
				css = {left: "-260"};//added css property for animate in opposit
				next_move = "open"; //keep name same as default
			}

			$(this).next().animate(css,custom.speed); // call animate function with css object arguments

		}

		// For Top to down slide
		else
		{
			$(this).next().slideToggle();
		}
		
		
	});

	//Do some thing when resize
	$(window).resize(function(){

		var winWid = $(window).width();
		//alert(winWid);
		if(winWid>768) {
			$(parentDiv).show();
		 }	
		 else
		 {
		 	 $(parentDiv).hide();
		 	 $(".hr-fromLeft").css({"display":"block"});
		 	 $(".hr-toggMenu").removeClass("hr-active"); // remove close when resize
		 } 

	})

	

	//Submenu mobile
	$(".hrArr").on("click", function(){
		if(custom.multiple==false)
		{
			$(this).next('.hr-navigation ul ul').slideToggle();
	        $(this).parents('li').eq(0).siblings().each(function(){
	        var _toggle = $(this).find('.hrArr').eq(0);
	            if(_toggle.hasClass("hrArr-active")){
	                 _toggle.removeClass("hrArr-active");
	                 $(this).find('ul').eq(0).slideToggle();
	            }
	       
	        });

			$(this).toggleClass("hrArr-active");
		}

		else
		{
			$(this).next().slideToggle();
			$(this).toggleClass("hrArr-active");
		}
		
	});

	//fluid width on desktop
	if(custom.desktopListWidth=="fluid")
	{ 
		var lists,listLen;
		 lists = $(".hr-navigation > ul > li");
		 listLen = $(lists).length;
		 $(lists).css("width",' '+100/listLen+'%');
		
	}

	
}
