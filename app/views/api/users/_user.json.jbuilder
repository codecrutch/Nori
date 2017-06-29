json.extract! user, :id, :username
json.businesses_reviewed user.reviews.map(&:business_id)
