class Video < ApplicationRecord
    validates :title, :description, presence: true
    validate :ensure_video
    validate :ensure_thumbnail

    has_one_attached :video_url
    has_one_attached :thumbnail_url
    belongs_to :user
    has_many :comments
    has_many :likes, :as => :likeable


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
end

