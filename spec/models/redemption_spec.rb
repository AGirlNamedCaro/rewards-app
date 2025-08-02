require 'rails_helper'

RSpec.describe Redemption, type: :model do
  it { is_expected.to belong_to(:user).inverse_of(:redemptions) }
  it { is_expected.to have_many(:point_transactions).inverse_of(:redemption) }
end
