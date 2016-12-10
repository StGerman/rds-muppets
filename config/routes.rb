Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :girls, only: :index, defaults: { format: :json } do
    resource :emoji, only: [:new, :create], defaults: { format: :json }
  end

  resources :visits, only: [:create], defaults: { format: :json }
  resource :rating, only: [:show], defaults: { format: :json }
end
