class Reward < ApplicationRecord
  belongs_to :store, inverse_of: :rewards
end
