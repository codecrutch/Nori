User.create(
  username: "Guest",
  password: "password"
)

Category.create( name: "Sushi", image_url: "http://beaverstail.com.au/images/tunaSushi.svg")
Category.create( name: "Ramen", image_url: "https://d30y9cdsu7xlg0.cloudfront.net/png/114571-200.png")
Category.create( name: "Breakfast", image_url: "category_breakfast.svg")
Category.create( name: "Lunch", image_url: "category_lunch.svg")
Category.create( name: "Dinner", image_url: "category_dinner.svg")
Category.create( name: "Chinese", image_url: "category_chinese.svg")
Category.create( name: "Japanese", image_url: "category_japanese.svg")
Category.create( name: "Vietnamese", image_url: "category_vietnamese.svg")

Business.create(
  name: "Johny's Luncheonette",
  address: "124 W 25th St, New York, NY 10001",
  price_rating: 1,
  phone: "212-243-6230",
  hours: "Mon: 6am-10pm Tue: 6am-10pm Wed: 6am-10pm Thu: 6am-10pm Fri: 6am-10pm Sat: 6am-10pm Sun: 6am-10pm",
  website_url: "http://places.singleplatform.com/johnys/menu?ref=google",
  business_img_url: "http://www.mightysweet.com/mesohungry/wp-content/uploads/2013/03/04-Johnys-Grill-Luncheonette.jpg",
  lat: 40.744464,
  lng: -73.993063
)

CategoryListing.create(business_id: 1, category_id: 4)

Business.create(
  name: "Latin Beet Kitchen",
  address: "43 W 24th St, New York, NY 10010",
  price_rating: 3,
  phone: "917-993-7323",
  hours: "Mon: 6am-10pm Tue: 6am-10pm Wed: 6am-10pm Thu: 6am-10pm Fri: 6am-10pm Sat: 6am-10pm Sun: 6am-10pm",
  website_url: "http://places.singleplatform.com/latin-beet-kitchen-0/menu?ref=google",
  business_img_url: "https://d17zfk1skw2aas.cloudfront.net/wp/wp-content/uploads/2016/11/22213523/Raymi-Latin-Beet-12.jpg",
  lat: 40.743381,
  lng: -73.99129
)

CategoryListing.create(business_id: 2, category_id: 4)
CategoryListing.create(business_id: 2, category_id: 5)



Business.create(
  name: "Ajisen Ramen",
  address: "136 W 28th St, New York, NY 10001",
  price_rating: 2,
  phone: "646-638-0888",
  hours: "Mon: 6am-10pm Tue: 6am-10pm Wed: 6am-10pm Thu: 6am-10pm Fri: 6am-10pm Sat: 6am-10pm Sun: 6am-10pm",
  website_url: "www.ajisenusa.com",
  business_img_url: "https://s3-media3.fl.yelpcdn.com/bphoto/nY0QLfXdMCcPToIk7LY0uA/90s.jpg",
  lat: 40.7465264,
  lng: -73.9922244
)

CategoryListing.create(business_id: 3, category_id: 2)
CategoryListing.create(business_id: 3, category_id: 7)

Business.create(
  name: "Chop Shop II",
  address: "41 W 24th St New York, NY 10010",
  price_rating: 4,
  phone: "646-964-5672",
  hours: "Mon: 6am-10pm Tue: 6am-10pm Wed: 6am-10pm Thu: 6am-10pm Fri: 6am-10pm Sat: 6am-10pm Sun: 6am-10pm",
  website_url: "chop-shop.co",
  business_img_url: "https://s3-media4.fl.yelpcdn.com/bphoto/dmC7CaH6dO0EWaLuaJ36eA/o.jpg",
  lat: 40.7433325,
  lng: -73.9911554
)

CategoryListing.create(business_id: 4, category_id: 1)
CategoryListing.create(business_id: 4, category_id: 2)
CategoryListing.create(business_id: 4, category_id: 7)
CategoryListing.create(business_id: 4, category_id: 8)
