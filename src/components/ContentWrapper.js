import React, { useState } from "react";

import Info from "./Info";
import Form from "./Forms";

function ContentWrapper () {

  const [selectedCity, setSelectedCity] = useState("");

  return (
      <div className={'content_wrapper'}>
        <h1>Weather application</h1>
        {
          selectedCity
          ? <Info setSelectedCity={setSelectedCity} selectedCity={selectedCity} />
          : <Form setSelectedCity={setSelectedCity} />
        }
      </div>
  );
}

export default ContentWrapper;
