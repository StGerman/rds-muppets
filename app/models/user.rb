class User < ApplicationRecord
  has_many :emojis

  before_save do |u|
    u.nickname = Faker::Hipster.word
  end
end
