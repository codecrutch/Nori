class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.references :business, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true
      t.string :title, null: false
      t.text :description, null: false
      t.integer :rating, null: false

      t.timestamps null: false
    end
  end
end
