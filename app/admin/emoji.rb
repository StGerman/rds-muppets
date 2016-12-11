ActiveAdmin.register Emoji do
  index do
    selectable_column
    id_column
    column :user
    column :kind
    column :girl
  end
end
