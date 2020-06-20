# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_12_090602) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "scrapbooks", force: :cascade do |t|
    t.string "name"
    t.string "image1_file_name"
    t.string "image1_content_type"
    t.integer "image1_file_size"
    t.datetime "image1_updated_at"
    t.string "image2_file_name"
    t.string "image2_content_type"
    t.integer "image2_file_size"
    t.datetime "image2_updated_at"
    t.string "image3_file_name"
    t.string "image3_content_type"
    t.integer "image3_file_size"
    t.datetime "image3_updated_at"
    t.string "image4_file_name"
    t.string "image4_content_type"
    t.integer "image4_file_size"
    t.datetime "image4_updated_at"
    t.string "image5_file_name"
    t.string "image5_content_type"
    t.integer "image5_file_size"
    t.datetime "image5_updated_at"
    t.string "image6_file_name"
    t.string "image6_content_type"
    t.integer "image6_file_size"
    t.datetime "image6_updated_at"
    t.string "image7_file_name"
    t.string "image7_content_type"
    t.integer "image7_file_size"
    t.datetime "image7_updated_at"
    t.string "image8_file_name"
    t.string "image8_content_type"
    t.integer "image8_file_size"
    t.datetime "image8_updated_at"
    t.string "image9_file_name"
    t.string "image9_content_type"
    t.integer "image9_file_size"
    t.datetime "image9_updated_at"
    t.string "image10_file_name"
    t.string "image10_content_type"
    t.integer "image10_file_size"
    t.datetime "image10_updated_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
