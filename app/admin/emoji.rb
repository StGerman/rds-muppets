ActiveAdmin.register Emoji do
  index do
    selectable_column
    id_column
    column :user
    column :girl
  end
end
