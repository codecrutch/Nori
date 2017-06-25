import React from 'react';
import { connect } from 'react-redux';
import { businessToArray } from '../../util/selectors';
import { fetchAllBusinesses } from '../../actions/business_actions';
import BusinessListing from './business_listing';
import uniqueId from '../../util/unique_id';

const mapStateToProps = (state) => {
  return ({
    businesses: businessToArray(state.businesses)
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchAllBusinesses: (query) => dispatch(fetchAllBusinesses(query))
  });
};

class BusinessIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllBusinesses();
  }

  displayBusinesses(){
    let businesses = this.props.businesses;
    if (businesses.length === 0) {
      return <h1>No results</h1>;
    } else {
      return businesses = businesses.map(business => <BusinessListing className='business-listing' key={uniqueId('business')} business={business} />);
    }
  }

  render(){
    return (
      <section className="container">
        <div className="search-results row">
          <section className="business-results col-lg-5 col-xs-12 col-sm-12 col-md-6">
            {this.displayBusinesses()}
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
