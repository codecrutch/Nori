import React from 'react';
import CategoryCardItem from './category_card_item';

const CategoryCards = ({categories}) => {
  let allCategories = categories.map(category => <CategoryCardItem key={category.id} category={category}/>);
  return (
    <div className="category-container" style={{ display: 'flex', justifyContent: 'center'}} >
      <div className="col-lg-8 col-md-12" style={{ width: '900px'}}>
        <div className="category-cards">
          {allCategories}
        </div>
      </div>
    </div>
  );
}

export default CategoryCards;
