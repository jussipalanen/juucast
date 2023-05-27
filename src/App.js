import Forecast from "./components/Forecast";
import Navigation from "./components/Navigation";

import React, {useEffect, useState} from "react";
import moment from 'moment';

export default function App() {
  const [forecast, setForecast] = useState([])
  moment.locale('fi');
  const urlParams = new URLSearchParams(window.location.search);
  const location = urlParams.has('location') ? urlParams.get('location') : 'Joensuu';
  const apiKey = '38a1c14150a8403d8c4125935232705';
  const apIURL = 'https://api.weatherapi.com/v1/forecast.json?key=' + apiKey + '&q=' + location + '&days=7&aqi=no&alerts=no';



  async function fetchData() {
    const response = await fetch(apIURL);

    response.json().then(response => 
    {      
      setForecast(response);
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Navigation></Navigation>
      <div className="container mx-auto">
        <Forecast data={forecast}></Forecast>
      </div>
    </div>
  )
}