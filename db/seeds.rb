user = User.create(
  username: "Guest",
  password: "password"
)

Category.create( name: "Sushi", image_url: "https://s3.us-east-2.amazonaws.com/noriapp-prod/categories/sushi_category.svg")
Category.create( name: "Ramen", image_url: "https://s3.us-east-2.amazonaws.com/noriapp-prod/categories/ramen_category.png")
Category.create( name: "Breakfast", image_url: "https://s3.us-east-2.amazonaws.com/noriapp-prod/categories/breakfast_category.png")
Category.create( name: "Lunch", image_url: "https://s3.us-east-2.amazonaws.com/noriapp-prod/categories/lunch_category.png")
Category.create( name: "Dinner", image_url: "https://s3.us-east-2.amazonaws.com/noriapp-prod/categories/dinner_category.png")
Category.create( name: "Chinese", image_url: "https://s3.us-east-2.amazonaws.com/noriapp-prod/categories/chinese_category.svg")
Category.create( name: "Japanese", image_url: "https://s3.us-east-2.amazonaws.com/noriapp-prod/categories/japanese_category.png")
Category.create( name: "Vietnamese", image_url: "https://s3.us-east-2.amazonaws.com/noriapp-prod/categories/vietnamese_category.png")

sushi = Business.new(
  name: "Asuka Sushi",
  address: "300 W 23rd St, New York, NY 10011",
  price_rating: 3,
  phone: "212-727-0888",
  hours: "Mon: 6am-10pm| Tue: 6am-10pm| Wed: 6am-10pm| Thu: 6am-10pm| Fri: 6am-10pm| Sat: 6am-10pm| Sun: 6am-10pm|",
  website_url: "https://www.zomato.com/new-york-city/asuka-sushi-japanese-restaurant-chelsea-manhattan/menu?utm_source=Google&utm_medium=Local&utm_campaign=GoogleMenus",
  lat: 40.744464,
  lng: -73.993063
)
sushi.business_image = File.open("app/assets/images/asuka.jpg")
sushi.save

CategoryListing.create(business_id: sushi.id, category_id: 4)

sushi = Business.new(
  name: "Sushi Seki Chelsea",
  address: "43 W 24th St, New York, NY 10010",
  price_rating: 3,
  phone: "917-993-7323",
  hours: "Mon: 6am-10pm| Tue: 6am-10pm| Wed: 6am-10pm| Thu: 6am-10pm| Fri: 6am-10pm| Sat: 6am-10pm| Sun: 6am-10pm|",
  website_url: "http://places.singleplatform.com/latin-beet-kitchen-0/menu?ref=google",
  lat: 40.743381,
  lng: -73.99129
)
sushi.business_image = File.open("app/assets/images/sushi-seki.jpg")
sushi.save

CategoryListing.create(business_id: sushi.id, category_id: 4)
CategoryListing.create(business_id: sushi.id, category_id: 5)

sushi = Business.new(
  name: "Ajisen Ramen",
  address: "136 W 28th St, New York, NY 10001",
  price_rating: 2,
  phone: "646-638-0888",
  hours: "Mon: 6am-10pm| Tue: 6am-10pm| Wed: 6am-10pm| Thu: 6am-10pm| Fri: 6am-10pm| Sat: 6am-10pm| Sun: 6am-10pm|",
  website_url: "www.ajisenusa.com",
  lat: 40.7465264,
  lng: -73.9922244
)
sushi.business_image = File.open("app/assets/images/ajisen.jpg")
sushi.save
Review.create(business_id: 1, user_id: 1, title: "Mixed feelings", description: "Not bad.  Had a rude waiter. Fish was fresh", rating: 2)

CategoryListing.create(business_id: sushi.id, category_id: 2)
CategoryListing.create(business_id: sushi.id, category_id: 7)

sushi = Business.new(
  name: "Chop Shop II",
  address: "41 W 24th St New York, NY 10010",
  price_rating: 4,
  phone: "646-964-5672",
  hours: "Mon: 6am-10pm| Tue: 6am-10pm| Wed: 6am-10pm| Thu: 6am-10pm| Fri: 6am-10pm| Sat: 6am-10pm| Sun: 6am-10pm|",
  website_url: "chop-shop.co",
  lat: 40.7433325,
  lng: -73.9911554
)
sushi.business_image = File.open("app/assets/images/chopshop.jpg")
sushi.save

Review.create(business_id: sushi.id, user_id: user.id, title: "Awesome sushi", description: "A nice place to grab some zi", rating: 3)
CategoryListing.create(business_id: sushi.id, category_id: 1)
CategoryListing.create(business_id: sushi.id, category_id: 2)
CategoryListing.create(business_id: sushi.id, category_id: 7)
CategoryListing.create(business_id: sushi.id, category_id: 8)
