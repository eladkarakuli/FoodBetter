FoodBetterApp = angular.module('FoodBetterApp', ['ngResource', 'ng-rails-csrf'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'partials/main.html', 
				controller: 'MainCtrl'
			}).
			when('/log_in', {
				templateUrl: 'partials/log_in.html',
				controller: 'LogInCtrl'
			}).
			when('/sign_up', {
				templateUrl: 'partials/sign_up.html',
				controller: 'LogInCtrl'
			}).
			otherwise({
				redirectTo: '/'
			});
	}]);