class Emoji < ApplicationRecord
  belongs_to :girl, counter_cache: true
  belongs_to :user, counter_cache: true

  validates :kind, presence: true
  validates :girl, presence: true
  validates :user, presence: true

  enum kind: [:love, :hate, :crazy, :surprised]
end
