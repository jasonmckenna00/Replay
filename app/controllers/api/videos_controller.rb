class Api::VideosController < ApplicationController

    def show
        @video = Video.find_by(id: params[:id])
        render :show
    end

    def index
        # debugger
        @videos = Video.all
        render :index
    end

    def create
        @video = Video.new(video_params)
        @video.user_id = current_user.id
        # debugger
        # https://images2.minutemediacdn.com/image/upload/c_crop,h_972,w_1726,x_0,y_432/f_auto,q_auto,w_1100/v1575319984/shape/mentalfloss/50139-gettyimages-507587782.jpg
        
        
        if @video.save
            render :show
        else
            # debugger
            render json: @video.errors.full_messages, status: 422
        end
    end

    def edit
        @video = current_user.videos.find(params[:id])
    end

    def update
        @video = current_user.videos.find(params[:id])
        if @video.update(video_params)
            render :show
        else
            render json: @video.errors.full_messages
        end
    end

    def destroy
        @video = current_user.posted_videos.find(params[:id])
        @video.destroy
    end



    private
    def video_params
        params.require(:video).permit(:title, :description, :user_id, :thumbnail_url)
    end
end
