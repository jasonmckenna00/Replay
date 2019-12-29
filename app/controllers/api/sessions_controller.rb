class Api::SessionsController < ApplicationController

    def email 
        @user = User.find_by_email(params[:email])
        if @user

            render 'api/users/show'
        else
            render json: ["Couldn't find your replay account"], status: 401
        end

    end

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login(@user)
            render 'api/users/show';
        else 

            render json: ["Invalid Password"], status: 401
        end
    end

    def destroy
        logout
        render json: {message: 'Logout successful'}
    end


end
