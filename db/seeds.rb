User.create(
  username: "Guest",
  password: "password"
)

Category.create( name: "Sushi", image_url: "http://beaverstail.com.au/images/tunaSushi.svg")
Category.create( name: "Ramen", image_url: "https://d30y9cdsu7xlg0.cloudfront.net/png/114571-200.png")
Category.create( name: "Breakfast", image_url: "http://www.svgcuts.com/fsvgfotw/2012/svgcuts_2012_01_13.png")
Category.create( name: "Lunch", image_url: "https://www.svgimages.com/svg-image/s2/lunch-256x256.png")
Category.create( name: "Dinner", image_url: "http://lokaaledel.nl/wp-content/themes/lokaal-edel/assets/img/illustration-dinner.svg")
Category.create( name: "Chinese", image_url: "http://clipartist.net/Holidays/Chinese_New_Year/Snake/chinese_fast_food_chinabox_chinese_new_year.svg")
Category.create( name: "Japanese", image_url: "http://2.bp.blogspot.com/-mJvYFz_VYhI/UGSSXtVD3sI/AAAAAAAAAGk/5u_O7EH5H90/s1600/12456948171194366574johnny_automatic_bowl_of_rice.svg.hi.png")
Category.create( name: "Vietnamese", image_url: "http://static.squarespace.com/static/52212fbbe4b0b5449b4b9c8e/t/5222b849e4b0bf0a6aa7b290/1406199349989/?format=400w")

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
