class AddAttachmentBusinessImageToBusinesses < ActiveRecord::Migration
  def self.up
    change_table :businesses do |t|
      t.attachment :business_image
    end
  end

  def self.down
    remove_attachment :businesses, :business_image
  end
end
