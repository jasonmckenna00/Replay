class Api::UsersController < ApplicationController

  def show
    # debugger
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
    render 'api/users/index'
  end
    
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
    
end
