class ApplicationController < ActionController::Base
  def current_user
    User.find(user_id)
  end

  def user_id
    1
  end
end
