class RemoveBusinessImageUrlFromBusiness < ActiveRecord::Migration
  def up
    remove_column :businesses, :business_img_url
  end

  def down
    add_column :businesses, :business_img_url, :string
  end
end
