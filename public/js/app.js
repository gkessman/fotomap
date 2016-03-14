var app = angular.module('app', [
	'ngRoute',
	'dataController',
	'projectsController'
]);

app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {

	$httpProvider.defaults.useXDomain = true;

	$routeProvider
	.when('/', {
		templateUrl: "partials/projects.html",
		controller: "ProjectsController"
	})
	.when('/about', {
		templateUrl: "partials/about.html"
	})
	.when('/people', {
		templateUrl: "partials/people.html",
		controller: "DataController"
	})
	.otherwise({
		redirectTo: '/'
	})
}]);