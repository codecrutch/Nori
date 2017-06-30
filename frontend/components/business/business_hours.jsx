import React from 'react';
import uniqueId from '../../util/unique_id';

const BusinessHours = ({business}) => {
  let hours = business.hours.split("|").slice(0, 7).map(time => <div key={uniqueId("time")}>{time}</div>);
  return (
    <section id="business-hours">
      <h5>Business Hours</h5>
      {hours}
    </section>
  )
};

export default BusinessHours;
