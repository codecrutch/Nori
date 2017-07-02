import React from 'react';
import { connect } from 'react-redux';
import { businessToArray } from '../../util/selectors';
import { fetchAllBusinesses } from '../../actions/business_actions';
import SearchResultListing from './search_result_listing';
import uniqueId from '../../util/unique_id';
import MultiMap from '../maps/multi_map';

const mapStateToProps = (state) => {
  return ({
    businesses: businessToArray(state.businesses.allBusinesses)
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchAllBusinesses: (query) => dispatch(fetchAllBusinesses(query))
  });
};

class SearchResultIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    document.body.scrollTop = 0;
    let search = this.props.location.search;
    if (search) {
      let query = this.props.location.search.split('q=')[1];
      this.props.fetchAllBusinesses(query);
    } else {
      this.props.fetchAllBusinesses();
    }
  }

  componentWillReceiveProps(newProps){
    document.body.scrollTop = 0;
    if (this.props.location.search !== newProps.location.search) {
      let search = newProps.location.search;
      if (search) {
        let query = newProps.location.search.split('q=')[1];
        newProps.fetchAllBusinesses(query);
      } else {
        newProps.fetchAllBusinesses();
      }
    }
  }

  displayBusinesses(){
    let businesses = this.props.businesses;
    if (businesses.length === 0) {
      return <h1>No results</h1>;
    } else {
      return businesses = businesses.map(business => <SearchResultListing className='business-listing' key={uniqueId('business')} business={business} />);
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
            <MultiMap businesses={this.props.businesses} />
          </section>
        </div>
      </section>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultIndex);
