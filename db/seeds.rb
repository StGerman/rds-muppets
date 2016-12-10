# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
unless AdminUser.find_by(email: 'admin@striphack.com')
  AdminUser.create!(email: 'admin@striphack.com', password: '12345678', password_confirmation: '12345678')
end

5.times { User.create } if User.count < 5

girls = [
  { nickname: 'Alisa',    photo_url: 'https://goldengirls.ru/upload/iblock/f3d/alisa.jpg' },
  { nickname: 'Michelle', photo_url: 'https://goldengirls.ru/upload/iblock/4c6/gallery2.jpg' },
  { nickname: 'Andrea',   photo_url: 'https://goldengirls.ru/upload/iblock/217/gallery3.jpg' },
  { nickname: 'Susan',    photo_url: 'https://goldengirls.ru/upload/iblock/5ad/gallery4.jpg' },
  { nickname: 'Jessica',  photo_url: 'https://goldengirls.ru/upload/iblock/734/gallery5.jpg' }
]

Girl.create(girls)

50.times do
  kind = Emoji.kinds.keys.map(&:to_sym).sample
  Emoji.create(
    user: User.all.to_a.sample,
    girl: Girl.all.to_a.sample,
    kind: kind
  )
end if Emoji.count < 50

5.times { VisitCode.create } if VisitCode.count < 5

50.times do
  date = rand(30).days.ago
  Visit.create(
    user: User.all.to_a.sample,
    visit_code: VisitCode.all.to_a.sample,
    created_at: date,
    updated_at: date,
  )
end if Visit.count < 50
