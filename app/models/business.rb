# == Schema Information
#
# Table name: businesses
#
#  id               :integer          not null, primary key
#  name             :string           not null
#  address          :string           not null
#  price_rating     :integer          default(0), not null
#  website_url      :string           not null
#  business_img_url :string           not null
#  lat              :float            not null
#  lng              :float            not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Business < ActiveRecord::Base

  validates :name, :address, :hours, :price_rating, :website_url, :business_img_url,
           :lat, :lng, presence: true
  validates_uniqueness_of :name, scope: [:lat, :lng]
  enum price_rating: %w($ $$ $$$ $$$$ $$$$$)
  validates :price_rating, inclusion: { in: Business.price_ratings.keys }


  def categories
    "sushi, unagi, ramen"
  end

  def phone
    "123-456-7890"
  end

  def review_count
    rand(100)
  end
end
