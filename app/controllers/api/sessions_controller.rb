# class Api::SessionsController < ApplicationController

#     def create
#         @user = User.find_by_credentials(
#             params[:user][:username],
#             params[:user][:password]
#         )
#         if @user
#             login(@user)
#             render json: 'Good shit'
#         else 
#             render json: ['You done goofed =('], status: 401
#         end
#     end

#     def destory
#         if logout!
#             render json: {}
#           else
#             render json: ['No one is logged in'], status: 404
#           end
#         end
#     end


# end
