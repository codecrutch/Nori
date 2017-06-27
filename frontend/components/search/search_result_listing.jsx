import React from 'react';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';


const ratingConvert = (rating) => {
  let priceString = '';
  for (let i = 0; i < (parseInt(rating) + 1); i++) {
    priceString = priceString.concat('$');
  };
  return priceString;
};

const SearchResultListing = ({business}) => {
  return (
    <div className="business-item row align-items-end">
    <Link to={`/business/${business.id}`}>
      <section className="media col-xs-10 col-md-7">
        <div className="media-left">
            <img className="business-item-photo media-object" src={ business.business_img_url }/>
        </div>
        <div className="media-body">
          <p className="business-name">{ business.name }</p>
          <div className="rating-reviews">
            <StarRatingComponent
              name="rate2"
              editing={false}
              starCount={5}
              value={3.5}
              renderStarIcon={(index, value) => {
                return <span className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />;
              }}
              renderStarIconHalf={() => <span className="fa fa-star-half-full" />}
            />
            <span className="business-review-count">{ business.review_count } reviews</span>
          </div>
          <p className = "business-price-categories"><span style={{color: 'green'}}>{ ratingConvert(business.price_rating) }</span> • { business.categories }</p>

        </div>
      <div className="business-item-contact col-xs-3">
        <p>{ business.address }</p>
        <p>{ business.city_params }</p>
        <p>{ business.phone }</p>
      </div>
      </section>
      </Link>
    </div>
  );
};

export default SearchResultListing;
