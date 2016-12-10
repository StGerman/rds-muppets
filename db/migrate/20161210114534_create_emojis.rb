class CreateEmojis < ActiveRecord::Migration[5.0]
  def change
    create_table :emojis do |t|
      t.integer :girl_id, allow_nil: false
      t.integer :user_id, allow_nil: false
      t.integer :kind

      t.timestamps
    end
  end
end
