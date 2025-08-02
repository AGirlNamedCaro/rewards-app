class RedemptionService
  class InsufficientPointsError < StandardError; end

  attr_reader :user, :reward

  def initialize(user, reward_id)
    @user = user
    @reward = Reward.find(reward_id)
  end

  def call
    validate_redemption!

    ActiveRecord::Base.transaction do
      redemption = create_redemption
      deduct_points(redemption)
      redemption
    end
  end

  private

  def validate_redemption!
    unless @user.points_balance >= @reward.points_required
      raise InsufficientPointsError, "Insufficient points to redeem this reward."
    end
  end

  def create_redemption
    @user.redemptions.create!(
      reward_id: @reward.id,
      points_spent: @reward.points_required,
      description: "Redeemed #{@reward.title}",
      redeemed_at: Time.current
    )
  end

  def deduct_points(redemption)
    @user.point_transactions.create!(
      points: -@reward.points_required,
      redemption_id: redemption.id
    )
  end
end
