FactoryBot.define do
  factory :point_transaction do
    user
    redemption
    points { 100 }
  end
end
