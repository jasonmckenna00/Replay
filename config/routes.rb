Rails.application.routes.draw do
#   # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    # resources :videos, only: [:index, :show, :create, :edit, :update, :destroy] do
    #   resources :comments, only: [:create, :patch, :destroy]
    # end
    # resources :comments, only: [:show]
  end

  root "static_pages#root"
end
