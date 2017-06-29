import React from 'react';
import { connect } from 'react-redux';
import { fetchAllReviews, createReview, deleteReview } from '../../actions/review_actions';
import { reviewToArray } from '../../util/selectors';
import StarRatingComponent from 'react-star-rating-component';
import CreateReview from './create_review';
import { Link, withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return ({
    reviews: reviewToArray(state.reviews),
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, {business}) => {
  return ({
    fetchAllReviews: () => dispatch(fetchAllReviews(business.id)),
    createReview: (review) => dispatch(createReview(review)),
    deleteReview: (id) => dispatch(deleteReview(id))
  });
};

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {};
    this.displayDeleteLink.bind(this);
  }

  componentWillMount(){
    this.props.fetchAllReviews();
  }

  displayDeleteLink(review) {
    let reviews = this.props.reviews;
    let currentUser = this.props.currentUser;
    if (currentUser && reviews) {
      if (review.user_id === currentUser.id) {
        return(
          <button className='btn btn-danger' style={{ width: '65px', margin: '11px 77px'}} onClick={() => this.props.deleteReview(review.id)}>Delete</button>
        )
      } else {
        return null;
      }
    }
  }

  render() {
    let reviews = this.props.reviews;
    let reviewForm;
    let allReviews;
    let currentUser = this.props.currentUser;
    let business = this.props.business;

    if (reviews) {
      let allReviews = reviews.map(review => (
        <section className="review-list" style={{ padding: '10px 10px', marginRight: '25px', display: 'flex', justifyContent: 'space-between', width: '600px' }}>
          <div style={{ display: 'flex', flex: '1 0 0', flexDirection: 'column', width: '95px' }}>
            <span style={{ fontSize: '12px' }}>{review.username}</span>
              {this.displayDeleteLink(review)}
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

      if (currentUser) {
        reviewForm = (
          <Link to={`/business/${business.id}/review`}>Write a review</Link>
        )
      } else {
        reviewForm = (
          <Link to="/login"><strong style={{ display: 'block', width: '344px', margin: '0 auto' }} className="well">Login to review this business</strong></Link>
        )
      };

      let reviewHead = (reviews.length > 0 ? <h2>Reviews</h2> : <h2>No reviews</h2>);

      return (
        <div>
          {reviewHead}
          {reviewForm}
          {allReviews}
        </div>
      );
    } else {
      return (
        <h3>Be the first to review this business!</h3>
      );
    };
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ReviewForm));
