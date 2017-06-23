import React from 'react';
import { connect } from 'react-redux';
import { businessToArray } from '../../util/selectors';
import { fetchAllBusinesses } from '../../actions/business_actions';
import BusinessListing from './business_listing';

const mapStateToProps = (state) => {
  return ({
    businesses: businessToArray(state.businesses)
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchAllBusinesses: () => dispatch(fetchAllBusinesses())
  });
};

class BusinessIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllBusinesses();
  }

  render(){
    let businesses = this.props.businesses;

    if (businesses) {
      businesses = businesses.map(business => <BusinessListing className='business-listing' key={business.id} business={business} />);
    }

    return (
      <section className="container">
        <div className="search-results row">
          <section className="business-results col-lg-5 col-xs-12 col-sm-12 col-md-6">
            {businesses}
          </section>
          <section className="businesses-map col-lg-4 col-xs-12 col-sm-12 col-md-6">
            Map
          </section>
        </div>
      </section>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);
