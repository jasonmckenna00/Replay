class Video < ApplicationRecord
    include Rails.application.routes.url_helpers
    validates :title, :description, presence: true
    validate :ensure_video
    validate :ensure_thumbnail
    # validate :ensure_format
    has_one_attached :video_url
    has_one_attached :thumbnail_url
    belongs_to :user
    has_many :comments
    has_many :likes, as: :likeable, dependent: :destroy


    def ensure_video
        # unless self.video_url.attached?
        #     errors[:video] << 'Must attach a video'
        # end
        if !self.video_url.attached?
            errors[:video] << 'Must attach a video'
        else
            if self.video_url.blob.byte_size > 10000000
                errors[:video]  << 'Video must be under 10 Mb'
            elsif !self.video_url.blob.content_type.include?('mp4')
                errors[:video]  << 'Video must be mp4 format'

            end
        end


    end


    def ensure_thumbnail
        
        unless self.thumbnail_url.attached?
        end
        
        
        if !self.thumbnail_url.attached?
            errors[:thumbnail] << 'Must attach a thumbnail'
        else
            content = self.thumbnail_url.content_type
            if !content.include?('png') || !content.include?('jpg')
                errors[:thumbnail] << 'Thumnail must be an image'
            end
        end
    end

    

    def count_likes
        upvotes = 0
        downvotes = 0
        self.likes.each do |like|
            if like.liked
                upvotes += 1
            else
                downvotes += 1
            end
        end
        return [upvotes, downvotes]
    end 

    def likers
        like_hash = {}

        self.likes.each do |like| 
            like_hash[like.user_id] = {user_id: like.user_id, liked: like.liked}
        end
        return like_hash
    end 
end

