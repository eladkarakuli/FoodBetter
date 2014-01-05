
FoodBetterApp.factory('Recipe', function(Restangular) {
    var recipes = Restangular.all('recipes');

    return {
    	user_recent_recipes: function(user_id) {
            Restangular.all('recipes').getList({user_id: user_id}).then(function(recipes) {
                return recipes;
            });
        }
    };
});
