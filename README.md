# hr-navigation-responsive-menu
HR Navigation Responsive Menu for all type of Web Applications, NATIVE Mobile App with very less code and easy to implement with all possible options

####Features

>Responsive

>All Major Browser Compatible

>Open with Left side and Top Side

>Equal width of list Item on Desktop

>Custom Speed Option

>Lightweight js only (2.6kb)

##Documentation

###HTML

######Include these files on <head>
```html
<link rel="stylesheet" href="hr.nav.res.menu.css">
<script src="1.11.2.jquery.min.js"> </script>
<script src="hr.nav.res.menu.js"> </script>
```
###### add these ul structures
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
		speed:800, 
		menuType :"fromLeft"
	});
```

###### Author
About Author : [Md Hidaytullah Rahmani](https://www.webtechpie.com)
