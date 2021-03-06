class Review < ActiveRecord::Base
  validates :title, :description, :rating, :business_id, :user_id, presence: true
  validates_uniqueness_of :business_id, scope: [:user_id], message: "You've already posted a review for this business."
  belongs_to :business
  belongs_to :user
end
