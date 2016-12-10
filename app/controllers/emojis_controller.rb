class EmojisController < ApplicationController
  respond_to :json

  def new
    respond_with girl
  end

  def create
    girl.emojis.create!(user: current_user, kind: kind)

    respond_to do |format|
      format.json { head :ok }
    end
  end

  protected

  def kind
    :love
  end

  def girl
    @girl ||= Girl.find_by(slug: params[:girl_id])
  end
end
