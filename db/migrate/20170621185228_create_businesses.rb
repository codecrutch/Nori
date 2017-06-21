class CreateBusinesses < ActiveRecord::Migration
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.integer :price_rating, null: false, default: 0
      t.string :website_url, null: false
      t.string :business_img_url, null: false
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps null: false
    end
  end
end
