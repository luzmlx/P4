Rails.application.routes.draw do
  resources :cake_flavors, only: :index
  resources :cakes
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
  get '/cakes/:cake_id/cake_flavors/:id', to: 'cake_flavors#add_to_cake'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
