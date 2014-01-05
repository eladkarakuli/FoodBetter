FoodBetterApp.controller 'MainCtrl', ['$scope', 'Recipe', ($scope, Recipe) ->
	latest_recipes = Recipe.user_recent_recipes 4;
	$scope.recipes = [
			{
				recipe_id: '1',
				name: 'potato salad'
			},
			{recipe_id: '2', name: 'crab popsticles'}
		];
];
