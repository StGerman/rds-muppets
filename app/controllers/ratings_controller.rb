class RatingsController < ApplicationController
  respond_to :json

  def show
    respond_with ratings
  end

  private

  def ratings
    User.connection.execute(%(
      SELECT (
        SELECT COUNT(*)
        FROM emojis e
        WHERE e.user_id = u.id AND created_at > CURRENT_DATE
      ) AS emojis_today, u.id, u.nickname
      FROM users u
      ORDER BY emojis_today DESC
    )).to_a
  end
end
