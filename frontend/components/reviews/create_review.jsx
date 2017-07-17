import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { withRouter } from 'react-router-dom';

class CreateReview extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: "",
      rating: 1,
      business_id: this.props.business.id,
      user_id: this.props.currentUser.id
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
  }

  handleInput(e, field){
    this.setState({ [field]: e.currentTarget.value});
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  handleSubmit(e){
    e.preventDefault();
    let review = this.state;
    this.props.createReview(review).then(
      () => this.props.history.replace(`/business/${this.state.business_id}`),
      () => this.props.history.replace(`/business/${this.state.business_id}`)
    );
  }

  render(){
    let placeholder = "\n\tYour review helps others learn about great local businesses.\n\n" +
    "\tPlease don't review this business if you have received a freebie.";
    return (
    <div>
      <h1 style={{ textAlign: 'center'}}>Write A Review</h1>
      <section id="review-box" style={{ display: 'flex', flexDirection: 'column', width: '600px', border: '1px solid #bbb', borderRadius: '4px'}}>
        <span style={{ fontSize: '20px', width: '570px', margin: '10px 10px', borderBottom: '1px solid #bbb' }}>
          <StarRatingComponent
          onStarClick={this.onStarClick.bind(this)}
          name="review-rating"
          editing={true}
          starCount={5}
          value={0}
          renderStarIcon={(index, value) => {
            return <span className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />;
          }}
          />
          <span style={{ position: 'relative', top: '-4px', right: '-12px', textIndent: '10px' }}>Select your rating.</span>
        </span>
        <input onChange={(e) => this.handleInput(e, "title")} id="review-title-input" placeholder="Title" />
        <textarea onChange={(e) => this.handleInput(e, "description")} id="review-form" style={{ border: 'none', boxShadow: 'none', fontSize: '15px', width: '598px', height: '150px' }} onChange={(e) => this.handleInput(e, "description")} type='text' placeholder={placeholder} />
      </section>
      <span id="review-submit-btn" onClick={(e) => this.handleSubmit(e)}>Create Review</span>
    </div>
    );
  }
}

export default withRouter(CreateReview);
