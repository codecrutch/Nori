import React from 'react';
import { connect } from 'react-redux';
import { fetchAllReviews, createReview } from '../../actions/review_actions';
import { fetchBusiness } from '../../actions/business_actions';
import { reviewToArray } from '../../util/selectors';
import StarRatingComponent from 'react-star-rating-component';
import CreateReview from './create_review';
import { Link, withRouter } from 'react-router-dom';
import uniqueId from '../../util/unique_id';

const mapStateToProps = (state, ownProps) => {
  let businessId = ownProps.match.params.businessId;
  return ({
    reviews: reviewToArray(state.reviews),
    business: state.businesses[businessId],
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let businessId = ownProps.match.params.businessId;
  return ({
    fetchBusiness: () => dispatch(fetchBusiness(businessId)),
    fetchAllReviews: () => dispatch(fetchAllReviews(businessId)),
    createReview: (review) => dispatch(createReview(review)),
    deleteReview: (id) => dispatch(deleteReview(id))
  });
};

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount(){
    this.props.fetchBusiness();
    this.props.fetchAllReviews();
  }

  render() {
    let reviews = this.props.reviews;
    let allReviews;
    let business = this.props.business;

    if (reviews) {
      let allReviews = reviews.map(review => (
        <section key={uniqueId()} className="review-list" style={{ padding: '10px 10px', marginRight: '25px', display: 'flex', justifyContent: 'space-between', width: '600px' }}>
          <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'column', width: '95px' }}>
            <span style={{ fontSize: '12px' }}>{review.username}</span>
            { review.user_id === this.props.currentUser.id ? <button className='btn btn-danger' style={{ width: '65px', margin: '11px 77px'}} onClick={() => this.props.deleteReview(review.id)}>Delete</button> : "" }
          </div>

          <div style={{ display: 'flex', flex: '2 0 0', flexDirection: 'column', width: '400px' }}>
            <span style={{ fontSize: '15px' }}><StarRatingComponent
            name="rate2"
            editing={false}
            starCount={5}
            value={review.rating}
            renderStarIcon={(index, value) => {
              return <span style={{ fontSize: '15px' }} className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />;
            }}
            renderStarIconHalf={() => <span style={{ fontSize: '15px' }} className="fa fa-star-half-full" />}
            />
            </span>
            <p style={{ fontSize: '15px', fontWeight: 'bolder' }}>{review.title}</p>
            <p style={{ fontSize: '12px' }}>{review.description}</p>
          </div>
        </section>
      )
      );
    }

    let currentUser = this.props.currentUser;
    if (business){
      return (
        <div style={{ display: 'flex', justifyContent: 'center', borderRight: '0.5px solid #bbb' }}>
          <CreateReview key={uniqueId()} business={business} createReview={this.props.createReview} currentUser={currentUser} />
        </div>
      );
    } else {
      return (
        <h1>Loading...</h1>
      )
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ReviewForm));
