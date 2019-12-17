json.extract! @video, :id, :title, :description, :user_id
json.videoUrl url_for(@video.video_url)
