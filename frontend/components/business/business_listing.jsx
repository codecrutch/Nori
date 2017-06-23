import React from 'react';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';


const BusinessListing = ({business}) => {
  return (
    <div className="business-item row align-items-end">
      <section className="media col-xs-10 col-md-7">
        <div className="media-left">
          <Link to={`/businesses/${business.id}`}>
            <img className="business-item-photo media-object" src={ business.business_img_url }/>
          </Link>
        </div>
        <div className="media-body">
          <Link className="link" to={`/businesses/${business.id}`}><p className="business-name">{ business.name }</p></Link>
          <div className="rating-reviews">
            <StarRatingComponent
              name="rate2"
              editing={false}
              starCount={5}
              value={2.5}
              renderStarIcon={(index, value) => {
                return <span className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />;
              }}
              renderStarIconHalf={() => <span className="fa fa-star-half-full" />}
            />
            <span className="business-review-count">{ business.review_count } reviews</span>
          </div>
          <p className = "business-price-categories">{ business.price_rating } • { business.categories }</p>
        </div>
      </section>
      <div className="business-item-contact col-md-auto">
        <p>{ business.address }</p>
        <p>{ business.city_params }</p>
        <p>{ business.phone }</p>
      </div>
    </div>
  );
};

export default BusinessListing;
