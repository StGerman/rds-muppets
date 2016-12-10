class CreateVisitCodes < ActiveRecord::Migration[5.0]
  def change
    create_table :visit_codes do |t|
      t.string :qr_seed
      t.timestamps
    end
  end
end
