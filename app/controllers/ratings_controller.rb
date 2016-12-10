class RatingsController < ApplicationController
  def index
    respond_to do |format|
      format.json do
        render json: {}, status: :ok
      end
    end
  end

  def 
end
