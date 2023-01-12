import React, { useEffect, useState } from 'react';
import TopButtons from '../components/Weather/TopButtons';
import Inputs from '../components/Weather/Inputs';
import TimeAndLocation from '../components/Weather/TimeAndLocation';
import TempratureAndDetails from '../components/Weather/TempratureAndDetails';
import Forecast from '../components/Weather/Forecast';
import getFormattedWeatherData from '../Data/weatherService';

function Weather() {
    const [query, setQuery]= useState({q:'doha'});
    const [units, setUnits]= useState('metric');
    const [weather, setWeather]= useState(null);
    useEffect(()=> {
      const fetchWeather=async ()=>{  
        await getFormattedWeatherData({...query, units}).then((data)=> {
          setWeather(data);
        });
  
      };
      fetchWeather();
    },[query, units]);
    /*
    const formatBackground=()=> {
      if(!weather) return 'from-cyan-700 to-blue-700'
      const threshold=units==='metric' ? 20: 60
      if(weather.temp <= threshold) return 'linear-gradient(to bottom right, #49BCE3, #1077C3)'
      return 'linear-gradient(to bottom right, #FEC310, #56042C)';
    }*/
    return (
      <div className="w-full h-full" style={{
        backgroundImage: "linear-gradient(to bottom right, #FEC310, #56042C)"}}>
      <div className={`mx-auto max-w-screen-md mt-4 py-5 px-0.5 bg-gradient-to-br  `} 
      >
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && (
          <>
            <TimeAndLocation weather={weather} />
            <TempratureAndDetails weather={weather} />
            <Forecast title="hourly forecast" items={weather.hourly} />
            <Forecast title="daily forecast" items={weather.daily} />
          </>
        )}
        
      </div>
      </div>
    );
}

export default Weather