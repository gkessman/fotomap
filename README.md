# Fotomap

![alt tag](https://github.com/gkessman/fotomap/blob/master/public/images/fotomap.png)

Fotomap is an application utilizing Google Maps' & Instagram's API's to leverage a small location-based photo fetching service. Clicking anywhere on the map will return a set of 20 pictures within the provided radius of the latitude & longitude clicked. The slider placed below the map allows for radius adjustments, from anywhere between 0 - 3000 meters. 

*Note*: This project is currently using a sandbox license of Instagram's API. Regardless of location or radius provided, the API will always return a response including only 20 images, tagged within the radius of the location provided.

This is an application built from scratch utilizing technologies such as [Node.js](http://nodejs.org), [Express](http://expressjs.com/), [AngularJS](https://angularjs.org/), and [Gulp.js](http://gulpjs.com/) as a build system.


## Getting Started

### Dependencies
The following must be installed first before running the application:

* [Node.js](http://nodejs.org)
* [Bower](http://bower.io/) `sudo npm install -g bower`
* [Gulp](http://gulpjs.com) `sudo npm install -g gulp`

### Quick Start

1. Clone the project to directory of your choosing.
2. In bash/terminal/command line, `cd` into your project directory.
3. Run `npm install` to install required dependency modules.
	* Running `npm install` will also perform a `postinstall` script step to install Bower components at the same time.
4. In server.js, replace `<INSTAGRAM-API-ACCESS-TOKEN>` with your own [Instagram API Access Token](http://instagram.com/developer/authentication/).
5. In public/index.html, replace `<GOOGLE-MAPS-API-KEY>` with your own [Google Maps API Key](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=0ahUKEwjSw4TK3InNAhVMVz4KHWcTDPoQFggjMAE&url=https%3A%2F%2Fdevelopers.google.com%2Fmaps%2Fdocumentation%2Fjavascript%2Fget-api-key&usg=AFQjCNF_0G8POH_0oyUZ6yLpvAQBCbu4Ig&sig2=TtE3zbt6SmnUD5lj1SrSyg).
6. When components are done installing and API keys are added, run `gulp` to compile & minify necessary files and spin up the Node server.
7. Your browser should automatically open with an instance of the application running, otherwise navigate to _localhost:7000_ to access.