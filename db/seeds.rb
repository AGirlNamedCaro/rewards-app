# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

User.create!(
  email: "user@example.com",
  password: "password",
)

store = Store.create!(
  name: "Taqueria del barrio"
)

store2 = Store.create!(
  name: "Dunkin' Tim bits"
)

Reward.create!(
  title: "Free Tacos",
  description: "Get 3 free tacos at Taqueria del barrio",
  points_required: 500,
  store: store

)

Reward.create!(
  title: "Free Coffee",
  description: "Get an extra large coffee on us ",
  points_required: 200,
  store: store2
)

Reward.create!(
  title: "Enchilada",
  description: "Get a small Enchilada, 50% off",
  points_required: 700,
  store: store
)
