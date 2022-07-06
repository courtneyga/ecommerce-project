class Purchase < ApplicationRecord
  belongs_to :user
  belongs_to :product

  # validates :user_id, uniqueness: { scope: %i[product_id] }
end
