import React from 'react';
import StatsCard from './StatsCard';
import useStats from '../hooks/useStats';
import { COVID_URL } from '../api';

const WorldStats = () => {
  const [data, , error] = useStats(COVID_URL);


  return (
    <div className="stats card">
      <h1 className="stats_title">Datos mundiales</h1>
      {error.length === 0 && (
        <div className="stats_content">
          <StatsCard number={data?.confirmed?.value} description="Confirmados" />
          <StatsCard number={data?.recovered?.value} description="Recuperados" />
          <StatsCard number={data?.deaths?.value} description="Muertos" />
        </div>
      )}
    </div>
  );
};

export default WorldStats;
