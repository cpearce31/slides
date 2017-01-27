<h2>slideshow.js</h2>
Slideshow.js is a responsive image and text carousel featuring infinite scrolling and the option to scroll automatically. To add it to your website, simply copy and paste everything between the `<body>` tags into your HTML. Put the `assets` folder in the same directory as your HTML, along with `slides.css` and `slides.js`. Replace the stock photos in `assets` with your images, and switch out the lorum ipsum for your text! The images are expected to have a 3:2 width:height ratio. The slideshow can accomodate more or less images than it currently has, just add or remove the `<div class="carousel-slide">` elements. Make sure to preserve all the class names and IDs.

Add the following to the `<head>` section of your HTML:

`<link rel="stylesheet" href="assets/font-awesome-4.7.0/css/font-awesome.min.css" />`

`<link rel="stylesheet" href="slides.css" />`

`<script src="slides.js"></script>`

You can disable autoscrolling by setting changing `AUTOSCROLL` to `false` in `slides.js`. Note that autoscroll will pause when the mouse is over the carousel. Because this is not possible on mobile, autoscrolling will be disabled on touch devices. You can change how long each slide displays by setting `PERIOD` equal to the desired number of milliseconds.
