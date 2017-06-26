import React from 'react';
import FeaturedCardItem from './featured_card_item';

const FeaturedCards = ({businesses}) => {
  let cards = [];

  for (var i = 0; i < 3; i++) {
    let business = businesses[i];
    cards.push(<FeaturedCardItem key={business.id} business={business}/>);
  }

  return (
    <div>
      <div className="col-lg-2"></div>
      <div className="col-lg-8">
        <div className="card-deck">
          {cards}
        </div>
      </div>
      <div className="col-lg-2"></div>
    </div>
  );
};

export default FeaturedCards;
