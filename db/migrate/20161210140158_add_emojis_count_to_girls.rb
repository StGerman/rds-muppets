class AddEmojisCountToGirls < ActiveRecord::Migration[5.0]
  def change
    add_column :girls, :emojis_count, :integer
    add_index :girls, :emojis_count
  end
end
