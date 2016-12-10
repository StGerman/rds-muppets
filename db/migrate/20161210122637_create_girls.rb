class CreateGirls < ActiveRecord::Migration[5.0]
  def change
    create_table :girls do |t|
      t.string :slug
      t.string :nickname
      t.string :photo_url

      t.timestamps
    end
  end
end
