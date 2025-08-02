class Store < ApplicationRecord
  has_many :rewards, inverse_of: :store, dependent: :destroy
end
