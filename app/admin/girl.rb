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
    column 'QR Code' do |girl|
      link_to download_qr_admin_girl_path(girl, size: 1024) do
        image_tag download_qr_admin_girl_path(girl, size: 128)
      end
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

  member_action :download_qr, method: :get do
    size = params[:size] || 512
    qrcode = RQRCode::QRCode.new(resource.slug, level: :q)
    send_data qrcode.as_png(size: size.to_i),
              filename: resource.slug,
              type: 'image/png',
              disposition: 'inline'
  end
end
