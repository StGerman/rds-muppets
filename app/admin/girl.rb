ActiveAdmin.register Girl do
  permit_params :slug, :nickname, :photo_url

  index do
    selectable_column
    id_column
    column :slug
    column :nickname
    column :photo_url
    column 'Photo' do |girl|
      image_tag girl.photo_url, height: 150
    end
    column :created_at
    actions
  end

  filter :slug
  filter :nickname
  filter :created_at

  form do |f|
    f.inputs 'Girl Details' do
      f.input :nickname
      f.input :photo_url
    end
    f.actions
  end

end
