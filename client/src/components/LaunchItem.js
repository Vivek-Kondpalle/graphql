import React from 'react';

const LaunchItem = ({
  launch: { flight_number, mission_name, launch_date_local, launch_success },
}) => {
  return (
    <div>
      <h3>Mission: {mission_name}</h3>
      <p>Launch Date: {launch_date_local}</p>
      <p>Launch Success: {launch_success}</p>
      <p>Flight Number: {flight_number}</p>
    </div>
  );
};

export default LaunchItem;
