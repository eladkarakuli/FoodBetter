FoodBetterApp = angular.module('FoodBetterApp', ['ngResource', 'ng-rails-csrf', 'restangular']).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'partials/main.html', 
				controller: 'MainCtrl'
			}).			
			otherwise({
				redirectTo: '/'
			});
	}]).
	config(function(RestangularProvider) {
	    RestangularProvider.setBaseUrl('/api');
	});