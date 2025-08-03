module Api
  class RewardsController < Api::ApplicationController
    def index
      pagy, available_rewards = pagy(Reward.available_for_user(current_user).includes(:store, image_attachment: :blob).order(created_at: :desc))
      render json: { rewards: ActiveModelSerializers::SerializableResource.new(available_rewards, each_serializer: RewardSerializer), pagy: pagy_metadata(pagy), status: :ok }
    end
  end
end
