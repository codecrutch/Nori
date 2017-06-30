class UploadedImage < ActiveRecord::Base
  validates_presence_of :business_id, :user_id

  belongs_to :business
  belongs_to :user

  has_attached_file :photo,
      styles: { medium: "300x300" },
      default_url: "/assets/missing.png"
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/
end
