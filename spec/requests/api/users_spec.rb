require 'rails_helper'

RSpec.describe "Api::Users", type: :request do
  describe "GET /api/current_user" do
    let(:user) { create(:user) }
    subject { get api_current_user_path }

    context "when user authenticated" do
      before do
        login_as(user, scope: :user)
      end

      it "returns the current user" do
        subject

        expect(response).to have_http_status(:success)
        current_user = JSON.parse(response.body)
        expect(current_user['id']).to eq(user.id)
        expect(current_user['email']).to eq(user.email)
        expect(current_user['points']).to eq(user.points)
      end
    end
    include_context "unauthenticated user"
  end
end
