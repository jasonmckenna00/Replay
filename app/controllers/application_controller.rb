class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?
    def current_user
        return nil unless session[:session_token]
        User.find_by(session_token: session[:session_token])
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def login(user)
        current_user = user
        session[:session_token] = user.session_token
    end

    def logged_in?
        !!current_user
    end

    # def ensure_user_login
    #     if !logged_in?
    #         render 
    # end
end

