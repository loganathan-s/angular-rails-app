class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(users_params)
    if @user.save
      flash[:success] = "Account registered!"
      render json: {data: "Account registered!"}
    else
      render json: @user.errors
      render :new
    end
  end

  private

  def users_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
