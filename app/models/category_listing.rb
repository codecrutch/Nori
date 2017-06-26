# == Schema Information
#
# Table name: category_listings
#
#  id          :integer          not null, primary key
#  business_id :integer
#  category_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class CategoryListing < ActiveRecord::Base
  validates :business_id, :category_id, presence: true
  validates_uniqueness_of :business_id, scope: :category_id

  belongs_to :business
  belongs_to :category
end
