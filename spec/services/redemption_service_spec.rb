require "rails_helper"

RSpec.describe RedemptionService do
  describe "#call" do
    let(:user) { create(:user) }
    let(:reward) { create(:reward, points_required: 200) }
    let(:service) { RedemptionService.new(user, reward.id) }

    context "when the user has enough points" do
      let!(:point_transaction) { create(:point_transaction, user: user, points: 1500) }

      it "creates redemption and deducts points" do
        expect { service.call }.to change(Redemption, :count).by(1)
                                                             .and change(PointTransaction, :count).by(1)
        expect(user.reload.points_balance).to eq(1300)
      end
    end

    context "when user has insufficient points" do
      let!(:point_transaction) { create(:point_transaction, user: user, points: 100) }

      it "returns 422 with insufficient funds error" do
        expect { service.call }.to raise_error(RedemptionService::InsufficientPointsError, "Insufficient points to redeem this reward.")
      end

      it "does not create redemption when insufficient points" do
        expect {
          begin
            service.call
          rescue RedemptionService::InsufficientPointsError
          end
        }.to_not change(Redemption, :count)
      end

      it "does not deduct points" do
        initial_balance = user.points_balance
        expect {
          begin
            service.call
            rescue RedemptionService::InsufficientPointsError
          end
        }.to_not change { user.reload.points_balance }
      end
    end
  end
end
