class RecipesController < ApplicationController
	def index
		recipes = Recipe.where(user_id: params[:user_id])
		render json: recipes, status: 200
	end
end
