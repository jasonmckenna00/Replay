class Api::VideosController < ApplicationController

    def show
        @video = Video.includes(:user,{:comments => :likes},:likes, :thumbnail_url_attachment, :thumbnail_url_blob)
            .find(params[:id])
        @video.update(views: @video.views+1)
        # debugger
        render :show
    end

    def index
        @videos = Video.includes(:thumbnail_url_attachment, :thumbnail_url_blob)
        @users = User.all
        render :index
    end

    def create

        @video = Video.new(video_params)
        @video.user_id = current_user.id   
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

        if @video.update(video_params)
            render :show
        elsif @video == nil
            render json: ["You cannot edit a video you didn't post"], status: 422
            return

        else
            render json: @video.errors.full_messages
        end
    end

    def destroy
        @video = current_user.posted_videos.find_by(id: params[:id])
        
        if @video
            @video.destroy
            render :show
        else
            render json: ["You cannot delete a video you didn't post"], status: 422
            return
        end
        
    end

    def search
        @videos = Video.joins(:user).where('users.first_name LIKE ? OR videos.title LIKE ?', '%Demo%', '%Smash%')

    end
    private
    def video_params
        params.require(:video).permit(:id, :title, :description, :user_id, :thumbnail_url, :video_url)
    end
end
