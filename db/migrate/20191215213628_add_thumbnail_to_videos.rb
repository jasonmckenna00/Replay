class AddThumbnailToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :thumbnail_url, :string, null: false
  end
end
