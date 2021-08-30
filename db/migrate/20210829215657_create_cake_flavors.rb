class CreateCakeFlavors < ActiveRecord::Migration[6.1]
  def change
    create_table :cake_flavors do |t|
      t.string :name

      t.timestamps
    end
  end
end
