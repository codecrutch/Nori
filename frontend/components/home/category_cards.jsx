import React from 'react';
import CategoryCardItem from './category_card_item';

const CategoryCards = ({categories, fetchBusinessesByCategory }) => {
  let allCategories = categories.map(category => <CategoryCardItem key={category.id} category={category}/>);
  return (
    <div className="category-container" >
      <div className="col-lg-2 col-md-12"></div>
      <div className="col-lg-8 col-md-12">
        <div className="category-cards">
          {allCategories}
        </div>
      </div>
      <div className="col-lg-2 col-md-12"></div>
    </div>
  );
}

export default CategoryCards;
