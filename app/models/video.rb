class Video < ApplicationRecord
    validates :title, :description, :thumbnail_url, presence: true
    # validates :video_url
    # validates :video_url, uniqueness: true

    belongs_to :user

    has_one_attached :video_url
    has_one_attached :thumbnail_url
end

