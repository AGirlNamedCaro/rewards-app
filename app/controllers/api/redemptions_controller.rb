module Api
  class RedemptionsController < Api::ApplicationController
    def create
      redemption = RedemptionService.new(current_user, redemption_params["reward_id"]).call

      render json: redemption, status: :created
    rescue RedemptionService::InsufficientPointsError => e
      render json: { error: e.message }, status: :unprocessable_entity
    end

    private

    def redemption_params
      params.permit(:reward_id)
    end
  end
end
