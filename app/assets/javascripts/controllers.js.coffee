FoodBetterApp.controller 'MainCtrl', ['$scope', 'Recipe', ($scope, Recipe) ->
	recipes = Recipe.userRecentRecipes($scope.current_user.id).then((recipes) ->
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
	$scope.ingridients = Recipe.getIngridients($routeParams.id)

	$scope.save = () ->
		if $scope.newIngridientForm.$valid
			$scope.newIngridient.recipe_id = $routeParams.id
			Recipe.createIngridient $scope.newIngridient
			$scope.ingridients.push $scope.newIngridient
			return

	return
];