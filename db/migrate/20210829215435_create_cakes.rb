class CreateCakes < ActiveRecord::Migration[6.1]
  def change
    create_table :cakes do |t|
      t.string :name
      t.references :user, null: false, foreign_key: true
      t.integer :price
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end
