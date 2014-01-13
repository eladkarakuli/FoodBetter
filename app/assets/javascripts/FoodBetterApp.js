FoodBetterApp = angular.module('FoodBetterApp', ['ngResource', 'ng-rails-csrf', 'restangular']).
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