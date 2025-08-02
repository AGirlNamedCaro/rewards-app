class CreatePointTransaction < ActiveRecord::Migration[8.0]
  def change
    create_table :point_transactions do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :points
      t.references :redemption, null: false, foreign_key: true

      t.timestamps
    end
  end
end
