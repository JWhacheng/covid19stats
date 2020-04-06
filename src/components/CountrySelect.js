import React from 'react';

const CountrySelect = ({ data, setSelectedCountry, selectedCountry }) => {
  return (
    <div className="countrySelect">
      <div className="control">
        <div className="select is-info">
          <select
            className="countryselect"
            onChange={(e) => {
              setSelectedCountry(e.target.value);
            }}
          >
            {data?.countries.map((element) => {
              if (element.name == 'US') {
                element.name = 'United States of America';
              }
              return (
                <option
                  key={element.iso2}
                  value={element.iso2}
                  selected={element.iso2 == selectedCountry}
                >
                  {element.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CountrySelect;
