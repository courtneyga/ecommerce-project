class PurchaseSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :product
end
