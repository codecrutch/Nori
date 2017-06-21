class AddHoursToBusinesses < ActiveRecord::Migration
  def change
    add_column :businesses, :hours, :string, null: false
  end
end
