class VisitsController < ApplicationController
  def create
    visit = Visit.new(user: current_user, visit_code: visit_code)
    if visit.save
      render json: visit.as_json, status: :created
    else
      render json: visit.errors.as_json, status: :error
    end
  end

  private

  def visit_params
    params.require(:visit).permit(:visit_code)
  end

  def visit_code
    VisitCode.find_by(qr_seed: visit_params[:visit_code])
  end
end
