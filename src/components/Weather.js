import React from 'react';

const Weather = (props) => {
  const { city } = props;
    return (
        <div>
            <p>Location: Il, <span style={{color: "darkred"}}>{city}</span></p>
            <p>Temp: 25</p>
            <p>Sunset: 19:08</p>
        </div>
    );
};

export default Weather;
