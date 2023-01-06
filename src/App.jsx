import axios from "axios";
import React, { useEffect, useState } from "react";
function App() {
  const [state, setState] = useState(null);
  const [cityName, setCityName] = useState("Patna");
  // const [loading, setLoading] = useState(true);
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=a696b790e34d6285a4e972a9b9eb9390`;


  const getWeatherData = async (url) => {
    try {
      const data = await axios.get(url);
      const res = await data.data;
      console.log(res);

      setState(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getWeatherData(API);
    }, 1000);
  }, [cityName]);

  const cityNameChangeHandler = (e) => {
    console.log(e.target.value);

      setCityName(e.target.value);
  };

  return (
    <div className="container">
      <div className="position-absolute top-50 start-50 translate-middle">
        <p>Weather Application</p>
        <div className="row">
          <div className="row">
            <input
              type="text"
              name="text"
              className="form-control"
              autoComplete="off"
              placeholder="Enter any city name.."
              value={cityName}
              onChange={cityNameChangeHandler}
            />
          </div>

          <div className="row">
            {!state ? (
              <p>No data found!</p>
            ) : (
              <div>
                <p className="fs-3">{cityName}</p>
                <p>Huidity: {state.main.humidity} </p>
                <p>Temp {state.main.temp} C </p>

                <p>
                  <span>Max {state.main.temp_max} C</span>{" "}
                  <span>Min {state.main.temp_min} C </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
