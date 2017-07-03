import React from 'react';
import FeaturedCardItem from './featured_card_item';

const FeaturedCards = ({ businesses }) => {
  let cards = [];

  for (var i = 0; i < 3; i++) {
    let business = businesses[i];
    cards.push(<FeaturedCardItem key={business.id} business={business} />);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="card-deck" style={{ width: '900px' }}>
        {cards}
      </div>
    </div>
  );
};

export default FeaturedCards;
