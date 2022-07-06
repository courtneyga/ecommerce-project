Rails.application.routes.draw do
  resources :purchases, only: %i[index show create]
  resources :products, only: %i[index show]
  resources :users, only: %i[index show create]
  
  # login page
  post "/login", to: "sessions#create"

  # stay logged in
  get "/me", to: "users#show"

  # logout page
  delete "/logout", to: "sessions#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
