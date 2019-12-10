class AddEmailToApiUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :api_users, :email, :string, null: false
  end
end
