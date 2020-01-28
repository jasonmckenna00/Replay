

    json.set! @comment.id do
        json.extract! @comment, :id, :body, :user_id, :created_at
        json.likes do 
            json.counter @comment.count_likes
            json.likers @comment.likers
        end
    end
