json.video do 
    json.set! @video.id do
        json.extract! @video, :id, :body, :user_id
        json.likes do 
            json.upvotes @video.count_likes.upvoted
            json.downvotes @video.count_likes.downvoted
            json.likers @video.likers
        end
    end
end
