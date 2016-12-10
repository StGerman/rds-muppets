class EmojisController < ApplicationController
  def new
    respond_to do |format|
      format.json { render json: girl.to_json }
    end
  end

  def create
    girl.emojis.create!(user: current_user, kind: kind)

    respond_to do |format|
      format.json { head :ok }
    end
  end

  protected

  def kind
    params[:emoji_kind] || :love
  end

  def girl
    @girl ||= Girl.order("RANDOM()").first
  end
end
