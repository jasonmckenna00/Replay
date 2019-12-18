class Api::VideosController < ApplicationController

    def show
        # debugger
        @video = Video.includes(:user).find(params[:id])
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
        if @video.save
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def edit
        @video = current_user.videos.find(params[:id])
    end

    def update
        @video = current_user.posted_videos.find_by(id: params[:id])

        # debugger
        if @video.update(video_params)
            render :show
        elsif @video == nil
            render json: ["You cannot edit a video you didn't post"], status: 422
            return
            # debugger
        else
            render json: @video.errors.full_messages
        end
    end

    def destroy
        # debugger
        @video = current_user.posted_videos.find_by(id: params[:id])
        
        if @video
            @video.destroy
            render :show
        else
            debugger
            render json: ["You cannot delete a video you didn't post"], status: 422
            return
        end
        
    end



    private
    def video_params
        params.require(:video).permit(:id, :title, :description, :user_id, :thumbnail_url, :video_url)
    end
end
