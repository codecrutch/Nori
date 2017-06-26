class CategoryListing < ActiveRecord::Base
  validates :business_id, :category_id, presence: true
  validates_uniqueness_of :business_id, scope: :category_id

  belongs_to :business
  belongs_to :category
end
