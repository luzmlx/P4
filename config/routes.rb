Rails.application.routes.draw do
  resources :cake_flavors
  resources :cakes
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  get '/cakes/:cake_id/cake_flavors/:id', to: 'cake_flavors#add_to_cake_flavors'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
