class Cake < ApplicationRecord
  has_many :cake_flavors
  belongs_to :user
end
