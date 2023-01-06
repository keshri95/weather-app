import axios from "axios";
import React, { useEffect, useState } from "react";
function App() {
  const [state, setState] = useState(null);
  const [cityName, setCityName] = useState("Patna");
  // const [loading, setLoading] = useState(true);

  const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=a696b790e34d6285a4e972a9b9eb9390`;



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

          <div>
            feels_like : 12.45
             humidity : 82 
             pressure : 1022 
             temp : 12.96
            temp_max : 12.96 temp_min : 12.96
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default App;
