
FoodBetterApp.factory('Recipe', function(Restangular) {
    var recipes = Restangular.all('recipes');

    return {
        create: function(recipe) {
            return recipes.post(recipe);
        },

        get: function(recipeId) {
            return Restangular.one('recipes', recipeId).get();
        },

    	userRecentRecipes: function(user_id) {
            return Restangular.all('recipes').getList({filters: {user_id: user_id}, sort: 'updated_at'});
        },

        // ingridients

        getIngridients: function(recipeId) {
            return Restangular.one('recipes', recipeId).getList('ingridients');
        },

        createIngridient: function(ingridient) {
            return Restangular.one('recipes', ingridient.recipe_id).all('ingridients').post(ingridient);
        },

        deleteIngridient: function(ingridient) {
            Restangular.one('recipes', ingridient.recipe_id).one('ingridients', ingridient.id).remove();
        },

        // recipe steps

        getRecipeSteps: function(recipeId) {
            return Restangular.one('recipes', recipeId).getList('recipe_steps');
        },

        createRecipeStep: function(recipeStep) {
            return Restangular.one('recipes', recipeStep.recipe_id).all('recipe_steps').post(recipeStep);
        }

    };
});

FoodBetterApp.factory('EditableInput', function(Restangular) {
    return {
        saveFieldValue: function(pluralResourceName, resourceId, fieldName, fieldValue) {
            Restangular.one('/' + pluralResourceName, resourceId).post({fieldName: fieldValue});
        }
    };
});

FoodBetterApp.factory('Location', function($location) {
    return {
        goTo: function(path) {
            $location.path(path);
        }
    };
});