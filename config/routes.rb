Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :businesses, only: [:index, :create, :show, :update, :destroy]
    resources :reviews, only: [:index, :show, :create, :update, :destroy]
    resources :categories, only: [:index, :show]
    resource :session, only: [:create, :destroy]
  end
end
