var app = angular.module('app', [
	'rzModule',
	'ngRoute',
	'fotomapController'
]);

app.config(['$routeProvider', '$httpProvider', '$locationProvider', function($routeProvider, $httpProvider, $locationProvider) {

	$httpProvider.defaults.useXDomain = true;

	$routeProvider
	.when('/', {
		templateUrl: "partials/fotomap.html",
		controller: "FotomapController"
	})
	.when('/about', {
		templateUrl: "partials/about.html"
	})
	.otherwise({
		redirectTo: '/'
	})

	$locationProvider.html5Mode(true);
}]);