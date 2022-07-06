Rails.application.routes.draw do
  
  resources :purchases, only: %i[index show create]
  resources :products, only: %i[index show]
  resources :users, only: %i[index create destroy]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
