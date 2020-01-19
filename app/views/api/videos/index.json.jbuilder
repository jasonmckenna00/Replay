json.set! 'videos' do 
  @videos.each do |video|
    json.set! video.id do
      json.extract! video, :id, :title, :user_id
      json.thumbnailUrl url_for(video.thumbnail_url)
      json.views video.views
      json.created_at video.created_at.to_s

    end
  end
end

json.set! 'users' do 
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :email, :first_name, :last_name
    end
  end
end
