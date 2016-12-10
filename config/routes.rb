Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope 'girl/:slug' do
    resources :emojis, only: [:new, :create]
  end

  resources :visits, only: [:create], format: [:json]
end
