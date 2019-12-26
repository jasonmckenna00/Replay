class Api::LikesController < ApplicationController

    def index 

    end

    def create

        
        @like.user_id = current_user.id
        if params[:comment_id]
            @comment = Comment.find(:comment_id)
        elsif params[:video_id]
            @video = Video.find(:video_id)
        end

        # if @like.save
        #     render json:  

        # end

    end

    def destroy

    end

    def like_params
        params.require(:like).permit(:liked, :video_id, :comment_id)
    end
end
