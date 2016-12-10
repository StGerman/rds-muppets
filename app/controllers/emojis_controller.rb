class EmojisController < ApplicationController
  def new
    respond_with girl
  end

  protected

  def girl
    @girl ||= Girl.find(1)
  end
end
