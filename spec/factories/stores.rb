FactoryBot.define do
  factory :store do
    name { FFaker::Company.name }
  end
end
