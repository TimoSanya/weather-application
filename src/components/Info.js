import React from 'react';
import Weather from "./Weather";

const Info = (props) => {
    return (
        <div>
          <button onClick={() => props.setSelectedCity("")}>Go back</button>
          <p>Your city weather</p>
          <Weather city={props.selectedCity}/>
        </div>
    );
};

export default Info;