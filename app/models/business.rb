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
end
