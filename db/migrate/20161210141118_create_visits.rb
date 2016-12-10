class CreateVisits < ActiveRecord::Migration[5.0]
  def change
    create_table :visits do |t|
      t.belongs_to :user
      t.belongs_to :visit_code
      t.timestamps
    end
  end
end
