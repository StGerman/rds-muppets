class AddNameToVisitCode < ActiveRecord::Migration[5.0]
  def change
    add_column :visit_codes, :name, :string, default: ''
  end
end
