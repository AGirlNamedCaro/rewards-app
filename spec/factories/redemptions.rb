FactoryBot.define do
  factory :redemption do
    user
    reward
    points_spent { 200 }
    redeemed_at { "2025-08-02" }
    description { FFaker::Lorem.sentence }
  end
end
