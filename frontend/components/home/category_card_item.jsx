import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCardItem = ({category}) => {
  return (
    <div className="col-xs-6 col-sm-4 col-md-4 col-lg-3">
      <Link to={`/businesses?q=${category.name}`}>
        <span style={{ textDecoration: 'none' }}>
          <section className="category">
            <img style={{ width: '60px', height: '60px' }} src={category.image_url}/>&nbsp;
            <span style={{ display: 'block'}}>{category.name}</span>
          </section>
        </span>
      </Link>
    </div>
  );
};

export default CategoryCardItem;
