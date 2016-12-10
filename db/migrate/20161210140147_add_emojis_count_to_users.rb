class AddEmojisCountToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :emojis_count, :integer
    add_index :users, :emojis_count
  end
end
