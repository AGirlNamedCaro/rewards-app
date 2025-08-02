require 'rails_helper'

RSpec.describe Reward, type: :model do
  describe "associations" do
    it { is_expected.to belong_to(:store).inverse_of(:rewards) }
    it { is_expected.to have_one_attached(:image) }
  end

  describe "validations" do
    context "when description is valid" do
      let(:reward) { create(:reward, description: "Get a small Enchilada, 50% off") }
      it "is valid with a description of 30 characters" do
        expect(reward).to be_valid
      end
    end

    context "when description is not valid" do
      let(:reward) { build(:reward, description: "Get a small Enchilada, 50% off Get a small Enchilada, 50% off") }
      it "is invalid with a description longer than 30 characters" do
        reward.valid?
        expect(reward.errors[:description]).to include("is too long (maximum is 30 characters)")
      end
    end
  end
end
