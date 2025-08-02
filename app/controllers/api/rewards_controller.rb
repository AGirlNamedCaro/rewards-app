module Api
  class Api::RewardsController < ApplicationController
    before_action :authenticate_user!

    def index
      rewards = Reward.includes(:store).order(created_at: :desc)
      render json: rewards
    end
  end
end
