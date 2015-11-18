class SessionsController < ApplicationController
  def create
    user = User.from_omniauth(auth_parameters)
    session[:user_id] = user.id
    redirect_to choose_path
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url
  end


  def auth_parameters
    auth = ActionController::Parameters.new(request.env["omniauth.auth"])
    auth.permit!
  end
end
