ActiveAdmin.register VisitCode do
  permit_params :qr_seed

  index do
    selectable_column
    id_column
    column :qr_seed
    column 'QR Code' do |code|
      link_to download_qr_admin_visit_code_path(code, size: 1024) do
        image_tag download_qr_admin_visit_code_path(code, size: 128)
      end
    end
    column :created_at
    actions
  end

  filter :created_at

  form do |f|
    f.inputs "Admin Details" do
      f.input :qr_seed
    end
    f.actions
  end

  member_action :download_qr, method: :get do
    size = params[:size] || 512
    qrcode = RQRCode::QRCode.new(resource.qr_seed, level: :q)
    send_data qrcode.as_png(size: size.to_i),
              filename: resource.qr_seed,
              type: 'image/png',
              disposition: 'inline'
  end
end
