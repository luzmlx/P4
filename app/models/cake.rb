class Cake < ApplicationRecord
  has_and_belongs_to_many :cake_flavors
  belongs_to :user
end
