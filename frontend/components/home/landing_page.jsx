import React from 'react';
import SplashHero from './splash_hero';
import FeaturedCards from './featured_cards';
import CategoryCards from './category_cards';
import { fetchAllBusinesses, fetchBusinessesByCategory } from '../../actions/business_actions';
import { fetchAllCategories } from '../../actions/category_actions';
import { connect } from 'react-redux';
import uniqueId from '../../util/unique_id';
import { businessToArray, categoryToArray } from '../../util/selectors';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.fetchAllBusinesses();
    this.props.fetchAllCategories();
  }

  displayFeatured(){
    let businesses = this.props.businesses;
    if (businesses.length < 3) {
      return <h1></h1>;
    } else {
      return <FeaturedCards key={uniqueId('business')} businesses={businesses} />;
    }
  }

  displayCategories(){
    let categories = this.props.categories;
    if (categories.length === 0) {
      return <h1></h1>;
    } else {
      return <CategoryCards key={uniqueId('category')} categories={categories}/>;
    }
  }

  render(){
    return (
      <div>
        <SplashHero />
        {this.displayFeatured()}
        {this.displayCategories()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return({
    businesses: businessToArray(state.businesses),
    categories: categoryToArray(state.categories)
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAllBusinesses: (query) => dispatch(fetchAllBusinesses(query)),
    fetchBusinessesByCategory: (id) => dispatch(fetchBusinessesByCategory(id)),
    fetchAllCategories: () => dispatch(fetchAllCategories())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
