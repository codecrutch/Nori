import React from 'react';


const CategoryCardItem = ({category}) => {
  return (
    <div className="col-xs-6 col-sm-4 col-md-4 col-lg-3">
      <section className="category">
        <img style={{ width: '60px', height: '60px' }} src={category.image_url}/>&nbsp;
        <span style={{ display: 'block'}}>{category.name}</span>
      </section>
    </div>
  );
};


export default CategoryCardItem;
