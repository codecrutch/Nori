# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  image_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Category < ActiveRecord::Base
  validates :name, :image_url,  presence: true
  validates_uniqueness_of :name

  has_many :category_listings
  has_many :businesses, through: :category_listings, source: :business
end
