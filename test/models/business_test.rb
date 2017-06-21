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

require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
