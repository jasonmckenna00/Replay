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
            # @comment.likes.new(user_id: @user.id, liked: params[:liked])
            @like = Like.new({user_id: @user.id, liked: params[:liked], 
                            likeable_id: params[:comment_id], likeable_type: "Comment"})
            if @like.save!
                render :comment
            end

        elsif params[:video_id].present?
            @video = Video.find(params[:video_id])
            # @video.likes.build(user_id: @user.id, liked: params[:liked])
            @like = Like.new({user_id: @user.id, liked: params[:liked], 
                            likeable_id: params[:video_id], likeable_type: "Video"})

            if @like.save!
                render :video
            end
            
        end
    end

    def removelike
        if params[:type] == "Comment"
            @like = current_user.find_like(params[:id],params[:type])
            @like.destroy
            @comment = Comment.find(@like.likeable_id)
            render :comment
        else

            @like = current_user.find_like(params[:id],params[:type])
            @like.destroy
            @video = Video.find(@like.likeable_id)
            render :video
        end
    end


    private

    def like_params
        params.require(:like).permit(:liked, :video_id, :comment_id)
    end

    
end
