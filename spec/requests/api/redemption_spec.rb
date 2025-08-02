require 'rails_helper'

RSpec.describe "Api::Redemptions", type: :request do
  describe "POST /create" do
    let(:user) { create(:user) }
    let(:reward) { create(:reward, points_required: 100) }

    subject { post api_redemptions_path, params: { reward_id: reward.id } }

    before do
        login_as(user, scope: :user)
      end

    context "successful redemption" do
    let!(:transaction) { create(:point_transaction, user: user, points: 200) }

      it "creates a redemption and returns success status" do
        expect { subject }.to change(Redemption, :count).by(1)
        expect(response).to have_http_status(:created)
      end
    end

    context "unsuccessful redemption" do
      let!(:transaction) { create(:point_transaction, user: user, points: 50) }

      it "returns insufficient points error" do
        subject
        json = JSON.parse(response.body)

        expect(response).to have_http_status(:unprocessable_entity)
        expect(json["error"]).to eq("Insufficient points to redeem this reward.")
      end

      it "does not create a redemption" do
        expect { subject }.not_to change(Redemption, :count)
      end
    end
  end
end
