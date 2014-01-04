FoodBetterApp.factory 'Recipe', ($resource) ->
  class Recipe
    constructor: (userId) ->
      @service = $resource('/api/users/:user_id/recipes/:id',
        {user_id: userId, id: '@id'})

    create: (attrs) ->
      new @service(recipe: attrs).$save (recipe) ->
        attrs.id = recipe.id
      attrs

    all: ->
      @service.query()

FoodBetterApp.factory 'User', ($resource) ->
  class User
    constructor: (userId) ->
      @service = $resource('/api/users/:user_id',
        {user_id: userId})

    all: ->
      @service.query()