class VisitCode < ApplicationRecord
  has_many :visits

  validates :qr_seed, presence: true, uniqueness: true

  before_validation :set_seed

  private

  def set_seed
    self.qr_seed = Digest::MD5.hexdigest(
      "#{created_at}#{rand(10..100_000)}"
    )
  end
end
