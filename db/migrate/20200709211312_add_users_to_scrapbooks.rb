class AddUsersToScrapbooks < ActiveRecord::Migration[5.2]
  def change
    add_reference :scrapbooks, :users, foreign_key: true
  end
end
