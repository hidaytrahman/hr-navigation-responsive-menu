# HR Navigation Responsive Menu [v1.4]

HR Navigation Responsive Menu for all type of Web Applications with very less code and easy to implement with all possible options.

####Features
* Responsive all devices support
* Handle events with 2 option (Click and Mouseover)
* All major browsers compatible
* Toggle from left side and top side
* Multilple open menu option (Open one at a time or multiple)
* Equal width of menu list on Desktop
* Custom speed option
* LESS compatible
* Lightweight js only (2 kb)

##Documentation

###HTML

###### Required Files <head>
```html
<link rel="stylesheet" href="hr.nav.res.menu.min.css">
<script src="1.11.2.jquery.min.js"> </script>
<script src="hr.nav.res.menu.min.js"> </script>
```
###### HTML
```html
<nav class="hr-nav-wrapper">
		<div class="navigation hr-navigation">
			<ul>
				<li> <a href="#">Nav 1</a > </li>
				<li> <a href="#">Nav 2</a > </li>
			</ul>
		</div>
	 </nav>
```
	
###jQuery
```javascript
	$(".hr-nav-wrapper").hrNavMenu({ 
		speed:800, //integer in milliseconds  1000,2000
		menuType :"fromLeft", //fromLeft, fromTop
		desktopListWidth : "fluid", // fluid, default
		openEvent : "click", //click, mouseover
		multiple  : false // true, false

	});
```

[Checkout Demo ](https://hidaytrahman.github.io/hr-navigation-responsive-menu/)

###### Author
###### if you've any more idea or suggestions please share me on :point_right: [hidaytrahman@gmail.com](mailto:hidaytrahman@gmail.com)

#### If you like my work [buy me a cup of coffee](https://www.paypal.me/hidaytrahman/3) to show support :blush:

----------------------------------------------------
### Logs (v1.4)
#### What's New
###### LESS Compatibility
###### UI Changes
--------------------------
#####  Multiple option Added **(v1.2)**
###### _Added minified css and js_
###### _Multiple Expand Menu_
###### _Single Expend Menu_
