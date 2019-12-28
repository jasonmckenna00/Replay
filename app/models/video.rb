class Video < ApplicationRecord
    validates :title, :description, presence: true
    validate :ensure_video
    validate :ensure_thumbnail

    has_one_attached :video_url
    has_one_attached :thumbnail_url
    belongs_to :user
    has_many :comments
    has_many :likes, as: :likeable, dependent: :destroy


    def ensure_video
        unless self.video_url.attached?
            errors[:video] << 'Must choose and .mp4 formatted video'
        end
    end

    def ensure_thumbnail
        
        unless self.thumbnail_url.attached?
            errors[:videos] << 'Must attach a thumbnail'
        end

    end

    def count_likes
        my_hash = {upvoted: 0, downvoted: 0}
        self.likes.each do |like|
            if like.liked
                my_hash[:upvoted] += 1
            else
                my_hash[:downvoted] -= 1
            end
        end

        return my_hash
    end 
end

