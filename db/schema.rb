# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20170630014611) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "businesses", force: :cascade do |t|
    t.string   "name",                                    null: false
    t.string   "address",                                 null: false
    t.integer  "price_rating",                default: 0, null: false
    t.string   "website_url",                             null: false
    t.float    "lat",                                     null: false
    t.float    "lng",                                     null: false
    t.datetime "created_at",                              null: false
    t.datetime "updated_at",                              null: false
    t.string   "hours",                                   null: false
    t.string   "phone",                                   null: false
    t.string   "business_image_file_name"
    t.string   "business_image_content_type"
    t.integer  "business_image_file_size"
    t.datetime "business_image_updated_at"
  end

  add_index "businesses", ["name", "lat", "lng"], name: "index_businesses_on_name_and_lat_and_lng", unique: true, using: :btree

  create_table "categories", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "image_url",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "categories", ["name"], name: "index_categories_on_name", unique: true, using: :btree

  create_table "category_listings", force: :cascade do |t|
    t.integer  "business_id"
    t.integer  "category_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "category_listings", ["business_id"], name: "index_category_listings_on_business_id", using: :btree
  add_index "category_listings", ["category_id"], name: "index_category_listings_on_category_id", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "business_id"
    t.integer  "user_id"
    t.string   "title",       null: false
    t.text     "description", null: false
    t.integer  "rating",      null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "reviews", ["business_id"], name: "index_reviews_on_business_id", using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "uploaded_images", force: :cascade do |t|
    t.integer  "business_id"
    t.integer  "user_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
  end

  add_index "uploaded_images", ["business_id"], name: "index_uploaded_images_on_business_id", using: :btree
  add_index "uploaded_images", ["user_id"], name: "index_uploaded_images_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "session_token",   null: false
    t.string   "password_digest", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

  add_foreign_key "category_listings", "businesses"
  add_foreign_key "category_listings", "categories"
  add_foreign_key "reviews", "businesses"
  add_foreign_key "reviews", "users"
  add_foreign_key "uploaded_images", "businesses"
  add_foreign_key "uploaded_images", "users"
end
