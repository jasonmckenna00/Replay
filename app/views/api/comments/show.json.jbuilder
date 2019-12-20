json.set! @comment.id do 
    json.extract! @comment, :id, :body, :user_id
end
