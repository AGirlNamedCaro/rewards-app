module Api
  class RedemptionsController < Api::ApplicationController
    def index
      pagy, redemptions = pagy(current_user.redemptions.order(created_at: :desc))
      render json: { redemptions: redemptions, pagy: pagy_metadata(pagy), status: :ok }
    end
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
