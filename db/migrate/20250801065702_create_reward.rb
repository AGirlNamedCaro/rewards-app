class CreateReward < ActiveRecord::Migration[8.0]
  def change
    create_table :rewards do |t|
      t.string :title
      t.integer :points_required
      t.string :description
      t.references :store, null: false, foreign_key: true

      t.timestamps
    end
  end
end
