module Api
  class RewardsController < ApplicationController
    before_action :authenticate_user!
    include Pagy::Backend

    def index
      pagy, rewards = pagy(Reward.includes(:store).order(created_at: :desc))
      render json: { rewards: ActiveModelSerializers::SerializableResource.new(rewards, each_serializer: RewardSerializer), pagy: pagy_metadata(pagy), status: :ok }
    end
  end
end
