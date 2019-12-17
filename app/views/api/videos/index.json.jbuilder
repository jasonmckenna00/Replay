
@videos.each do |video|
  json.set! video.id do
    json.extract! video, :id, :title, :user_id
    json.thumbnailUrl url_for(video.thumbnail_url)
  end
end
