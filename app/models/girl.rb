class Girl < ApplicationRecord
  validates :nickname, presence: true
  validates :slug, presence: true, uniqueness: true

  before_validation :set_slug

  has_many :emojis

  def to_s
    nickname
  end

  private

  def set_slug
    self.slug ||= Digest::MD5.hexdigest("#{nickname}#{rand(10..100_000)}")[0..6]
  end
end
