import React from 'react';

const BusinessHours = ({business}) => {
  let hours = business.hours.split("|").slice(0, 7).map(time => <div>{time}</div>);
  return (
    <section id="business-hours">
      <h5>Business Hours</h5>
      {hours}
    </section>
  )
};

export default BusinessHours;
