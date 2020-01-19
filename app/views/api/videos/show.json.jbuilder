
json.set! 'video' do 
    json.extract! @video, :id, :title, :description, :user_id
    json.videoUrl url_for(@video.video_url)
    json.thumbnailUrl url_for(@video.thumbnail_url)
    json.views @video.views
    json.created_at @video.created_at.to_s
    # debugger
    json.likes do 
        json.upvotes @video.count_likes[0]
        json.downvotes @video.count_likes[1]
        json.likers @video.likers
    end
end



json.set! 'user' do 
       json.extract! @video.user, :id, :email, :first_name, :last_name
    #    json.likes @video.user.liked_content
end


# json.comments do 
#     @video.comments.each do |comment|
#         json.set! comment.id do
#             json.extract! comment, :id, :body, :user_id
#             json.likes do 
#                 json.counter comment.count_likes
#                 json.likers comment.likers
#             end
#         end
#     end
# end

json.comments do 
    @video.comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :body, :user_id
            json.likes do 
                json.counter comment.count_likes
                json.likers comment.likers
            end
        end
    end
end





