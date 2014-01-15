class IngridientsController < ApplicationController
	require 'json'

	def index
		ingridients = Ingridient.where(:recipe_id => params[:recipe_id])

		render json: ingridients, status: 200
	end

	def create
		ingridient = Ingridient.new(ingridient_params)
		if ingridient.save
			render json: params[:ingridient], status: 200
		else
			render json: params[:ingridient], status: 409
		end
	end

	private
		def ingridient_params
			params.require(:ingridient).permit(:description, :recipe_id)
		end
end
