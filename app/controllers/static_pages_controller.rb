class StaticPagesController < ApplicationController
	def index
		if !current_user
			redirect_to new_user_session_url
		else
			render 'layouts/application'
		end
	end
end
