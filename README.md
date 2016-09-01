# HR Navigation Responsive Menu [v1.1]

HR Navigation Responsive Menu for all type of Web Applications, NATIVE Mobile App with very less code and easy to implement with all possible options

####Features
>Responsive

>Handle Events with 2 option (Click and Mouseover)

>All Major Browser Compatible

>Open with Left side and Top Side

>Multilple open menu option (Open one at a time or multiple)

>Equal width of list Item on Desktop

>Custom Speed Option

>Lightweight js only (3 kb)

##Documentation

###HTML

###### Required Files <head>
```html
<link rel="stylesheet" href="hr.nav.res.menu.css">
<script src="1.11.2.jquery.min.js"> </script>
<script src="hr.nav.res.menu.js"> </script>
```
###### Menu Markup
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

[Checkout Demo ](https://run.plnkr.co/plunks/QLcT9d/)

###### Author
About Author : [Md Hidaytullah Rahmani](http://www.clickimagine.com)

###### if you've any more idea or changes please share me on hidaytrahman@gmail.com :)

### Logs (v1.1)
#####  Multiple option Added **(v1.1)**
###### _Multiple Expand Menu_
###### _Single Expend Menu_
