class CakeFlavor < ApplicationRecord
    has_and_belongs_to_many :cakes
end
