class AddUsersToBlogs < ActiveRecord::Migration[5.2]
  def change
    add_reference :blogs, :users, foreign_key: true
  end
end
