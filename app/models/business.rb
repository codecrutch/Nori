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
  include PgSearch
  pg_search_scope :search,
    against: [:name, :address, :price_rating],
    associated_against: {
      food_categories: [:name]
    },
    using: {
      tsearch: {
        prefix: true,
        dictionary: "english"
      }
    }

  validates :name, :address, :hours, :price_rating, :website_url,
    :lat, :lng, :phone, presence: true
  validates_uniqueness_of :name, scope: [:lat, :lng]
  enum price_rating: %w(0 1 2 3 4)
  validates :price_rating, inclusion: { in: Business.price_ratings.keys }

  has_many :category_listings, dependent: :destroy
  has_many :food_categories, through: :category_listings, source: :category
  has_many :reviews, dependent: :destroy
  has_many :uploaded_images, dependent: :destroy
  has_many :photos, through: :uploaded_images, source: :photo

  has_attached_file :business_image,
      styles: { medium: "300x300", thumb: "90x90" },
      default_url: "/assets/missing.png"
  validates_attachment_content_type :business_image, content_type: /\Aimage\/.*\Z/

  def review_count
    self.reviews.count
  end

  def overall_rating
    reviews = self.reviews;

    if reviews.empty?
      0
    else
      reviews.map(&:rating).reduce(:+) / reviews.count
    end
  end

  def categories
    food_categories.sample(3).map(&:name).join(', ')
  end
end
