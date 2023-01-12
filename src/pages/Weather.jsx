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
      
      <div className={`w-full h-full mt-4 py-5 px-0.5 bg-gradient-to-br `} style={{
        backgroundImage: "linear-gradient(to bottom right, #FEC310, #56042C)"}}>
        <div className="w-full flex flex-row">
  <div className="w-1/2 justify-start">
    <TopButtons setQuery={setQuery} />
  </div>
  <div className="w-1/2 justify-end">
    <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
  </div>
</div>

        {weather && (
          <>
          <div className='mx-32'>
            <TimeAndLocation weather={weather} />
            <TempratureAndDetails weather={weather} />
          </div>
            <div className="flex w-full">
  <div className="w-1/2 justify-start mx-10">
    <Forecast title="hourly forecast" items={weather.hourly} />
  </div>
  <div className="w-1/2 justify-end mx-10">
    <Forecast title="daily forecast" items={weather.daily} />
  </div>
</div>


          </>
        )}
        
      </div>

    );
}

export default Weather