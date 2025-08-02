require "rails_helper"
RSpec.describe RewardSerializer, type: :serializer do
  let(:store) { create(:store) }
  let(:reward) { create(:reward, store:) }
  subject { described_class.new(reward) }

  it "includes the expected attributes" do
    serializer = subject.as_json
    expect(serializer[:id]).to eq (reward.id)
    expect(serializer[:title]).to eq (reward.title)
    expect(serializer[:description]).to eq (reward.description)
    expect(serializer[:points_required]).to eq (reward.points_required)
    expect(serializer[:store]).to eq store
  end

  context "with image attached" do
    before do
      reward.image.attach(
        io: File.open(Rails.root.join('spec', 'fixtures', 'files', 'placeholder.png')),
        filename: 'placeholder.png',
        content_type: 'image/png'
      )
    end

    it "image_url is present" do
      serializer = subject.as_json
      pp serializer
      expect(serializer[:image_url]).to be_present
    end
  end

  context "with no image attached" do
    it "image_url is nil" do
      serializer = subject.as_json
      expect(serializer[:image_url]).to be_nil
    end
  end
end
