Rails.application.routes.draw do
  scope ':girl_slug' do
    resources :emojis, only: [:new, :create]
  end
end
