require 'rails_helper'

RSpec.describe PointTransaction, type: :model do
  it { is_expected.to belong_to(:user).inverse_of(:point_transactions) }
  it { is_expected.to belong_to(:redemption).inverse_of(:point_transactions) }
end
