class Video < ApplicationRecord
    validates :title, :description, :video_url, presence: true
    # validates :video_url, uniqueness: true

    belongs_to :user
end

