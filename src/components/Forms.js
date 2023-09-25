import React from "react";
import { cities } from "../helpers/consts";
const Form = (props) => {
    const getCity = e => {
      e.preventDefault() // won't reload the page after submitting form
      const city = e.currentTarget.city.value;
      props.setSelectedCity(city)
    }

    return (
      <form onSubmit={getCity}>
        <select name="city" id="city">
          <option value="">Please select a city</option>
          {cities.map((city) => (
            <option value={city} key={city}>{city}</option>
          ))}
        </select>
        {/*<input type={'text'} name={'city'} placeholder={'Please enter the City'}/>*/}
        <button style={{margin: "0 8px"}} type={'submit'}>Get WEATHER</button>
      </form>
    );
}

export default Form