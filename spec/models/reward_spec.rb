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

  describe "available_for_user" do
    let(:user1) { create(:user) }
    let(:user2) { create(:user) }

    let(:reward1) { create(:reward) }
    let(:reward2) { create(:reward) }
    let(:reward3) { create(:reward) }

    context "when user has no redemptions" do
      it "returns all rewards" do
        available_rewards = Reward.available_for_user(user1)

        expect(available_rewards).to contain_exactly(reward1, reward2, reward3)
        expect(available_rewards.count).to eq(3)
      end
    end

    context "when user has redeemed some rewards" do
      before do
        create(:redemption, user: user1, reward: reward1)
        create(:redemption, user: user1, reward: reward2)
      end

      it "excludes redeemed rewards" do
        available_rewards = Reward.available_for_user(user1)

        expect(available_rewards).to contain_exactly(reward3)
        expect(available_rewards.count).to eq(1)
      end
    end

    context "when same reward is redeemed multiple times by same user" do
      before do
        create(:redemption, user: user1, reward: reward1)
        create(:redemption, user: user1, reward: reward1)
      end

      it "still excludes the reward only once" do
        available_rewards = Reward.available_for_user(user1)

        expect(available_rewards).to contain_exactly(reward2, reward3)
        expect(available_rewards).not_to include(reward1)
        expect(available_rewards.count).to eq(2)
      end
    end

    context "when different users redeem different rewards" do
      before do
        create(:redemption, user: user1, reward: reward1)
        create(:redemption, user: user1, reward: reward2)
        create(:redemption, user: user2, reward: reward2)
        create(:redemption, user: user2, reward: reward3)
      end

      it "returns correct available rewards for each user" do
        available_rewards_user1 = Reward.available_for_user(user1)
        available_rewards_user2 = Reward.available_for_user(user2)

        expect(available_rewards_user1).to contain_exactly(reward3)
        expect(available_rewards_user1.count).to eq(1)

        expect(available_rewards_user2).to contain_exactly(reward1)
        expect(available_rewards_user2.count).to eq(1)
      end
    end
  end
end
