Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :businesses, only: [:index, :create, :show, :update, :destroy] do
      collection do
        get :geocode
      end
    end

    resources :reviews, only: [:index, :show, :create, :update, :destroy]
    resources :categories, only: [:index, :show]
    resources :uploaded_images, only: [:create]
    resource :session, only: [:create, :destroy]
  end
end
