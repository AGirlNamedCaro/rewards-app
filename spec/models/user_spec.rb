require 'rails_helper'

RSpec.describe User, type: :model do
  it { is_expected.to have_many(:point_transactions).inverse_of(:user).dependent(:destroy) }
  it { is_expected.to have_many(:redemptions).inverse_of(:user).dependent(:destroy) }

  describe "#points_balance" do
    let(:user) { create(:user) }

    context "when user has no transactions" do
      it "returns zero" do
        expect(user.points_balance).to eq(0)
      end
    end

    context "it updates the user's point balance" do
      before do
        create(:point_transaction, user: user, points: 100)
        create(:point_transaction, user: user, points: -50)
        create(:point_transaction, user: user, points: 25)
      end

      it "returns the sum of the transactions" do
        expect(user.points_balance).to eq(75)
      end
    end
  end
end
