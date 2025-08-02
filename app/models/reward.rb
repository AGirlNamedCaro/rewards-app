class Reward < ApplicationRecord
  belongs_to :store, inverse_of: :rewards
  has_one_attached :image

  validates :description, length: { maximum: 30 }
end
