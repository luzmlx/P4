# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
CakeFlavor.destroy_all
Cake.destroy_all
User.destroy_all

@admin = User.create!(first_name: 'Luz', last_name: 'Lopez', email: 'luzfinals24@gmail.com', password: '123456')

puts "#{User.count} User created"

Cake.create!(name: 'Chocolate Cake', description: 'Triple Layered Dark Chocolate Cake with Matcha Mousse and Frosting.
Topped with Strawberries', price: 20, user: @admin)

puts "#{Cake.count} Cake created"

CakeFlavor.create!(name: 'sweet')
CakeFlavor.create!(name: 'fruity')
CakeFlavor.create!(name: 'savory')

puts "#{CakeFlavor.count} flavors created"



