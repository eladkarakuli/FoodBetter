# FoodBetterApp.factory 'Recipe', ($resource) ->
#   class Recipe
#     constructor: (userId) ->
#       @service = $resource('/api/users/:user_id/recipes/:id',
#         {user_id: userId, id: '@id'})

#     create: (attrs) ->
#       new @service(recipe: attrs).$save (recipe) ->
#         attrs.id = recipe.id
#       attrs

#     all: ->
#       @service.query()

#     recent_recipes: (userId) ->
#       @service