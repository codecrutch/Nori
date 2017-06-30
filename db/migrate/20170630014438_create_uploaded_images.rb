class CreateUploadedImages < ActiveRecord::Migration
  def change
    create_table :uploaded_images do |t|
      t.references :business, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
