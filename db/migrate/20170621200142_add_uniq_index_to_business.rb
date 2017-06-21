class AddUniqIndexToBusiness < ActiveRecord::Migration
  def change
    add_index :businesses, [:name, :lat, :lng], unique: true
  end
end
