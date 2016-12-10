class Emoji < ApplicationRecord
  belongs_to :girl, counter_cache: true
  belongs_to :user, counter_cache: true

  validates :presence, :kind

  enum :kind, [:love, :hate, :crazy, :surprised]
end
