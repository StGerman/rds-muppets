class RatingsController < ApplicationController
  def index
    respond_to do |format|
      format.json { render json: ratings.as_json, status: :ok }
    end
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
