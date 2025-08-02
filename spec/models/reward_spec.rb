require 'rails_helper'

RSpec.describe Reward, type: :model do
  describe "associations" do
    it { is_expected.to belong_to(:store).inverse_of(:rewards) }
  end
end
