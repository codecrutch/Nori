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

require 'test_helper'

class CategoryListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
