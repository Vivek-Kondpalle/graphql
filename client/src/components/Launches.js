import React from 'react';
import LaunchItem from './LaunchItem';
import { useQuery, gql } from '@apollo/client';

const Launches = () => {
  const { loading, error, data } = useQuery(gql`
    {
      launches {
        mission_name
        flight_number
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:</p>;
  console.log(data);

  return (
    <>
      {data.launches.map((launch) => (
        <LaunchItem key={launch.flight_number} launch={launch} />
      ))}
    </>
  );
};

export default Launches;
