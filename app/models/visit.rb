class Visit < ApplicationRecord
  belongs_to :user
  belongs_to :visit_code
end
