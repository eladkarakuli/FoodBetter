class RecipesController < ApplicationController
	require 'json'

	def index
		sort = params[:sort]
		filters = JSON.parse params[:filters]

		recipes = Recipe.where(filters)
		if sort != nil
			if sort.start_with? "-"
				sort += " DESC"
			else
				sort += " ASC"
			end
			recipes = recipes.order(sort)
		end
		render json: recipes, status: 200
	end

	def create
		recipe = Recipe.new(recipe_params)
		recipe.user_id = current_user.id
		if recipe.save
			render json: recipe, status: 200
		else
			render json: recipe, status: 409
		end
	end

	def show
		recipe = Recipe.find(params[:id])
		if recipe
			render json: recipe, status: 200
		else
			render json: {}, status: 404
		end
	end

	private
		def recipe_params
			params.require(:recipe).permit(:name, :notes, :user_id)
		end
end
