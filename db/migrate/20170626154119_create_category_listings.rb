class CreateCategoryListings < ActiveRecord::Migration
  def change
    create_table :category_listings do |t|
      t.references :business, index: true, foreign_key: true
      t.references :category, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
