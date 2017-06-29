import React from 'react';
import { connect } from 'react-redux';
import { businessToArray } from '../../util/selectors';
import { fetchBusiness, fetchAllBusinesses } from '../../actions/business_actions';
import MapView from '../maps/single_business_map';
import ImageView from './image_view.jsx';
import Reviews from '../reviews/review_container';
import StarRatingComponent from 'react-star-rating-component';

const mapStateToProps = (state, ownProps) => {
  return({
    business: state.businesses[ownProps.match.params.businessId]
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchBusiness: (id) => dispatch(fetchBusiness(id)),
    fetchAllBusinesses: () => dispatch(fetchAllBusinesses())
  });
};

class BusinessPage extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  componentWillReceiveProps(newProps){
    let oldBusinessId = this.props.match.params.businessId;
    let newBusinessId = newProps.match.params.businessId
    if (oldBusinessId !== newBusinessId){
      this.props.fetchBusiness(newBusinessId);
    }
  }

  componentWillUnmount() {
    this.props.fetchAllBusinesses();
  }

  displayBusiness(){
    let business = this.props.business;
    if (business) {
      return (
        <section>
        <div className="business-page-row">
          <div>
            <h1>{business.name}</h1>
            <span>
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
            </span>
            <span className="business-review-count">{ business.review_count } reviews</span>
          </div>

          <div className="business-page-upload">
            <span>Write a Review</span>
            <span><i className="fa fa-camera" aria-hidden="true"></i>&nbsp;Upload Image</span>
          </div>
        </div>

          <div className="business-page-row">
            <MapView business={business} />
            <ImageView business={business} />
          </div>

          <div className="business-page-row">
            <Reviews business={business} />
            <span className="business-hours">Business Hours Here</span>
          </div>
        </section>
      );
    } else {
      return (
        <h1>Loading ...</h1>
      );
    }
  }

  render(){
    return (
      <div className='business-page'>
        {this.displayBusiness()}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessPage);
