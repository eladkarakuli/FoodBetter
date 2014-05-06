FoodBetterApp = angular.module('FoodBetterApp', ['ngRoute', 'ng-rails-csrf', 'restangular', 'mgcrea.ngStrap']).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'partials/main.html', 
				controller: 'MainCtrl'
			}).			
			when('/add-recipe', {
				templateUrl: 'partials/add_recipe.html',
				controller: 'AddRecipeCtrl'
			}).
			when('/recipes/:id', {
				templateUrl: 'partials/view_recipe.html',
				controller: 'ViewRecipeCtrl'
			}).
			otherwise({
				redirectTo: '/'
			});
	}]).
	config(function(RestangularProvider) {
	    RestangularProvider.setBaseUrl('/api');
	});