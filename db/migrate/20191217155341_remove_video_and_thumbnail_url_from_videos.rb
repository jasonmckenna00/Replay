class RemoveVideoAndThumbnailUrlFromVideos < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :video_url
    remove_column :videos, :thumbnail_url
  end
end
