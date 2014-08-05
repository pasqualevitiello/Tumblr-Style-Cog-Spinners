Tumblr-Style-Cog-Spinners
=========================

Tumblr-style cog loading animation made with CSS and SVG icons designed by <a href="https://dribbble.com/shots/1631956-Settings-Icons-PSD">Jiri Silha</a>.
<br>
<a href="http://pasqualevitiello.github.io/Tumblr-Style-Cog-Spinners/"><strong>View Demo</strong></a>

<h2>Markup</h2>
Include to your pages the HTML code, just before the closing `</body>` tag:

```html
<div id="loader" class="overlay-loader">
	<div class="loader-background color-flip"></div>
	<img class="loader-icon spinning-cog" src="cogs/cog01.svg" data-cog="cog01">
</div>
```
<strong>Don't forget to include the SVG icon you wish to use.</strong> 

<h2>CSS</h2>
Include the file `cog.css` into the `<head>` section, or add its content to your stylesheet.

<h2>Javascript</h2>
Use your favourite method to make the loader disappear when website content is loaded. Here is a jQuery example:

```javascript
jQuery(window).load(function($) {

    $('.loader-icon').removeClass('spinning-cog').addClass('shrinking-cog');
    $('.loader-background').delay(1300).fadeOut(); 
     
});
```
A good alternative is using DeSandro's <a href="https://github.com/desandro/imagesloaded">imagesLoaded</a> plugin to detect when images have been loaded.

<h2>Playground</h2>
Here is a <a href="http://codepen.io/pasqualevitiello/full/fluGx/">pen</a> you can play with!

<h2>Credits</h2>
<ul>
	<li><a href="https://dribbble.com/shots/1631956-Settings-Icons-PSD">PSD cog icons by Jiri Silha</a></li>
	<li><a href="https://www.tumblr.com/">Tumblr</a></li>
</ul>