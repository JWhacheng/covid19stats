import React from 'react';

const StatsCard = ({number, description}) => ( 
  <div className="stats_card card">
    <h1 className="card_number">
      {number?.toLocaleString()}
    </h1>
    <h3 className="card_description">
      {description}
    </h3>
  </div>
);

export default StatsCard;