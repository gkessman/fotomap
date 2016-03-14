var app = angular.module('app', [
	'ngRoute',
	'dataController',
	'projectsController'
]);

app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {

	$httpProvider.defaults.useXDomain = true;

	$routeProvider
	.when('/', {
		templateUrl: "partials/people.html",
		controller: "DataController"
	})
	.when('/about', {
		templateUrl: "partials/about.html"
	})
	.when('/projects', {
		templateUrl: "partials/projects.html",
		controller: "ProjectsController"
	})
	.otherwise({
		redirectTo: '/'
	})
}]);