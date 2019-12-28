class Comment < ApplicationRecord
    validates :body, :user_id, :video_id,  presence: true

    belongs_to :user
    belongs_to :video, 
        class_name: 'Video', 
        foreign_key: :video_id, 
        primary_key: :id

    has_many :likes, as: :likeable, dependent: :destroy

    def count_likes
        my_hash = {upvoted: 0, downvoted: 0}
        self.likes.each do |like|
            if like.liked
                my_hash[:upvoted] += 1
            else
                my_hash[:downvoted] += 1
            end
        end

        return my_hash
    end 
    
end

