require 'rails_helper'

RSpec.describe "Api::Rewards", type: :request do
  describe "GET /index" do
    describe "GET /api/rewards" do
      let(:user) { create(:user) }
      let!(:oldest_reward) { create(:reward) }
      let!(:reward) { create(:reward) }
      let!(:newest_reward) { create(:reward) }

      subject { get api_rewards_path }

      context "when user authenticated" do
        before do
          login_as(user, scope: :user)
        end

        it "returns available rewards newest to oldest" do
          subject

          expect(response).to have_http_status(:success)
          rewards = JSON.parse(response.body)
          expect(rewards.length).to eq 3
          expect(rewards.first["id"]).to eq newest_reward.id
          expect(rewards.last["id"]).to eq oldest_reward.id
        end
      end
      include_context "unauthenticated user"
    end
  end
end
