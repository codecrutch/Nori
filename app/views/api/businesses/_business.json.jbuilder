json.extract! business, :id, :name, :address, :hours, :price_rating, :website_url, :lat, :lng, :phone, :review_count, :categories
json.business_image_url asset_path(business.business_image)
