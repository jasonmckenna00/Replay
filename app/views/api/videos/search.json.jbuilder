
@videos.each do |video|
    json.set! video.id do
      json.extract! video, :id, :title, :user_id
      json.thumbnailUrl url_for(video.thumbnail_url)
      json.views video.views
      json.created_at video.created_at.to_s

    end
  end
