
FoodBetterApp.factory('Recipe', function(Restangular) {
    var recipes = Restangular.all('recipes');

    return {
        create: function(recipe) {
            recipes.post(recipe);
        },

        get: function(recipeId) {
            return Restangular.one('recipes', recipeId).get();
        },

    	user_recent_recipes: function(user_id) {
            return Restangular.all('recipes').getList({filters: {user_id: user_id}, sort: 'updated_at'});
        }
    };
});
