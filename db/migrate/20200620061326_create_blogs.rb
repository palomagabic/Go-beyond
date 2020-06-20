class CreateBlogs < ActiveRecord::Migration[5.2]
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :ubication
      t.attachment :image
      t.text :content
      t.date :create

      t.timestamps
    end
  end
end
