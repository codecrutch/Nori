import React from 'react';


const CategoryCardItem = ({category}) => {
  return (
    <div className="category">
      <span style={{ textAlign: 'center' }}>{category.name}</span>
    </div>
  );
};


export default CategoryCardItem;
