Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
  # get '/cakes/:cake_id/cake_flavors/:id', to: 'cake_flavors#add_to_cake'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: :create
  resources :cake_flavors, only: :index
  resources :cakes
end
