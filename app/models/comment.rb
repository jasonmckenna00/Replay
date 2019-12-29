class Comment < ApplicationRecord
    validates :body, :user_id, :video_id,  presence: true

    belongs_to :user
    belongs_to :video, 
        class_name: 'Video', 
        foreign_key: :video_id, 
        primary_key: :id

    has_many :likes, as: :likeable, dependent: :destroy

    # def count_likes
    #     my_hash = {upvoted: 0, downvoted: 0}
    #     self.likes.each do |like|
    #         if like.liked
    #             my_hash[:upvoted] += 1
    #         else
    #             my_hash[:downvoted] += 1
    #         end
    #     end

    #     return my_hash
    # end 

    def count_likes
        count = 0
        self.likes.each do |like|
            if like.liked
                count += 1
            else
                count -= 1
            end
        end
        count
    end

    def likers
        like_hash = {}

        self.likes.each do |like| 
            like_hash[like.user_id] = {user_id: like.user_id, liked: like.liked}
        end
        return like_hash
    end 
    
end

