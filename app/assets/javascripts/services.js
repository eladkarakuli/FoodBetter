
FoodBetterApp.factory('Recipe', function(Restangular) {
    var recipes = Restangular.all('recipes');

    return {
        create: function(recipe) {
            recipes.post(recipe);
        },

        get: function(recipeId) {
            return Restangular.one('recipes', recipeId).get();
        },

    	userRecentRecipes: function(user_id) {
            return Restangular.all('recipes').getList({filters: {user_id: user_id}, sort: 'updated_at'});
        },

        getIngridients: function(recipeId) {
            return Restangular.one('recipes', recipeId).getList('ingridients');
        },

        createIngridient: function(ingridient) {
            return Restangular.one('recipes', ingridient.recipe_id).all('ingridients').post(ingridient);
        },

        deleteIngridient: function(ingridient) {
            Restangular.one('recipes', ingridient.recipe_id).one('ingridients', ingridient.id).remove();
        }

    };
});
