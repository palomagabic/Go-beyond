json.extract! blog, :id, :title, :ubication, :image, :content, :create, :created_at, :updated_at
json.url blog_url(blog, format: :json)
