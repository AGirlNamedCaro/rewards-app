class PointTransaction < ApplicationRecord
  belongs_to :user, inverse_of: :point_transactions
  belongs_to :redemption, inverse_of: :point_transactions
end
