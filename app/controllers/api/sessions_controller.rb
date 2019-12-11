class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login(@user)
            render 'api/users/show';
        else 
            # debugger
            render json: ["Couldn't find your google account"], status: 401
        end
    end

    def destroy
        # debugger
        logout
        render json: {message: 'Logout successful'}
    end


end
