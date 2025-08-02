require "rails_helper"
RSpec.describe UserSerializer, type: :serializer do
  let(:user) { create(:user) }
  subject { described_class.new(user) }

  it "includes the expected attributes" do
    serializer = subject.as_json
    expect(serializer[:id]).to eq (user.id)
    expect(serializer[:email]).to eq (user.email)
    expect(serializer[:points_balance]).to eq (user.points_balance)
  end
end
