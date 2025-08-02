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

store3 = Store.create!(
  name: "Pizza Bros"
)

store4 = Store.create!(
  name: "Donut Den"
)

rewards = [
  { title: "Free Tacos", description: "Get 3 free tacos at Taqueria", points_required: 500, image_file: "tacos.jpg", store: store },
  { title: "Free Coffee", description: "Extra large free coffee on us", points_required: 200, image_file: "ice-coffee.jpg", store: store2 },
  { title: "Enchilada", description: "50% off small enchilada", points_required: 700, image_file: "enchilada.jpg", store: store },
  { title: "Amazon Gift Card", description: "A $25 Amazon gift card.", points_required: 250, image_file: "amazon-gift-card.jpg", store: store },
  { title: "Moka Pot", description: "30% off Moka pot", points_required: 900, image_file: "moka-pot.jpg", store: store2 },
  { title: "Smoothie Voucher", description: "Free smoothie voucher", points_required: 150, image_file: "smoothie.jpg", store: store2 },
  { title: "Pizza Slice", description: "1 pizza slice from Bros", points_required: 300, image_file: "pizza.jpg", store: store3 },
  { title: "Movie Night", description: "1 movie ticket free", points_required: 400, image_file: "movie-ticket.jpg", store: store2 },
  { title: "Donut Box", description: "6 assorted donuts box", points_required: 350, image_file: "donuts.jpg", store: store4 },
  { title: "Free AirPods", description: "Free AirPods w/ purchase", points_required: 1000, image_file: "air-pods.jpg", store: store2 },
  { title: "Burger Combo", description: "Free burger combo meal", points_required: 600, image_file: "burger-combo.jpg", store: store3 },
  { title: "Yoga Class", description: "One free yoga session", points_required: 450, image_file: "yoga-class.jpg", store: store },
  { title: "Gift Basket", description: "Holiday gift basket", points_required: 850, image_file: "gift-basket.jpg", store: store4 }
]

rewards.each do |data|
  reward = Reward.create!(
    title: data[:title],
    description: data[:description],
    points_required: data[:points_required],
    store: data[:store]
  )

  reward.image.attach(
    io: File.open(Rails.root.join("db/seeds/images/#{data[:image_file]}")),
    filename: data[:image_file],
    content_type: "image/#{File.extname(data[:image_file]).delete('.')}"
  )
end
