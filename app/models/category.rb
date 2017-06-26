class Category < ActiveRecord::Base
  validates :name, :image_url,  presence: true
  validates_uniqueness_of :name

  has_many :category_listings
  has_many :businesses, through: :category_listings, source: :business
end
