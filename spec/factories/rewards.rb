FactoryBot.define do
  factory :reward do
    store
    title { FFaker::Product.product_name }
    description { FFaker::Lorem.characters(30) }
    points_required { 50 }
  end
end
