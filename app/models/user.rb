class User < ApplicationRecord
  has_many :emojis

  before_save do |u|
    u.nickname = Faker::Hipster.word
  end

  def to_s
    nickname
  end
end
