FactoryBot.define do
  factory :reward do
    store
    title { FFaker::Product.product_name }
    description { FFaker::Lorem.paragraph }
    points_required { 50 }
  end
end
