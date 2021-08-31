class CakeFlavor < ApplicationRecord
    has_and_belongs_to_many :cakes, join_table: 'cakes_flavors', foreign_key: :flavor_id
end
