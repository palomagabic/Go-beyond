class CreateScrapbooks < ActiveRecord::Migration[5.2]
  def change
    create_table :scrapbooks do |t|
      t.string :name
      t.attachment :image1
      t.attachment :image2
      t.attachment :image3
      t.attachment :image4
      t.attachment :image5
      t.attachment :image6
      t.attachment :image7
      t.attachment :image8
      t.attachment :image9
      t.attachment :image10

      t.timestamps
    end
  end
end
