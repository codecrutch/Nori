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

const FeaturedCardItem = ({business}) => {
  return (
    <div className="card col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{ textAlign: 'center'}}>
      <Link to={`/business/${business.id}`}>
        <img className="card-img-top img-thumnail img-fluid" style={{ border: '0.5px solid gray'}} src={ business.business_image_url } alt={business.name}/>
        <div className="card-block">
          <h4 className="card-title">{business.name}</h4>
          <div className="card-text card-star-rating">
            <StarRatingComponent
              name="rate2"
              editing={false}
              starCount={5}
              value={business.overall_rating}
              renderStarIcon={(index, value) => {
                return <span className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />;
              }}
              renderStarIconHalf={() => <span className="fa fa-star-half-full" />}
            />
        </div>
        <p className="card-text business-price-categories card-rating"><span style={{color: 'green'}}>{ ratingConvert(business.price_rating) }</span> • { business.categories }</p>

        <p className="card-text card-address" style={{ fontSize: '15px'}}><small className="text-muted">{business.address}</small></p>
        </div>
      </Link>
    </div>
  );
}

export default FeaturedCardItem;
