class RecipeStepsController < ApplicationController
	require 'json'

	def index
		recipe_steps = RecipeStep.where(:recipe_id => params[:recipe_id])

		render json: recipe_steps, status: 200
	end

	def create
		recipe_step = RecipeStep.new(recipe_step_params)
		if recipe_step.save
			render json: params[:recipe_step], status: 200
		else
			render json: params[:recipe_step], status: 409
		end
	end

	private
		def recipe_step_params
			params.require(:recipe_step).permit(:description, :recipe_id, :step_number)
		end
end
