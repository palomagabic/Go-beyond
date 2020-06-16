class AddAttachmentImageToProducts < ActiveRecord::Migration[5.2]
  def self.up
    change_table :scrapbooks do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :scrapbooks, :image
  end
end
