class AddAttachmentPhotoToUploadedImages < ActiveRecord::Migration
  def self.up
    change_table :uploaded_images do |t|
      t.attachment :photo
    end
  end

  def self.down
    remove_attachment :uploaded_images, :photo
  end
end
