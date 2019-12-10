class ChangeApiUsersToUsers < ActiveRecord::Migration[5.2]
  def change
    rename_table :api_users, :users
  end
end
