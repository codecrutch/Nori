import React from 'react';
import CategoryCardItem from './category_card_item';

const CategoryCards = ({cards}) => {
  let card = cards.map(card => <CategoryCardItem key={category.id} category={category} />);
  return (
    <div id="category-cards">
      {cards}
    </div>
  );
}

export default CategoryCards;
