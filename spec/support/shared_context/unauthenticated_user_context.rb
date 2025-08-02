RSpec.shared_context "unauthenticated user" do
  it "returns a 401 if not authenticated" do
    subject
    logout(:user)

    expect(response).to have_http_status(401)
  end
end
