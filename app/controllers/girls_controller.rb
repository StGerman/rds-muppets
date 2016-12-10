class GirlsController < ApplicationController
  respond_to :json

  def index
    respond_with Girl.all
  end
end
