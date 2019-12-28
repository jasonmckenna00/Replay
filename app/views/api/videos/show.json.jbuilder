
json.set! 'video' do 
    json.extract! @video, :id, :title, :description, :user_id
    json.videoUrl url_for(@video.video_url)
    json.thumbnailUrl url_for(@video.thumbnail_url)
    json.likes @video_like_counter
end



json.set! 'user' do 
       json.extract! @video.user, :id, :email, :first_name, :last_name
end


json.comments do 
    # json.set! :name, 'hello'
    @video.comments.each do |comment|
        json.set! comment.id do
            # debugger
            json.extract! comment, :id, :body, :user_id
            json.likes comment.count_likes
        end
    end


end





