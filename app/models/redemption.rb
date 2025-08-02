class Redemption < ApplicationRecord
  belongs_to :user, inverse_of: :redemptions
  belongs_to :reward
  has_many :point_transactions, inverse_of: :redemption
end
