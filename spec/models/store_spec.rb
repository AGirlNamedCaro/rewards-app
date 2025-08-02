require 'rails_helper'

RSpec.describe Store, type: :model do
  describe "associations" do
    it { is_expected.to have_many(:rewards).inverse_of(:store).dependent(:destroy) }
  end
end
