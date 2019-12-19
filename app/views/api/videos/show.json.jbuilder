
json.set! 'video' do 
    json.extract! @video, :id, :title, :description, :user_id
    json.videoUrl url_for(@video.video_url)
    json.thumbnailUrl url_for(@video.thumbnail_url)
end

json.set! 'user' do 
       json.extract! @video.user, :id, :email, :first_name, :last_name
end


json.set! 'comments' do 

    if @video.comments 
        @video.comments.map do |comment|
            json.set! comment.id do
                json.extract! comment, :id, :body, :user_id
            end
        end
    
    end

end

