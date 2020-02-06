
json.comment do 
    json.set! @comment.id do
        json.extract! @comment, :id, :body, :user_id, :created_at
        json.created_at @comment.created_at.to_s
        json.likes do 
            json.counter @comment.count_likes
            json.likers @comment.likers
        end
    end
end
