class Reward < ApplicationRecord
  belongs_to :store, inverse_of: :rewards
  has_one_attached :image

  validates :description, length: { maximum: 30 }

  scope :available_for_user, ->(user) {
    where.not(id: user.redemptions.select(:reward_id))
  }
end
