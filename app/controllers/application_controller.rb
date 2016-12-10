class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_user
    User.find(user_id)
  end

  def user_id
    1
  end
end
