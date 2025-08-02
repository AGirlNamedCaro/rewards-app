require 'rails_helper'

RSpec.describe "Api::Rewards", type: :request do
  describe "GET /index" do
    describe "GET /api/rewards" do
      let(:user) { create(:user) }

      subject { get api_rewards_path, params: { page: 1 } }

      describe "when user authenticated" do
        before do
          create_list(:reward, 29)
          login_as(user, scope: :user)
        end

        let!(:newest_reward) { create(:reward) }

        it "returns available paginated rewards newest to oldest" do
          subject

          expect(response).to have_http_status(:success)
          rewards_object = JSON.parse(response.body)
          expect(rewards_object["rewards"].length).to eq 10
          expect(rewards_object["rewards"].first["id"]).to eq newest_reward.id
        end

        context "when there are no rewards" do
          before do
            Reward.destroy_all
          end
          it "returns an empty array" do
            subject

            expect(response).to have_http_status(:success)
            rewards_object = JSON.parse(response.body)
            expect(rewards_object["rewards"]).to eq []
            expect(rewards_object["pagy"]["count"]).to eq 0
          end
        end
      end
      include_context "unauthenticated user"
    end
  end
end
