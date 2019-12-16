
@videos.each do |video|

  json.set! video.id do
    json.extract! video, :id, :title, :user_id
  end
end
