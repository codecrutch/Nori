# Database Schema

## users

| column name     | data type | details                   |
|-----------------|-----------|---------------------------|
| id              | integer   | not null, primary key     |
| username        | string    | not null, indexed, unique |
| password_digest | string    | not null                  |
| session_token   | string    | not null, indexed, unique |

## businesses

| column name      | data type | details               |
|------------------|-----------|-----------------------|
| id               | integer   | not null, primary key |
| name             | string    | not null              |
| address          | string    | not null              |
| city             | string    | not null              |
| state_province   | string    | not null              |
| country          | string    | not null              |
| price_rating     | integer   | not null              |
| website_url      | string    | not null              |
| business_img_url | string    | not null              |
| lat              | float     | not null              |
| long             | float     | not null              |

## reviews

| column name             | data type | details                                               |
|-------------------------|-----------|-------------------------------------------------------|
| id                      | integer   | not null, primary key                                 |
| business_id             | integer   | not null, foreign key (references business), indexed  |
| user_id                 | integer   | not null, foreign key (references user), indexed      |
| title                   | string    | not null                                              |
| description             | text      | not null                                              |
| overall_rating          | integer   | not null, inclusive [1, 2, 3, 4, 5]                   |
| atmosphere_rating       | integer   | not null, inclusive [1, 2, 3, 4, 5]                   |
| kid_friendly_rating     | integer   | not null, inclusive [1, 2, 3, 4, 5]                   |


## images

| column name | data type | details                                              |
|-------------|-----------|------------------------------------------------------|
| id          | integer   | not null, primary key                                |
| business_id | integer   | not null, foreign key (references business), indexed |
| user_id     | integer   | not null, foreign key (references user), indexed     |
| url         | string    | not null                                             |
| description | string    | not null                                             |

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, unique
image_url   | string    | not null

## category_listings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
category_id | integer   | not null, foreign key (references category), indexed
business_id| integer   | not null, foreign key (references business), indexed
