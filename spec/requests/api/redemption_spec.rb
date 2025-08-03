require 'rails_helper'

RSpec.describe "Api::Redemptions", type: :request do
  describe "GET /index" do
    let(:user) { create(:user) }

    subject { get api_redemptions_path, params: { page: 1 } }

    describe "when user authenticated" do
      before do
        create_list(:redemption, 29, user:)
        login_as(user, scope: :user)
      end

      let!(:newest_redemption) { create(:redemption, user: user) }

      it "returns available paginated redemptions newest to oldest" do
        subject

        expect(response).to have_http_status(:success)
        rewards_object = JSON.parse(response.body)
        expect(rewards_object["redemptions"].length).to eq 10
        expect(rewards_object["redemptions"].first["id"]).to eq newest_redemption.id
      end

      context "when there are no redemptions" do
        before do
          Redemption.destroy_all
        end
        it "returns an empty array" do
          subject

          expect(response).to have_http_status(:success)
          redemption_object = JSON.parse(response.body)
          expect(redemption_object["redemptions"]).to eq []
          expect(redemption_object["pagy"]["count"]).to eq 0
        end
      end
    end
    include_context "unauthenticated user"
  end

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
