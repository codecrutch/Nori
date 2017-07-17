import React from 'react';
import { connect } from 'react-redux';
import { businessToArray } from '../../util/selectors';
import { fetchBusiness, fetchAllBusinesses, clearBusinesses } from '../../actions/business_actions';
import { Link } from 'react-router-dom';
import MapView from '../maps/single_business_map';
import ImageView from './image_view.jsx';
import Reviews from '../reviews/review_container';
import BusinessHours from './business_hours';
import StarRatingComponent from 'react-star-rating-component';
import uniqueId from '../../util/unique_id';

const mapStateToProps = (state, ownProps) => {
  return({
    business: state.businesses.currentBusiness
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchBusiness: (id) => dispatch(fetchBusiness(id)),
    fetchAllBusinesses: () => dispatch(fetchAllBusinesses()),
    clearBusinesses: () => dispatch(clearBusinesses())
  });
};

const ratingConvert = (rating) => new Array(parseInt(rating)).fill('$');

class BusinessPage extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  componentWillReceiveProps(newProps){
    document.body.scrollTop = 0;
    let oldBusinessId = this.props.match.params.businessId;
    let newBusinessId = newProps.match.params.businessId
    if (oldBusinessId !== newBusinessId){
      this.props.fetchBusiness(newBusinessId);
    }
  }

  componentWillUnmount() {
    document.body.scrollTop = 0;
    this.props.clearBusinesses();
  }

  displayBusiness(){
    let business = this.props.business;
    if (business.id) {
      return (
        <section key={business.id}>
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
              <span className="business-page-review-count">{ business.review_count } reviews &nbsp;
               <span style={{ color: 'green' }}>{ratingConvert(business.overall_rating)}</span></span>
            </div>

            <div className="business-page-upload">
              <span>
                <Link to={`/uploads/${business.id}`}>
                  <i className="fa fa-camera" aria-hidden="true"></i>
                  &nbsp;Upload Image
                </Link>
              </span>
            </div>
          </div>

          <div className="business-page-row" style={{overflow: 'hidden'}}>
            <section style={{ border: '0.5px solid black', borderRadius: '10px', fontSize: '15px', padding: '7px'}}> 
              <MapView key={uniqueId("bp-map")} business={business} />
              <br />
              <i className="fa fa-map-marker" aria-hidden="true"></i><span>{business.address}</span>
              <br />
              <i className="fa fa-phone" aria-hidden="true"></i><span>{business.phone}</span>
            </section>
            <ImageView key={uniqueId("images")} business={business} />
          </div>

          <div className="business-page-row" style={{marginTop: '40px'}}>
            <Reviews business={business} />
            <span className="business-hours"><BusinessHours key={uniqueId("bh")} business={business} /></span>
          </div>
        </section>
      );
    } else {
      return (
        null
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
