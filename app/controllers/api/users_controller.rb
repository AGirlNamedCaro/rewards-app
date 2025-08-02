module Api
  class UsersController < Api::ApplicationController
    before_action :authenticate_user!
    def current
      render json: current_user
    end
  end
end
