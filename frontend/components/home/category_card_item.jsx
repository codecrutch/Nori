import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchAllBusinessesByCategory } from '../../actions/business_actions';

const mapDispatchToProps = dispatch => {
  return({
    fetchAllBusinessesByCategory: (id) => dispatch(fetchAllBusinessesByCategory(id))
  });
}

const CategoryCardItem = ({category, fetchAllBusinessesByCategory, history}) => {
  const handleClick = (e) => {
    fetchAllBusinessesByCategory(category.id)
    history.push('/businesses');
  };

  return (
    <div className="col-xs-6 col-sm-4 col-md-4 col-lg-3">
      <span onClick={handleClick} style={{ textDecoration: 'none' }}>
        <section className="category">
          <img style={{ width: '60px', height: '60px' }} src={category.image_url}/>&nbsp;
          <span style={{ display: 'block'}}>{category.name}</span>
        </section>
      </span>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(CategoryCardItem));
