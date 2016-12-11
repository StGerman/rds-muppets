ActiveAdmin.register Visit do
  index do
    selectable_column
    id_column
    column 'User' do |visit|
      visit.user.nickname
    end
    column 'Visit Code' do |visit|
      visit.visit_code.name
    end
    column :created_at
    actions
  end

  filter :created_at
end
