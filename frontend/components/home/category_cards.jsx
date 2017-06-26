import React from 'react';
import CategoryCardItem from './category_card_item';

const CategoryCards = ({categories}) => {
  let allCategories = categories.map(category => <CategoryCardItem key={category.id} category={category} />);
  return (
    <div id="category-cards">
      {allCategories}
    </div>
  );
}

export default CategoryCards;
