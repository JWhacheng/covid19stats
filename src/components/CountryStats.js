import React, { useState } from 'react';
import useStats from '../hooks/useStats';
import { COVID_COUNTRIES_URL } from '../api';
import StatsCard from './StatsCard';
import CountrySelect from './CountrySelect';

const COUNTRY_DEFAULT = {
  name: 'Peru',
  iso2: 'PE',
  iso3: 'PER',
};

const CountryStats = () => {
  const [data, , error] = useStats(COVID_COUNTRIES_URL);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_DEFAULT.iso2);
  const [countryData, countryLoading, cError] = useStats(
    `${COVID_COUNTRIES_URL}/${selectedCountry}`
  );

  return (
    <div className="stats card">
      <h1 className="stats_title">
        Datos de&nbsp;
        {data?.countries.map((element) => {
          if (element.name === 'US') {
            element.name = 'United States of America';
          }
          if (element.iso2 === selectedCountry) {
            return element.name;
          }
        })}
      </h1>
      <CountrySelect
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        data={data}
      />
      {error.length === 0 && (
        <div className="stats_content">
          <StatsCard
            number={countryData?.confirmed?.value}
            description="Confirmados"
          />
          <StatsCard
            number={countryData?.recovered?.value}
            description="Recuperados"
          />
          <StatsCard
            number={countryData?.deaths?.value}
            description="Muertos"
          />
        </div>
      )}
    </div>
  );
};

export default CountryStats;
