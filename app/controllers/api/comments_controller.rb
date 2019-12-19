class Api::CommentsController < ApplicationController
    def show
        @comment = Comment.find(params[:id])
        render :show
    end
    def index 
        video = Video.find(params[:video_id])
        @comments = video.comments
        render :index
    end

    def create 
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        if @comment.save
            @video = Video.find(@comment.video_id)
            @user = current_user
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update

    end

    def destroy

    end

    private 
    def comment_params
        params.require(:comment).permit(:body, :user_id, :video_id)
    end
end
