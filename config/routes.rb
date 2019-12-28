Rails.application.routes.draw do
#   # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :index, :create]
    resource :session, only: [:create, :destroy] do
      member do
        get '/email' => 'sessions#email'
      end
    end
    resources :videos, only: [:index, :show, :create, :edit, :update, :destroy] do 
      resources :comments, only: [:create, :update, :destroy,:index] do 
        resources :likes, only: [:index, :create]
      end
      resources :likes, only: [:index, :create]
    end
    resource :like, only: [] do
      member do 
        delete '/removelike' => 'likes#removelike'
      end 
    end
  end

  root "static_pages#root"
end
