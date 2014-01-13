FoodBetterApp.controller 'MainCtrl', ['$scope', 'Recipe', ($scope, Recipe) ->
	recipes = Recipe.user_recent_recipes($scope.current_user.id).then((recipes) ->
			$scope.recipes = recipes
			return
		)

	return
];

FoodBetterApp.controller 'AddRecipeCtrl', ['$scope', '$location', 'Recipe', ($scope, $location, Recipe) ->
	$scope.save = () ->
		if $scope.new_recipe.$valid
			Recipe.create $scope.recipe
			$location.path('/');

		return
];

FoodBetterApp.controller 'ViewRecipeCtrl', ['$scope', '$location', '$routeParams', 'Recipe', ($scope, $locatin, $routeParams, Recipe) ->
	$scope.recipe = Recipe.get($routeParams.id)

	return
];