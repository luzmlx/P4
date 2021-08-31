class Cake < ApplicationRecord
  has_and_belongs_to_many :cake_flavors, join_table: 'cakes_flavors', association_foreign_key: :flavor_id
  belongs_to :user
end
