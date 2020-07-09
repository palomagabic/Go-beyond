class AddNameToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :name, :string
    add_column :users, :lastname, :string
    add_column :users, :birthday, :date
    add_column :users, :country, :string
  end
end
