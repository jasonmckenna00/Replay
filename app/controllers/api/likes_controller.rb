class Api::LikesController < ApplicationController

    def index 
        if params[:comment_id].present?
            @likes = Comment.find(params[:comment_id]).likes
        elsif params[:video_id].present?
            @likes = Video.find(params[:video_id]).likes
        end
    end

    def create
            @user = current_user
        if params[:comment_id].present?
            @comment = Comment.find(params[:comment_id])
            @comment.likes.new(user_id: @user.id, liked: params[:liked])
              if @comment.save!   
                @comment_like_counter = @comment.count_likes
                # @video = Video.find(@comment.video_id)
                # render `/api/videos/#{@comment.video_id}/comments/#{@comment.id}`
                # render `/api/videos/#{@comment.video_id}/`
                # render '/api/videos/show'
                render :show

            end
        elsif params[:video_id].present?
            @video = Video.find(:video_id)
            if @video.likes.build(user_id: @user.id)
                @video_like_counter = @video.count_likes
                render `/api/videos/#{@video.id}/`
            end
            
        end
    end

    # def destroy
    #     @like = current_user.likes.find(params[:id])
    #     if @like
    #         @like.destroy
    #         render :show
    #     end
    # end

    def removelike
        # debugger
        @like = current_user.find_likes(params)
        @like.destroy
        
    end


    private

    def like_params
        params.require(:like).permit(:liked, :video_id, :comment_id)
    end

    
end
