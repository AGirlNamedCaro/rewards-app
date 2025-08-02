class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :point_transactions, inverse_of: :user, dependent: :destroy
  has_many :redemptions, inverse_of: :user, dependent: :destroy

  def points_balance
    point_transactions.sum(:points)
  end
end
