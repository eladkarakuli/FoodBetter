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
	Recipe.get($routeParams.id).then (recipe) ->
		$scope.recipe = recipe
		return
	Recipe.getIngridients($routeParams.id).then (ingridients) ->
		$scope.ingridients = ingridients
		return
	Recipe.getRecipeSteps($routeParams.id).then (recipeSteps) ->
		$scope.recipeSteps = recipeSteps
		return

	$scope.addIngridient = () ->
		if $scope.newIngridientForm.$valid
			$scope.newIngridient.recipe_id = $routeParams.id
			Recipe.createIngridient($scope.newIngridient).then (ingridient) ->
				$scope.ingridients.push ingridient
			$scope.newIngridient = {}
			return

	$scope.removeIngridient = (ingridient) ->
		if $scope.ingridients.length > 0
			Recipe.deleteIngridient ingridient
			$scope.ingridients.splice($scope.ingridients.indexOf(ingridient), 1)
			return

	$scope.saveRecipeStep = () ->
		if $scope.newRecipeStepForm.$valid
			$scope.newRecipeStep.recipe_id = $routeParams.id
			$scope.newRecipeStep.step_number = $scope.recipeSteps.length
			Recipe.createRecipeStep($scope.newRecipeStep).then (recipeStep) ->
				$scope.recipeSteps.push recipeStep
			$scope.newRecipeStep = {}
			return

	return
];