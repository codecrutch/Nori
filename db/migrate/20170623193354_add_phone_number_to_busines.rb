class AddPhoneNumberToBusines < ActiveRecord::Migration
  def change
    add_column :businesses, :phone, :string, null: false
  end
end
