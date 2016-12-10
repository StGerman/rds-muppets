class Visit < ApplicationRecord
  belongs_to :user
  belongs_to :visit_code

  validates :user, presence: true
  validates :visit_code, presence: true
end
